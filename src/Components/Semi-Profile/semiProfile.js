import React, { useEffect, useState } from 'react'
import { Row, Col, Button, Form, Modal, Alert, ToastBody,OverlayTrigger,Tooltip,Image } from 'react-bootstrap'

import EditIcon from '@material-ui/icons/Edit';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import PublicIcon from '@material-ui/icons/Public';
import TurnedInIcon from '@material-ui/icons/TurnedIn';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import firebase from '../../utils/firebase'
import { useAuth } from '../../utils/contexts/AuthContexts'
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import HomeIcon from '@material-ui/icons/Home';
import PostDetails from '../Post details/postDetails';

import PhoneOutlinedIcon from '@material-ui/icons/PhoneOutlined';
import AlternateEmailOutlinedIcon from '@material-ui/icons/AlternateEmailOutlined';
import LocationCityOutlinedIcon from '@material-ui/icons/LocationCityOutlined';
import OpacityOutlinedIcon from '@material-ui/icons/OpacityOutlined';
import PermContactCalendarOutlinedIcon from '@material-ui/icons/PermContactCalendarOutlined'; /* Profile contact */
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined'; /* profile */
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import { useLocation } from 'react-router';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import BlockOutlinedIcon from '@material-ui/icons/BlockOutlined';
import './semiProfile.css'


