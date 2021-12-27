import React, { useEffect, useState } from "react";
import {Table, Alert} from 'react-bootstrap';
import axios from "axios";
import ViewOrderDetails from "./view-order-details";

function OrdersTable(){
    const[ordersToShow, setOrdersToShow] = useState([]);
    const[errorMessage, setErrorMessage] = useState(false);
    const[orderView, setOrderView] = useState('');
    const[orderModalShow, setOrderModalShow] = useState(false);

    let ordersList = ordersToShow.map((order) =>
        <tr key={order.id} onClick={() =>{ setOrderView(order); setOrderModalShow(true)}}>
            <td>{order.id}</td>
            <td>{order.lastName}</td>
            <td>{order.firstName}</td>
            <td>{order.phone}</td>
            <td><p>{order.productList}</p></td>
            <td>{order.rentalTime}</td>
            <td>{order.status}</td> 
            <td>{order.price} Ron</td> 
        </tr>
    )

    useEffect(() => {
        const recevingData = async() => {
            try{
                const response = await axios.get("http://localhost:8080/v1/api/orders");
                const responseData = await response.data;
                setOrdersToShow(responseData);
            }catch(error){
                setErrorMessage(true);
                console.log(error.response);
            }
        }
        recevingData();
    },[ordersToShow]);

    return(
        <>
        {errorMessage && <Alert variant="danger">A apărut o eroare în comunicarea cu serverul. Contactați departamentul IT!</Alert>}
        <Table striped bordered hover responsive>
            <thead>
                <tr>
                    <th>Nr. Comenzii</th>
                    <th>Nume</th>
                    <th>Prenume</th>
                    <th>Telefon</th>
                    <th>Produs</th>
                    <th>Interval închiriere</th>
                    <th>Status</th>
                    <th>Pret</th>
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

export default OrdersTable;