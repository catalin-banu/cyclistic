import React from "react";
import './admin-component.css'
import LeftPanelComponent from "../left-panel/left-panel";
import RightPanelComponent from "../right-panel/right-panel";

function AdminComponent(){
    return(
        <div id="admin">
            <LeftPanelComponent/>
            <RightPanelComponent/>
        </div>
    )
}

export default AdminComponent;