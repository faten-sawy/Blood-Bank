import React, { useEffect, useState, } from 'react'
import { Container, Row, Col ,Form,Button ,Modal} from 'react-bootstrap'
import { Chip, Avatar } from '@material-ui/core';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@material-ui/icons/FavoriteOutlined';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import TurnedInIcon from '@material-ui/icons/TurnedIn';
import EditIcon from '@material-ui/icons/Edit';
import PhoneIcon from '@material-ui/icons/Phone';
import ForumIcon from '@material-ui/icons/Forum';
import firebase from '../../utils/firebase'
import { useAuth } from '../../utils/contexts/AuthContexts';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import{DateTimePickerComponent} from '@syncfusion/ej2-react-calendars'
import {useHistory} from 'react-router-dom'


import './postDetails.css'

const PostDetails = (props) => {
    let history = useHistory()
    let currentUser = localStorage.getItem('currentUser')
    let date, arr = []
    const{post} = props
  
    const [userInfo,setUseInfo] = useState()     
    const [like, setLike] = useState(false)
    const [bookMark, setBookMark] = useState(false)
    const [show,setShow] = useState(false)
    const [location,setLocation] = useState('')
    const [bloodType,setBloddType] = useState('')
    const [selectDate,setSelectDate] = useState()

    const [updatedPost,setUpdatedValues] = useState({
        blood_type: "",
        government: "",
        details: "",
    })

    let postListRef
    let newPostRef
   


    const handleChange=(e)=>{
        if(e.target.name === 'bloodType' ){
            setUpdatedValues({
                ...updatedPost,
                blood_type: e.target.value
            })
        }
        if(e.target.name === 'government'){
            setUpdatedValues({
                ...updatedPost,
                government: e.target.value
            })
        }

        if(e.target.name === 'details'){
            setUpdatedValues({
                ...updatedPost,
                details: e.target.value
            })
        }
    }
    const handleLike = () => {
        setLike((prev) => (!prev))
       /*  let postListRef
        let newPostRef */
        if(!like){
            postListRef = firebase.database().ref(`Posts/${post.id}/likes`)
            newPostRef = postListRef.push();
            newPostRef.set({
            name: post.name,
            email:post.email
        })
        }
        else{
           firebase.database().ref(`Posts/${post.id}/likes/${newPostRef.key}`).remove()
/*            console.log(newPostRef.key)
 */        }
               
    }
    const handleBookMark = () => {
        setBookMark((prev) => (!prev))
        if(!bookMark){
            firebase.database().ref(`Users/${currentUser}`).child(`SavedPosts/${post.key}`).set(post)          
        }
        else{
            firebase.database().ref(`Users/${currentUser}`).child(`SavedPosts/${post.key}`).remove()
        }
    }
    const handleEdit=(e)=>{
        e.preventDefault()

        let selectedMonth = selectDate.getUTCMonth() < 10 ? ('0' + (selectDate.getMonth() + 1)) : selectDate.getMonth();
        let selectedDay = selectDate.getUTCDate() < 10 ? ('0' + selectDate.getUTCDate()) : selectDate.getUTCDate();
        let selectedHours = selectDate.getHours() < 10 ? ('0' + selectDate.getHours()) : selectDate.getHours();
        let selectedMints = selectDate.getUTCMinutes() < 10 ? ('0' + selectDate.getUTCMinutes()) : selectDate.getUTCMinutes();
        let selectedSecs = selectDate.getUTCSeconds() < 10 ? ('0' + selectDate.getUTCSeconds()) : selectDate.getUTCSeconds();
        let selectedDatestamp = selectDate.getFullYear() + '-' + selectedMonth + '-' + selectedDay + ' ' + selectedHours + ':' + selectedMints + ':' + selectedSecs;

        firebase.database().ref(`Posts/${post.key}`).update({
            blood_type: updatedPost.blood_type,
            government: updatedPost.government,
            details: updatedPost.details,
            donDate: selectedDatestamp
        })
    }
    const handleOpenChat=()=>{
        history.push('/chat',{params: post.userID})
       
    }
   
    const handleShow=()=>{
        setShow(true)
        setUpdatedValues({
            blood_type: post.blood_type,
            government: post.government,
            
        })
        setSelectDate(new Date(post.donDate))      
    }
    const handleDelete=()=>{
       firebase.database().ref(`Posts/${post.key}`).remove()
    }
    const handleOpenProfile=()=>{
        history.push('/profile',{params: post.userID})
    }
   
    return (
       
            <Row className="mt-0">
            <div id="login-container"> 
            
                {/* Picture of user */}
                {/* <div class="name-and-comment"> */}
                     
            {/* <!-- on Hover profile Image--> */}
            <div class="profile-bar">
            <div class="info">
                <p class="devrim">Blood Type: {post.blood_type}</p>
                <p>
                <span><PhoneIcon className="contactIcon"/></span> 
                <span><ForumIcon className="contactIcon"/></span>              
                </p>              
            {/* </div> */}         
        </div>
        </div>
        
         <Row className="postHeader" >
         <div className="profile-img name" style={{cursor:"pointer"}} onClick={handleOpenProfile}></div> 

            <h1>
                {`${post.name}`}
            </h1>
            <div>
            {post.userID != currentUser && (bookMark?
             <BookmarkIcon className="bookMark" style={{ width:'5vw',height: '5vh'}}   onClick={handleBookMark}/>:
            <BookmarkBorderIcon className="bookMark" style={{ width:'5vw',height: '5vh'}} onClick={handleBookMark}/>)
           }
           {post.userID === currentUser &&
           <>
            <EditIcon style={{ width:'5vw',height: '5vh'}} onClick={handleShow} />
            <DeleteIcon style={{ width:'5vw',height: '5vh'}} onClick={handleDelete}/>
            </>    
            } 
            </div>         
            
         </Row>
            <div className="description">
            
                <p>Hello<br/> we need blood donation with Blood Type <span>{post.blood_type}</span>   
                 at <span>{post.government}</span> on <span>{[...post.donDate].slice(0,10).join('')}</span> </p>  
                <p>Be the one Who saved Alife !</p>
                {/* <button>Will Donate?</button> */}
            </div>


                       
        <footer>
            <div className="likes">
                <Col lg={6} >
                <p onClick={handleLike}>{ like?<FavoriteOutlinedIcon/>:<FavoriteBorderOutlinedIcon/>}</p>
                </Col>
                <Col lg={6} >
                <p onClick={handleOpenChat}>Chat</p>
                </Col>                         
            </div>
        </footer>
        </div>

         <Modal                    
            backdrop="static"
            show={show}
            onHide={() => setShow(false)}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
        >
            <Modal.Header closeButton>
                <Modal.Title id="example-custom-modal-styling-title">
                    Edit Your Post
                </Modal.Title>
            </Modal.Header>
            <Modal.Body as={Row}>

                {/* ******************************************* */}
                <Col >
                    <Form className="modalForm">

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Blood Type</Form.Label>
                        <Form.Control name="bloodType" as="select" defaultValue="Choose type..." value={updatedPost.blood_type} onChange={handleChange}>
                            <option>Choose type...</option>
                            <option>A+</option>
                            <option>A-</option>
                            <option>B+</option>
                            <option>B-</option>
                            <option>O+</option>
                            <option>O-</option>
                            <option>AB+</option>
                            <option>AB-</option>
                        </Form.Control>
                    </Form.Group>
                        
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label style={{marginTop:"12px"}}>City</Form.Label>
                            <Form.Control name="government" as="select" defaultValue="Choose City..." value={updatedPost.government} onChange={handleChange}>
                            <option>Choose type...</option>
                            <option>Aswan</option>
                            <option>Cairo</option>
                            <option>El-minya</option>
                            <option>Sohag</option>
                            <option>Qena</option>
                            <option>Assuit</option>
                            <option>Alex</option>
                            <option>Giza</option>                           
                        </Form.Control>
                        </Form.Group>
                        {/*  */}

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label style={{marginTop:"12px"}}>Details</Form.Label>
                            <Form.Control name="details" type="text" placeholder="Have Any Details ?" value={updatedPost.details} onChange={handleChange} />
                        </Form.Group>

                    {/* ******************************* */}
                    <div style={{width:"10vw",margin:"20px",marginLeft:"0"}}>
                    <label>Date</label>
                        <DateTimePickerComponent value={selectDate} onChange={date=>{
/*                             console.log(date.value)
 */                            setSelectDate(date.value)                       
                        }}/>
                        </div>
                    {/*  */}
                        <Button variant="primary" type="submit" onClick={handleEdit}>
                            Edit
                        </Button>
                    </Form>
                </Col>
            </Modal.Body>
        </Modal> 
         

       
       </Row>
    )
}
export default PostDetails