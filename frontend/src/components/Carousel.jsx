import React from "react";
import IgitengeImages from "../CarouselImages";
const [one, two, three] = IgitengeImages;
const { image1 } = one;
const { image2 } = two;
const { image3 } = three;

function Carousel() {
  return (
    <div className="col-lg-6 p-0">
      <div
        id="carouselControls"
        className="carousel slide carousel"
        data-bs-ride="carousel"
      >
        <div className="carousel-img carousel-inner">
          <div className="carousel-item active">
            <img
              src={image1}
              className="img-fluid d-block w-100"
              alt="igitenge-short-debare"
            />
          </div>
          <div className="carousel-img carousel-item">
            <img src={image2} className="d-block w-100" alt="igitenge-dress" />
          </div>
          <div className="carousel-img carousel-item">
            <img src={image3} className="d-block w-100" alt="igitenge-shirt" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Carousel;
