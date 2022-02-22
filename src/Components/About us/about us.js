import React from 'react'
import { Container, Row,Col } from 'react-bootstrap'
import './about.css'

import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import SettingsIcon from '@material-ui/icons/Settings';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import {useTranslation} from 'react-i18next'


const AboutUs=()=>{
    const {t,i18n} = useTranslation();
    
    return(
      
        <Row className="pt-5" style={{backgroundColor: "#efebce"}}>
            <h1 style={{fontSize:"4rem", textAlign: "center",fontFamily: '"El Messiri", sans-serif'}}> Who We Are ?</h1>
            <section class="about-section">
        <div class="container">
            <div class="row">                
                <div class="content-column col-lg-6 col-md-12 col-sm-12 order-2">
                    <div class="inner-column">
                        <div class="sec-title">
                            <h3>{t("We are developer")} </h3>
                        </div>
                        <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                       
                        cillum dolore eu fugiat nulla pariatur.</div>

                        <div class="sec-title">
                            <h3>our vision </h3>
                        </div>
                        <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                       
                        cillum dolore eu fugiat nulla pariatur.</div>
                        <ul class="list-style-one">
                            <li>Lorem Ipsum is simply dummy tex</li>
                            <li>Consectetur adipisicing elit</li>
                            <li>Sed do eiusmod tempor incididunt</li>
                        </ul>
                        <div class="btn-box">
                            <p style={{fontSize: "1.5rem",color: "#e63946"}}>Join to us ?
                            <span  style={{color: "blue", fontSize: "1.8rem",marginLeft:"50px"}}><i class="fab fa-facebook"></i></span> 
                            <span><i class="fab fa-envelope"></i></span></p>
                                             
                        </div>
                    </div>
                </div>

              <div class="image-column col-lg-6 col-md-12 col-sm-12">
                    <div class="inner-column wow fadeInLeft">
                        <figure class="image-1"><a href="#" class="lightbox-image" data-fancybox="images"><img style={{height: "80vh",width: "90%"}} src="http://media.philstar.com/images/the-philippine-star/business/business-main/20160603/build-teamwork.jpg" alt=""/></a></figure>
                        <figure class="image-2">
                            <div data-aos="flip-up" style={{backgroundColor:"white", position:"absolute",top:"-280px",right: "-30px",minHeight:"40vh",width:"15vw"}}>
                                <FormatQuoteIcon style={{fontSize: "4rem",color: "#e63946"}}/><br/>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod

                                </div></figure>
                    </div>
                </div>
            </div>
        </div>
    </section>

       
         {/* <div className="aboutUs" style={{padding:"0"}}>
         <Row><h1 style={{borderBottom:"2px solid red"}} >About Us</h1></Row>  
         <Row style={{justifyContent:"center",marginTop:"4%" ,padding:" 50px"}}>           
            <Col xs={12} md={6} lg={4}>           
            <p style={{fontSize:"1.7rem"}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
            </p>

            </Col>
            <Col xs={12} md={6} lg={4}>
            <Row>
                <Col   >
                <div  >
                    <ContactSupportIcon style={{fontSize:"7rem",marginLeft:"25%",color:"#E63946"}} className="card__icon"/>
                </div>
                
            
                </Col>
                <Col style={{height:"20vhm"}}>
                <div >
                    <FavoriteBorderIcon style={{fontSize:"7rem",marginLeft:"25%", color:"#A8DADC"}} className="card__icon"/>
                
                </div>

                </Col>
            </Row>

            <Row>
                <Col style={{height:"20vh"}} >
                <div >
                <SettingsIcon style={{fontSize:"7rem",marginLeft:"25%" ,color:"#457B9D"}} className="card__icon"/>
                </div>
    
                </Col>
                <Col style={{height:"20vh"}}>
                <div >
                <ContactSupportIcon style={{fontSize:"7rem",marginLeft:"25%",color:"#1D3557"}}  className="card__icon"/>
                </div>
                    
                </Col>
            </Row>

            </Col>
        </Row>

         </div> */}
         
        </Row>
    
    )
}
export default AboutUs