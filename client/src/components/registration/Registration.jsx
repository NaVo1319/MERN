import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Form,Button, Modal } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";
import { registration } from "../../actions/user";
import axios from 'axios'
import {setUser} from "../../reducers/userReducer"
const Registration = () =>{
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const handleSubmit = async (e) => {
        e.preventDefault();
          try {
            const response = await axios.post('http://localhost:5000/api/auth/registration',{
                email,
                password
                })
            console.log(email+" "+password)
          } catch (err) {
              console.error(1,err);
          }
      };
    return(
    <Modal.Dialog>
    <Modal.Header>
        <Modal.Title>Registration</Modal.Title>
    </Modal.Header>

    <Modal.Body>
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control name="email" value={email} onChange={(event)=>setEmail(event.target.value)} type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
            We'll never share your email with anyone else.
            </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control name="password" value={password}onChange={(event)=>setPassword(event.target.value)} type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me" />
        </Form.Group>
        <Button variant="primary" type="submit">
            Submit
        </Button>
        </Form>
    </Modal.Body>
    </Modal.Dialog>
    )
}
export default Registration