import React,{useState} from 'react'
import './side.css'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import {Modal,Button,Form,Col,Row} from 'react-bootstrap'
import firebase from 'firebase';
import { useAuth } from '../../utils/contexts/AuthContexts';
import{DateTimePickerComponent} from '@syncfusion/ej2-react-calendars'



const Side=(props)=>{
    const [value, onChange] = useState(new Date());

    const [showAddPost, setShowAddPost] = useState(false)
    const [bloodType,setBloodType] = useState('')
    const [location,setLocation]= useState('')
    const [dateFlag,setDateFlag] = useState(true)
    const [selectDate,setSelectDate]= useState([])
    const [details,setDetails]=useState()

    const{currentUser,timeDonation} = useAuth()
    const{userData} = props
    console.log(userData)

    const handleBloodType=(e)=>{
        setBloodType(e.target.value)          
    }
    const handleLocation = (e) =>{
        setLocation(e.target.value)
    }
    const handleDetails=(e)=>{
        setDetails(e.target.value)
    }
    
     function handleAdd(e){
         e.preventDefault()

        let dateNow = new Date();

        let month = dateNow.getUTCMonth() < 10 ? ('0' + (dateNow.getMonth() + 1)) : dateNow.getMonth();
        let day = dateNow.getUTCDate() < 10 ? ('0' + dateNow.getUTCDate()) : dateNow.getUTCDate();
        let hours = dateNow.getHours() < 10 ? ('0' + dateNow.getHours()) : dateNow.getHours();
        let mints = dateNow.getUTCMinutes() < 10 ? ('0' + dateNow.getUTCMinutes()) : dateNow.getUTCMinutes();
        let secs = dateNow.getUTCSeconds() < 10 ? ('0' + dateNow.getUTCSeconds()) : dateNow.getUTCSeconds();
        let datestamp = dateNow.getFullYear() + '-' + month + '-' + day + ' ' + hours + ':' + mints + ':' + secs;
       
           
        
        let selectedMonth = selectDate.getUTCMonth() < 10 ? ('0' + (selectDate.getMonth() + 1)) : selectDate.getMonth();
        let selectedDay = selectDate.getUTCDate() < 10 ? ('0' + selectDate.getUTCDate()) : selectDate.getUTCDate();
        let selectedHours = selectDate.getHours() < 10 ? ('0' + selectDate.getHours()) : selectDate.getHours();
        let selectedMints = selectDate.getUTCMinutes() < 10 ? ('0' + selectDate.getUTCMinutes()) : selectDate.getUTCMinutes();
        let selectedSecs = selectDate.getUTCSeconds() < 10 ? ('0' + selectDate.getUTCSeconds()) : selectDate.getUTCSeconds();
        let selectedDatestamp = selectDate.getFullYear() + '-' + selectedMonth + '-' + selectedDay + ' ' + selectedHours + ':' + selectedMints + ':' + selectedSecs;
                   
        var postListRef = firebase.database().ref('Posts');
        var newPostRef = postListRef.push();
     
            newPostRef.set({
            blood_type: bloodType,
            city:"adfo",
            government: location,
            postDate: datestamp,
            donDate: selectedDatestamp,
            userID:currentUser.uid,
            name : userData.firstName,
            user_email: userData.email,
            key: newPostRef.key,
            user_imgURL :"https://images.unsplash.com/photo-1504933350103-e840ede978d4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=564&q=80",
            })

       /*  setTimeout(() => {
            firebase.database().ref(`Posts/${newPostRef.key}`).remove()
            console.log("remove is Done")            
        }, selectDate - postDate); */ 

        firebase.database().ref('Users').orderByChild('blood_type').equalTo(bloodType).once('value',function(s){
            s.forEach(element => {
              element.ref.child("Notification").push({
                  email: userData.email,
                  phone: userData.phone,
                  firstName: userData.firstName,
                  user_imgURL: userData.user_imgURL,
                  postDate: datestamp,
                  key: newPostRef.key,
              })                               
            })
           /*  console.log(userData) */
            console.log('notification is Done')
        })
            
       
    }
    return(
        <>
        {/* Add Post */}
        <div class="postSide" onClick={() => setShowAddPost(true)}>
        <div class="postSideTitle">Add Post</div>
        </div>

         {/* Calender */}

        <div class="calender">
        <div class="title">calendar</div>
      
        <Calendar
        onChange={onChange}
        value={value}
        className="cale"
    
        />
        </div> 


        {/* <div class="container">
        <!-- Each Link Section -->
        <!-- Youtube -->
        <section>
            <div class="icon-container" id="youtube">
                <a href="#"><i class="fab fa-youtube"></i></a>
            </div>
            <!-- Tab -->
            <div class="tab">
                <h1>You Tube</h1>
                <p>Follow me on You Tube for video and course updates, article & blog shares and more</p>
            </div>
        </section> */}

       
        
        {/* Add Modal */}

        <Modal                    
            backdrop="static"
            show={showAddPost}
            onHide={() => setShowAddPost(false)}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
        >
            <Modal.Header closeButton>
                <Modal.Title id="example-custom-modal-styling-title">
                    Add Post
                </Modal.Title>
            </Modal.Header>
            <Modal.Body as={Row}>

                {/* ******************************************* */}
                <Col >
                    <Form className="modalForm">

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Blood Type</Form.Label>
                        <Form.Control as="select" defaultValue="Choose type..." value={bloodType} onChange={handleBloodType}>
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
                            <Form.Label style={{marginTop:"12px"}}>Location</Form.Label>
                            <Form.Control type="text" placeholder="Enter Location" value={location} onChange={handleLocation} />
                        </Form.Group>
                        {/*  */}

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label style={{marginTop:"12px"}}>Details</Form.Label>
                            <Form.Control type="text" placeholder="Enter Location" value={details} onChange={handleDetails} />
                        </Form.Group>

                    {/* ******************************* */}
                    <div style={{width:"10vw",margin:"20px",marginLeft:"0"}}>
                    <label>Date</label>
                        <DateTimePickerComponent value={selectDate} onChange={date=>{
                            console.log(date.value)
                            setSelectDate(date.value)                       
                        }}/>
                        </div>
                    {/*  */}
                        <Button variant="primary" type="submit" onClick={handleAdd}>
                            ADD
                        </Button>
                    </Form>
                </Col>
            </Modal.Body>
        </Modal>     
   
</>

    )
}
export default Side