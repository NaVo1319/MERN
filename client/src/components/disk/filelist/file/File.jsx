import {Button, Col, Container, Row,Card} from 'react-bootstrap'

const File = ({file}) =>{
    return(
        <Col>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="http://localhos:5000/62750ce91d22d41cf9a371b3/1611728083_1515.jpg" />
            <Card.Body>
                <Card.Title>{file.name} {file.date.slice(0,10)}</Card.Title>
                <Button variant="primary">Open</Button>
            </Card.Body>
            </Card>
        </Col>
    )
}
export default File