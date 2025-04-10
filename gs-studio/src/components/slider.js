import React, { useState } from "react";
import Hero from "../images/hero1.jpg";
import Towels from "../images/towels.jpg";
import Cheers from "../images/cheers.jpg";
import Shan from "../images/Shannon-Facial.jpg";
import ShanSign from "../images/Shannon-Sign.jpg";
import ArrowLeft from "../images/arrow-circle-left-solid.svg";
import ArrowRight from "../images/arrow-circle-right-solid.svg";
import SaunaPods from "../images/sauna-pod.jpg";
import Promo from "../images/new-images/SR-Promo.jpg"
import Promo2 from "../images/new-images/SR-Promo-2.jpg"
import Promo3 from "../images/new-images/SR-Promo-3.jpg"
import Promo4 from "../images/new-images/SR-Promo-4.jpg"
import Promo5 from "../images/new-images/SR-Promo-5.jpg"
import Promo6 from "../images/new-images/SR-Promo-6.jpg"
import Promo7 from "../images/new-images/SR-Promo-7.jpg"
import Promo8 from "../images/new-images/SR-Promo-8.jpg"
import Promo9 from "../images/new-images/SR-Promo-9.jpg"
import Promo10 from "../images/new-images/SR-Promo-10.jpg"
import Promo11 from "../images/new-images/SR-Promo-11.jpg"
import Promo12 from "../images/new-images/SR-Promo-12.jpg"
import BlueSign from "../images/new-images/Blue-Sign.jpg"
import Brazilian from "../images/new-images/Brazilian-2.jpg"
import FaceCrystal from "../images/new-images/Face-Crystal.jpg"
import FaceCrystal2 from "../images/new-images/Face-Crystal-2.jpg"
import FaceMassage from "../images/new-images/Face-Massage.jpg"
import FaceMassage2 from "../images/new-images/Face-Massage-2.jpg"
import FamilyOB from "../images/new-images/Family-OB.jpg"
import KidsSR from "../images/new-images/Kids-SR.jpg"
import Location from "../images/new-images/Location.jpg"
import MassageRoom from "../images/new-images/Massage-Room.jpg"
import Nano2 from "../images/new-images/Nano-2.jpg"
import Nano from "../images/new-images/Nano.jpg"
import OBPromo from "../images/new-images/OB-Promo.jpg"
import Obar from "../images/new-images/OB.jpg"
import Oderm from "../images/new-images/Oderm-O-Mockup.jpg"
import OdermRG from "../images/new-images/Oderm-RG.jpg"
import Pod from "../images/new-images/Pod.jpg"
import SRChairsKid from "../images/new-images/SR-Chairs-Kid.jpg"
import SRMassage2 from "../images/new-images/SR-Massage-2.jpg"
import SRKids from "../images/new-images/SR-Kids.jpg"
import SRPainting from "../images/new-images/SR-Painting.jpg"
import Hydro from "../images/new-images/hydrotable.jpg"
import Halopros from "../images/new-images/halopros.jpg"
import NewInfrared from "../images/new-images/New-Infrared.jpg"
import HeadSpa from "../images/new-images/head-massage.jpg"
import HeadSpaIntro from "../images/new-images/HeadspaIntro.mp4"


