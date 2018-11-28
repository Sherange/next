import React, { Fragment } from "react";

class Footer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="box-1">
          <p className="text-logo">Sherange.com</p>
          <p>@ Sherange.com 2018</p>
        </div>
        <div className="box-2">
        <p className="text">About Us</p>
        <p className="text">Contact</p>
        </div>
        <div className="box-3">
        <p className="text">FaceBook</p>
        <p className="text">Twitter</p>
        </div>
        <style jsx>
          {`
            .box-1 {
              flex: 1;
              justify-content: center;
              padding 1rem;
            }
            .box-2 {
              flex: 1;
              justify-content: center;
              padding 1rem;
            }
            .box-3 {
              flex: 2;
              justify-content: center;
              padding 1rem;
            }
            .text {
              font-size: 1rem;
              font-family: "Roboto", "Helvetica", "Arial", sans-serif;
              font-weight: 500;
              line-height: 1.6;
              letter-spacing: 0.0075em;
            }
            .text-logo{
              font-size: 1.25rem;
              font-family: "Roboto", "Helvetica", "Arial", sans-serif;
              font-weight: 500;
              line-height: 1.6;
              letter-spacing: 0.0075em;
            }
          `}

        </style>
      </React.Fragment>
    );
  }
}

export default Footer;
