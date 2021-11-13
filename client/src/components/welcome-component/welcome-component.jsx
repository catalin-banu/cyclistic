import React from "react";
import './welcome-component.css';
import NavbarComponent from "../granular-components/navbar";
import CarouselComponent from "../granular-components/carousel/carousel";

function WelcomeComponent(){
    return(
        <div className="welcome-page-container">
            <NavbarComponent />
            <div className="rest-of-the-page">
                <CarouselComponent/>
            </div>
        </div>
    )
}

export default WelcomeComponent