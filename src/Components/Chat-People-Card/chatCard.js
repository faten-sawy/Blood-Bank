import React, { useEffect, useState } from 'react'
import firebase from 'firebase'
import {Row,Col} from 'react-bootstrap'
import './chatCard.css'
import { NavLink } from 'react-router-dom'

const ChatCard=(props)=>{
    const {user,Messege} = props
    /* console.log(Messege) */

    let date = new Date(Messege.time)
    let day = date.getDay()  
    let month = date.toLocaleString('default', { month: 'short' })

    const[userInfo,setUserInfo] = useState()
    let currentUser = localStorage.getItem('currentUser')

     useEffect(()=>{
         firebase.database().ref(`Users/${user}`).get().then(snapshot=>{
             setUserInfo(snapshot.val())
         })
     },[])
    return(
        <>
        { userInfo && 
            
                <Row className="chat-card" >
                <img className="chatImg" src={userInfo.user_imgURL}/>
                <Col style={{}} >
                    <Row>
                    <h5 className="chat-name">{userInfo.firstName} {userInfo.secondName}</h5> 
                    <span style={{width:"60px",position:'absolute',left:"25%"}}>{month} {day}</span>
                    </Row>           
                <Row>
                { Messege.sender === currentUser 
                    && 
                    <span className="chat-auth"> You: </span>
                    }<p className="chat-text">{Messege.text}</p>
                </Row>           
                </Col>               
                </Row>
                      
        }       
        </>
    )
}
export default ChatCard