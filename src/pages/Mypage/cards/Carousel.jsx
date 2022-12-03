import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Card } from './Card';

const Carousel = () => {
  const settings = {
    className: 'center',
    centerMode: true,
    dots: true,
    infinite: false,
    slidesToShow: 1,
    arrow: true,
  };
  return (
    <div className="carousel">
      <Slider {...settings}>
        <Card />
        <Card />
        <Card />
        <Card />
      </Slider>
    </div>
  );
};

export default Carousel;
