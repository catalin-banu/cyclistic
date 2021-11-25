import React from "react";
import "./product-card.css";
import Card from 'react-bootstrap/Card'

function ProductCardComponent(props){
    return(
        <Card className="card">
            <Card.Img variant="top" src={props.image} className="card-image"/>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>{props.text}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default ProductCardComponent;