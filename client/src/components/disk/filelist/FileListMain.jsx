import {Button, Col, Container, Row,Card} from 'react-bootstrap'
import { useDispatch, useSelector } from "react-redux"
import FileMain from './file/FileMain'

const FileList = (props) =>{
    const files = useSelector(state => state.file.files).map(file => {
        return <FileMain  key={file.id} file={file}/>
})
    return(
        <Container fluid>
            <Row xs="auto">
                {files}
            </Row>
        </Container>
    )
}
export default FileList