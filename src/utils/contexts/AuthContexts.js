import React, { useContext, useEffect, useState } from 'react' 
import {auth} from '../firebase'

import firebase from 'firebase'
export const AuthContext = React.createContext()

export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider({ children }){
    const [user, setUser] = useState(() => {
    const user = firebase.auth().currentUser;
    return user;
  });
  
    const [currentUser, setCurrentUser] = useState('')
    const [userData,setUserData] = useState({})
    const [currentID,setCurrentID] = useState()
    const [showNav,setShowNav] = useState(true)

   
    const signup=(email, password)=> {
    return auth.createUserWithEmailAndPassword(email, password)
  }
  const logOut=()=>{
    return auth.signOut()
  }
  /* const userInfo =(data)=>{
    if(data){
      setUserData(data)
    }
    else{
      console.log("not sending")
    }
  } */

   const login = (email,password)=>{
      return auth.signInWithEmailAndPassword(email,password)
      
  }
  const userUid =(id)=>{
    if(id){
      setCurrentID(id)
    }
  }
  const navShow=(flag)=>{
    setShowNav(flag)
  }
      

    useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      localStorage.setItem('token',user)
      console.log(user)
      setCurrentUser(user)
    })
    return unsubscribe
  }, [])   
  
    const value = {   
    signup,
    login,
    logOut, 
    currentUser,
    userUid,
    navShow,
    showNav
  }
    return(
        <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
    )
}