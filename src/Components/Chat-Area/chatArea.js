import React, { useEffect, useState } from 'react'
import firebase from 'firebase'
import ChatMsg from '../Chat-Messege/chatMessege'
import './chatArea.css'
import { Row,Col,Modal,Form,Button } from 'react-bootstrap'
import ReportIcon from '@material-ui/icons/Report';
import { Input } from '@material-ui/core'
import sendButton  from '@material-ui/core/Button'
import chatArea from '../../utils/images/chatArea.svg'


const ChatArea=({userKey})=>{
    console.log(userKey)
    let currentUser = localStorage.getItem('currentUser')
    const [userInfo,setUserInfo] = useState()
    const [currentUserInfo,setCurrentUserInfo] = useState()
    const [msgs, setMsgs] = useState()
    const [showReport, setShowReport] = useState(false)
    const [reportDetails,setReportDetails] = useState()
    const [msg,setMsg] = useState()
    const [showPic,setShowPic] = useState(true)
    /* const [usersInfo,setUsersInfo] = useState({
        current : {},
        loader:  {}
    }) */


        useEffect(()=>{
            firebase.database().ref(`Users/${userKey}`).on('value',function(snapshot){
                
                setUserInfo(snapshot.val())
                console.log(snapshot.val())
            })
            firebase.database().ref(`Users/${currentUser}`).child(`chats/${userKey}`).get().then(snapshot=>{
                setMsgs(Object.values(snapshot.val()))
                setShowPic(false)
            })
            
            let referance = firebase.database().ref(`Users/${currentUser}`)
              referance.get().then(snapshot=>{
                setCurrentUserInfo(snapshot.val())               
              })
            
            referance.child(`chats/${userKey}`).on('value',function(snapshot){
                setMsgs(Object.values(snapshot.val()))
                setShowPic(false)
                
            })
            referance.child(`chats/${userKey}`).on('child_added',function(snapshot){
                setMsgs(Object.values(snapshot.val()))
                setShowPic(false)
            })
           
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
    
            
            firebase.database().ref(`Users/${userKey}`).child(`chats/${currentUser}`).push({
                sender: currentUser,
                text: msg,
                time: datestamp 
            })
            firebase.database().ref(`Users/${currentUser}`).child(`chats/${userKey}`).push({
                sender: currentUser,
                text: msg,
                time: datestamp 
            })
            
            setMsg("")
        }
        const handleReport=(e)=>{
            e.preventDefault()
            setShowReport(true)
        }
        const handleSubmit=(e)=>{
            e.preventDefault()
            firebase.database().ref('Admin').child(`Report/${userKey}`).set({
                userID: userKey,
                details: reportDetails
            })
        }
        const handleDetails=(e)=>{
            setReportDetails(e.target.value)  
        }
       
    return(
        <>
        { userInfo && currentUserInfo &&
            <>
            <Row className="chat-area-container">
            <Row className="chat-area-header ml-5">
                <h3>{userInfo.firstName} {userInfo.secondName}</h3><br/>
                <span style={{marginTop: '17px',marginRight:"-12px",color:"#e71d36",paddingRight:"1px",width:"5vw"}}>
                    <ReportIcon style={{width: '4vw',height: '4vh'}}/>
                </span>

                <p onClick={handleReport}>Report</p>                
            </Row>
            <Row className="chat-area-messege" >
                {showPic ? <img src={chatArea}/> :
                msgs && msgs?.map((item)=>(
                    <>
                    <Row  className="mb-3 msg-card" style={{flexDirection: item.sender === currentUser ? "row-reverse": "row" }}>
                    <img  src={item.sender === currentUser ? currentUserInfo.user_imgURL : userInfo.user_imgURL}/>
                    <p style={{textAlign: item.sender === currentUser ? "right": "left" }}>{item.text}</p> 
                    </Row>
                    
                    </>                 
                    ))
                }
                
               <Col>
               </Col>
                
            </Row> 
            <Row className="pt-3" style={{marginTop: "0",borderTop:"white 2px solid",width: '80%',marginLeft:"7%"}}>
            <Row className="chat-send-container" style={{height:"2vh"}}>
            <Row className="chat-send-messege"> 
                <Input placeholder='Message...' type="text" value={msg} onChange={e => setMsg(e.target.value)} />
            </Row>
            <Button onClick={sendMessage} >Send</Button>
            </Row>              
            </Row> 
            </Row>         
            </>
        }

    <Modal                    
            backdrop="static"
            show={showReport}
            onHide={() => setShowReport(false)}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
        >
            <Modal.Header closeButton>
                <Modal.Title id="example-custom-modal-styling-title">
                    Report
                </Modal.Title>
            </Modal.Header>
            <Modal.Body as={Row}>
                <p style={{marginBottom:"0"}}>we need help You Show s the proplem that cause report this User</p>

                {/* ******************************************* */}
                <Col >
                    <Form className="modalForm">

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label style={{marginTop:"12px"}}>Details</Form.Label>
                            <Form.Control type="text" placeholder="Enter details for report" value={reportDetails} onChange={handleDetails} />
                        </Form.Group>

                    {/* ******************************* */}
                    {/*  */}
                        <Button variant="primary" type="submit" style={{marginTop:"30px"}} onClick={handleSubmit}>
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Modal.Body>
        </Modal> 
        </>
        
        
        
    )
}
export default ChatArea