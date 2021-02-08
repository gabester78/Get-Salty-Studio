import React from "react";
import Heather from "../images/Heather.png"
import Shannon from "../images/Shannon.png"
import Celena from "../images/Celena.png"
import Becca from "../images/Becca.png"
import teal_border from "../images/teal_border.svg"
import blue_border from "../images/blue_border.svg"

const About = () => {
  return (
        <main>
          <div className="about_container">
            <h1 className="heading">About Us</h1>
            <section id="top" className="profile_container"> 
              <img className="headshot" src={Shannon} alt="headshot of Shannon"/>
              <div className="profile">
                <h1 className="profile_h1">Shannon - Owner &amp; Esthetician</h1>
                <img className="border" src={teal_border} alt="wavy teal line graphic" />
                <p>Shannon Nolan, Licensed Esthetician since 1995. Specializing in Botanical Skincare, 
                  Rose Quartz Facials, &amp; teen acne. She is also a Certified Aromatherapist &amp; Certified Master 
                  Herbalist all of which is incorporated into her Holistic Skincare Practice. Shannon opened Get 
                  Salty Skincare Studio to not only create a relaxing one of a kind space for her clients, but to 
                  be able to provide an affordable alternative &amp; complimentary therapy within her studio for guests 
                  with a variety of breathing &amp; skin conditions. The idea of the Salt Room stemmed from wanting 
                  to help her Father who has COPD &amp; her son who has terrible allergies. She wanted to have a place 
                  to share the benefits that the salt room provides for them with her family of clients as well. 
                </p>
              </div>
            </section>
            <section className="profile_container">
              <img className="headshot2" src={Heather} alt="headshot of Heather"/>
              <div className="profile">
                <h1 className="profile_h1">Heather - Licensed Massage Therapist</h1>
                <img className="border" src={blue_border} alt="wavy teal line graphic" />
                <p>Heather Schultz, licensed massage therapist, graduated from Chicago’s The SOMA 
                  institute: School of Clinical Massage Therapy, in 2002. Working with chiropractors 
                  and naprapaths for most of her career, specializing in therapeutic techniques. 
                </p>
              </div>
            </section>            
            <section className="profile_container">
              <img className="headshot" src={Becca} alt="headshot of Becca"/>
              <div className="profile">
                <h1 className="profile_h1">Becca - Licensed Massage Therapist</h1>
                <img className="border" src={teal_border} alt="wavy teal line graphic" />
                <p>Becca graduated 
                  from Cortiva massage school in 2014 &amp; is currently finishing her degree to be a Physical Therapist Assistant 
                  from McHenry County College. Her massage technique ranges from Swedish Massage to firm pressure. As an introductory 
                  offer, Sunday Salty Massage is $80 for 45 mins of Halotherapy with Becca. Also check out her salty stretch (45mins in Salt 
                  Room) &amp; Hot Stone Salty massage coming soon to Get Salty on Sundays. Details on those new services will be posted soon. 
                  She looks forward getting Salty with you on Sundays! 
                </p>
              </div>
            </section>
            <section className="profile_container">
              <img className="headshot2" src={Celena} alt="headshot of Celena"/>
              <div className="profile">
                <h1 className="profile_h1">CeLena - Licensed Nail Technician</h1>
                <img className="border" src={blue_border} alt="wavy teal line graphic" />
                <p>CeLena provides the highest level of customer service. 
                  She is a perfectionist and recommends the best colors, designs, and treatments for you. 
                  She will make your nails and toes look and feel amazing! Specializing in the safe Mani-Pedi, 
                  new files, &amp; pedicure liners are used, ensuring a safe experience for all. CeLena has quickly 
                  become one of the leading nail technicians in the area.
                </p>
              </div>
            </section>
          </div>
        </main>
  );
};

export default About;