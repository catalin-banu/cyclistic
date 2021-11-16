import React from "react";
import "./prices-list.css";
import Badge from 'react-bootstrap/Badge';
import Table from 'react-bootstrap/Table';

function PricesListComponent(){
    return(
        <div id="prices">
        <div className="prices-wrapper">
             <h1 className="title">
                 <Badge pill bg="dark" text="light">Prețuri</Badge>
            </h1>
            <Table responsive="lg">
                <thead>
                    <tr>
                        <th>Produs</th>
                        <th>O oră</th>
                        <th>O zi </th>
                        <th>Două zile</th>
                        <th>Trei zile</th>
                        <th>De la patru zile în sus</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Bicicletă de oraș</td>
                        <td>10 Ron</td>
                        <td>80 Ron</td>
                        <td>150 Ron</td>
                        <td>200 Ron</td>
                        <td>250 Ron</td>
                    </tr>
                    <tr>
                        <td>Bicicletă de munte</td>
                        <td>20 Ron</td>
                        <td>150 Ron</td>
                        <td>250 Ron</td>
                        <td>350 Ron</td>
                        <td>450 Ron</td>
                    </tr>
                    <tr>
                        <td>Bicicletă electrică</td>
                        <td>100 Ron</td>
                        <td>280 Ron</td>
                        <td>500 Ron</td>
                        <td>700 Ron</td>
                        <td>1000 Ron</td>
                    </tr>
                    <tr>
                        <td>Trotinetă electrică</td>
                        <td>10 Ron</td>
                        <td>80 Ron</td>
                        <td>150 Ron</td>
                        <td>200 Ron</td>
                        <td>250 Ron</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    </div>
    )
}

export default PricesListComponent;