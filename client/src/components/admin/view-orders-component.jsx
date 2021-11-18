import React from "react";
import Table from 'react-bootstrap/Table';

function ViewOrdersComponent(){
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
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@twitter</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    <td>Thornton</td>
                    <td>Thornton</td>
                    <td>Thornton</td>
                    <td>@twitter</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Thornton</td>
                    <td>@twitter</td>
                    <td>Thornton</td>
                    <td>Thornton</td>
                    <td>Thornton</td>
                    <td>Thornton</td>
                    <td>@twitter</td>
                </tr>
            </tbody>
        </Table>
    )
}

export default ViewOrdersComponent;