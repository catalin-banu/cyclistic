import axios from "axios";
import React, { useState } from "react";
import {Modal, Button, Form, Row, Col, Alert} from 'react-bootstrap';
import './order-component.css'
import OrderStatus from "../../../util/OrderStatus";
import convertMapToString from "../../../util/convertMapToString";

export default function OrderComponent(props){

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
    const[orderNumber, setOrderNumber] = useState("");
    const productList = new Map([]);

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

        let orderItem = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone.toString(),
            productList: convertMapToString(productList),
            rentalTime: rentalTimeHours + " h " + rentalTimeDays +" zile",
            status: OrderStatus.PENDING
        }
        await axios
            .post("http://localhost:8080/v1/api/order", orderItem)
            .then(function(response){
                    setOrderNumber(response.data.id);
                    setSuccesMessage(true);
                    console.log(response.data);
            })
            .catch(function (error) {
                if (error.response) {
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                }});
    }

    return(
        <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton>
                <Modal.Title>Formular de închiriere</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {succesMessage && <Alert variant="success">
                    Comanda dvs cu numărul {orderNumber} a fost înregistrată cu succes!
                </Alert>}
                <Form id="order-form" onSubmit={handleSubmit}>
                    <Row className="mb-1">
                        <Form.Group as={Col} controlId="formGridLastName">
                            <Form.Label>Nume</Form.Label>
                            <Form.Control type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required/>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridFirstName">
                            <Form.Label>Prenume</Form.Label>
                            <Form.Control type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required/>
                        </Form.Group>
                    </Row>
                    <Form.Group as={Col} className="mb-1" controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                    </Form.Group>
                    <Form.Group as={Col} className="mb-1" controlId="formGridPhone">
                            <Form.Label>Telefon</Form.Label>
                            <Form.Control type="number" value={phone} onChange={(e) => setPhone(e.target.value)} required/>
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
                        <Form.Group as={Col} controlId="formGridRentalTime">
                            <Form.Control type="number" placeholder="Ore" min="0" max="8" value={rentalTimeHours} onChange={(e) => setRentalTimeHours(e.target.value)} required/>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridConfirmPassword">
                            <Form.Control type="number" placeholder="Zile" min="0" max="4" value={rentalTimeDays} onChange={(e) => setRentalTimeDays(e.target.value)} required/>
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