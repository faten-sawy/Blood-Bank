import React from 'react'
import { useState } from 'react';
import{DateTimePickerComponent} from '@syncfusion/ej2-react-calendars'
/* import { useAuth } from '../../utils/contexts/AuthContexts';
 */
const Callender=()=>{
    const[selectDate,setSelectDate]= useState([])
    const[date,setDate]= useState()
    /* const{dateDonation} =useAuth() */
    let Day,Month,time,dateDay
    
    if(selectDate){
      Day = selectDate.toString().split(/[ ,]+/)[0]
      dateDay =selectDate.toString().split(/[ ,]+/)[2]
      Month = selectDate.toString().split(/[ ,]+/)[1]
      time = selectDate.toString().split(/[ ,]+/)[4]
      const info ={
        Day,dateDay,Month,time
      }
     /*  dateDonation(info) */
    }    
    let x = new Date()
    console.log(selectDate - x)        
    return(
       <div style={{width:"10vw",position:"relative",left:"40%"}}>
          <DateTimePickerComponent value={selectDate} onChange={date=>{
            setSelectDate(date.value)                       
          }}/>         
       </div>
    )
}
export default Callender