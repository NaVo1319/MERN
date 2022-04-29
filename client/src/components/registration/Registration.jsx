import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Form,Button, Modal } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";
import { registration } from "../../actions/user";
const Registration = () =>{
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    return(
    <Modal.Dialog>
    <Modal.Header>
        <Modal.Title>Registration</Modal.Title>
    </Modal.Header>

    <Modal.Body>
        <Form >
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
        <Button variant="primary" type="submit" onClick={()=> registration(email, password)}>
            Submit
        </Button>
        </Form>
    </Modal.Body>
    </Modal.Dialog>
    )
}
export default Registration