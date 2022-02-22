import React, { useContext, useState } from 'react'
import './signUp.css'
 import firebase from '../../utils/firebase'
import { Container } from 'react-bootstrap'
import { useAuth } from '../../utils/contexts/AuthContexts'
import { NavLink, useHistory } from 'react-router-dom'
import {useTranslation} from 'react-i18next'
import {auth} from '../../utils/firebase'
import {Alert,Row} from  'react-bootstrap'

/* import { Info } from '@material-ui/icons' */

const SignUp=()=>{   
    const[firstName,setFirstName] = useState("")
    const[secondName,setSecondName] = useState("")
    const[password,setPassword] = useState("")
    const[email,setEmail] = useState("")
    const[phone,setPhone] = useState("")
    const[age,setAge] = useState("")
    const[bloodType,setBloodType] = useState("")
    /* console.log(firebase)   */
    const {t,i18n} = useTranslation();
    const history = useHistory()
    const[error,setError] = useState(null)
    const {navShow,showNav,currentUser} =useAuth()

    /* ***************** */
    
    /* ****************** */
    let userInfo = {
        firstName:firstName,
        secondName:secondName,
        email:email,
        phone:phone,
        age:age,
        blood_type: bloodType,
        user_imgURL: "https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg"
    }
    const {signup,userUid}  = useAuth()

    const handleFirstName=(e)=>{
        if (/[\u0600-\u06ff]|[\u0750-\u077f]|[\ufb50-\ufc3f]|[\ufe70-\ufefc]|[\u0200]|[\u00A0]/g.test(e.target.value)){
            setError("Name must be English Only")
        }
        else if(!isNaN(e.target.value)){
            setError("Name must be alphapet Only [A-Z]")
        }
        else{
            setError(null)
            setFirstName(e.target.value)
        }
        

    }
    const handleSecondName=(e)=>{
        if (/[\u0600-\u06ff]|[\u0750-\u077f]|[\ufb50-\ufc3f]|[\ufe70-\ufefc]|[\u0200]|[\u00A0]/g.test(e.target.value)){
            setError("Name must be English Only")
        }
        else if(!isNaN(e.target.value)){
            setError("Name must be alphapet Only [A-Z]")
        }
        else{
            setError(null)
            setSecondName(e.target.value)
        }
              
    }
    const handleAge=(e)=>{
        setAge(e.target.value)
    }
    const handleEmail=(e)=>{

        if (!(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(e.target.value))){
            setError("valid Email format is xxx@xxx.com")
            setEmail("")
        }
        else{
            setError(null)
            setEmail(e.target.value) 
        }
              
    }
    const handlePhone=(e)=>{
        setPhone(e.target.value)       
    }
    const handlePassword=(e)=>{
        setPassword(e.target.value)
    }
    const handleSelect=(e)=>{
        setBloodType(e.target.value)
    }
    async function handleSignUp(e){
        e.preventDefault()
        try{
            auth.createUserWithEmailAndPassword(email, password).then(user =>{            
                console.log(user.user.uid)
              firebase.database().ref(`Users/${user.user.uid}`).set(userInfo)
            })
            history.push('/login')        
            setFirstName("")
            setSecondName("")
            setAge("")
            setBloodType("")
            setPhone("")
            setPassword("")
            setEmail("")
        } catch(error){
            console.log(error)
        }     
       
    }
   
    return(
        <Container fluid style={{padding:"0"}}>
            <div className="main-container">
            <div className="overlaySignUp">
                <h1 className="title">{t("signUp")}</h1>              
                <div className="main-container__content">
                
                    <div className="content__inputs">
                        
                   <form className="content__input--form">
                       <label htmlFor="First-name">
                        <input type="text" placeholder={t("firstName")} name="" value={firstName} onChange={handleFirstName}/>
                        </label>
                        <label htmlFor="Last-name">
                        <input type="text" placeholder={t("secondName")} value={secondName} onChange={handleSecondName}/>
                        </label>
                        <label htmlFor="email">
                        <input type="email" placeholder={t("email")} value={email} onChange={handleEmail}/>
                        </label>
                        <label htmlFor="password">
                        <input type="password" placeholder={t("password")} value={password} onChange={handlePassword}/>
                        </label>
                       
                        <label htmlFor="phone" className="phone">
                        <input style={{height:"5vh"}} type="phone" placeholder={t("phone")} value={phone} onChange={handlePhone} />
                        </label>
                        
                        
                        <div className="select items" style={{ marginLeft:"15px",width: "80%",borderRadius:"20px"}}>
                        <select  style={{height:"5vh"}} name="slct" id="slct" value={bloodType} onChange={handleSelect}>
                            <option defaultValue disabled>Choose Blood Type</option>
                            <option>A+</option>
                            <option>A-</option>
                            <option>B+</option>
                            <option>B-</option>
                            <option>O+</option>
                            <option>O-</option>
                            <option>AB+</option>
                            <option>AB-</option>
                        </select>
                        </div>               
                    
                                 
                    </form>
                    </div>

                    <div className="content__signUpSubmit">
                    { error && 
                            <Alert style={{color:"red",borderRadius:"25px",marginLeft:"-20px"}} variant= "dark">
                            {error}
 
                        </Alert>
                       }
                    <button className="signUpButton" onClick={handleSignUp}>
                        {t("signUp")}
                        </button>

                    <div className="content__signUpSubmit--line" style={{width:'100%'}}></div>
                    <p style={{width: "100%",color:"white",fontSize:'1.5rem'}}>
                        {t("signUpPara")}
                        <NavLink to="/login">
                        <span ><strong>{t("login")}</strong></span>
                        </NavLink>                   </p>
                    
                    </div>
                </div>                    
                </div>
                </div>
        </Container>      
    )
}
export default SignUp