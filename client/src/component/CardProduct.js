import { Button, Card, Container } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { deleteproduct } from "../redux/Action/ActionProduct"

const CardProduct =({el})=>{
    const dispatch =useDispatch()
    return(
        <div>
    <Container>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={el.image} />
    <Card.Body>
        <Card.Title>{el.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{el.price} dinars </Card.Subtitle>
        <Card.Text>{el.brand} </Card.Text>
        <Button variant="primary" onClick={()=>dispatch(deleteproduct(el._id))}>Delete</Button>
        <Link to={`/UptadeProduct/${el._id}`}><Button variant="primary">Update</Button></Link>
    </Card.Body>
    </Card>
    </Container>
    </div>
    )
}

export default CardProduct