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
import Odrem from "../images/new-images/Oderm-O-Mockup.jpg"
import OdremRG from "../images/new-images/Oderm-RG.jpg"
import Pod from "../images/new-images/Pod.jpg"
import SRChairsKid from "../images/new-images/SR-Chairs-Kid.jpg"
import SRMassage2 from "../images/new-images/SR-Massage-2.jpg"
import SRKids from "../images/new-images/SR-Kids.jpg"
import SRPainting from "../images/new-images/SR-Painting.jpg"
import Hydro from "../images/new-images/hydrotable.jpg"
import Halopros from "../images/new-images/halopros.jpg"
import NewInfrared from "../images/new-images/New-Infrared.jpg"


const SliderData = [
  {
    image: Hero,
  },
  {
    image: Hydro,
  },
  {
    image: ShanSign,
  },
  {
    image: BlueSign,
  },
  {
    image: NewInfrared,
  },
  {
    image: Promo,
  },
  {
    image: Shan,
  },
  {
    image: Brazilian,
  },
  {
    image: SaunaPods,
  },
  {
    image: Promo2,
  },
  {
    image: FaceCrystal,
  }, 
  {
    image: Promo3,
  },
  {
    image: Halopros,
  },
  {
    image: Towels,
  },
  {
    image: FamilyOB,
  },
  {
    image: Promo4,
  },
  {
    image: MassageRoom,
  },
  {
    image: Promo5,
  },
  {
    image: FaceMassage2,
  },
  {
    image: Pod,
  },
  {
    image: SRKids,
  },
  {
    image: Promo6,
  },
  {
    image: Nano,
  },
  {
    image: Odrem,
  },
  {
    image: Promo7,
  },
  {
    image: KidsSR,
  },
  {
    image: Promo8,
  },
  {
    image: Location,
  },
  {
    image: Obar,
  },
  {
    image: SRChairsKid,
  },
  {
    image: Promo9,
  },
  {
    image: FaceCrystal2,
  },
  {
    image: Nano2,
  },
  {
    image: SRPainting,
  },
  {
    image: Promo10,
  },
  {
    image: FaceMassage,
  },
  {
    image: OBPromo,
  },
  {
    image: FaceCrystal2,
  },
  {
    image: Promo11,
  },
  {
    image: Obar,
  },
  {
    image: Cheers,
  },
  {
    image: OdremRG,
  },
  {
    image: Promo12,
  },
  {
    image: SRMassage2,
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
              <img
                src={slide.image}
                className="slider_images"
                alt="Various spa images"
              />
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
