import axios from "axios";
import React, { useState } from "react";
import {Modal, Button, Form, Row, Col, Alert} from 'react-bootstrap';
import './place-an-order-component.css'
import OrderStatus from "../../../util/OrderStatus";
import convertMapToString from "../../../util/convertMapToString";
import formatRentalTime from "../../../util/formatRentalTime";

export default function PlaceAnOrderComponent(props){

    const[firstName, setFirstName] = useState('');
    const[lastName, setLastName] = useState('');
    const[email, setEmail] = useState('');
    const[phone, setPhone] = useState('');
    const[isCityBikeChecked, setIsCityBikeChecked] = useState(false);
    const[isMtbChecked, setIsMtbChecked] = useState(false);
    const[isEBikeChecked, setIsEBikeChecked] = useState(false);
    const[isEScooterChecked, setIsEScooterChecked] = useState(false);
    const[numberOfCityBikes, setNumberOfCityBikes]= useState(1);
    const[numberOfMtbs, setNumberOfMtbs]= useState(1);
    const[numberOfEBikes, setNumberOfEBikes]= useState(1);
    const[numberOfEScooters, setNumberOfEScooters]= useState(1);
    const[rentalTimeHours, setRentalTimeHours] = useState('');
    const[rentalTimeDays, setRentalTimeDays] = useState('');
    const[succesMessage, setSuccesMessage] = useState(false);
    const[error, setError] = useState(false);
    const[errorMessage, setErrorMessage] = useState("");
    const[orderNumber, setOrderNumber] = useState("");

    const productList = new Map([]);
    const rentalTime = new Map([]);

    async function handleSubmit(e){
        e.preventDefault();

        if(isCityBikeChecked === true)
            productList.set("Bicicleta de oras", numberOfCityBikes);
        if(isMtbChecked === true)
            productList.set("Bicicleta de munte", numberOfMtbs);
        if(isEBikeChecked === true)
            productList.set("Bicicleta electrica", numberOfEBikes);
        if(isEScooterChecked === true)
            productList.set("Trotineta electrica", numberOfEScooters);
        if(rentalTimeHours !== '')
            rentalTime.set("ore", rentalTimeHours);
        if(rentalTimeDays !== '')
            rentalTime.set("zile", rentalTimeDays);
        
        let orderItem = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone.toString(),
            productList: convertMapToString(productList),
            rentalTime: formatRentalTime(rentalTime),
            status: OrderStatus.PENDING
        }

        await axios
            .post("http://localhost:8080/v1/api/order", orderItem)
            .then((response) => {
                setOrderNumber(response.data.id);
                setSuccesMessage(true);
                setError(false);
            })
            .catch((error) => {
                setError(true);
                setSuccesMessage(false);
                setErrorMessage(error.response.data.errorMessage);
            });
    }

    return(
        <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton>
                <Modal.Title>Formular de închiriere</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {succesMessage && <Alert variant="success">Comanda dvs cu numărul {orderNumber} a fost înregistrată cu succes!</Alert>}
                {error && <Alert variant="danger">{errorMessage}</Alert>}
                <Form id="order-form" onSubmit={handleSubmit}>
                    <Row className="mb-1">
                        <Form.Group as={Col} controlId="orderLastName">
                            <Form.Label>Nume</Form.Label>
                            <Form.Control type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                        </Form.Group>
                        <Form.Group as={Col} controlId="orderFirstName">
                            <Form.Label>Prenume</Form.Label>
                            <Form.Control type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                        </Form.Group>
                    </Row>
                    <Form.Group as={Col} className="mb-1" controlId="orderEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </Form.Group>
                    <Form.Group as={Col} className="mb-1" controlId="orderPhone">
                            <Form.Label>Telefon</Form.Label>
                            <Form.Control type="number" value={phone} onChange={(e) => setPhone(e.target.value)} />
                    </Form.Group>
                    <Form.Label>Produsul dorit</Form.Label>
                    <Form.Group as={Col} className="choose-product">
                        <div className="form-check-group">
                            <Form.Check label="Bicicletă de oraș" name="product" type="checkbox" checked={isCityBikeChecked} onChange={() => setIsCityBikeChecked(!isCityBikeChecked)}/>
                            {isCityBikeChecked && <input className="number-of-product" type="number" placeholder="Buc" value={numberOfCityBikes} min="0" max="20" onChange={(e) => setNumberOfCityBikes(e.target.value)}></input>}
                        </div>
                        <div className="form-check-group">
                            <Form.Check label="Bicicletă de munte" name="product" type="checkbox" checked={isMtbChecked} onChange={() => setIsMtbChecked(!isMtbChecked)}/>
                            {isMtbChecked && <input className="number-of-product" type="number" placeholder="Buc" value={numberOfMtbs} min="0" max="20" onChange={(e) => setNumberOfMtbs(e.target.value)}></input>}
                        </div>
                        <div className="form-check-group">
                            <Form.Check label="Bicicletă electrică" name="product" type="checkbox" checked={isEBikeChecked} onChange={() => setIsEBikeChecked(!isEBikeChecked)}/>
                            {isEBikeChecked && <input className="number-of-product" type="number" placeholder="Buc" value={numberOfEBikes} min="0" max="20" onChange={(e) => setNumberOfEBikes(e.target.value)}></input>}
                        </div>
                        <div className="form-check-group">
                            <Form.Check label="Trotinetă electrică" name="product" type="checkbox" checked={isEScooterChecked} onChange={() => setIsEScooterChecked(!isEScooterChecked)}/>
                            {isEScooterChecked && <input className="number-of-product" type="number" placeholder="Buc" value={numberOfEScooters} min="0" max="20" onChange={(e) => setNumberOfEScooters(e.target.value)}></input>}
                        </div>
                    </Form.Group>
                    <Form.Label>Timpul de închiriere</Form.Label>
                    <Row className="mb-1">
                        <Form.Group as={Col} controlId="orderRentalTimeHours">
                            <Form.Control type="number" placeholder="Ore" min="0" max="8" value={rentalTimeHours} onChange={(e) => setRentalTimeHours(e.target.value)} />
                        </Form.Group>
                        <Form.Group as={Col} controlId="orderRentalTimeDays">
                            <Form.Control type="number" placeholder="Zile" min="0" max="4" value={rentalTimeDays} onChange={(e) => setRentalTimeDays(e.target.value)} />
                        </Form.Group>
                    </Row>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.onHide}>Închide</Button>
                <Button variant="primary" form="order-form" type="submit">Trimite</Button>
            </Modal.Footer>
        </Modal>
    )
} 