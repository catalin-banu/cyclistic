import React from "react";
import './products-list.css'
import Badge from 'react-bootstrap/Badge'
import ProductCardComponent from "../granular-components/product-card/product-card";
import CityBikeImage from "../../../resources/city-bike.jpg"
import MtbBikeImage from "../../../resources/mtb-bike.jpg"
import E_BikeImage from "../../../resources/e-bike.png"
import ElectricScooterImage from "../../../resources/electric-scooter.jpg"

function ProductsListComponent(){
    return(
        <div id="products">
            <div className="products-wrapper">
                 <h1 className="title">
                     <Badge pill bg="light" text="dark">Ia-tă produsele din care poți alege</Badge>
                </h1>
                 <div className="products-list">
                    <ProductCardComponent title="Bicicletă de oraș" image={CityBikeImage} text="Bicicleta de oraș este întotdeauna o alegere inspirată atunci când vrei să explorezi orașul pe două roți."/>
                    <ProductCardComponent title="Bicicletă de munte" image={MtbBikeImage} text="Dacă dorești o plimbare relaxantă pe cărările munților, MTB-urile sunt cea mai bună opțiune."/>
                    <ProductCardComponent title="Bicicletă electrică" image={E_BikeImage} text="Noua senzație din domeniu este potrivită pentru cei care vor să exploreze cărările munților dar nu au o condiție fizică prea bună."/>
                    <ProductCardComponent title="Trotinetă electrică" image={ElectricScooterImage} text="Pentru cei care nu doresc să dea la pedale prin oraș, trotineta electrică este mereu o opțiune bună."/>
                 </div>  
            </div>
        </div>
    )
}

export default ProductsListComponent