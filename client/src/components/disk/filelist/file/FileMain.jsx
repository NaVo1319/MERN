import {Button, Col, Image, Row,Card,Modal} from 'react-bootstrap'
import { useSelector } from "react-redux"
import {getFiles, likeViewImage} from '../../../../actions/file'
import React, {useEffect, useState } from "react"
import {useDispatch} from "react-redux"
import './Model.css'
import heartOff from '../../../resurses/heart_off.png'
import heartOn from '../../../resurses/heart_on.png'
import view from '../../../resurses/eye.png'

const File = (props) =>{
    const id = useSelector(state => state.user.currentUser.id)
    var file=props.file
    var [likes,setlikes]=useState(file.likes)
    var [views,setview]=useState(file.views)
    const path='http://localhost:5000/api/files/'+file.user+'/'+file.name
    const dispatch = useDispatch()
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => {
        dispatch(likeViewImage(file,file.user,2))
        setShow(true)
        setview(views+1)
    };
    const [like,setLike]=useState(heartOff);
    const handleLike=(e)=>{
        dispatch(likeViewImage(file,file.user,1))
        setlikes(likes+1)
        
    }
    
    return(
        <Col>
            <Card style={{ width: '18rem' }}>
            <a onClick={handleShow}><Card.Img  variant="top" src={path} className="sizeCard" /></a>
            <Card.Body>
                    <Row xs="auto"> 
                        <Col><Image className="view" onClick={(e)=>handleLike(e)} src={view}></Image></Col>
                        <Col className='text'>{views}</Col>
                    </Row>
                    <Row> <br/></Row>
                <Card.Text>{file.name}</Card.Text>
                <Card.Text>Publication date: {file.date.slice(0,10)}</Card.Text>
                <Card.Text>
                    <Row xs="auto">
                        <Col><Image className="heart" onMouseEnter={(e)=>setLike(heartOn)} onMouseLeave={(e)=>setLike(heartOff)} onClick={(e)=>handleLike(e)} src={like}></Image></Col>
                        <Col className='text'>{likes}</Col>
                    </Row>
                </Card.Text>
            </Card.Body>
            </Card>
            <Modal dialogClassName="modal-size" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    <Card.Img  variant="top" src={path} />
                    <Row> <br/></Row>
                    {file.name}
                    <Row> <br/></Row>
                    <Row xs="auto">
                    <Col><Image className="heart" onMouseEnter={(e)=>setLike(heartOn)} onMouseLeave={(e)=>setLike(heartOff)} onClick={(e)=>handleLike(e)} src={like}></Image></Col>
                    <Col className='text'>{likes}</Col>
                    <Col><Image className="view" src={view}></Image></Col>
                    <Col className='text'>{views}</Col>
                    </Row>
                </Modal.Body>
            </Modal>
        </Col>
    )
} 
export default File