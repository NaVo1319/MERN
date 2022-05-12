import {Button, Col, Container, Row,Card} from 'react-bootstrap'
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import {getAllFailes, uploadFile} from "../../actions/file"
import FileListMain from '../disk/filelist/FileListMain'
const Main = () =>{
    const dispatch = useDispatch()
    const id = useSelector(state => state.user.currentUser.id)
    useEffect(()=>{
        dispatch(getAllFailes(id))
    })
        return(
            <Container>
                <FileListMain></FileListMain>
            </Container>
        )
}
export default Main