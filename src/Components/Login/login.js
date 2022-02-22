import React,{useState} from 'react'
import './login.css'
import {Row ,Button,Alert} from 'react-bootstrap'
import { NavLink, useLocation } from 'react-router-dom'
import {useAuth} from '../../utils/contexts/AuthContexts'
/* import {auth} from '../../utils/firebase' */
import {facebookProvider} from '../../utils/contexts/socialLogin'
import { useHistory } from 'react-router-dom'
import firebase from 'firebase'
import {useTranslation} from 'react-i18next'

const Login=()=>{
    const[email,setEmail] = useState()
    const[password,setPassword] = useState()
    const[error,setError] = useState(false)
    const {t,i18n} = useTranslation();
    let history = useHistory()

    const {navShow,showNav} =useAuth()
  

    const{login,socialLogin,currentUser} =useAuth()
/*      console.log(currentUser.uid) 
 */
    const handleChange=(e)=>{
        if (/[\u0600-\u06ff]|[\u0750-\u077f]|[\ufb50-\ufc3f]|[\ufe70-\ufefc]|[\u0200]|[\u00A0]/g.test(e.target.value)){
            setError("Email must be in format xxx@xxx.com")
        }
        else if(!isNaN(e.target.value)){
            setError("Email must be alphapet Only [A-Z]")
        }
        else{
            setError(null)
            setEmail(e.target.value)
        }
        
    }
    const handlePassword=(e)=>{
        setPassword(e.target.value)
    }
     function handleLogin(e){
        e.preventDefault()
        setError("")
        try{
            setError("")
             login(email,password)
/*             console.log(currentUser.uid)
 */            localStorage.setItem("currentUser",currentUser.uid)
            navShow(false)
            history.push("/homepage")
        } catch (error) {
            setError("Email or password incorrect")
        }        
        }       
        
    return(
        <div class="loginContainer">
        <div className="overlayLogin">
             <div class="loginContainer__content" > 
                    <div class="content__loginInputs"> 
                    <form class="content__input--loginForm">
                       <h1 style={{width:"20vw"}}>{t("login")}</h1>
                      
                       
                         <label for="Email">
                        <input type="text" placeholder={t("Email")} value={email} onChange={handleChange}/>
                    </label>
                     
                            <label for="Password">
                        <input type="password" placeholder={t("Password")} value={password} onChange={handlePassword} />
                        </label>                       
                         <div class="content__submit"> 
                        <button type="button" class="loginButton" onClick={handleLogin} >{t("login")}</button>
                       <div class="content__submit--line"></div>                       
                                           
                    <p style={{color:"red",fontSize:"1.5rem"}}>
                        {t("loginPara")} 
                        
                          <NavLink  to="/signup">
                        <span style={{color:"white",textDecoration:"underLine",paddingBottom:"20px"}}> <strong>{t("signUp")}</strong></span>
                        </NavLink>
                    </p>                    
                    </div>                                               
                    </form>
                    </div>                    
                </div>
        </div>
               
                </div>
             
    )
}
export default Login