import {Button, Col, Modal, Row,Card} from 'react-bootstrap'
import {useDispatch, useSelector} from "react-redux";
import React, {useState } from "react"
import './Model.css'
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
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
        <Col>
            <Card style={{ width: '18rem' }} >
            <a onClick={handleShow}><Card.Img  variant="top" src={path} className="sizeCard" /></a>
            <Card.Body>
                <Card.Text>{file.name}</Card.Text>
                <Card.Text>Publication date: {file.date.slice(0,10)}</Card.Text>
                <Row>
                    <Button variant="success">Edit Pict</Button>
                    <Button variant="primary" >Publish Pict</Button>
                    <Button variant="danger" onClick={(e)=>deleteFileHandler(e)}>Delete Pict</Button>
                    </Row>
            </Card.Body>
            </Card>
            <Modal dialogClassName="modal-size" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    <Card.Img  variant="top" src={path} />
                    {file.name}
                </Modal.Body>
            </Modal>
        </Col>
    )
}
export default File