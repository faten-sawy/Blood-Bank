import React from 'react'
import { Row ,Col} from 'react-bootstrap'
import './acheivement.css'

const Achievement=()=>{
    return(
        <Row className="achievement" style={{height:"100vh"}} >
        <div className="overlay">
            
            <h1 style={{}}>Our Achievements in Numbers</h1> 
            <p>We can talk for a long time about advantages of our Dental clinic before other medical treatment facilities.
             But you can read the following facts in order to make sure of all pluses of our clinic:</p>
            <Row className="mt-5 numbers">
                 <Col xs={12} md={6} lg={3}>
             <h2>1234 +</h2>
             <h3>years of Experience</h3>
             </Col>
             <Col  xs={12} md={6} lg={3}>
             <h2>1234 +</h2>
             <h3>years of Experience</h3>

             </Col>
             <Col  xs={12} md={6} lg={3}>
             <h2>1234 +</h2>
             <h3>years of Experience</h3>
             </Col>
             <Col  xs={12} md={6} lg={3}>
             <h2>1234 +</h2>
             <h3>years of Experience</h3>

             </Col>
            </Row>
             
       
        </div>
        
        

        </Row>
    )
}
export default Achievement