import { Card, ListGroup } from 'react-bootstrap'
import './LeftBlock.css'
import CardHeader from 'react-bootstrap/esm/CardHeader'
import { Link } from 'react-router-dom'

export const LeftBlock =()=>{
    return(
        <Card>
            <CardHeader className='text-center'>
                <h5>Левое меню</h5>
            </CardHeader>
            <ListGroup variant="flush">
                    <ListGroup.Item>
                        <small><Link to="/card#svadba">Свадебная съемка</Link></small>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <small><Link to="/card#semya">Семейная съемка</Link></small>
                    </ListGroup.Item>
            </ListGroup>
        </Card>
        
      
    )
}