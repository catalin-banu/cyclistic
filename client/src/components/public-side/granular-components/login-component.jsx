import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {Modal, Button, Form, FormControl, InputGroup, Alert} from 'react-bootstrap';

export default function LoginComponent(props){

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState(false);
    const navigate = useNavigate();

    async function loginHandler(e){
        e.preventDefault();

        let adminItem = {
            username: username,
            password: password
        };

        await axios
                .post("http://localhost:8080/admin/login",adminItem)
                .then(() => {
                    setErrorMessage(false);
                    navigate('/admin');
                })
                .catch((error) => {
                    setErrorMessage(true);
                    console.log(error.response.data);}
                );
    }

    return(
        <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton>
                <Modal.Title>Logare administrator</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {errorMessage && <Alert variant="danger">Datele de logare pentru administrator nu sunt corecte!</Alert>}
                <Form id="login-form" onSubmit={loginHandler}>
                    <Form.Group className="mb-3" controlId="loginAdminUsername">
                        <Form.Label>Utilizator</Form.Label>
                        <InputGroup>
                        <InputGroup.Text>@</InputGroup.Text>
                            <FormControl placeholder="Utilizator" value={username} onChange={(e) => setUsername(e.target.value)}/>
                        </InputGroup>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="loginAdminPassword">
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