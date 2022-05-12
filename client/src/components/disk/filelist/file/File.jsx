import {Button, Col, Container, Row,Card} from 'react-bootstrap'
import {useDispatch, useSelector} from "react-redux";
import React, {useState } from "react"
import axios from 'axios'
import { deleteFile } from '../../../../actions/file'

const File = ({file}) =>{
    const dispatch = useDispatch()
    const id = useSelector(state => state.user.currentUser.id)
    const path='http://localhost:5000/api/files/'+file.user+'/'+file.name
    console.log(path)
    function deleteFileHandler (e){
        e.stopPropagation()
        dispatch(deleteFile(file,id))
        window.location.reload()
    }
    return(
        <Col>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={path} />
            <Card.Body>
                <Card.Text>{file.name}</Card.Text>
                <Card.Text>Publication date: {file.date.slice(0,10)}</Card.Text>
                <Row><Button variant="success">Edit</Button></Row>
                <Row><Button variant="danger" onClick={(e)=>deleteFileHandler(e)}>Delete</Button></Row>
            </Card.Body>
            </Card>
        </Col>
    )
}
export default File