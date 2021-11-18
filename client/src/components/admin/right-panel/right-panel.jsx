import React from "react";
import './right-panel.css';
import ViewOrdersComponent from "../view-orders-component";

function RightPanelComponent(){
    return(
        <div id="right-panel">
           <h1>Comenzi</h1>
           <ViewOrdersComponent/>
        </div>
    )

}

export default RightPanelComponent;