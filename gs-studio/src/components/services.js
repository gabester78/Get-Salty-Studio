import React from "react";
import { NavLink } from "react-router-dom";
import teal_border from "../images/teal_border.svg"
import blue_border from "../images/blue_border.svg"
import blue_border_short from "../images/blue_border_short.svg"

const Services = () => {
  return (
        <main>
          <nav className="services_navbar">
            <NavLink to="/services">
              <p>Fitness For The Face</p>
            </NavLink>
            <NavLink to="/services">
              <p>Waxing Services</p>
            </NavLink>
            <NavLink to="/services">
              <p>Treatments</p>
            </NavLink>
            <NavLink to="/services">
              <p>Massage Therapy</p>
            </NavLink>  
          </nav>
          <section className="services_container">
            <h1 className="services_heading">Our Services</h1>
              <h4 className="card_heading">Packages</h4>
              <img className="borders" src={teal_border} alt="wavy teal line graphic"/>
              <div className="card_container">
                <article className="cards">
                  <h5>Halotherapy <span className="blue_text">&#40;salt room&#41;</span></h5>
                  <img className="blue_borders" src={blue_border_short} alt="wavy teal line graphic"/>
                    <p><span className="bold_text">1</span> Halotherapy session <span className="blue_text">$25</span></p>
                    <div className="card_details">
                      <p><span className="bold_text">4</span> pack <span className="blue_text">$85</span></p>
                      <p><span className="bold_text">6</span> pack <span className="blue_text">$120</span></p>
                    </div>
                </article>
                <article className="cards">
                  <h5>The Sweet + <span className="blue_text">Salty</span></h5>
                  <img className="blue_borders" src={blue_border_short} alt="wavy teal line graphic"/>
                    <p><span className="bold_text">1</span> Hour <span className="blue_text">$25</span></p>
                    <p>Halotherapy session, Hand paraffin + Chair Massage</p>
                </article>
                <article className="cards">
                  <h5>Girls Night Out</h5>
                  <img className="blue_borders" src={blue_border_short} alt="wavy teal line graphic"/>
                    <p><span className="bold_text">2</span> Hours + <span className="bold_text">15</span> Mins <span className="blue_text">$100 pp</span></p>
                    <p>Halotherapy session, Oxygen treatment, LED light therapy, Hand paraffin + Chair Massage</p>
                </article>
              </div>
              <div className="card_container">
                <article className="cards">
                  <h5><span className="blue_text">Salty</span> Massage</h5>
                  <img className="blue_borders" src={blue_border_short} alt="wavy teal line graphic"/>
                    <p><span className="bold_text">1</span> Hour massage in salt room <span className="blue_text">$90</span> <span className="bold_text">&#40;Tuesday only&#41;</span></p>
                </article>
                <article className="cards">
                  <h5><span className="blue_text">Salty</span> Couples Massage</h5>
                  <img className="blue_borders" src={blue_border_short} alt="wavy teal line graphic"/>
                    <p><span className="bold_text">1</span> Hour massage in salt room <span className="blue_text">$80 pp</span> <span className="bold_text">&#40;First tuesday of the month&#41;</span></p>
                </article>
                <article className="cards">
                  <h5>The VIP Package</h5>
                  <img className="blue_borders" src={blue_border_short} alt="wavy teal line graphic"/>
                    <p><span className="bold_text">3</span> Hours <span className="blue_text">$160</span></p>
                    <p>Halotherapy session, Custom Facial, <span className="bold_text">1</span> Hour massage</p>
                </article>
              </div>
              <article>
                <h4>Facials</h4>
                <img className="article_border" src={teal_border} alt="wavy teal line graphic"/>
                <p>Add on a <span className="blue_text">hot stone hand + arm massage</span> to any facial <span className="blue_text">$10.</span></p>
                <p>All facials include a skin analysis, soothing aromatherapy shoulder, neck, face, 
                arm, hand massage and hand paraffin</p> 
              </article>
              <article>
                <h5>Rose Quartz Facial</h5>
                <img className="article_border" src={blue_border} alt="wavy teal line graphic"/>
                <p><span className="bold_text">1</span> Hour to an hour + <span className="bold_text">15</span> mins <span className="blue_text">$60</span></p>
                <p>The Rose Quartz Facial is different than your standard facial. Rose Quartz contains a number of minerals 
                  including iron, magnesium, sodium, silicium, and oxygen for a postive effect on the <span className="blue_text">body, wind and soul.</span> 
                  Rose Quartz crystals smooth and polish the skin, redefine the facial contours, + drain away toxins leaving 
                  your skin <span className="blue_text">fresh, healthy + glowing.</span></p>
                <p className="tags">healing • soothing • revives + restores skin • stimulates circulation • promotes cell renewal</p>
              </article>
              <article>
                <h5>The Works</h5>
                <img className="article_border" src={blue_border} alt="wavy teal line graphic"/>
                <p><span className="bold_text">1</span> Hour to an hour + <span className="bold_text">15</span> mins <span className="blue_text">$70</span></p>
                <p>The Rose Quartz Facial but also includes extras with tons of Lymphatic fluid push <span className="blue_text">which is good for the whole body.</span></p>
                <p className="tags">Gua Sha • Facial Cupping • steam towel acupressure • oxygen mask • Rose Quartz massage •hand paraffin • arm • hand massage • heated energy mat </p>
              </article>
              <article>
                <h5>Teen Clean 2.0</h5>
                <img className="article_border" src={blue_border} alt="wavy teal line graphic"/>
                <p><span className="bold_text">45</span> mins <span className="blue_text">$35</span></p>
                <p className="tags">exfoliating hydrofacial machine • oxygen mask or LED</p>
              </article>
              <article>
                <p><span className="bold_text">Little Princess Facial</span> • Ages 5 - 10</p>
                <img className="article_border" src={blue_border} alt="wavy teal line graphic"/>
                <p><span className="bold_text">35</span> to <span className="bold_text">45</span> mins <span className="blue_text">$35</span></p>
                <p><span className="blue_text">Your lil’ Princess</span> will be greeted with a tiara to wear + take home. She will feel perfectly pampered with 
                  this gentle facial ideal for young skin that will initaita a good skin care routine.</p>
                <p className="tags">cleanser •  steam • mask • massage • hand paraffin • arm/hand massage • moisturizer</p>
              </article>
              <article>
                <h5>Hydrofacial</h5>
                <img className="article_border" src={blue_border} alt="wavy teal line graphic"/>
                <p><span className="blue_text">$80</span></p>
                <p>Combines cleansing, exfoliation, extraction, hydration + antioxidants protection simultaneously. This results 
                  in clearer, more beautiful skin with no discomfort or downtime.</p>
              </article>
              <article>
                <h5>Nano Infusion Facial</h5>
                <img className="article_border" src={blue_border} alt="wavy teal line graphic"/>
                <p><span className="blue_text">$90</span></p>
                <p>Non-invasive skin treatment for skin conditions such as fine lines, scarring + pigmentation. Enhances 
                  product absorbtion and drives ingredients deep into the skin. Offers immediate and longterm results. Includes 
                  hot stone arm + hand massage with LED light therapy.</p>
              </article>
              <article>
                <h5>Glow + Go Express</h5>
                <img className="article_border" src={blue_border} alt="wavy teal line graphic"/>
                <p><span className="bold_text">45</span> mins <span className="blue_text">$50</span></p>
                <p>Rose Quartz Facial without hand paraffin, arm + hand massage.</p>
              </article>
          </section>
      </main>
      );
    };

export default Services;