import React from "react";
import './main-component.css';
import NavbarComponent from "../granular-components/navbar";
import CarouselComponent from "../granular-components/carousel/carousel";
import ProductsListComponent from "../products-list-component/products-list";
import PricesListComponent from "../prices-list-component/prices-list";
import ContactComponent from "../contact-component/contact-component";

function MainComponent(){
    return(
        <div className="welcome-page-container">
            <NavbarComponent />
            <div className="rest-of-the-page">
                <CarouselComponent/>
                <ProductsListComponent/>
                <PricesListComponent/>
                <ContactComponent/>
                <div className="rights">
                    <span>©2021 office@cyclistic.com. All Rights Reserved</span>
                </div>
            </div>
        </div>
    )
}

export default MainComponent