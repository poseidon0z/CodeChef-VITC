import React from "react";
import Carousel from "react-grid-carousel";

const CarouselTemp = ({ imagesArr }) => {
  return (
    <Carousel
      showDots={true}
      dotColorActive={"black"}
      cols={3}
      rows={1}
      gap={10}
      loop={true}
      autoplay={5000}
    >
      {imagesArr.map((ele, index) => (
        <Carousel.Item key={index}>
          <img width="100%" height="275px" alt={index} src={ele} />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselTemp;
