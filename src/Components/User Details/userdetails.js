import React from 'react'
import './userdetails.css'
import {Col,Row} from 'react-bootstrap'
import PhoneIcon from '@material-ui/icons/Phone';
import ForumIcon from '@material-ui/icons/Forum';
import firebase from 'firebase';

import PhoneOutlinedIcon from '@material-ui/icons/PhoneOutlined';
import AlternateEmailOutlinedIcon from '@material-ui/icons/AlternateEmailOutlined';
import LocationCityOutlinedIcon from '@material-ui/icons/LocationCityOutlined';
import OpacityOutlinedIcon from '@material-ui/icons/OpacityOutlined';
import PermContactCalendarOutlinedIcon from '@material-ui/icons/PermContactCalendarOutlined';
import {useHistory} from 'react-router-dom'
import ChatArea from '../Chat-Area/chatArea';

const UserDetails =(props)=>{
    const {user,key}=props
    console.log(user)
    let currentUser= localStorage.getItem('currentUser')
    /* firebase.database().ref(`Users/${user}`) */
    let history = useHistory()
     const handleOpenProfile=()=>{
     /*  history.push('/profile',{params: post.userID}) */
     }
     const handleOpenChat=()=>{
       
       let dateNow = new Date();

        let month = dateNow.getUTCMonth() < 10 ? ('0' + (dateNow.getMonth() + 1)) : dateNow.getMonth();
        let day = dateNow.getUTCDate() < 10 ? ('0' + dateNow.getUTCDate()) : dateNow.getUTCDate();
        let hours = dateNow.getHours() < 10 ? ('0' + dateNow.getHours()) : dateNow.getHours();
        let mints = dateNow.getUTCMinutes() < 10 ? ('0' + dateNow.getUTCMinutes()) : dateNow.getUTCMinutes();
        let secs = dateNow.getUTCSeconds() < 10 ? ('0' + dateNow.getUTCSeconds()) : dateNow.getUTCSeconds();
        let datestamp = dateNow.getFullYear() + '-' + month + '-' + day + ' ' + hours + ':' + mints + ':' + secs;

       firebase.database().ref(`Users/${currentUser}`).child(`chats/${user.id}`).push({
         sender: currentUser,
         text: 'hi',
         time: datestamp,
       })

       history.push('/chat',{params:user.id})
      
      /*  history.push('/chat',{params: post.userID}) */
       

     
    }
    return(
 
    <div class="searchCard" style={{height: "44vh"}}>
    <div class="post">
      <Col>
        <img onClick={handleOpenProfile} class="post-image" src={user.user_imgURL}/>
      </Col>
      
      <Col>
      <div class="post-content">
        <Row style={{width:'100%',height:"12vh"}}>
        <p class="post-header"> {user.firstName} {user.secondName} </p>
        <span style={{border:'0.5px solid gray' ,width: "6vw",display: 'inline-block',borderRadius: '50%',boxShadow: '0px 0px 2px #888',height:"12vh",marginTop:"18px"}}> 
        <ForumIcon onClick={handleOpenChat} style={{width: '5vw',height: "5vh", marginTop: "40%"}}/></span>
        </Row>
       
        <hr style={{width:"20%",color:"gray"}}/>
        <p><PhoneOutlinedIcon /> {user.phone}</p>
        <p><LocationCityOutlinedIcon/> {user.government}</p>
        <p><OpacityOutlinedIcon/> {user.blood_type}</p>              
      </div>
      </Col>
      <hr style={{width:"70%",color:"black",marginLeft:"15%"}}/>
           
    </div>
    
  </div>
  
    )
}
export default UserDetails