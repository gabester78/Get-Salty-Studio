import React from "react";
import phone from "../images/phone.svg"
import envelope from "../images/envelope-regular.svg"
import map from "../images/map.png"
import location from "../images/map-marker-alt-solid.svg"

const Contact = () => {
  return (
        <main>
          <section>
            <h1 className="contact_heading">Please call or email us to set your appointment today! We do not accept walk-ins.</h1>
            <article className="contact_container">
              <div className="contact_info">
                <h5>Click below to call or email us at:</h5>
                <div className="contact">
                  <img className="icons" src={phone} alt="icon of a phone" />
                  <a href="tel:8153072139"><h4>815-307-2139</h4></a>
                </div>
                <div className="contact">
                  <img id="email_icon" className="icons" src={envelope} alt="Icon of an envelope" />
                  <a id="email_address" href="mailto:contact@getsaltystudio.com" target="_blank" rel="noreferrer"><p>contact@getsaltystudio.com</p></a>
                </div>
                <div className="contact">
                  <img className="icons" src={location} alt="location icon" />
                  <h5>2020 Johnsburg Rd, Johnsburg, IL</h5>
                </div>
              </div>
              <div className="map_container">
                <img className="map" src={map} alt="Map of studio location" />
                <a href="https://www.google.com/maps/dir//2020+Johnsburg+Rd,+Johnsburg,+IL+60051/@42.3809965,-88.2398258,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x880f79fd681c9a4b:0x405f71cf2fb406b2!2m2!1d-88.2376371!2d42.3809926" target="_blank" rel="noreferrer"><p>Need directions? Click here!</p></a>
              </div>
            </article>
            <a className="gabe" href="http://gabrielromerodesign.com/" target="_blank" rel="noreferrer">Design and web development by GabrielRomeroDesign.com</a>
          </section>
        </main>
  );
};

export default Contact;