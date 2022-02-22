import React, { Fragment, useState } from 'react'
import './search.css'
import { Row,Col,DropdownButton,Dropdown,Alert } from 'react-bootstrap'
import SearchIcon from '@material-ui/icons/Search';
import firebase from 'firebase'
import UserDetails from '../User Details/userdetails';
import Side from '../Side/side';
import NoFound from '../No Found/noFound';
import searchImg from '../../utils/images/search.svg'
import waitingSearch from '../../utils/images/People_search.svg'
import { Checkbox } from '@material-ui/core';
import { Input,Radio,RadioGroup,FormControlLabel,Button} from '@material-ui/core'


const Search =()=>{
    const [blood,setBlood] = useState(null)
    const [users,setUsers] = useState()
    const [notFoundFlag,setnotFoundFlag] = useState(false)
    const [showWaiting,setShowWaiting] = useState(true)
    const [error,setError] = useState(false)
    const [search,setSearchValue] = useState("")
    const [usersKeyes,setUsersKeys] = useState()
    let arr = []

    const handleSelect=(e)=>{
        console.log(e.target.value)
        setBlood(e.target.value)
    }

/* const handleSelect=(e)=>{
    e.preventDefault()
    if(e.target.name === 'bloodType'){
        setSearchValues({
            ...search,
            bloodType: e.target.value
        })
    }
    if(e.target.name === 'government'){
        setSearchValues({
            ...search,
            government: e.target.value
        })
        
    }
} */

const handleSearch=()=>{
    if(blood === null && search === ""){
        setError('input field must be not empty')
        
    }
    else if(search != "" && blood === null){
        setError(null)
        if(isNaN(search)){
            firebase.database().ref('Users').orderByChild('firstName').equalTo(search).on('value',function(snapshot){
                if(snapshot.val() === null){                  
                    setShowWaiting(false)
                    setnotFoundFlag(true)
                    setUsers("")
                }
                else{
                    setShowWaiting(false)
                    setnotFoundFlag(false)
                    setUsers(Object.values(snapshot.val()))
                    setUsersKeys(Object.keys(snapshot.val()))
                }
            })
        }
        else {
            firebase.database().ref('Users').orderByChild('phone').equalTo(search).on('value',function(snapshot){
                if (snapshot.val()=== null){                  
                    setShowWaiting(false)
                    setnotFoundFlag(true)
                    setUsers("")
                }
                else{
                    setShowWaiting(false)
                    setnotFoundFlag(false)
                    setUsers(Object.values(snapshot.val()))
                    setUsersKeys(Object.keys(snapshot.val()))

                }
            })
        }

    }
    else if(search != "" && blood != null){
        setError(null)
        if(isNaN(search)){
            firebase.database().ref('Users').orderByChild('firstName').equalTo(search).on('value',function(snapshot){
                if(snapshot.val() === null){                  
                    setShowWaiting(false)
                    setnotFoundFlag(true)
                    setUsers("")
                }
                else{
                    setShowWaiting(false)
                    setnotFoundFlag(false)
                    snapshot = Object.values(snapshot.val())
                    
                    console.log(snapshot)
                    snapshot.forEach(function(user){
                        console.log(user.blood_type)
                        if( user.blood_type === blood){
                            arr.push(user)
                            console.log(user.key)
                            
                        }
                        else{
                            setnotFoundFlag(true)
                            setUsers("")
                        }
                        setUsers(arr)
                    })
                   /*  setUsers(Object.values(snapshot.val())) */
                }
            })
        }
        else{          
            firebase.database().ref('Users').orderByChild('phone').equalTo(search).on('value',function(snapshot){
                if(snapshot.val() === null){                  
                    setShowWaiting(false)
                    setnotFoundFlag(true)
                    setUsers("")
                }
                else{
                    setShowWaiting(false)
                    setnotFoundFlag(false)
                    snapshot = Object.values(snapshot.val())
                    console.log(snapshot)
                    snapshot.forEach(function(user){
                        console.log(user.blood_type)
                        if( user.blood_type === blood){
                            arr.push(user)
                            
                        }
                        else{
                            setnotFoundFlag(true)
                            setUsers("")
                        }
                        setUsers(arr)
                    })
                    /*  setUsers(Object.values(snapshot.val())) */
                }
            })
            
        }

    }
    else if(search === "" && blood !=null){
        setError(null)
        firebase.database().ref('Users').orderByChild('blood_type').equalTo(blood).on('value',function(snapshot){
            if(snapshot.val() === null){
                setShowWaiting(false)
                setnotFoundFlag(true)
                setUsers("")
            }
            else{
                setShowWaiting(false)
                setnotFoundFlag(false)
                setUsers(Object.values(snapshot.val()))
            }          
        })
    }
    

console.log(usersKeyes)
}
/* const handleSearch= (e)=>{
    e.preventDefault() 
        firebase.database().ref('Users').orderByChild('blood_type').equalTo(search.bloodType).on("value",function(snapshot){
            snapshot = Object.values(snapshot.val())
            setUsers(snapshot)
            
            console.log(snapshot)
            snapshot.forEach((s)=>{
               if( s.government == 'Aswan'){
                   console.log(typeof(s))
                   arr.push((s))
               }
            }
            )
        })
        console.log(arr)
        setUsers(arr)
} */          
    return(
        
        <Row className="search mt-5" > 

        <Col className="search-right" lg={3}>
        {/* <h1>Search Using</h1>
        <Radio value="A+"/>
       
        <p>lkjfldfjiorurteirhgkdjh</p> */}

        </Col>
        {/*  */}
        <Col lg={7} className="searchResut">
            
            <Row className="mb-3">
            <div class="wrapper">
            <div class="searchBar">
                <input id="searchQueryInput" type="text" name="searchInput" placeholder="Search by name or phone number" 
                value={search} onChange={(e)=>setSearchValue(e.target.value)} />
                <button style={{boxShadow:"none"}} id="searchQuerySubmit" type="submit" name="searchQuerySubmit">
                <svg onClick={handleSearch} style={{width:'24px',height:'24px'}} viewBox="0 0 24 24"><path fill="#666666" d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
                </svg>
                </button>
            </div>
            </div>
            </Row>
            <Row>
                <Col lg={3} style={{borderRight:"2px solid #b7b7a4"}} className="mb-3">
                <Button style={{backgroundColor:"#e71d36",color: "white",fontSize:"1.2rem"}}> by Blood Type</Button>
                </Col>
                
           
                <Col>
                <RadioGroup row aria-label="position" name="position" defaultValue="top">
                <FormControlLabel
                value="A+"
                control={<Radio size="small"/>}
                label="A+"
                labelPlacement="End"
                onChange={handleSelect}
                
                
                />
                <FormControlLabel
                value="A-"
                control={<Radio size="small"/>}
                label="A-"
                labelPlacement="End"
                onChange={handleSelect}
                
                />
                <FormControlLabel
                value="B+"
                control={<Radio size="small" />}
                label="B+"
                labelPlacement="End"
                onChange={handleSelect}
              
                />
                <FormControlLabel
                value="B-"
                control={<Radio size="small" />}
                label="B-"
                labelPlacement="End"
                onChange={handleSelect}
              
                />
                <FormControlLabel
                value="O+"
                control={<Radio size="small"/>} 
                label="O+"
                onChange={handleSelect}
                
                />
                <FormControlLabel
                value="O-"
                control={<Radio size="small"/>} 
                label="O-"
                onChange={handleSelect}
                
                />
                <FormControlLabel
                value="AB+"
                control={<Radio size="small"/>}
                label="AB+"
                labelPlacement="End"
                onChange={handleSelect}
                
                />
                <FormControlLabel
                value="AB-"
                control={<Radio size="small" />} 
                label="AB-"
                onChange={handleSelect}
                
                />
        </RadioGroup>
                </Col>   
            
            </Row>
            { error &&
                <Row>
                <Alert style={{fontSize:"1.2rem",color:"red",width:"80%",textAlign:"left"}} variant="light">
                  {error}
                </Alert>
                </Row>
            }
                    
        {/* <Row className="seachBox">
    
        <div className="select items" style={{width: "80%"}}>
   
        <select style={{width:"25%"}}  name="bloodType" id="slct" value={search.bloodType} onChange={handleSelect}>
            <option >Choose Blood Type</option>
            <option>A+</option>
            <option>A-</option>
            <option>B+</option>
            <option>B-</option>
            <option>O+</option>
            <option>O-</option>
            <option>AB+</option>
            <option>AB-</option>
        </select>

        <select style={{width:"10%"}} name="government" id="slct" value={search.government} onChange={handleSelect}>
            <option >Choose City</option>
            <option>Aswan</option>
            <option>Cairo</option>
            <option>Qena</option>
            <option>Giza</option>
            <option>Assuit</option>
            <option>Alex</option>
            <option>El-minya</option>
            <option>Sohag</option>
        </select>
        </div>
        
        <SearchIcon  onClick={handleSearch} style={{width: "6vw", height: "6vh"}}/> 
        </Row> */}
       
        <Row style={{position:'relative',top: '15%'}}>

            {showWaiting && <img className="img-search" src={searchImg}/>}
            {notFoundFlag && <NoFound text="No Users found"/> }
            <div className="resultContainer">
                {users && Object.values(users)?.map(user=>(
                    <UserDetails key ={usersKeyes} user={user}/>
                ))
                }
                
            </div>
           
           
        </Row> 
        </Col>
        {/*  */}
        {/* <Col lg={3}>
        <Side/>
        </Col> */}
        </Row>
    )
}
export default Search