import {Button, Col, Container, Row,Table} from 'react-bootstrap'
import { useDispatch, useSelector } from "react-redux"
import File from './file/File'

const FileList = (props) =>{
    const files = useSelector(state => state.file.files).map(file => <Col><File key={file.id} file={file}/></Col>)
    return(
        <Container fluid>
            <Row><h1>Uploaded Files</h1></Row>
            <Row>
                {files}
            </Row>
            <Row><h1>Published Files</h1></Row>
        </Container>
    )
}
export default FileList