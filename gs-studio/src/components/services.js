import React from "react";
import teal_border from "../images/teal_border.svg";
import blue_border from "../images/blue_border.svg";
import blue_border_short from "../images/blue_border_short.svg";
import up_arrow from "../images/arrow-circle-up-solid.svg";
import pods from "../images/pods.jpg";

const Services = () => {
  return (
    <main>
      <nav className="services_navbar" id="my_anchor">
        <a href="#fitness_anchor">
          <p>Fitness For The Face</p>
        </a>
        <a href="#waxing_anchor">
          <p>Waxing Services + Treatments</p>
        </a>
        <a href="#massage_anchor">
          <p>Massage Therapy</p>
        </a>
      </nav>
      <section className="services_container">
        <img className="services_hero" src={pods} alt="clients in sauna pod" />
        <h1 className="services_heading">Our Services</h1>
        <article>
          <h4>Sauna Pods</h4>
          <img
            className="article_border_headings"
            src={teal_border}
            alt="wavy teal line graphic"
          />
          <p>
            <span className="bold_text">30</span> mins{" "}
            <span className="blue_text">$30</span>
          </p>
          <p>
            The sauna pods{" "}
            <span className="blue_text">raise core temperature</span>, elevating
            the heart rate to boost metabolism. Book a session for
            <span className="blue_text">
              detoxification, relaxation, a metabolism boost, immune system
              support, + decrease pain.
            </span>{" "}
            The sauna pods use infrared light to help with pain, joints +
            muscles, + muscle recovery for a work out.
          </p>
        </article>

        <article>
            <h4>
              Halotherapy <span className="blue_text">&#40;salt room&#41;</span>
            </h4>
            <img
              className="article_border_headings"
              src={teal_border}
              alt="wavy teal line graphic"
            />
            <p>
              <span className="bold_text">1</span> Halotherapy session{" "}
              <span className="blue_text">$30</span>
            </p>
            <p>
              Children &#40;with adult in room&#41;
              <span className="blue_text">$5</span>
            </p>
        </article>

        <article>
            <h4>
              Oxygen Bar
            </h4>
            <img
              className="article_border_headings"
              src={teal_border}
              alt="wavy teal line graphic"
            />
            <p>
              <span className="bold_text">10</span> mins{" "}
              <span className="blue_text">$15</span>
            </p>
            <p>
              Recreational oxygen therapy. <span className="blue_text">Purified oxygen</span> boosts energy levels, 
              relieves stress, cures hangovers, improves mood, improves concentration, provides relief for headaches + migraines, 
              and also promotes better sleep.
            </p>
        </article>

        <article>
          <h4>Body Sculpting</h4>
          <img
            className="article_border_headings"
            src={teal_border}
            alt="wavy teal line graphic"
          />
          <p>
            <span className="blue_text">$125</span>
          </p>
          <p>
            Laser Lipo, <span className="blue_text">Laser Cavitation,</span> +
            Skin Tightening
          </p>
        </article>

        <h4 className="card_heading">Packages</h4>
        <img
          className="borders"
          src={teal_border}
          alt="wavy teal line graphic"
        />
        <div className="card_container">
          <article className="cards">
            <h5>
              The Sweet + <span className="blue_text">Salty</span>
            </h5>
            <img
              className="blue_borders"
              src={blue_border_short}
              alt="wavy teal line graphic"
            />
            <p>
              <span className="bold_text">1</span> Hour{" "}
              <span className="blue_text">$65</span>
            </p>
            <p>Halotherapy session, 10 min Oxygen Bar + 20 min Hydrotherapy Massage</p>
          </article>
          <article className="cards">
            <h5>
              <span className="blue_text">Salty</span> + Sauna
            </h5>
            <img
              className="blue_borders"
              src={blue_border_short}
              alt="wavy teal line graphic"
            />
            <p>
              <span className="bold_text">1</span> Hour +{" "}
              <span className="bold_text">15</span> mins{" "}
              <span className="blue_text">$55</span>
            </p>
            <p>Halotherapy session + Sauna Pod</p>
          </article>
          <article className="cards">
            <h5>The VIP Package</h5>
            <img
              className="blue_borders"
              src={blue_border_short}
              alt="wavy teal line graphic"
            />
            <p>
              <span className="bold_text">3</span> Hours{" "}
              <span className="blue_text">$180</span>
            </p>
            <p>
              Halotherapy session, Custom Facial,{" "}
              <span className="bold_text">1</span> Hour massage
            </p>
          </article>
        </div>

        <article>
          <h5>Girls Night Out</h5>
          <img
            className="article_border"
            src={blue_border}
            alt="wavy teal line graphic"
          />
          <p className="GNO_p">
            GNO parties are a private event for a minimum of 4 and a maximum 7
            people. You may choose from any of the 3 packages below.
          </p>
          <div className="GNO_card_container">
            <article className="GNO_cards">
              <h5>Package 1</h5>
              <img
                className="blue_borders_GNO"
                src={blue_border_short}
                alt="wavy teal line graphic"
              />
              <p>
                <span className="bold_text">3</span> Hours{" "}
                <span className="blue_text">$115 pp</span>, 5 services
              </p>
              <p>
                Halotherapy session, Oxygen treatment, LED light therapy, Hand
                paraffin + 20 min Hydrotherapy Massage
              </p>
            </article>
            <article className="GNO_cards">
              <h5>Package 2</h5>
              <img
                className="blue_borders_GNO"
                src={blue_border_short}
                alt="wavy teal line graphic"
              />
              <p>
                <span className="blue_text">$115 pp</span>, 5 services
              </p>
              <p>
                Halotherapy, Hand paraffin, 20 min Hydrotherapy Massage, Light treatment, +
                Sauna pod
              </p>
            </article>
          </div>
          <div className="GNO_card_container">
            <article className="GNO_cards">
              <h5>Package 3</h5>
              <img
                className="blue_borders_GNO"
                src={blue_border_short}
                alt="wavy teal line graphic"
              />
              <p>
                <span className="blue_text">$115 pp</span>, 4 services
              </p>
              <p>
                Halotherapy, Sauna pod, 10 min oxygen bar, + Collagen sheet mask
                with Oxygen Treatment
              </p>
            </article>
          </div>
        </article>
        <article>
          <h4>Facials</h4>
          <img
            className="article_border_headings"
            src={teal_border}
            alt="wavy teal line graphic"
          />
          <p>
            Add on a{" "}
            <span className="blue_text">hot stone hand + arm massage</span> to
            any facial <span className="blue_text">$10.</span>
          </p>
          <p>
            All facials include a skin analysis, soothing aromatherapy shoulder,
            neck, face, arm, and hand massage.
          </p>
        </article>
        <article>
          <h5>Rose Quartz Facial</h5>
          <img
            className="article_border"
            src={blue_border}
            alt="wavy teal line graphic"
          />
          <p>
            <span className="bold_text">1</span> Hour to an hour +{" "}
            <span className="bold_text">15</span> mins{" "}
            <span className="blue_text">$75</span>{" "}<br></br>
            <span className="tags bold_text">Recommended for 20 years of age + under.</span> 
          </p>
          <p>
            The Rose Quartz Facial is different than your standard facial. Rose
            Quartz contains a number of minerals including iron, magnesium,
            sodium, silicium, and oxygen for a postive effect on the{" "}
            <span className="blue_text">body, mind and soul.</span> 
            Rose Quartz crystals smooth and polish the skin, redefine the facial
            contours, + drain away toxins leaving your skin{" "}
            <span className="blue_text">fresh, healthy + glowing.</span>
          </p>
          <p className="tags">
            healing • soothing • revives + restores skin • stimulates
            circulation • promotes cell renewal
          </p>
        </article>
        <article>
          <h5>The Works</h5>
          <img
            className="article_border"
            src={blue_border}
            alt="wavy teal line graphic"
          />
          <p>
            <span className="bold_text">1</span> Hour to an hour +{" "}
            <span className="bold_text">15</span> mins{" "}
            <span className="blue_text">$80</span>
          </p>
          <p>
            The Rose Quartz Facial but also includes extras with tons of
            Lymphatic fluid push{" "}
            <span className="blue_text">which is good for the whole body.</span>
          </p>
          <p className="tags">
            Gua Sha • Facial Cupping • steam towel acupressure • oxygen mask •
            Rose Quartz massage • arm • hand massage • heated
            energy mat{" "}
          </p>
        </article>
        <article>
          <h5>Hydrodermabrasion Facial</h5>
          <img
            className="article_border"
            src={blue_border}
            alt="wavy teal line graphic"
          />
          <p>
            <span className="blue_text">$85</span>
          </p>
          <p>
            "Combines cleansing, exfoliation, extraction, hydration +
            antioxidants protection simultaneously. This results in"{" "}
            <span className="blue_text">clearer, more beautiful skin</span> with
            no discomfort or downtime.
          </p>
        </article>
        <article>
          <h5>Triple Threat Anti-Aging Facial</h5>
          <img
            className="article_border"
            src={blue_border}
            alt="wavy teal line graphic"
          />
          <p>
            <span className="blue_text">$90</span>
          </p>
          <p>
            "O2 to derm" machine with Korean Skincare.{" "}
            <span className="blue_text">Next level facial</span> with
            oxygen, anions (negative ions + antioxidates) + LED light.
          </p>
        </article>
        <article>
          <p>
            <span className="bold_text">Little Princess Facial</span> • Ages 5 -
            10
          </p>
          <img
            className="article_border"
            src={blue_border}
            alt="wavy teal line graphic"
          />
          <p>
            <span className="bold_text">35</span> to{" "}
            <span className="bold_text">45</span> mins{" "}
            <span className="blue_text">$40</span>
          </p>
          <p>
            <span className="blue_text">Your lil’ Princess</span> will be
            greeted with a tiara to wear + take home. She will feel perfectly
            pampered with this gentle facial ideal for young skin that will
            initaita a good skin care routine.
          </p>
          <p className="tags">
            cleanser • steam • mask • massage • arm/hand massage
            • <span id="fitness_anchor">moisturizer   </span>
          </p>
        </article>
        <article>
          <div className="nav_header">
            <h4>Fitness For The Face</h4>
            <div className="arrow">
              <a href="#my_anchor">
                <p>Back to top</p>
              </a>
              <img src={up_arrow} alt="up arrow graphic" width="25px" />
            </div>
          </div>
          <img
            className="article_border_headings"
            src={teal_border}
            alt="wavy teal line graphic"
          />
        </article>
        <article>
          <h5>Lunch Time Lift</h5>
          <img
            className="article_border"
            src={blue_border}
            alt="wavy teal line graphic"
          />
          <p>
            <span className="bold_text">30</span> mins{" "}
            <span className="blue_text">$50</span>
          </p>
          <p>
            Microcurrent is a popular treatment for aging skin. It uses low
            level electrical currents to trigger{" "}
            <span className="blue_text">
              the body’s natural skin enhancing chemicals
            </span>{" "}
            at a celluar level + is an effective tool agains signs of aging.
          </p>
          <p>
            It also improves muscle tone in the face and neck, lifts jowls +
            eyebrows. It reduces + eliminates fine lines and wrinkles, improves
            facial circulation, aids in lymphatic drainage, + enhances product
            penetration to treat multiple skin problems.
          </p>
          <p className="tags">
            this procedure cannot be performed on persons with epilepsy, a
            pacemaker, active cancer, + women that may be{" "}
            <span id="waxing_anchor">pregnant.</span>
          </p>
        </article>
        <article className="wax_article">
          <div className="nav_header">
            <h4>Waxing Services</h4>
            <div className="arrow">
              <a href="#my_anchor">
                <p>Back to top</p>
              </a>
              <img src={up_arrow} alt="up arrow graphic" width="25px" />
            </div>
          </div>
          <img
            className="article_border_headings"
            src={teal_border}
            alt="wavy teal line graphic"
          />
        </article>
        <article className="wax_list">
          <ul>
            <li>
              Eyebrow <span className="blue_text">$15</span>
            </li>
            <li>
              Lip <span className="blue_text">$7</span>
            </li>
            <li>
              Brow + Lip <span className="blue_text">$20</span>
            </li>
            <li>
              Chin <span className="blue_text">$7</span>
            </li>
            <li>
              Cheeks <span className="blue_text">$7</span>
            </li>
            <li>
              Under Arms <span className="blue_text">$18</span>
            </li>
            <li>
              Arms <span className="blue_text">$25</span>
            </li>
          </ul>
          <ul>
            <li>
              Full Leg <span className="blue_text">$55</span>
            </li>
            <li>
              Half Leg <span className="blue_text">$30</span>
            </li>
            <li>
              Men's Chest <span className="blue_text">$35</span>
            </li>
            <li>
              Men's Back <span className="blue_text">$30</span>
            </li>
            <li>
              Bikini <span className="blue_text">$40</span>
            </li>
            <li>
              Brazilian <span className="blue_text">$50</span>
            </li>
          </ul>
        </article>
        <article>
          <h4>Treatments</h4>
          <img
            className="article_border_headings"
            src={teal_border}
            alt="wavy teal line graphic"
          />
        </article>
        <article>
          <h5>Teen Clean 2.0</h5>
          <img
            className="article_border"
            src={blue_border}
            alt="wavy teal line graphic"
          />
          <p>
            <span className="bold_text">45</span> mins{" "}
            <span className="blue_text">$50</span>
          </p>
          <p className="tags">
            exfoliating hydrofacial machine • oxygen mask or LED
          </p>
        </article>
        <article>
          <h5>Nano Infusion Facial</h5>
          <img
            className="article_border"
            src={blue_border}
            alt="wavy teal line graphic"
          />
          <p>
            <span className="blue_text">$100</span>
          </p>
          <p>
            <span className="blue_text">
              Non-invasive skin treatment for skin conditions
            </span>{" "}
            such as fine lines, scarring + pigmentation. Enhances product
            absorbtion and drives ingredients deep into the skin. Offers
            immediate and longterm results. Includes hot stone arm + hand
            massage with LED light therapy.
          </p>
        </article>
        <article>
          <h5>Mini Threat Anti-Aging Treatment</h5>
          <img
            className="article_border"
            src={blue_border}
            alt="wavy teal line graphic"
          />
          <p>
            <span className="blue_text">$60</span>
          </p>
          <p>
            <span className="blue_text">
              Exfoliation
            </span>{" "}, oxygen, anions, light therapy using Korean Skincare.
          </p>
        </article>
        <article>
          <h5>LED Light Therapy</h5>
          <img
            className="article_border"
            src={blue_border}
            alt="wavy teal line graphic"
          />
          <p>
            <span className="bold_text">1</span> session{" "}
            <span className="blue_text">$15</span>
            <br></br>
            Twice a week for a series of 4 - 6 weeks
          </p>
          <p>
            LED treatments are a good choice for people who want to{" "}
            <span className="blue_text">
              boost collagen, treat hyperpigmentation or treat acne.
            </span>
          </p>
        </article>
        <article>
          <h5>The Oxygen Treatment</h5>
          <img
            className="article_border"
            src={blue_border}
            alt="wavy teal line graphic"
          />
          <p>
            <span className="bold_text">30</span> min session{" "}
            <span className="blue_text">$50</span>
            <br></br>
            Once a week for 6 weeks
          </p>
          <p>
            The effects are cumulative, meaning with each treatment you get, the
            better your skin looks. You’ll see results immediately + they can
            last up to 3 months. boost collagen, treat hyperpigmentation or
            treat acne.
          </p>
          <p>
            <span className="blue_text">
              Need a pick me up before an event?
            </span>{" "}
            Oxygen treatment works wonders!
          </p>
        </article>
        <article>
          <h5>Cold Stone Therapy</h5>
          <img
            className="article_border"
            src={blue_border}
            alt="wavy teal line graphic"
          />
          <p>
            <span className="bold_text">30</span> min session{" "}
            <span className="blue_text">$45</span>
          </p>
          <p>
            This technique is a relief for{" "}
            <span className="blue_text">
              allergy sufferers, people with sinus pain + migraine headaches.
            </span>
          </p>
        </article>
        <article>
          <h5>Psio Meditation + Hypnotherapy Glasses</h5>
          <img
            className="article_border"
            src={blue_border}
            alt="wavy teal line graphic"
          />
          <p>
            <span className="blue_text">$25</span> with heated energy mat
          </p>
        </article>
        <article>
          <h5>Crystal-ssage Back Treatment</h5>
          <img
            className="article_border"
            src={blue_border}
            alt="wavy teal line graphic"
          />
          <p>
            <span className="bold_text">1</span> session{" "}
            <span className="blue_text">$75</span>
          </p>
          <p>
            Back is cleaned, steamed + sugar scrubbed.{" "}
            <span className="blue_text">Relaxing crystal stones + spheres</span>{" "}
            are then rolled on the back + used in massage.
          </p>
          <p>
            A mask is applied to your back, scalp is massaged, hot towels are
            used to remove the mask, toner + 12 hours body moisturizer is
            applied to back.
          </p>
        </article>
        <article>
          <h5>
            <span className="blue_text">Salty</span> Reflexology
          </h5>
          <img
            className="article_border"
            src={blue_border}
            alt="wavy teal line graphic"
          />
          <p>
            <span className="bold_text">45</span> mins{" "}
            <span className="blue_text">$65</span>
          </p>
          <p>
            Reflexology in the <span className="blue_text">Halotherapy</span>{" "}
            room.
          </p>
          <p className="tags">
            <span className="blue_text">Please note:</span> A reflexologist is
            not a medical doctor. Reflexology is not a substitute for medical{" "}
            <span id="massage_anchor">treatment,</span> but may server as a
            compliment to most kinds of therapy.
          </p>
        </article>
        <article className="wax_article">
          <div className="nav_header">
            <h4>Massage Therapy</h4>
            <div className="arrow">
              <a href="#my_anchor">
                <p>Back to top</p>
              </a>
              <img src={up_arrow} alt="up arrow graphic" width="25px" />
            </div>
          </div>
          <img
            className="article_border_headings"
            src={teal_border}
            alt="wavy teal line graphic"
          />
        </article>infared
        
        <div className="card_container">
          <article className="cards">
            <h5>
              <span className="blue_text">Salty</span> Massage
            </h5>
            <img
              className="blue_borders"
              src={blue_border_short}
              alt="wavy teal line graphic"
            />
            <p>
              <span className="bold_text">1</span> Hour massage in salt room{" "}
              <span className="blue_text">$100</span>{" "}

            </p>
          </article>
          <article className="cards">
            <h5>
              <span className="blue_text">Infrared</span> Massage
            </h5>
            <img
              className="blue_borders"
              src={blue_border_short}
              alt="wavy teal line graphic"
            />
            <p>
              <span className="bold_text">1</span> Hour infrared massage. For join pain, muscle pain + muscle recovery from a workout.{" "}
              <span className="blue_text">$95</span>{" "}

            </p>
          </article>
          <article className="cards">
            <h5>
              <span className="blue_text">Salty</span> Couples Massage
            </h5>
            <img
              className="blue_borders"
              src={blue_border_short}
              alt="wavy teal line graphic"
            />
            <p>
              <span className="bold_text">1</span> Hour massage in salt room{" "}
              <span className="blue_text">$200 per couple</span>
              <br></br>
              <span className="bold_text">
                &#40;See Facebook page for dates&#41;
              </span>
            </p>
          </article>
        </div>
        <article className="wax_article">
          <div className="nav_header">
            <h4>Standard Massage Therapy Pricing</h4>
          </div>
          <img
            className="article_border_headings"
            src={blue_border}
            alt="wavy teal line graphic"
          />
        </article>
        <article className="wax_list">
          <ul>
            <li>
              <span className="bold_text">15</span> mins{" "}
              <span className="blue_text">$20</span>
            </li>
            <li>
              <span className="bold_text">30</span> mins{" "}
              <span className="blue_text">$40</span>
            </li>
            <li>
              <span className="bold_text">45</span> mins{" "}
              <span className="blue_text">$60</span>
            </li>
            <li>
              <span className="bold_text">60</span> mins{" "}
              <span className="blue_text">$75</span>
            </li>
            <li>
              <span className="bold_text">75</span> mins{" "}
              <span className="blue_text">$90</span>
            </li>
            <li>
              <span className="bold_text">90</span> mins{" "}
              <span className="blue_text">$110</span>
            </li>
          </ul>
        </article>
        <article>
          <h5>Swedish Massage</h5>
          <img
            className="article_border"
            src={blue_border}
            alt="wavy teal line graphic"
          />
          <p>
            A light to medium pressure massage that promotes relaxation, soothes
            muscle tension, calms nerves + eases aches + pains. It can also{" "}
            <span className="blue_text">
              enhance the lymph system, help with insomnia + reduce blood
              pressure.
            </span>{" "}
            This massage includes, back, legs, feet, arms, hands, shoulders,
            neck, face + scalp for an overall relaxing + soothing experience.
          </p>
        </article>
        <article>
          <h5>Deep Tissue | Myofascial + Trigger Point Therapy</h5>
          <img
            className="article_border"
            src={blue_border}
            alt="wavy teal line graphic"
          />
          <p>
            Therapeutically, a deeper, more direct pressure is applied to
            troubled muscles + areas. Using sustained pressure and muscle
            stripping to loosen and lengthen tissue, these techniques will{" "}
            <span className="blue_text">
              promote better circulation to reduce spasms + give you better
              range of motion.
            </span>{" "}
            It can also soften fascial adhesions, relieve muscle + nerve
            entrapments and can help correct postural imbalances over time.
            Inflammatory responses in the body such as; trauma, repetitive use,
            poor posture, certain musculoskeletal conditions + surgical
            procedures can create myofascial restriction. Sciatic pain,
            fibromyalgia, chronic fatigue syndrome, arthritis, chronic headaches
            + TMJ issues are just some of the conditions it can also help with.
          </p>
        </article>
        <article>
          <h5>Prenatal Massage</h5>
          <img
            className="article_border"
            src={blue_border}
            alt="wavy teal line graphic"
          />
          <p>
            A primarily Swedish type of massage pressure, gives{" "}
            <span className="blue_text">
              special attention to the mothers-to-be.{" "}
            </span>
            During pregnancy, or even after delivery, this side lying massage
            focues on the body’s changes while pregnant. It can reduce swelling,
            improve circualtion, ease tired muscles + relieve mental fatigue.
            Studies have also shown that it may improve muscle tone + skin
            elasticity. Please note, it is best to wait until 2nd or 3rd
            trimester of pregnancy, + physician clearance will be needed for any
            high-risk pregnancies.
          </p>
        </article>
        <article>
          <h5>Hot Stone Massage</h5>
          <img
            className="article_border"
            src={blue_border}
            alt="wavy teal line graphic"
          />
          <p>
            Smooth, flat, heated basalt stones are held + used while massage
            techniques are applied. Giving the
            <span className="blue_text">
              {" "}
              feeling of melting muscle tension + reducing tightness.
            </span>{" "}
            Depending on your preference, the pressure can be lighter overall or
            more direct using the stone as a tool to break up a stubborn area.
            There are some contraindications with hot stone therapy + physician
            clearance will be needed if you are on blood thinners, a history of
            blood clots, severe osteoporosis, heart condistions, uncontrolled
            diabetes, open wounds or hand any surgeries in the last 6 weeks.
          </p>
        </article>
        <article className="bottom_arrow">
          <a href="#my_anchor">
            <p>Back to top</p>
          </a>
          <img src={up_arrow} alt="up arrow graphic" width="25px" />
        </article>
      </section>
    </main>
  );
};

export default Services;
