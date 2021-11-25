import React from "react";
import './contact-component.css'

function ContactComponent(){
    return(
        <div id="contact">
            <div className="contact-wrapper">
                <h3>Contact</h3>
                <p>
                    Adresă: Strada Republicii, Nr. 5, Brașov <br/>
                    Email: office@cyclistic.com <br/>
                    Telefon: 0741234567 <br/>
                    Program de lucru: Luni - Duminică <br/>
                    Interval orar: 08:00 - 20:00 
                </p>
            </div>
        </div>
    )
}

export default ContactComponent