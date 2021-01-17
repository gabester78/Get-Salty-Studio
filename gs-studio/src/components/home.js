import React from "react";
import Hero_Image from "../images/Hero_Image.png"
import teal_border from "../images/teal_border.svg"
import blue_border_short from "../images/blue_border_short.svg"

const Home = () => {
  return (
        <main> 
          <div className="main_container">
            <img src={Hero_Image} alt="Woman relaxing during halotherapy"/>
            <div>
              <h1>How does halotherapy (dry salt therapy) work?</h1>
              <img className="borders" src={teal_border} alt="wavy teal line graphic"/>
              <p>Halotherapy helps to draw the impurities out of the air-way, both upper and lower respiratory systems. 
                It stimulates the body’s internal processes for cleansing and removing build-up of foreign particles. 
                Halotherapy opens bronchial tubes in the lungs, reduces inflammation in the sinuses and strengthens 
                respiratory function by clearing moisture and breaking up mucus. </p>
              <h2>What are the benefits? What does it treat?</h2>
              <img className="borders" src={teal_border} alt="wavy teal line graphic"/>
              <div className="cardcontainer">
                <div className="cards">
                  <h4>Skin</h4>
                  <img className="blue_borders" src={blue_border_short} alt="wavy teal line graphic"/>
                  <ul>
                    <li>• Acne</li>
                    <li>• Psoriasis</li>
                    <li>• Eczema</li>
                    <li>• Dermatitis </li>
                  </ul>
                </div>
                <div className="cards">
                  <h4>Health</h4>
                  <img className="blue_borders" src={blue_border_short} alt="wavy teal line graphic"/>
                  <ul>
                    <li>• Allergies</li>
                    <li>• Asthma</li>
                    <li>• Cold/Flu</li>
                    <li>• Emphysema</li>
                    <li>• COPD</li>
                  </ul>
                </div>
                <div className="cards">
                  <h4>General Wellness</h4>
                  <img className="blue_borders" src={blue_border_short} alt="wavy teal line graphic"/>
                  <ul>
                    <li>• Stress</li>
                    <li>• Anxiety</li>
                    <li>• Fatigue</li>
                    <li>• Headaches</li>
                  </ul>
                </div>
              </div>
              <h2>Enjoy some of our other spa services!</h2>
              <img className="borders" src={teal_border} alt="wavy teal line graphic"/>
              <div className="cardcontainer">
                <div className="cards">
                  <ul>
                    <li>• Waxing</li>
                    <li>• Back Treatments</li>
                    <li>• Reflexology</li>
                    <li>• Paraffin Treatment</li>
                  </ul>
                </div>
                <div className="cards">
                  <ul>
                    <li>• Cold Stone Therapy</li>
                    <li>• Acupressure</li>
                    <li>• Facials</li>
                    <li>• Fitness for your face</li>
                  </ul>
                </div>
                <div className="cards">
                  <ul>
                    <li>• Massage Therapy</li>
                    <li>• LED Therapy</li>
                    <li>• Nail Services</li>
                  </ul>
                </div>
              </div>
              <p className="testimony">I am always searching for the highest quality ingredients + products to continue fulfilling 
                all of your Holistic esthetic needs. My goal is to help you <span className="blue"> relax, unwind, + revitalize</span> your 
                skin allowing you to look as young as you feel!</p>
              <h4>Shannon - Owner &amp; Esthetician</h4>
            </div>
          </div>
        </main>
  );
};

export default Home;