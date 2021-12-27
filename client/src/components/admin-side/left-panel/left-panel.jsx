import React from "react";
import './left-panel.css';

import AdminIcon from "../../../resources/admin-icon.png";
import LogoutIcon from "../../../resources/logout.png";
import { useNavigate } from "react-router";

function LeftPanelComponent(){
    const navigate = useNavigate();

    function handleLogout(){
        navigate('/');
    }
    return(
        <div id="left-panel">
            <span className="panel-title">CYCLISTIC</span>
            <div className="admin-container">
                <img src={AdminIcon} alt="Admin Icon" className="admin-icon"/>
                <span className="role">Administrator</span>
            </div>
            <button  className="logout" onClick={handleLogout}>
                <img src={LogoutIcon} alt="Logout Icon" className="logout-icon"/>
                <span className="logout-text">Deconectare</span>
            </button>
        </div>
    )

}

export default LeftPanelComponent;