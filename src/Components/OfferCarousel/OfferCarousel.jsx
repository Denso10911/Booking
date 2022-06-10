import React from "react";
import { Carousel } from "react-responsive-carousel";
import "./OfferCarousel.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const OfferCarousel = ({ imgs }) => {
  return (
    <Carousel showIndicators={false} showThumbs={false}>
      {imgs.map((img, i) => {
        return (
          <div key={i}>
            <img src={img} alt='В сліпу' />
          </div>
        );
      })}
    </Carousel>
  );
};

export { OfferCarousel };
