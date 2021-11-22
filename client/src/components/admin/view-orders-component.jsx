import React, { useEffect, useState } from "react";
import {Table, Form, FormControl, Alert} from 'react-bootstrap';
import axios from "axios";

function ViewOrdersComponent(){
    const[ordersToShow, setOrdersToShow] = useState([]);
    const[errorMessage, setErrorMessage] = useState(false);

    let ordersList = ordersToShow.map(
        (order) =>
        <tr style={{cursor:"pointer"}} key={order.id}>
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
        const orders = ordersToShow.filter((order) => {
            return order.id.toString().includes(event.target.value);
        });
        setOrdersToShow(orders);
    }

    useEffect(() =>{
        const interval = setInterval(() => {
            axios
            .get("http://localhost:8080/v1/api/orders")
            .then(function(response){
                setOrdersToShow(response.data);
                console.log(response.data);
                setErrorMessage(false)})
            .catch(function(error){
                setErrorMessage(true);
                if(error.response) {
                    console.log(error.response.data);
                }
            });
        }, 2000);
        return () => clearInterval(interval);
    },[])
    return(
        <>
        {errorMessage && <Alert variant="danger">Serverul nu răspunde. Contactați departamentul IT!</Alert>}
        <Form className="d-flex">
        <FormControl type="search" placeholder="Search" className="me-2" aria-label="Search" onChange={onSearch}/>
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
        </>
    )
}

export default ViewOrdersComponent;