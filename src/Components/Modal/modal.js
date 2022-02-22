import React from 'react'
import { Modal,Col,Row,Button,Form } from 'react-bootstrap'

const ModalComponent=(props)=>{
    const{show}=props
    return(
        <Modal
        size="lg" 
        backdrop="static"
        show={show}
        onHide={()=>show(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Edit your information
          </Modal.Title>
        </Modal.Header>
        <Modal.Body as={Row}>
        <Col className="imageCol" xs={12} md={6} lg={4}>
        <image src="../../assests/images/female-avatar-profile-icon-round-woman-face-vector-18307304.jpg"/>
        </Col>
        {/* ******************************************* */}
        <Col xs={12} md={6} lg={8}>
        <Form className="modalForm">
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Name" />
            </Form.Group>
        
            <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            {/* <Form.Text className="text-muted">
            We'll never share your email with anyone else.
            </Form.Text> */}
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group> 

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Phone</Form.Label>
                <Form.Control type="phone" placeholder="Phone" />
            </Form.Group>

        <Button variant="primary" type="submit">
            Edit
        </Button>
        </Form>
        </Col>
          
        </Modal.Body>
      </Modal>
        
    )
}
export default ModalComponent