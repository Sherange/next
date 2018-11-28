import React from "react";
import OwlCarousel from "react-owl-carousel";
import "../styles/carousel.css";

class Carousel extends React.Component {
  render() {
    return (
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
    );
  }
}

export default Carousel;
