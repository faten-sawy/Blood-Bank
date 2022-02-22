import React, { useEffect } from 'react'
import '../../i18n'
import {Col, Row} from 'react-bootstrap'
import './goals.css'
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';
import CloudQueueIcon from '@material-ui/icons/CloudQueue';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import PeopleIcon from '@material-ui/icons/People';
import {useTranslation} from 'react-i18next'
import Aos from 'aos'
import '../../../node_modules/aos/dist/aos.css'
import speed from './speed.svg'
import notifi from './notifi.svg'

import TimerIcon from '@material-ui/icons/Timer';

const Goals=()=>{
    const {t,i18n} = useTranslation();

    useEffect(()=>{
        Aos.init({duration: 1000})

    },[])
    return(
    
        <Row  className="pt-5 smallFeature">
            <Row data-aos= "zoom-in-up" style={{display: "flex", justifyContent: "center"}}>
            <Col  className="home-feature bottomCard" lg={3}>
            <div data-scroll-reveal="enter bottom move 50px over 0.6s after 0.2s">
                <div class="features-small-item">
                   <AccessTimeIcon style={{fontSize: "6em",color: "#e63946"}}/>
                    <h2 class="features-title">{t("Service")}</h2>
                    <p>{t("Service body")}</p>
                </div>
            </div>

            </Col>

            <Col  className="home-feature" lg={3}>
            <div data-scroll-reveal="enter bottom move 50px over 0.6s after 0.2s">
                <div class="features-small-item">
                   <NotificationsActiveIcon  style={{fontSize: "6rem",color: "#e63946"}}/>
                   <h2 class="features-title">{t("Notifications")}</h2>
                    <p>{t("Notifications body")}</p>
                    </div>
            </div>
            </Col>

            <Col  className="home-feature bottomCard"  lg={3}>
            <div data-scroll-reveal="enter bottom move 50px over 0.6s after 0.2s">
                <div class="features-small-item">
                   <PeopleIcon  style={{fontSize: "6rem",color: "#e63946",fontWeight: "100"}}/>
                    
                    <h2 class="features-title">{t("Communication")}</h2>
                    <p>{t("Communication body")}</p>
                    </div>
            </div>
            </Col>
            </Row>
            
            <Row className="fatureDetails bottomCard" style={{marginBottom:"30px"}}>
                <Col lg={4}>
                <img style={{width:'30vw',height:"50vh"}} src={notifi}/>

                    {/* <div className="firstDiv">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKILdxWGrTZvEOJYM4DfG-885rebpAtaSCGpR4ulHrpu44VYVoLaqgsIQnLun-AqpMmiY&usqp=CAU"/>
                    </div>
                    <div className="overlayWise">
                    klvjxlkjfldjfldjfglkfdjgkljflkgjdlkfjglkdjflkgjdflkj
                    </div> */}
               
                </Col>
                <Col lg={4} className="pFeature">
                <p style={{fontSize:"1.5rem"}} data-aos="fade-left">{t("first")}
                </p>
                </Col>               
            </Row>

            <Row className="fatureDetails" style={{marginBottom:"30px"}}>
            <Col lg={4} className="pFeature">
                <p style={{fontSize:"1.5rem"}} data-aos="fade-right">{t("second")}</p>
                </Col> 
                <Col lg={4}>
                <img style={{width:'30vw',height:"50vh"}} src={speed}/>
                </Col>                            
            </Row>
        {/* <section class="section home-feature">
        <div class="container minFeatutre"> */}
           
              
                    
            {/* <!-- ***** Features Small Item Start ***** --> */}
            {/*  <div class="col-lg4 col-md-6 col-sm-6 col-12" data-scroll-reveal="enter bottom move 50px over 0.6s after 0.2s">
                <div class="features-small-item">
                    <div class="icon">
                        <i><img src="assets/images/featured-item-01.png" alt=""/></i>
                    </div>
                    <h5 class="features-title">Modern Strategy</h5>
                    <p>Customize anything in this template to fit your website needs</p>
                </div>
            </div>
                    
                  
                    
                    <div class="col-lg-4 col-md-6 col-sm-6 col-12" data-scroll-reveal="enter bottom move 50px over 0.6s after 0.2s">
                            <div class="features-small-item">
                                <div class="icon">
                                    <i><img src="assets/images/featured-item-01.png" alt=""/></i>
                                </div>
                                <h5 class="features-title">Modern Strategy</h5>
                                <p>Customize anything in this template to fit your website needs</p>
                            </div>
                        </div>
                        </div>
                        

                    <div class="col-lg-12">
                    
                    <div class="col-lg-4 col-md-6 col-sm-6 col-12" data-scroll-reveal="enter bottom move 50px over 0.6s after 0.2s">
                            <div class="features-small-item">
                                <div class="icon">
                                    <i><img src="assets/images/featured-item-01.png" alt=""/></i>
                                </div>
                                <h5 class="features-title">Modern Strategy</h5>
                                <p>Customize anything in this template to fit your website needs</p>
                            </div>
                        </div>
                        </div>
                        
                        <div class="col-lg-12">
                    
                    <div class="col-lg-4 col-md-6 col-sm-6 col-12" data-scroll-reveal="enter bottom move 50px over 0.6s after 0.2s">
                            <div class="features-small-item">
                                <div class="icon">
                                    <i><img src="assets/images/featured-item-01.png" alt=""/></i>
                                </div>
                                <h5 class="features-title">Modern Strategy</h5>
                                <p>Customize anything in this template to fit your website needs</p>
                            </div>
                        </div>
                        </div>
                        
                 
              
      
                       
        </section> */}

        {/* <h1 className="pt-5" style={{textAlign:"center",fontSize:"5rem",  fontFamily: '"El Messiri", sans-serif'
        }}>{t("goalHead")}</h1>
        <p style={{textAlign:"center",color:"#8b8c89"}}>{t("goalHeadParagraph")}</p>
        <Row style={{marginTop:"5%"}}>
            <Row style={{justifyContent:"center"}}>
                <Col xs={12} md={6} lg={2} style={{justifyContent:"center",textAlign:"center"}}>
                <HourglassEmptyIcon className="svg" style={{color:"red",width:"8vw",height:"6vh"}}/>
                <h2 style={{paddingTop:"40px"}}>{t("helpPeople")}</h2>
                <div style={{width:"100%"}}>
                    <p style={{color:"#8b8c89",wordBreak: "break-all",whiteSpace: "normal",fontFamily: "'Open Sans Condensed', sans-serif",fontSize:"1.6rem" }} >{t("goalParagraph")}</p>
                </div>               
                  
                </Col>
                <Col xs={12} md={6} lg={2} style={{justifyContent:"center",textAlign:"center"}}>
                <CloudQueueIcon className="svg" style={{color:"#003049",width:"8vw",height:"6vh"}}/>
                 <h2 style={{paddingTop:"40px"}}>{t("helpPeople")}</h2>
                <p style={{color:"#8b8c89",wordBreak: "break-all",whiteSpace: "normal" ,fontFamily: "'Open Sans Condensed', sans-serif",fontSize:"1.6rem"}}>{t("goalParagraph")}</p>

                </Col>
                <Col xs={12} md={6} lg={2} style={{justifyContent:"center",textAlign:"center"}}>
                <CloudQueueIcon className="svg" style={{color:"#f77f00",width:"8vw",height:"6vh"}}/>
                    <h2 style={{paddingTop:"40px"}}>{t("helpPeople")}</h2>
                <p style={{color:"#8b8c89",wordBreak: "break-all",whiteSpace: "normal",fontFamily: "'Open Sans Condensed', sans-serif",fontSize:"1.6rem" }}>{t("goalParagraph")}</p>
                </Col>
            </Row>
            <Row style={{justifyContent:"center"}} className="mt-3" >
                <Col xs={12} md={6} lg={2} style={{justifyContent:"center",textAlign:"center"}}>
                <HourglassEmptyIcon className="svg" style={{color:"#8cb369",width:"8vw",height:"6vh"}}/>
                <h2 style={{paddingTop:"40px"}}>{t("helpPeople")}</h2>
                <div style={{width:"100%"}}>
                    <p style={{color:"#8b8c89",wordBreak: "break-all",whiteSpace: "normal",fontFamily: "'Open Sans Condensed', sans-serif",fontSize:"1.6rem" }} >{t("goalParagraph")}</p>
                </div>               
                  
                </Col>
                <Col xs={12} md={6} lg={2} style={{justifyContent:"center",textAlign:"center"}}>
                <CloudQueueIcon className="svg" style={{color:"#f4e285",width:"8vw",height:"6vh"}}/>
                 <h2 style={{paddingTop:"40px"}}>{t("helpPeople")}</h2>
                <p style={{color:"#8b8c89",wordBreak: "break-all",whiteSpace: "normal",fontFamily: "'Open Sans Condensed', sans-serif",fontSize:"1.6rem" }}>{t("goalParagraph")}</p>

                </Col>
                <Col xs={12} md={6} lg={2} style={{justifyContent:"center",textAlign:"center"}}>
                <CloudQueueIcon className="svg" style={{color:"#495867",width:"8vw",height:"6vh"}}/>
                    <h2 style={{paddingTop:"40px"}}>{t("helpPeople")}</h2>
                <p style={{color:"#8b8c89",wordBreak: "break-all",whiteSpace: "normal",fontFamily: "'Open Sans Condensed', sans-serif",fontSize:"1.6rem" }}>{t("goalParagraph")}</p>
                </Col>
            </Row>
        </Row> */}
        </Row>
    )
}
export default Goals