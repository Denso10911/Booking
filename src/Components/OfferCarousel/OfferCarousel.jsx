import React from "react";
import Skeleton from "@mui/material/Skeleton";
import { Carousel } from "react-responsive-carousel";
import "./OfferCarousel.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { storage } from "../../firebase.config";
import { ref, getDownloadURL, listAll } from "firebase/storage";

const OfferCarousel = ({ imgs }) => {
  const [imageUrls, setImageUrls] = React.useState([]);
  const [viewImgs, setViewImgs] = React.useState(false);
  const imagesListRef = ref(storage, `${imgs}/`);
  React.useEffect(() => {
    listAll(imagesListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageUrls((prev) => [...prev, url]);
          setViewImgs(true);
        });
      });
    });
  }, [imgs]);

  return (
    <>
      {viewImgs ? (
        <Carousel showIndicators={false} showThumbs={false}>
          {imageUrls.map((img, i) => {
            return (
              <div key={i}>
                <img src={img} alt='В сліпу' />
              </div>
            );
          })}
        </Carousel>
      ) : (
        <Skeleton variant='rectangular' width={"100%"} height={240} />
      )}
    </>
  );
};

export { OfferCarousel };
