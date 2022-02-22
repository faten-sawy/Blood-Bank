import React,{useState} from 'react'
import './team.css'
import { Row,Col, Container,Carousel } from 'react-bootstrap'
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@material-ui/icons/FavoriteOutlined';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const Team=()=>{
    return(  
        <Row style={{minHeight:"100vh",height: "auto",width:"100vw",backgroundColor:"white"}}>
        
        <h1 style={{width: "100vw" ,position:"relative",left:"20%",paddingTop:"50px",height:"50px",fontSize:"5rem",borderTop:"0.5px solid #023047",  fontFamily: "El Messiri"
}}>Our Amazing Team Work</h1>

        <Carousel style={{width:"40vw" ,height:"50vh",position:"relative",top:"6%",left:"30%"}}>
          <Carousel.Item  >
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80"
              alt="First slide"
              style={{width:"50vw",height:"40vh"}}
            />
             <div style={{textAlign:"center",marginTop:"10%"}}>
            <h1 style={{fontSize:"3rem"}}>Faten Magdy</h1>
            <h4 style={{color:"#6c757d"}}>Front-End developer</h4>
          </div>
          <div class="teamoverly_social" style={{textAlign:"center",marginTop:"20px"}}>
            <ul class="list-unstyled teamoverly_social_item">
              <li>
              <a target="_blank" href="https://www.facebook.com/md.t.hossen.98/"><FacebookIcon/></a>
              </li>
              <li>
              <a target="_blank" href="https://www.linkedin.com/in/tofajjal-hossen-22868a184/"><LinkedInIcon/></a>
              </li>
            </ul>
        </div>
            
          </Carousel.Item>
         
          
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1516750084685-66c3b1f181ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"
              alt="Second slide"
              style={{width:"5vw",height:"40vh"}}
            />

            <div style={{textAlign:"center",marginTop:"10%"}}>
            <h1 style={{fontSize:"3rem"}}>Sara Araby</h1>
            <h4 style={{color:"#6c757d"}}>Front-End developer</h4>
          </div>
          <div class="teamoverly_social" style={{textAlign:"center",marginTop:"20px"}}>
            <ul class="list-unstyled teamoverly_social_item">
              <li>
              <a target="_blank" href="https://www.facebook.com/md.t.hossen.98/"><FacebookIcon/></a>
              </li>
              <li>
              <a target="_blank" href="https://www.linkedin.com/in/tofajjal-hossen-22868a184/"><LinkedInIcon/></a>
              </li>
            </ul>
        </div>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80"
              alt="Third slide"
              style={{width:"5vw",height:"40vh"}}
            />

            <div style={{textAlign:"center",marginTop:"10%"}}>
            <h1 style={{fontSize:"3rem"}}>Micheal</h1>
            <h4 style={{color:"#6c757d"}}>Mobile developer</h4>
          </div>
          <div class="teamoverly_social" style={{textAlign:"center",marginTop:"20px"}}>
            <ul class="list-unstyled teamoverly_social_item">
              <li>
              <a target="_blank" href="https://www.facebook.com/md.t.hossen.98/"><FacebookIcon/></a>
              </li>
              <li>
              <a target="_blank" href="https://www.linkedin.com/in/tofajjal-hossen-22868a184/"><LinkedInIcon/></a>
              </li>
            </ul>
        </div>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80"
              alt="Third slide"
              style={{width:"5vw",height:"40vh"}}
            />

            <div style={{textAlign:"center",marginTop:"10%"}}>
            <h1 style={{fontSize:"3rem"}}>Mahmoud</h1>
            <h4 style={{color:"#6c757d"}}>Mobile developer</h4>
          </div>
          <div class="teamoverly_social" style={{textAlign:"center",marginTop:"20px"}}>
            <ul class="list-unstyled teamoverly_social_item">
              <li>
              <a target="_blank" href="https://www.facebook.com/md.t.hossen.98/"><FacebookIcon/></a>
              </li>
              <li>
              <a target="_blank" href="https://www.linkedin.com/in/tofajjal-hossen-22868a184/"><LinkedInIcon/></a>
              </li>
            </ul>
        </div>
          </Carousel.Item>
        </Carousel>        
        {/* <div className="team">      
         <Row className="mt-5 mb-5">        
             <h1 style={{position:'relative',left:"40%",textAlign:"center",fontSize:"4rem"}}>Team Work</h1>
             <h4>Who made the effort to preserve human life as much as possible</h4>        
         </Row>        
       <Row style={{width:"100vw",marginRight:"0",marginLeft:"2%"}}>
           <Col xs={12} md={6} lg={2}>
                
                <div className="card_img">
                    <img src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80" alt=""/>
                      <div class="teamoverly_info">
                        <div class="teamoverly_info_inner">
                          <div class="teamoverly_info_title">
                         <h2 >Faten Magdy</h2> 
                            
                          </div>
                          <div class="teamoverly_social">
                              <ul class="list-unstyled teamoverly_social_item">
                                <li>
                                <a target="_blank" href="https://www.facebook.com/md.t.hossen.98/"><FacebookIcon/></a>
                                </li>
                                <li>
                                <a target="_blank" href="https://www.linkedin.com/in/tofajjal-hossen-22868a184/"><LinkedInIcon/></a>
                                </li>
                              </ul>
                          </div>
                        </div>
                      </div>  
                </div>                        
                <div className="card_body">
                    <h2 className="card_title">Faten Magdy</h2>
                    <h6 className="designation">Front-End Developer</h6>
                    
                </div>
           
            </Col>
            <Col xs={12} md={6} lg={2}>
                
                <div className="card_img">
                    <img src="https://images.unsplash.com/photo-1516750084685-66c3b1f181ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80" alt=""/>
                    <div class="teamoverly_info">
                        <div class="teamoverly_info_inner">
                          <div class="teamoverly_info_title">

                            
                          </div>
                          <div class="teamoverly_social">
                              <ul class="list-unstyled teamoverly_social_item">
                                <li>
                                <a target="_blank" href="https://www.facebook.com/md.t.hossen.98/"><FacebookIcon/></a>
                                </li>
                                <li>
                                <a target="_blank" href="https://www.linkedin.com/in/tofajjal-hossen-22868a184/"><LinkedInIcon/></a>
                                </li>
                              </ul>
                          </div>
                        </div>
                      </div>  
                </div>
                <div className="card_body">
                    <h2 className="card_title">Michle Wilson</h2>
                    <h6 className="designation">Mobile Developer</h6>
                    
                </div>
            
            </Col>
            <Col xs={12} md={6} lg={2}>
                
                <div className="card_img">
                    <img src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80" alt=""/>
                    <div class="teamoverly_info">
                        <div class="teamoverly_info_inner">
                          <div class="teamoverly_info_title">
                            
                          </div>
                          <div class="teamoverly_social">
                              <ul class="list-unstyled teamoverly_social_item">
                                <li>
                                <a target="_blank" href="https://www.facebook.com/md.t.hossen.98/"><FacebookIcon/></a>
                                </li>
                                <li>
                                <a target="_blank" href="https://www.linkedin.com/in/tofajjal-hossen-22868a184/"><LinkedInIcon/></a>
                                </li>
                              </ul>
                          </div>
                        </div>
                      </div>  
                </div>
                
                <div className="card_body">
                    <h2 className="card_title">Sara Araby</h2>
                    <h6 className="designation">Front-End Developer</h6>
                    
                </div>
            
            </Col>
            <Col xs={12} md={6} lg={2}>
                
                <div className="card_img">
                    <img src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80" alt=""/>
                    <div class="teamoverly_info">
                        <div class="teamoverly_info_inner">
                          <div class="teamoverly_info_title">
                            
                          </div>
                          <div class="teamoverly_social">
                              <ul class="list-unstyled teamoverly_social_item">
                                <li>
                                <a target="_blank" href="https://www.facebook.com/md.t.hossen.98/"><FacebookIcon/></a>
                                </li>
                                <li>
                                <a target="_blank" href="https://www.linkedin.com/in/tofajjal-hossen-22868a184/"><LinkedInIcon/></a>
                                </li>
                              </ul>
                          </div>
                        </div>
                      </div>  
                </div>
                <div className="card_body">
                    <h2 className="card_title">Mahmoud</h2>
                    <h6 className="designation">Mobile Developer</h6>
                    
                </div>
            
            </Col>
       </Row>
            
        </div>  */}
        </Row> 
    )
}
export default Team