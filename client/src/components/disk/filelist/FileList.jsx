import {Button, Col, Container, Row,Card} from 'react-bootstrap'
import { useDispatch, useSelector } from "react-redux"
import File from './file/File'

const FileList = () =>{
    const files = useSelector(state => state.file.files).map(file => <File key={file.id} file={file}/>)
    return(
        <Container fluid>
            <Row>
                {files}
            </Row>
        </Container>
    )
}
export default FileList