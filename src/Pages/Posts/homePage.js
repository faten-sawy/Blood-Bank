import React, { Fragment, useEffect, useState } from 'react'
import './homePage.css'
/* import axios from 'axios' */
import { Container, Row, Col } from 'react-bootstrap'
import SemiProfile from '../../Components/Semi-Profile/semiProfile'
import PostDetails from '../../Components/Post details/postDetails'
import firebase, { auth } from '../../utils/firebase'
import { NavLink, useHistory } from 'react-router-dom'
import { useAuth } from '../../utils/contexts/AuthContexts'
import Side from '../../Components/Side/side'
import { ImportContactsOutlined } from '@material-ui/icons'


const HomePage = () => {
    const [myPosts, setmyPosts] = useState([]);
    const [lastKey,setLastKey] = useState()

    const[info,setInfo]= useState()
    let history = useHistory()
    const{logOut ,userID} = useAuth()
    let currentUser = localStorage.getItem("currentUser") 
    let token = localStorage.getItem("token")
  /*    console.log(token)
   localStorage.setItem('hi',firebase.auth().currentUser)
   let x =JSON.parse(localStorage.getItem('hi')) 
   console.log(x) */
   
    let limit = 3   
    let arrPosts = []
            
            
        useEffect(()=>{
            setmyPosts("")
            let currentUser = localStorage.getItem("currentUser")      
            firebase.database().ref(`Posts`).get().then(res=>{
                setmyPosts([...myPosts,...Object.values(res.val())])

            })                      
            /* firebase.database().ref('Posts').startAt().limitToFirst(limit).get().then(res=>{
                console.log(res.val())
                setmyPosts(Object.values(res.val()))
                 
                let listOfkeys = Object.keys(res.val())
                setLastKey(listOfkeys[limit-1])
            }) */
            
           
            firebase.database().ref(`Users/${currentUser}`).get().then((res)=>{
                setInfo(res.val())
                console.log(res.val()) 
            }) 
            firebase.database().ref('Posts').on('child_added',function(snapshot){
                
                setmyPosts(prev=>[...prev,snapshot.val()])
            })

            firebase.database().ref('Posts').on('child_removed',function(item){
                loadData()        
            })                    
        },[])
       
            
        const handleNext =()=>{
         firebase.database().ref('Posts').orderByKey().startAfter(lastKey).limitToFirst(limit)
         .get().then( (docs) =>{
          setmyPosts((prev)=>[...Object.values(docs.val())])

          let listOfkeys = Object.keys(docs.val())
                setLastKey(listOfkeys[limit-1])
          }                         
        )}

        const handlePrev=()=>{
            firebase.database().ref('Posts').orderByKey().endAt(lastKey).limitToLast(limit).get().then(res => {
               setmyPosts(Object.values(res.val()))

               let listOfkeys = Object.keys(res.val())
                setLastKey(listOfkeys[0])

            })
        }
        const loadData=()=>{
            firebase.database().ref('Posts').get().then(snapshot=>{
                setmyPosts(Object.values(snapshot.val()))
            })
        }
         
        
    return (   
       <Container fluid className='mainContainer'>
           
            <Row className="posts">
                <Col xs={12} md={12} lg={3} >
               
                </Col>
                <Col xs={12} md={12} lg={6} style={{ margin: "50px" }}>
                 {myPosts.length > 0 && myPosts.map(element=>(
                        <Fragment>
                         <PostDetails post={element }/>
                        </Fragment>
                    ))}
                    {/* <button onClick={handleNext}>more</button>
                    <button onClick={handlePrev}>less</button> */}
                </Col>  
                <Col>
                <Side userData ={info}/> 
                </Col>                             
            </Row>
        </Container>
    )
}
export default  HomePage