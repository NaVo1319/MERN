import {Button, Col, Container, Row,Card} from 'react-bootstrap'
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import {getAllFailes, uploadFile} from "../../actions/file"
import FileListMain from '../disk/filelist/FileListMain'
const Main = () =>{
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getAllFailes())
    })
        return(
            <Container>
                <FileListMain></FileListMain>
            </Container>
        )
}
export default Main