import React from 'react'
import { Form,Col,Row,Button } from 'react-bootstrap'
import './newPost.css'
import Callender from '../../Callender/callender'

const NewPost=()=>{
    return(
        <Form className="newPostForm">
        <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email"  />
            <Form.Text className="text-muted">
            We'll never share your email with anyone else.
            </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
            <Form.Label style={{textAlign: "left"}}>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Form.Group as={Col} xs={6} md={3} lg={12}  controlId="formGridState">
                <Form.Label>Blood type</Form.Label>
                <Form.Control as="select" defaultValue="Choose type...">
                  <option>Choose type...</option>
                  <option>A+</option>
                  <option>A-</option>
                  <option>B+</option>
                  <option>B-</option>
                  <option>O+</option>
                  <option>O-</option>
                  <option>AB+</option>
                  <option>AB-</option>
                </Form.Control>
              </Form.Group>
              <Form.Group>
              <Form.Label style={{textAlign:"left"}}>Date:</Form.Label>
                  <Callender/>
              </Form.Group>
        <Button variant="primary" type="submit">
            Add
        </Button>
        </Form>
    )
}
export default NewPost