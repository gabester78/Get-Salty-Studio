import React from "react";
import Heather from "../images/Heather.png"
import Shannon from "../images/Shannon.png"
import Celena from "../images/Celena.png"
import teal_border from "../images/teal_border.svg"
import blue_border from "../images/blue_border.svg"

const About = () => {
  return (
        <main>
          <div className="about_container">
            <section id="top" className="profile_container">
              <img className="headshot" src={Shannon} alt="headshot of Shannon"/>
              <div className="profile">
                <h1>Shannon - Owner &amp; Esthetician</h1>
                <img className="border" src={teal_border} alt="wavy teal line graphic" />
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh 
                  euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad 
                  minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut 
                  aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in
                </p>
              </div>
            </section>
            <section className="profile_container">
              <img id="heather" className="headshot" src={Heather} alt="headshot of Heather"/>
              <div className="profile">
                <h1>Heather - Licensed  Massage Therapist</h1>
                <img className="border" src={blue_border} alt="wavy teal line graphic" />
                <p>Heather Schultz, licensed massage therapist, graduated from Chicago’s, The SOMA 
                  institute: School of Clinical Massage Therapy, in 2002. Working with chiropractors 
                  and naprapaths for most of her career, specializing in therapeutic techniques. 
                </p>
              </div>
            </section>
            <section className="profile_container">
              <img className="headshot" src={Celena} alt="headshot of Celena"/>
              <div className="profile">
                <h1>CeLena - Licensed Nail Technician</h1>
                <img className="border" src={teal_border} alt="wavy teal line graphic" />
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