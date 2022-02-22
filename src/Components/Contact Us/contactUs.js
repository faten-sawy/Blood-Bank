import React from 'react'
import './contactUs.css'
import {Row,Col,Form,Button} from 'react-bootstrap'
const Contact=()=>{
    return(
        <>
        <div class="contact d-flex justify-content-center align-items-center">
        <Col>
        </Col>
        <Col>
        <form>
        <h1 class="title text-center mb-4">Have any Question ?</h1>

                {/* <!-- Name --> */}
                <div class="form-group position-relative">
                <label for="formName" class="d-block">
                        <i class="icon" data-feather="user"></i>
                </label>
                <input type="text" id="formName" class="form-control form-control-lg thick" placeholder="Name"/>
                </div>

                {/* <!-- E-mail --> */}
                <div class="form-group position-relative">
                <label for="formEmail" class="d-block">
                        <i class="icon" data-feather="mail"></i>
                </label>
                <input type="email" id="formEmail" class="form-control form-control-lg thick" placeholder="E-mail"/>
                </div>

        {/*  <!-- Message --> */}
                <div class="form-group message">
                <textarea id="formMessage" class="form-control form-control-lg" rows="7" placeholder="Mensagem"></textarea>
                </div>
        
                {/* <!-- Submit btn --> */}
                <div class="text-center">
                <button type="submit" class="contactButton btn-primary" tabIndex="-1">Send message</button>
                </div>
        </form>

                </Col>




</div>
       

        
   {/*  <!-- ***** Contact Us End ***** -->
     */}


        {/* <Row className="contact" style={{backgroundColor:"#023047",height:"60vh"}}>
        <Row xs={12} md={12} lg={12}>
            <div className="head">
            <h1> Have any Question ?</h1>
            </div>           
        </Row>
        <Row xs={12} md={12} lg={12} >
            <div style={{width:"100vw"}}>
                <div class="contentContact">
                    <form style={{width:"40%", position:"relative", left:"400px"}}>
                    <Row style={{position:"relative",left:"28%"}}>
                    <div class="contentInputForm">
                        <label for="First-name">
                        <input type="text" placeholder="Name" />
                        </label>
                     <label for="Last-name">
                        <input type="text" placeholder="Email" />
                        </label>
                    </div>
                        
                    </Row>
                        
                        <Row style={{position:"relative",left:"37%"}}>
                        <input type="textarea" placeholder="Enter question" style={{width:"350px",height:"150px" ,backgroundColor:"#023047",color:"white"}}>
                        </input>
                        </Row>
                        <Row xs={12} md={12} lg={12}>
                        <div style={{width:"100vw",height:"70px"}}>
                            <Button className="contactButton" variant="primary">Submit</Button>
                        </div>
                            
                        </Row>
                        
                        
                        </form>
                        </div>
            </div>
                    
                        
        </Row>       */}
           {/*  <Row className="info">

                <Col xs={8} md={7} lg={5}> */}
                {/* <Form className="form">
                    <Form.Text >
                <h1 className="pt-3">Contact us to solve your Problem</h1>
                </Form.Text>
                <Form.Row className="ml-5">
                    <Col xs={9} md={5} lg={5} >
                    <Form.Control placeholder="First name" className="mr-5" />
                    </Col>
                    <Col xs={9} md={5} lg={5}>
                    <Form.Control placeholder="Email" />
                    </Col>
                </Form.Row>
                <Form.Row className="text" xs={12} md={8} lg={8}  >
                    <Col>
                    <Form.Control xs={12} md={8} lg={6} as="textarea" style={{width:"50%",height:"150px"}} placeholder="Write your problem here" />
                    </Col>              
             </Form.Row>
                <Form.Row className="mt-5">
                <Col xs={9} md={9} lg={9}>
                <Button variant="primary">Submit</Button>
                </Col>
                </Form.Row>
                </Form>  */}

              {/*   </Col>
            </Row> */}
    </>
    )
}
export default Contact