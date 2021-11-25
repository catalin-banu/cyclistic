import React from "react";
import './admin-component.css'
import LeftPanelComponent from "../left-panel/left-panel";
import OrdersTable from "../orders-table";

function AdminComponent(){
    return(
        <div id="admin">
            <LeftPanelComponent/>
            <div id="right-panel">
                <h1>Comenzi</h1>
                <OrdersTable/>
            </div>
        </div>
    )
}

export default AdminComponent;