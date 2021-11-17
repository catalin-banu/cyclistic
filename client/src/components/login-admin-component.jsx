import React from "react";
import {Modal, Button, Form, FormControl, InputGroup} from 'react-bootstrap';

export default function LoginModal(props){
    return(
        <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton>
                <Modal.Title>Logare administrator</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form id="login-form">
                    <Form.Group className="mb-3" controlId="formBasicUsername">
                        <Form.Label>Utilizator</Form.Label>
                        <InputGroup>
                        <InputGroup.Text>@</InputGroup.Text>
                            <FormControl id="inlineFormInputGroupUsername" placeholder="Utilizator" />
                        </InputGroup>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Parolă</Form.Label>
                        <Form.Control type="password" placeholder="Parolă"/>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.onHide}>Anulare</Button>
                <Button variant="primary" form="login-form" type="submit">Logare</Button>
            </Modal.Footer>
        </Modal>
    )
} 