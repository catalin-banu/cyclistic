import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import CityBikeImage from "../../../resources/city-bike-wallpaper.jpg";
import MTBImage from "../../../resources/mountain-bike-wallpaper.jpg";
import ScouterImage from "../../../resources/electric-scooter.jpg";

import './carousel.css'

export default function CarouselComponent(){
    return(
        <Carousel className="carousel-container" fade>
            <Carousel.Item className="carousel-item" interval={3000}>
                <img
                    className="image"
                    src={CityBikeImage}
                    alt="City bike slide"/>
                <Carousel.Caption className="carousel-caption-city">
                    <p className="city-bike-text">Ce zici de o <br/> plimbare cu bicicleta prin oraș?</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="carousel-item" interval={3000}>
                <img
                    className="image"
                    src={MTBImage}
                    alt="Mountain bike slide"/>
                <Carousel.Caption className="carousel-caption-mountain">
                    <p className="mountain-bike-text">Sau de o aventură <br/>extraordinară pe potecile munților?</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="carousel-item" interval={3000}>
                <img
                    className="image"
                    src={ScouterImage}
                    alt="Mountain bike slide"/>
                <Carousel.Caption className="carousel-caption-scooter">
                    <p className="mountain-bike-text">Sau încearcă o trotinetă electrică!</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}