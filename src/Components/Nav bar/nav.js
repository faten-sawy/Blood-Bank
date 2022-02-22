import React ,{useEffect, useRef, useState} from 'react'
import  i18n from '../../i18n'
import { Row,Col, Container,Dropdown ,DropdownButton,ButtonGroup} from 'react-bootstrap'
import './nav.css'
import { NavLink,useHistory } from 'react-router-dom'
import LanguageIcon from '@material-ui/icons/Language';
import { Link } from 'react-router-dom'
import {useTranslation} from 'react-i18next'
import MenuListComposition from '../Change Language/changeLanguage'
import SearchIcon from '@material-ui/icons/Search';
import { useAuth } from '../../utils/contexts/AuthContexts'
import Notifications from '../../Components/Notifications/index'
import MeetingRoomOutlinedIcon from '@material-ui/icons/MeetingRoomOutlined';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import firebase from 'firebase'
import { fontSize } from '@material-ui/system'

/* export const viewdSection 
 */const changeLanguage=(ln)=>{
    return() =>{
        i18n.changeLanguage(ln)
    }
}
const Nav=()=>{
     /* viewdSection = useRef(null) */
    /* const getViewd=()=>{
      window.scrollTo({
         top: viewdSection.current.offsetTop,
         behavior: "smooth"
      })
   } */
    const history = useHistory()
    const {t,i18n} = useTranslation();  
    const {logOut,navShow,showNav} =useAuth()
    const [userInfo,setUserInfo] = useState()
    let direction = 'end'
    let token = localStorage.getItem('token')
    let currentUser =localStorage.getItem('currentUser')
    async function handlelogOut(){
        try {
    
           await logOut()
           localStorage.setItem('currentUser',null)

                   
           /* history.push("/homepage") */
       } catch {
           console.log("logOut")
       }
       }
       if(token!= null){
           
           firebase.database().ref(`Users/${currentUser}`).get().then(snapshot=>{
               setUserInfo(snapshot.val())
           })
       }

       const handleOpenProfile=()=>{
        history.push('/profile',{params: currentUser})
       }
       const handleOpen=()=>{
           history.push('/chat',{params: 'Rq82tLHjirbnKpvmvxUqUuQwBcr2'})
       }
       
 
    return(
            
            <>
            <Row lg={12} className="navSection" >       
            <nav>         
                {console.log(showNav)}      
                <Row>
                <Col lg={4}>
                <h1 style={{fontFamily:"'Fuggles', cursive",fontSize:"3rem"}}>
                <span style={{color:"red"}}>B</span>lood Bank</h1>
                </Col>
                <Col className="rightNav" lg={8}>
                {showNav ? 
                <>
                <label className="home" for="home">
                {t("vavHome")}
                </label>
        
                <label className="code" for="code">
                {t("navTeam")}
                </label>
                <label className="about" for="about">
                {t("navContact")}

                <Link to='/login' style={{color:'white',marginRight:'20px',fontSize: '1.5rem'}}>
                {t("navLogin")}
                </Link>
                
                </label>
                <DropdownButton                  
                    as={ButtonGroup}
                    drop={direction}
                    title= {<LanguageIcon style={{fontSize: "2rem", margin: '2px', marginBottom: '20px' ,color:'black'}}/>} 
                >
                    <Dropdown.Item onClick={changeLanguage('en')} defaultChecked>English</Dropdown.Item>
                    <Dropdown.Item onClick={changeLanguage('ar')}>Arabic</Dropdown.Item>
                </DropdownButton> 
                </> 
                : 
                <>
                <label>
                <Link to='/homepage' style={{color:'white',fontSize: '1.5rem'}}>
                Home
                </Link>                                   
               </label>
               <label style={{width: '4vw'}}>
                <Notifications style={{width:'2vw',backgroundColor:'white'}} className="notifyIcon"/>                              

                </label>
                <label style={{width: '4vw'}}>
                <Link to='/search' style={{color:'white',fontSize: '2rem'}}>
                <SearchIcon/>
                </Link>
                </label>
                
                <label style={{width: '4vw'}}>
                <Link onClick={handleOpen} style={{color:'white',fontSize: '2rem'}}>
                <MailOutlineIcon/>
                </Link>
                </label>
                { userInfo && 

                    <label style={{width: '7vw', fontSize:'1rem'}}>
                    <a onClick={handleOpenProfile} style={{color:'white',fontSize: '1rem'}}>
                    {userInfo.firstName} <img style={{borderRadius:'50%',width:"3vw",height:"5vh"}} src={userInfo.user_imgURL}/> 
                    </a>
                    </label>              
                }
                <label onClick={handlelogOut}>
                    <Link to='/' style={{color:'white',fontSize: '1rem'}}>
                        <MeetingRoomOutlinedIcon style={{width:"5vw",height:"4vh"}}/>
                    </Link>                                   
               </label>         
                </>
                }   
                </Col>
    
                </Row>
                
                
            </nav>
       </Row>      
         
                
          {/*       { token === null  ?
                <>
                <label className="home" for="home">
                {t("vavHome")}
                </label>
        
                <label className="code" for="code">
                {t("navTeam")}
                </label>
                <label className="about" for="about">
                {t("navContact")}

                <Link to='/login' style={{color:'white',marginRight:'20px',fontSize: '1.5rem'}}>
                {t("navLogin")}
                </Link>
                </label>
                <DropdownButton                  
                    as={ButtonGroup}
                    drop={direction}
                    title= {<LanguageIcon style={{fontSize: "2rem", margin: '2px', marginBottom: '20px' ,color:'black'}}/>} 
                >
                    <Dropdown.Item onClick={changeLanguage('en')} defaultChecked>English</Dropdown.Item>
                    <Dropdown.Item onClick={changeLanguage('ar')}>Arabic</Dropdown.Item>
                </DropdownButton> 

                </>
                :
                <>
                 <label>
                <Link to='/homepage' style={{color:'white',fontSize: '1.5rem'}}>
                Home
                </Link>                                   
               </label>
               <label style={{width: '4vw'}}>
                <Notifications style={{width:'2vw'}} className="notifyIcon"/>                              

                </label>
                <label style={{width: '4vw'}}>
                <Link to='/search' style={{color:'white',fontSize: '2rem'}}>
                <SearchIcon/>
                </Link>
                </label>
                { userInfo && 

                    <label style={{width: '7vw', fontSize:'1rem'}}>
                    <a onClick={handleOpenProfile} style={{color:'white',fontSize: '1rem'}}>
                    {userInfo.firstName} <img style={{borderRadius:'50%',width:"3vw",height:"5vh"}} src={userInfo.user_imgURL}/> 
                    </a>
                    </label>              
                }
                <label onClick={handlelogOut}>
                    <Link to='/' style={{color:'white',fontSize: '1rem'}}>
                        <MeetingRoomOutlinedIcon style={{width:"3vw",height:"3vh"}}/>
                    </Link>                                   
               </label>
               </>
} */}           
               {/* <label>
                <Link to='/homepage' style={{color:'white',fontSize: '1.5rem'}}>
                Home
                </Link>                                   
               </label>
                <DropdownButton                  
                    as={ButtonGroup}
                    drop={direction}
                    title= {<LanguageIcon style={{fontSize: "2rem", margin: '2px', marginBottom: '20px' ,color:'black'}}/>} 
                >
                    <Dropdown.Item onClick={changeLanguage('en')} defaultChecked>English</Dropdown.Item>
                    <Dropdown.Item onClick={changeLanguage('ar')}>Arabic</Dropdown.Item>
                </DropdownButton> */}
                {/* <NavLink to="/profile">
                    <label style={{color: "white"}}>
                    faten
                   </label>                              
                </NavLink> */} 

               {/*  <label onClick={handlelogOut}>
                <Link to='/' style={{color:'white',fontSize: '1rem'}}>
                Log Out
                </Link>                                   
               </label>

               <label>
                   <Link to ="/chat">
                       Chat
                   </Link>
               </label> */}
               
                                       
                
                 
               </>
           
    )
}
export default Nav