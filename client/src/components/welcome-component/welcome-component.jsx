import React from "react";
import './welcome-component.css';
import NavbarComponent from "../granular-components/navbar";
import CarouselComponent from "../granular-components/carousel/carousel";
import ProductsPresentationComponent from "../products-presentation-compononent/products-presentation";
import PricesListComponent from "../prices-list-component/prices-list";
import ContactComponent from "../contact-component/contact-component";

function WelcomeComponent(){
    return(
        <div className="welcome-page-container">
            <NavbarComponent />
            <div className="rest-of-the-page">
                <CarouselComponent/>
                <ProductsPresentationComponent />
                <PricesListComponent />
                <ContactComponent />
                <div className="rights">
                    <span>©2021 închiriază@office.com. All Rights Reserved</span>
                </div>
            </div>
        </div>
    )
}

export default WelcomeComponent