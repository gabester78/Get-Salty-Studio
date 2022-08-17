import React from "react";
import Heather from "../images/Heather-HS.png";
import Shannon from "../images/Shannon-HS.png";
import Roland from "../images/Roland-HS.png";
import Malorie from "../images/Malorie-HS.png";
import McKayla from "../images/McKayla-HS.png";
import teal_border from "../images/teal_border.svg";
import blue_border from "../images/blue_border.svg";

const About = () => {
  return (
    <main>
      <div className="about_container">
        <h1 className="heading">About Us</h1>
        <section id="top" className="profile_container">
          <img className="headshot" src={Shannon} alt="headshot of Shannon" />
          <div className="profile">
            <h1 className="profile_h1">Shannon - Owner &amp; Esthetician</h1>
            <img
              className="border"
              src={teal_border}
              alt="wavy teal line graphic"
            />
            <p>
              Shannon Nolan, Licensed Esthetician since 1995. Specializing in
              Botanical Skincare, Rose Quartz Facials, &amp; teen acne. She is
              also a Certified Aromatherapist &amp; Certified Master Herbalist
              all of which is incorporated into her Holistic Skincare Practice.
              Shannon opened Get Salty Skincare Studio to not only create a
              relaxing one of a kind space for her clients, but to be able to
              provide an affordable alternative &amp; complimentary therapy
              within her studio for guests with a variety of breathing &amp;
              skin conditions. The idea of the Salt Room stemmed from wanting to
              help her Father who has COPD &amp; her son who has terrible
              allergies. She wanted to have a place to share the benefits that
              the salt room provides for them with her family of clients as
              well. To schedule call/text directly at{" "}
              <a href="tel:8153072139">815-307-2139</a>
            </p>
          </div>
        </section>
        <section className="profile_container">
          <img className="headshot2" src={McKayla} alt="headshot of McKayla" />
          <div className="profile">
            <h1 className="profile_h1">McKayla - Licensed Esthetician</h1>
            <img
              className="border"
              src={blue_border}
              alt="wavy teal line graphic"
            />
            <p>
              McKayla Sellek, Licensed Esthetician, graduated from International
              Skin Beauty Academy in Schaumburg in Spring of 2022. The services
              she provides are facials, eyebrow waxing and tinting, lash lifts
              and tinting, Cold Stone Therapy, and more to come. To schedule
              call/ text directly at <a href="tel:8156797534">815-679-7534</a>
            </p>
          </div>
        </section>
        <section className="profile_container">
          <img className="headshot" src={Heather} alt="headshot of Heather" />
          <div className="profile">
            <h1 className="profile_h1">Heather - Licensed Massage Therapist</h1>
            <img
              className="border"
              src={teal_border}
              alt="wavy teal line graphic"
            />
            <p>
              Heather Schultz, licensed massage therapist, graduated from
              Chicago's The SOMA institute: School of Clinical Massage Therapy,
              in 2002. Before joining Get Salty, most of her 20 year career has
              been working with chiropractors and naprapaths. She specializes in
              therapeutic techniques including; deep tissue, myofascial, trigger
              point, Swedish, hot stone and prenatal massage. To schedule call/
              text directly at <a href="tel:8158615337">815-353-8088</a>
            </p>
          </div>
        </section>
        <section className="profile_container">
          <img className="headshot2" src={Malorie} alt="headshot of Malorie" />
          <div className="profile">
            <h1 className="profile_h1">Malorie - Licensed Massage Therapist</h1>
            <img
              className="border"
              src={blue_border}
              alt="wavy teal line graphic"
            />
            <p>
              Malorie Smale, licensed massage therapist, graduated from Cortiva
              Institute in 2006 and is certified in myofascial release and
              prenatal massage. Malorie uses a carbonation of therapeutic and
              relaxation techniques acquired over her 16 years of experience and
              training to provide soothing customized massage treatments for
              every client. To schedule call/text directly at{" "}
              <a href="tel:8158615337">815-861-5337</a>
            </p>
          </div>
        </section>
        <section className="profile_container">
          <img className="headshot" src={Roland} alt="headshot of Roland" />
          <div className="profile">
            <h1 className="profile_h1">Roland - Licensed Massage Therapist</h1>
            <img
              className="border"
              src={teal_border}
              alt="wavy teal line graphic"
            />
            <p>
              Roland, licensed massage therapist, graduated from Elgin Community
              College in 2014 and has practiced ever since. He specializes in
              Swedish, deep tissue, trigger point, and prenatal massage
              &#40;soon to be certified in myofascial and stretching&#41;.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default About;
