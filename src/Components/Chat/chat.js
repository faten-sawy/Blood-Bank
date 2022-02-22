import React, { useEffect, useState,Fragment } from 'react'
import './chat.css'
import { useLocation } from "react-router-dom";
import { Input, Button } from '@material-ui/core'
import {Row,Col} from 'react-bootstrap'
import firebase from 'firebase';
import ChatCard from '../Chat-People-Card/chatCard';
import { ContactsOutlined } from '@material-ui/icons';
import ChatArea from '../Chat-Area/chatArea';

const Chat=()=>{
    const location = useLocation();
    const userID = location.state.params;
    /* console.log(userID) */
    const currentUser = localStorage.getItem('currentUser')
  
    const [msg,setMsg] = useState()
    const [chatMessage,setChatMessage] = useState()
    const [keys,setKeyes] = useState(null)
    const [lastMessege,setLastMessege] = useState()
    const [loadedUser,setLoadedUser] = useState()

    let arr = []
    let index = -1
    
    useEffect(()=>{
        firebase.database().ref(`Users/${currentUser}`).child(`chats`).on('value', function(snapshot){
           /*  console.log(Object.keys(snapshot.val())) */
            setKeyes(Object.keys(snapshot.val()))
            snapshot.forEach(function(item){
                let messeges = Object.values(item.val())
                let lastMessege = messeges[messeges.length - 1 ]
                /* console.log(lastMessege) */
                arr.push(lastMessege)     
            })
            setLastMessege(arr)
        })
         firebase.database().ref(`Users/${currentUser}`).child(`chats/${userID}`).get().then(res=>{
           /* setChatMessage(Object.values(res.val())) */
           /* console.log(Object.values(res.val())) */
       })
       /* x.on("value",function(snapshot){ 
           if(snapshot.child(userID).exists()){ 
               snapshot.forEach(function(s){ 
                   console.log(Object.values(s.val()))
                   setChatMessage(Object.values(s.val()))
               })
           }
           else{
               console.log("no Found Message")
           }        
       }) */ 
    },[])

    const sendMessage=(e)=>{
        e.preventDefault()
        let dateNow = new Date();

        let month = dateNow.getUTCMonth() < 10 ? ('0' + (dateNow.getMonth() + 1)) : dateNow.getMonth();
        let day = dateNow.getUTCDate() < 10 ? ('0' + dateNow.getUTCDate()) : dateNow.getUTCDate();
        let hours = dateNow.getHours() < 10 ? ('0' + dateNow.getHours()) : dateNow.getHours();
        let mints = dateNow.getUTCMinutes() < 10 ? ('0' + dateNow.getUTCMinutes()) : dateNow.getUTCMinutes();
        let secs = dateNow.getUTCSeconds() < 10 ? ('0' + dateNow.getUTCSeconds()) : dateNow.getUTCSeconds();
        let datestamp = dateNow.getFullYear() + '-' + month + '-' + day + ' ' + hours + ':' + mints + ':' + secs;

        
        firebase.database().ref(`Users/${userID}`).child(`chats/${currentUser}`).push({
            sender: currentUser,
            text: msg,
            time: datestamp 
        })
        setMsg("")
    }
    const handleChatArea=(userKey)=>{
        setLoadedUser(userKey)

    }
   /*  const customDate=(date)=>{
    
        var seconds = Math.floor((new Date() - date) / 1000);
        
        var interval = seconds / 31536000;
        
        if (interval > 1) {
            return Math.floor(interval) + " years";
        }
        interval = seconds / 2592000;
        if (interval > 1) {
            return Math.floor(interval) + " months";
        }
        interval = seconds / 86400;
        if (interval > 1) {
            return Math.floor(interval) + " days";
        }
        interval = seconds / 3600;
        if (interval > 1) {
            return Math.floor(interval) + " hours";
        }
        interval = seconds / 60;
        if (interval > 1) {
            return Math.floor(interval) + " minutes";
        }
        return Math.floor(seconds) + " seconds";
          
    } */
   /* console.log(lastMessege) */
    return(
        <>
        <Row className="fake-container" style={{marginBottom:"0"}} >
        <Row className="real-container" lg={8} style={{marginBottom:"0"}}>

            <Col className="chat-people" lg={3}>
                <h3 className="chat-head">People</h3>

                { lastMessege &&
                  keys?.map((userKey)=>(
                    <div key={userKey} onClick={()=>handleChatArea(userKey)}>
                         <ChatCard user={userKey} Messege={lastMessege[++index]}/>
                    </div>                                                        
                    ))
                }
                
            </Col>
            <Col className="chat-messege" lg={5}>
                { loadedUser &&
                    <ChatArea userKey={loadedUser}/>
                }                
            {/* <Row>
                {
                    chatMessage?.map((item)=>(
                        <p>{item.text}</p>
                    ))
                }

            </Row>
            <Row style={{marginTop: "0"}}>
            <form>
                    <div className="sendMsg">
                        <Input style={{ width: '78%', fontSize: '15px', fontWeight: '550', marginLeft: '5px', marginBottom: '-3px' }} placeholder='Message...' type="text" value={msg} onChange={e => setMsg(e.target.value)} />
                        <Button onClick={sendMessage} style={{ width: '18%', fontSize: '15px', fontWeight: '550', margin: '4px 5% -13px 5%', maxWidth: '200px'}}>Send</Button>
                    </div>
                </form>
            </Row> */}

            </Col>
        </Row>
        </Row>
        
        
        </>
    )
}
export default Chat