const SemiProfile = () => {
    let authedUser = localStorage.getItem("currentUser")

    let location = useLocation()
    let userID = location.state.params;

    const [info,setInfo] = useState()
    const [show, setShow] = useState(false)
    const [flag,setFlag] = useState(true)  
    const [error,setError] = useState(null)
    const [userPosts,setUserPosts]=useState()
    const [showReport, setShowReport] = useState(false)
    const [reportDetails,setReportDetails] = useState()
    const [savedPosts,setSavedPosts] = useState()
    const [updated,setUpdatedValues] = useState({
        name: "",
        email: "",
        phone: "",
        government: "",
        age: 0 ,
    })

    useEffect(()=>{      
        loadUserPosts()
        loadUserData() 
        firebase.database().ref('Posts').orderByChild('userID').equalTo(userID).on('child_changed',function(response){
            loadUserPosts()
        })                          
    },[])

    const loadUserPosts=()=>{
        firebase.database().ref('Posts').orderByChild('userID').equalTo(userID).once('value',function(response){
            setUserPosts(Object.values(response.val()))
            
          })  
    }
    const loadUserData=()=>{
        firebase.database().ref(`Users/${userID}`).get().then((res)=>{
            setInfo(res.val())  
            setSavedPosts(Object.values(res.val().SavedPosts)) 
        }) 
    }
 
    const handleEdit=(e)=>{
        e.preventDefault()

        if(updated.age && updated.email && updated.government && updated.phone && updated.name != null){
           
            firebase.auth().currentUser.updateEmail(updated.email)  

            firebase.database().ref(`Users/${userID}`).update({
                firstName: updated.name,
                email: updated.email ,
                phone: updated.phone,
                government: updated.government,
                age: updated.age,
            })
            loadUserData()

        }
        else{
            console.log("empty")
        }     
    }
    const handleReport=(e)=>{
        e.preventDefault()
        setShowReport(true)
    }
    const handleDetails=(e)=>{
        setReportDetails(e.target.value)

    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        firebase.database().ref('Admin').child(`Report/${userID}`).set({
            userID: userID,
            details: reportDetails
        })
    }
    const handleShowEdit=(e)=>{
        e.preventDefault()
        setShow(true)

        setUpdatedValues({
            name: info.firstName,
            email: info.email,
            age: info.age,
            government: info.government,
            phone: info.phone
        })
    }
    const handleChange=(e)=>{
        if(e.target.name === "name"){
            setUpdatedValues({
                ...updated,
                name: e.target.value             
            })
            if (/[\u0600-\u06ff]|[\u0750-\u077f]|[\ufb50-\ufc3f]|[\ufe70-\ufefc]|[\u0200]|[\u00A0]/g.test(e.target.value)){
                setError("Name must be English Only")
            }
            else if(!isNaN(e.target.value)){
                setError("Name must be alphapet Only [A-Z]")
            }
            else{
                setError(null)
            }
        }

        if(e.target.name === "email"){
            setUpdatedValues({
                ...updated,
                email: e.target.value             
            })
            if (!(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(e.target.value))){
                setError("valid Email format is xxx@xxx.com")
            }
            else{
                setError(null)
            }
        }

        if(e.target.name === "age"){
            setUpdatedValues({
                ...updated,
                age: e.target.value             
            })
            if (e.target.value <18){
                setError("age must be larger than 18")
            }
            else{
                setError(null)
            }
        }

        if(e.target.name === "phone"){
            setUpdatedValues({
                ...updated,
                phone: e.target.value             
            })
            if (isNaN(e.target.value)){
                setError("phone must be Only numbers")
            }
            else{
                setError(null)
            }
        }

        if(e.target.name === "government"){
            setUpdatedValues({
                ...updated,
                government: e.target.value             
            })
            if (/[\u0600-\u06ff]|[\u0750-\u077f]|[\ufb50-\ufc3f]|[\ufe70-\ufefc]|[\u0200]|[\u00A0]/g.test(e.target.value)){
                setError("Government must be English Only")
            }
            else if(!isNaN(e.target.value)){
                setError("Government must be alphapet Only [A-Z]")
            }
            else{
                setError(null)
            }
        }
    }
   
    return (
        <>
        <div class="profile">
  
            <div class="profile-banner">
                
            </div>
            <div class="profile-picture">
            { userID != authedUser &&
                <>
                    {/* <a href="" class="chat" style={{fontSize:"1.2rem"}}>Chat <span class="entypo-user-add"></span></a>
                    <a href="" class="follow" style={{fontSize:"1.2rem"}} onClick={handleReport}>Report <span class="entypo-plus"></span></a> */}
                </>
            }
                <a href=""><img src='https://images.unsplash.com/photo-1504933350103-e840ede978d4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=564&q=80'/></a>
                <span style={{fontSize:"2.2rem"}}>{info?.firstName} {info?.secondName}</span>
                <br/>
                <small style={{fontSize:"1.5rem"}}>{info?.blood_type}</small>
            </div>
  
  <div class="profile-content">
      <Col xs={12} md={3}  lg={3}  style={{marginRight: "5%"}}>
      <div class="content-left">
          {/* { userID != authedUser && 
            <> 
            <Row style={{position:'relative',bottom: '50px',marginBottom:"0"}}>
                
            <a href="" class="chat" style={{fontSize:"1.2rem"}}><ChatOutlinedIcon/></a>
             <a href="" class="follow" style={{fontSize:"1.2rem"}} onClick={handleReport}><BlockOutlinedIcon/></a>      
                </Row>            
            
            </>
          } */}
    
        <ul> 
            {info && 
            <>
            { userID === authedUser &&
                <li style={{textAlign:"center"}}><a style={{fontSize:"2rem"}} onClick={handleShowEdit}> Edit Details <EditOutlinedIcon/></a></li>           
            }
            
            <li><a><PhoneOutlinedIcon/> {info.phone}</a></li>
            <li><a><AlternateEmailOutlinedIcon/> {info.email}</a></li>
            <li><a><LocationCityOutlinedIcon/>  {info.government}</a></li>
            <li><a><OpacityOutlinedIcon/> {info.blood_type}</a></li>
            <li><a><PermContactCalendarOutlinedIcon/> {info.age} years</a></li>
            </>}

        </ul>
     
  </div>
      </Col>
  
    <Col xs={12} md={7} lg={7}>
        <div class="content-middle">
            {flag ?
                userPosts?.map(item=>(
                <PostDetails post={item}/>
                )) : savedPosts?.map(item=>(
                    <PostDetails post={item}/>
                ))
            }              
        </div>
    </Col>
    
   
    <div>
        { userID === authedUser && 
            <>
            <div class="myPosts">
                <div class="myPostsTitle" onClick={()=>setFlag(true)}>My Posts</div>
            </div>
            <div class="savedPosts">
                <div class="savedPostsTitle" onClick={()=>{setFlag(false)}}>Saved Posts</div>
            </div>
            </>
        }
    </div>    
  </div> 
 
</div>

        {/* Modal for Report */}
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
     
            {/* ************************************************************************* */}
        <Modal
                size="lg"
                backdrop="static"
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        Edit your information
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body as={Row}>

                    <Col className="imageCol" xs={12} md={6} lg={4}>
                        <img src="https://images.unsplash.com/photo-1504933350103-e840ede978d4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=564&q=80"/>
                        
                    </Col>
                    <Col xs={12} md={6} lg={8}>
                        <Form className="modalForm">
                            { error &&
                                <Alert style={{color:"red",width:"100%",height:"3vh"}} variant="light">
                                {error}
                                </Alert>
                            }                                                  
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Name</Form.Label>
                                <Form.Control name="name" onChange={handleChange} value={updated.name} type="text" placeholder="Name" />
                            </Form.Group>

                            <Form.Group controlId="formBasicEmail" >
                                <Form.Label>Email address</Form.Label>
                                <Form.Control  name="email" onChange={handleChange} value={updated.email} type="email" placeholder="Enter email" />                                   
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Age</Form.Label>
                                <Form.Control name="age" onChange={handleChange} value={updated.age} type="number" placeholder="Password"/>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Phone</Form.Label>
                                <Form.Control name="phone" onChange={handleChange} value={updated.phone} type="phone" placeholder="Phone" />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Government</Form.Label>
                                <Form.Control name="government" onChange={handleChange} value={updated.government} type="text" placeholder="Government" />
                            </Form.Group>
                            
                            <Button style={{marginTop:"20px"}} onClick={handleEdit} variant="primary" type="submit">
                                Edit
                            </Button>
                        </Form>
                    </Col>

                </Modal.Body>
            </Modal> 
         
         </>
    )
}

export default SemiProfile