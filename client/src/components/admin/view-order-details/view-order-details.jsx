import axios from "axios";
import React,{useEffect, useState} from "react";
import {Modal, Button, Form, Col, Row, Alert} from 'react-bootstrap';
import OrderStatus from "../../../util/OrderStatus";

export default function ViewOrderDetails(props){

    const[firstName, setFirstName] = useState('');
    const[lastName, setLastName] = useState('');
    const[email, setEmail] = useState('');
    const[phone, setPhone] = useState('');
    const[productList, setProductList] = useState('');
    const[rentalTime, setRentalTime] = useState('');
    const[status, setStatus] = useState('');
    const[succesMessage, setSuccesMessage] = useState(false);

    async function onUpdateCallback(event){
        event.preventDefault();
        let orderUpdated ={
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone.toString(),
            productList: productList,
            rentalTime: rentalTime,
            status: status
        }
        
        await axios
                .put(`http://localhost:8080/v1/api/order/${props.order.id}`,orderUpdated)
                .then((response) => {
                    setSuccesMessage(true);
                    console.log(response.data);
            })
            .catch(function (error) {
                setSuccesMessage(false);
                if (error.response) {
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                }});
    }

    useEffect(() => {
        setFirstName(props.order.firstName);
        setLastName(props.order.lastName);
        setEmail(props.order.email);
        setPhone(props.order.phone);
        setProductList(props.order.productList);
        setRentalTime(props.order.rentalTime);
        setStatus(props.order.status);
        setSuccesMessage(false);
    },[props.order.firstName, props.order.lastName, props.order.email, props.order.phone, props.order.productList, props.order.rentalTime, props.order.status]);

    return (
        <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered size='lg'>
        <Modal.Header closeButton>
            <Modal.Title>Comanda {props.order.id}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {succesMessage && <Alert variant="success">Comanda {props.order.id} a fost actualizată cu succes!</Alert>}
            <Form id="update-form" onSubmit={onUpdateCallback}>
                <Row className="mb-1">
                    <Form.Group as={Col} controlId="updateLastName">
                        <Form.Label>Nume</Form.Label>
                        <Form.Control type="text" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                    </Form.Group>
                    <Form.Group as={Col} controlId="updateFirstName">
                        <Form.Label>Prenume</Form.Label>
                        <Form.Control type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                    </Form.Group>
                    <Form.Group as={Col} className="mb-1" controlId="updatePhone">
                        <Form.Label>Telefon</Form.Label>
                        <Form.Control type="number" value={phone} onChange={(e) => setPhone(e.target.value)}/>
                    </Form.Group>
                </Row>
                <Form.Group as={Col} className="mb-1" controlId="updateEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-1" controlId="updateProducts">
                    <Form.Label>Produse</Form.Label>
                    <Form.Control as="textarea" rows={4} value={productList} onChange={(e) => setProductList(e.target.value)}/>
                </Form.Group>
                <Row>
                    <Form.Group as={Col} className="mb-1" controlId="updateRentalTime">
                        <Form.Label>Interval închiriere</Form.Label>
                        <Form.Control type="text" value={rentalTime} onChange={(e) => setRentalTime(e.target.value)}/>
                    </Form.Group>
                    <Form.Group as={Col} className="mb-1" controlId="updateStatus">
                        <Form.Label>Interval închiriere</Form.Label>
                        <Form.Select aria-label="Default select example" value={status} onChange={(e) => setStatus(e.target.value)}>
                            <option value={OrderStatus.PENDING}>{OrderStatus.PENDING}</option>
                            <option value={OrderStatus.CONFIRMED}>{OrderStatus.CONFIRMED}</option>
                            <option value={OrderStatus.PAID_AND_TAKEN}>{OrderStatus.PAID_AND_TAKEN}</option>
                            <option value={OrderStatus.FINISHED}>{OrderStatus.FINISHED}</option>
                        </Form.Select>
                    </Form.Group>
                </Row>
                <Form.Group className="mb-1" controlId="updateComments">
                    <Form.Label>Detalii</Form.Label>
                    <Form.Control as="textarea" rows={3}/>
                </Form.Group>
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={props.onHide}>Anulare</Button>
            <Button variant="primary" form="update-form" type="submit">Salvează</Button>
        </Modal.Footer>
    </Modal>
    )
}