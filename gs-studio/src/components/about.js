import React from "react";
import Shannon from "../images/Shannon-Sign.jpg";
import teal_border from "../images/teal_border.svg";

const About = () => {
  return (
    <main>
      <div className="about_container">
        <h1 className="heading">About Us</h1>
        <section id="top" className="profile_container">
          <img className="headshot" src={Shannon} alt="headshot of Shannon" />
          <div className="profile">
            <h1 className="profile_h1">Shannon - Owner, Cosmetologist, &amp; Esthetician</h1>
            <img
              className="border"
              src={teal_border}
              alt="wavy teal line graphic"
            />
            <p>
              Shannon Nolan, Licensed Esthetician since 1995. Specializing in
              Botanical Skincare, Rose Quartz Facials, Brazilians, &amp; teen
              acne. She is also a Certified Aromatherapist &amp; Certified
              Master Herbalist all of which is incorporated into her Holistic
              Skincare Practice. Shannon opened Get Salty Skincare Studio to not
              only create a relaxing one of a kind space for her clients, but to
              be able to provide an affordable alternative &amp; complimentary
              therapy within her studio for guests with a variety of breathing
              &amp; skin conditions. The idea of the Salt Room stemmed from
              wanting to help her Father who has COPD &amp; her son who has
              terrible allergies. She wanted to have a place to share the
              benefits that the salt room provides for them with her family of
              clients as well. To schedule call/text directly at{" "}
              <a href="tel:8153072139">815-307-2139</a>.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default About;
