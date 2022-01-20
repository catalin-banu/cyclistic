import React, { useEffect, useState } from "react";
import { Table, Alert } from "react-bootstrap";
import axios from "axios";
import ViewOrderDetails from "./view-order-details";

function OrdersTable() {
  const [ordersToShow, setOrdersToShow] = useState([]);
  const [errorMessage, setErrorMessage] = useState(false);
  const [orderView, setOrderView] = useState("");
  const [orderModalShow, setOrderModalShow] = useState(false);
  const [numberOfOrders, setNumberOfOrders] = useState(0);

  const getTotalComands = () => {
    setNumberOfOrders(ordersToShow.length);
  };

  let ordersList = ordersToShow.map((order) => (
    <tr
      key={order.id}
      onClick={() => {
        setOrderView(order);
        setOrderModalShow(true);
      }}
    >
      <td>{order.id}</td>
      <td>{order.lastName}</td>
      <td>{order.firstName}</td>
      <td>{order.phone}</td>
      <td>
        <p>{order.productList}</p>
      </td>
      <td>{order.rentalTime}</td>
      <td>{order.date}</td>
      <td>{order.status}</td>
      <td>{order.price} Ron</td>
    </tr>
  ));

  useEffect(() => {
    const recevingData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/v1/api/orders");
        const responseData = await response.data;
        setOrdersToShow(responseData);
      } catch (error) {
        setErrorMessage(true);
        console.log(error.response);
      }
    };
    recevingData();
    getTotalComands();
  }, [ordersToShow]);

  return (
    <>
      {errorMessage && (
        <Alert variant="danger">
          A apărut o eroare în comunicarea cu serverul. Contactați departamentul
          IT!
        </Alert>
      )}
      <div className="order-table">
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Nr. Comandă</th>
              <th>Nume</th>
              <th>Prenume</th>
              <th>Telefon</th>
              <th>Produs</th>
              <th>Interval închiriere</th>
              <th>Data</th>
              <th>Status</th>
              <th>Preț</th>
            </tr>
          </thead>
          <tbody>{ordersList}</tbody>
        </Table>
      </div>
      <div className="statistics-container">
        <span className="statistics-text">Numărul total de comenzi: </span>
        <span className="statistics-number">{numberOfOrders}</span>
      </div>
      <ViewOrderDetails
        order={orderView}
        show={orderModalShow}
        onHide={() => setOrderModalShow(false)}
      />
    </>
  );
}

export default OrdersTable;
