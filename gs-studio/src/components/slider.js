import React, { useState } from "react";
import Hero from "../images/hero1.jpg";
import Chair from "../images/chair_massage.jpg";
import Towels from "../images/towels.jpg";
import Family from "../images/family.jpg";
import Cheers from "../images/cheers.jpg";
import Heather from "../images/Heather-Massage.jpg";
import Mal from "../images/Malorie-Massage.jpg";
import McKay from "../images/McKayla-Facial.jpg";
import Roland from "../images/Roland-Massage.jpg";
import Shan from "../images/Shannon-Facial.jpg";
import ShanSign from "../images/Shannon-Sign.jpg";
import ArrowLeft from "../images/arrow-circle-left-solid.svg";
import ArrowRight from "../images/arrow-circle-right-solid.svg";
import SaltRoomChairs from "../images/salt-room-chairs.jpg";
import SaltRoomMassage2 from "../images/salt-room-massage-2.jpg";
import SaltRoomMassage from "../images/salt-room-massage.jpg";
import SaunaPods from "../images/sauna-pod.jpg";

const SliderData = [
  {
    image: Hero,
  },
  {
    image: ShanSign,
  },
  {
    image: SaltRoomMassage2,
  },
  {
    image: Chair,
  },
  {
    image: Shan,
  },
  {
    image: SaunaPods,
  },
  {
    image: McKay,
  },
  {
    image: Family,
  },
  {
    image: Mal,
  },
  {
    image: SaltRoomChairs,
  },
  {
    image: Roland,
  },
  {
    image: Towels,
  },
  {
    image: Heather,
  },
  {
    image: SaltRoomMassage,
  },
  {
    image: Cheers,
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