const SliderData = [
  {
    item:<img src={Hero} className="slider_images" alt="Various spa images"/>
  },
  {
    item:<img src={HeadSpa} className="slider_images" alt="Various spa images"/>
  },
  {
    item:<video src={HeadSpaIntro} className="slider_video"height="425px" autoPlay="true" controls="true"/>
  },
  {
    item:<img src={Hydro} className="slider_images" alt="Various spa images"/>
  },
  {
    item:<img src={ShanSign} className="slider_images" alt="Various spa images"/>
  },
  {
    item:<img src={BlueSign} className="slider_images" alt="Various spa images"/>
  },
  {
    item:<img src={NewInfrared} className="slider_images" alt="Various spa images"/>
  },
  {
    item:<img src={Promo} className="slider_images" alt="Various spa images"/>
  },
  {
    item:<img src={Shan} className="slider_images" alt="Various spa images"/>
  },
  {
    item:<img src={Brazilian} className="slider_images" alt="Various spa images"/>
  },
  {
    item:<img src={SaunaPods} className="slider_images" alt="Various spa images"/>
  },
  {
    item:<img src={Promo2} className="slider_images" alt="Various spa images"/>
  },
  {
    item:<img src={FaceCrystal} className="slider_images" alt="Various spa images"/>
  },
  {
    item:<img src={Promo3} className="slider_images" alt="Various spa images"/>
  },
  {
    item:<img src={Halopros} className="slider_images" alt="Various spa images"/>
  },
  {
    item:<img src={Towels} className="slider_images" alt="Various spa images"/>
  },
  {
    item:<img src={FamilyOB} className="slider_images" alt="Various spa images"/>
  },
  {
    item:<img src={Promo4} className="slider_images" alt="Various spa images"/>
  },
  {
    item:<img src={MassageRoom} className="slider_images" alt="Various spa images"/>
  },
  {
    item:<img src={Promo5} className="slider_images" alt="Various spa images"/>
  },
  {
    item:<img src={FaceMassage2} className="slider_images" alt="Various spa images"/>
  },
  {
    item:<img src={Pod} className="slider_images" alt="Various spa images"/>
  },
  {
    item:<img src={SRKids} className="slider_images" alt="Various spa images"/>
  },
  {
    item:<img src={Promo6} className="slider_images" alt="Various spa images"/>
  },
  {
    item:<img src={Nano} className="slider_images" alt="Various spa images"/>
  },
  {
    item:<img src={Oderm} className="slider_images" alt="Various spa images"/>
  },
  {
    item:<img src={Promo7} className="slider_images" alt="Various spa images"/>
  },
  {
    item:<img src={KidsSR} className="slider_images" alt="Various spa images"/>
  },
  {
    item:<img src={Promo8} className="slider_images" alt="Various spa images"/>
  },
  {
    item:<img src={Location} className="slider_images" alt="Various spa images"/>
  },
  {
    item:<img src={Obar} className="slider_images" alt="Various spa images"/>
  },
  {
    item:<img src={SRChairsKid} className="slider_images" alt="Various spa images"/>
  },
  {
    item:<img src={Promo9} className="slider_images" alt="Various spa images"/>
  },
  {
    item:<img src={FaceCrystal2} className="slider_images" alt="Various spa images"/>
  },
  {
    item:<img src={Nano2} className="slider_images" alt="Various spa images"/>
  },
  {
    item:<img src={SRPainting} className="slider_images" alt="Various spa images"/>
  },
  {
    item:<img src={Promo10} className="slider_images" alt="Various spa images"/>
  },
  {
    item:<img src={FaceMassage} className="slider_images" alt="Various spa images"/>
  },
  {
    item:<img src={OBPromo} className="slider_images" alt="Various spa images"/>
  },
  {
    item:<img src={Promo11} className="slider_images" alt="Various spa images"/>
  },
  {
    item:<img src={Cheers} className="slider_images" alt="Various spa images"/>
  },
  {
    item:<img src={OdermRG} className="slider_images" alt="Various spa images"/>
  },
  {
    item:<img src={Promo12} className="slider_images" alt="Various spa images"/>
  },
  {
    item:<img src={SRMassage2} className="slider_images" alt="Various spa images"/>
  },
  
];

const Slider = () => {
  const [current, setCurrent] = useState(0);
  const length = SliderData.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return ( 
    <article className="slider_container">
      <img
        src={ArrowLeft}
        className="slider_arrow_left"
        alt="Left nav arrow icon"
        onClick={prevSlide}
      />
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              slide.item
            )}
          </div>
        );
      })}
      <img
        src={ArrowRight}
        className="slider_arrow_right"
        alt="Right nav arrow icon"
        onClick={nextSlide}
      />
    </article>
  );
};

export default Slider;
