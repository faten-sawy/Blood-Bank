import React,{useRef, useState} from 'react'
import CarouselComponent from '../../Components/Carousel/carousel'
import AboutUs from '../../Components/About us/about us'
import Achievement from '../../Components/Acheivment/acheivment'
import Team from '../../Components/Team/team'
import Nav from '../../Components/Nav bar/nav'
import Contact from '../../Components/Contact Us/contactUs'
import { Container } from 'react-bootstrap'
import './BloodBank.css'
import Goals from '../../Components/Goals/goals'
import Callender from '../../Components/Callender/callender'
/* import viewSection from '../../Components/Nav bar/nav'
 */
const BloodBank=()=>{
   const[selectDate,seSelectDate]= useState(null)
   
    return(    
      <>
       <Container fluid className="bloodBank"  style={{width:"100vw",height:"auto",padding:"0"}} >
       <CarouselComponent/>
       <Goals /* ref={viewSection} *//>
        {/* <AboutUs/>  */}
       <Team style={{backgroundColor:"gray"}}/>
       {/* <Contact/>  */}
       </Container>
       </>             
    )
}
export default BloodBank