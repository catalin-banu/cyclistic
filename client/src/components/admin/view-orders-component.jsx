import React from "react";
import Table from 'react-bootstrap/Table';

const orders = [
    {
        lastName:"Popescu",
        firstName: "Ion",
        orderNO: "0001",
        email:"popescuion@mail.com",
        phone:"0756378928",
        product: "Bicicleta de oras",
        rentalTime:{
            hours: 1,
            days: 0,
        },
        status: "in asteptare"
    },
    {
        lastName:"Ionescu",
        firstName: "Vasile",
        orderNO: "0002",
        email:"vasi_pup@gmail.com",
        phone:"0754578928",
        product: "Bicicleta de munte",
        rentalTime:{
            hours: 0,
            days: 1,
        },
        status: "in asteptare"
    },
    {
        lastName:"Georgescu",
        firstName: "Cristi",
        orderNO: "0003",
        email:"cristi_g@yahoo.com",
        phone:"0754578928",
        product: "Bicicleta electrica",
        rentalTime:{
            hours: 6,
            days: 0,
        },
        status: "in asteptare"
    }
]

function ViewOrdersComponent(){

    let ordersList = orders.map(
        (order) =>
        <tr onClick={() => alert("Comanda " + order.orderNO)}>
            <td>{orders.indexOf(order) + 1}</td>
            <td>{order.orderNO}</td>
            <td>{order.lastName}</td>
            <td>{order.firstName}</td>
            <td>{order.email}</td>
            <td>{order.phone}</td>
            <td>{order.product}</td>
            <td>{order.rentalTime.hours + " h " + order.rentalTime.days +" zile"}</td>
            <td>{order.status}</td>
        </tr>
    )
    return(
        <Table striped bordered hover responsive>
            <thead>
                <tr>
                    <th>#</th>
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
    )
}

export default ViewOrdersComponent;