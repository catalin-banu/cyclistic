import React from "react";
import {Modal, Button, Form, Row, Col} from 'react-bootstrap';
import './order-component.css'

export default function OrderComponent(props){
    return(
        <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton>
                <Modal.Title>Formular de închiriere</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form id="order-form">
                    <Row className="mb-1">
                        <Form.Group as={Col} controlId="formGridLastName">
                            <Form.Label>Nume</Form.Label>
                            <Form.Control type="text"/>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridFirstName">
                            <Form.Label>Prenume</Form.Label>
                            <Form.Control type="text"/>
                        </Form.Group>
                    </Row>
                    <Form.Group as={Col} className="mb-1" controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email"/>
                    </Form.Group>
                    <Form.Group as={Col} className="mb-1" controlId="formGridPhone">
                            <Form.Label>Telefon</Form.Label>
                            <Form.Control type="number"/>
                    </Form.Group>
                    <Form.Label>Produsul dorit</Form.Label>
                    <Form.Group as={Col} className="choose-product">
                        <Form.Check label="Bicicletă de oraș" name="group1" type="checkbox"/>
                        <Form.Check label="Bicicletă de munte" name="group1" type="checkbox"/>
                        <Form.Check label="Bicicletă electrică" name="group1" type="checkbox"/>
                        <Form.Check label="Trotinetă electrică" name="group1" type="checkbox"/>
                    </Form.Group>
                    <Form.Label>Timpul de închiriere</Form.Label>
                    <Row className="mb-1">
                        <Form.Group as={Col} controlId="formGridRentalTime">
                            <Form.Control type="number" placeholder="Ore" min="0" max="8"/>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridConfirmPassword">
                            <Form.Control type="number" placeholder="Zile" min="0" max="4"/>
                        </Form.Group>
                    </Row>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.onHide}>Anulare</Button>
                <Button variant="primary" form="order-form" type="submit">Trimite</Button>
            </Modal.Footer>
        </Modal>
    )
} 