import React, { useEffect, useState } from "react";
import {Table, Form, FormControl, Alert} from 'react-bootstrap';
import axios from "axios";
import ViewOrderDetails from "./view-order-details/view-order-details";

function ViewOrdersComponent(){
    const[ordersToShow, setOrdersToShow] = useState([]);
    const[ordersListBackup, setOrdersListBackup] = useState([]);
    const[errorMessage, setErrorMessage] = useState(false);
    const[orderView, setOrderView] = useState('');
    const[orderModalShow, setOrderModalShow] = useState(false);

    let ordersList = ordersToShow.map((order) =>
        <tr key={order.id} onClick={() =>{ setOrderView(order); setOrderModalShow(true)}}>
            <td>{order.id}</td>
            <td>{order.lastName}</td>
            <td>{order.firstName}</td>
            <td>{order.email}</td>
            <td>{order.phone}</td>
            <td><p>{order.productList}</p></td>
            <td>{order.rentalTime}</td>
            <td>{order.status}</td> 
        </tr>
    )

    function onSearch(event){
        if(event.target.value !== ""){
            const orders = ordersToShow.filter((order) => {
                return order.id.toString().includes(event.target.value);
            });
            setOrdersToShow(orders);
        } else setOrdersToShow(ordersListBackup);
    }

    useEffect(() => {
        const recevingData = async() => {
            try{
                const response = await axios.get("http://localhost:8080/v1/api/orders");
                const responseData = await response.data;
                setOrdersToShow(responseData);
                setOrdersListBackup(responseData);
            } catch(error){
                setErrorMessage(true);
                console.log(error.response.data);
            }
        }
        recevingData();
    },[]);

    return(
        <>
        {errorMessage && <Alert variant="danger">A apărut o eroare în comunicarea cu serverul. Contactați departamentul IT!</Alert>}
        <Form className="d-flex">
            <FormControl type="search" placeholder="Caută după numărul comenzii" className="mb-2" aria-label="Search" onChange={onSearch}/>
        </Form>
        <Table striped bordered hover responsive>
            <thead>
                <tr>
                    <th>Nr. Comenzii</th>
                    <th>Nume</th>
                    <th>Prenume</th>
                    <th>Email</th>
                    <th>Telefon</th>
                    <th>Produs</th>
                    <th>Interval inchiriere</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
               {ordersList}
            </tbody>
        </Table>
        <ViewOrderDetails order={orderView} show={orderModalShow} onHide={() => setOrderModalShow(false)}/>
        </>
    )
}

export default ViewOrdersComponent;