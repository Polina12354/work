import { Col, Card } from 'react-bootstrap'

export const Photo = ({ item }) => {
    return(
        <Col xs={12} md={4} style={{marginBottom:'15px'}}>
              <Card>
                <Card.Img variant="top" src={"/images/"+ item.img } />
                <Card.Body>
                  <Card.Title>{ item.title }</Card.Title>
                  <Card.Text>
                  { item.text }
                  </Card.Text>
                </Card.Body>
              </Card>
          </Col>
    )
};