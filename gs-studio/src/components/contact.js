import React from "react";
import phone from "../images/phone.svg";
import envelope from "../images/envelope-regular.svg";
import location from "../images/map-marker-alt-solid.svg";

const Contact = () => {
  return (
    <main>
      <section>
        <h1 className="contact_heading">
          Please set your appointment today! We do not accept walk-ins.
        </h1>
        <article className="contact_container">
          <div className="contact_info">
            <a
              href="https://square.site/book/QCJ7MZTW2Q20S/get-salty-skincare-studio-llc-johnsburg-il"
              target="_blank"
              rel="noreferrer"
            >
              <h5>
                Click here to schedule a Halotherapy or Sauna Pod appointment.
              </h5>
            </a>
            <div className="divider_container">
              <h5 className="divider">Or</h5>
              <span className="line"></span>
            </div>
            <h5>Click below to call or email us at:</h5>
            <div className="contact">
              <img className="icons" src={phone} alt="icon of a phone" />
              <a href="tel:8153072139">
                <h5>815-307-2139</h5>
              </a>
            </div>
            <div className="contact">
              <img
                id="email_icon"
                className="icons"
                src={envelope}
                alt="Icon of an envelope"
              />
              <a
                id="email_address"
                href="mailto:contact@getsaltystudio.com"
                target="_blank"
                rel="noreferrer"
              >
                <p>contact@getsaltystudio.com</p>
              </a>
            </div>
            <div className="contact">
              <img className="icons" src={location} alt="location icon" />
              <h5>4318 W. Crystal Lake Rd. Unit B McHenry, IL 60050</h5>
            </div>
          </div>
          <div className="map_container">
            <iframe
              title="studioMap"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1474.5516391484023!2d-88.28458101638036!3d42.340321399290744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880f7100402fe417%3A0x6c3753cf5d6a1f94!2s4318%20W%20Crystal%20Lake%20Rd%2C%20McHenry%2C%20IL%2060050!5e0!3m2!1sen!2sus!4v1637185281762!5m2!1sen!2sus"
              width="400"
              height="300"
              allowfullscreen=""
              loading="lazy"
            ></iframe>
            {/* <img className="map" src={map} alt="Map of studio location" />
                <a href="https://www.google.com/maps/dir//2020+Johnsburg+Rd,+Johnsburg,+IL+60051/@42.3809965,-88.2398258,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x880f79fd681c9a4b:0x405f71cf2fb406b2!2m2!1d-88.2376371!2d42.3809926" target="_blank" rel="noreferrer"><p>Need directions? Click here!</p></a> */}
          </div>
        </article>

        <a
          className="gabe"
          href="http://gabrielromerodesign.com/"
          target="_blank"
          rel="noreferrer"
        >
          Design and web development by GabrielRomeroDesign.com
        </a>
      </section>
    </main>
  );
};

export default Contact;
