import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import {getFiles, uploadFile} from "../../actions/file";
import {Button, Col, Container, Row, Table, Form} from 'react-bootstrap'
import FileList from "./filelist/FileList";
import React, { useState } from "react"

const Disk = () =>{
    const email = useSelector(state => state.user.currentUser.email)
    const dispatch = useDispatch()
    const currentDir=useSelector(state=>state.file.currentDir)
    useEffect(()=>{
        dispatch(getFiles(),[])
    })
    const fileUploadHandler=(event)=>{
        const files=[...event.target.files]
        files.forEach(file=>dispatch(uploadFile(file,currentDir)))
        event.target.value = null;
    }
    return(
        <Container fluid>
            <Row>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                    <th>User Email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td><h1>{email}</h1></td>
                    </tr>
                </tbody>
            </Table>
            </Row>
            <Row>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Input File</Form.Label>
                    <Form.Control multiple={true} onChange={(event)=>fileUploadHandler(event)} type="file"/>
                </Form.Group>
            </Form>
            </Row>
            <FileList/>
        </Container>
    )
}
export default Disk