import React from "react";
import OwlCarousel from "react-owl-carousel";
import "../styles/carousel.css";

class Carousel extends React.Component {
  render() {
    return (
      <section className="carousel-wrapper">
        <OwlCarousel items={1} className="owl-theme" loop={true} center={true}>
          <div className="item">
            <img src="https://www.brindleyplace.com/wp-content/uploads/dummy-green-940.png" />
          </div>

          <div className="item">
            <img src="https://www.brindleyplace.com/wp-content/uploads/dummy-green-940.png" />
          </div>

          <div className="item">
            <img src="https://www.brindleyplace.com/wp-content/uploads/dummy-green-940.png" />
          </div>
        </OwlCarousel>
        <style jsx>
          {`
         .carousel-wrapper {
          flex : 1;
          justify-content: center;
          padding 1rem;
        }
        `}
        </style>
      </section>
    );
  }
}

export default Carousel;
