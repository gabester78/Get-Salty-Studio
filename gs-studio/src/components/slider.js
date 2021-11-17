import React, { useState } from "react";
import Hero from "../images/hero1.jpg";
import Chair from "../images/chair_massage.jpg";
import Towels from "../images/towels.jpg";
import Family from "../images/family.jpg";
import Cheers from "../images/cheers.jpg";
import Group from "../images/Group1.jpg";
import Group2 from "../images/Group2.jpg";
import ArrowLeft from "../images/arrow-circle-left-solid.svg";
import ArrowRight from "../images/arrow-circle-right-solid.svg";

const SliderData = [
  {
    image: Hero,
  },
  {
    image: Group,
  },
  {
    image: Chair,
  },
  {
    image: Family,
  },
  {
    image: Group2,
  },
  {
    image: Towels,
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
        alt="Left arrow icon"
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
        alt="Right arrow icon"
        onClick={nextSlide}
      />
    </article>
  );
};

export default Slider;
