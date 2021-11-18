import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {Modal, Button, Form, FormControl, InputGroup} from 'react-bootstrap';

export default function LoginModal(props){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    function loginHandler(e){
        e.preventDefault();
        navigate('/admin');
    }

    return(
        <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton>
                <Modal.Title>Logare administrator</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form id="login-form" onSubmit={loginHandler}>
                    <Form.Group className="mb-3" controlId="formBasicUsername">
                        <Form.Label>Utilizator</Form.Label>
                        <InputGroup>
                        <InputGroup.Text>@</InputGroup.Text>
                            <FormControl id="inlineFormInputGroupUsername" placeholder="Utilizator" value={username} onChange={(e) => setUsername(e.target.value)}/>
                        </InputGroup>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Parolă</Form.Label>
                        <Form.Control type="password" placeholder="Parolă" value={password} onChange={(e) => setPassword(e.target.value)}/>
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