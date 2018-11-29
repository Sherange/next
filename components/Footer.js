import Link from "next/link";
import React, { Fragment } from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer-container">
        <div className="box-1">
          <Link href="/">
            <p className="text-logo">Sherange.com</p>
          </Link>
          <span className="small-text">Copyright 2018 @ Sherange.com</span>
        </div>
        <div className="box-2">
          <Link href="/about-me">
            <p className="text">About Me</p>
          </Link>

          <Link href="/contact-me">
            <p className="text">Contact Me</p>
          </Link>

          <Link href="/my-projects">
            <p className="text">My Projects</p>
          </Link>
        </div>
        <div className="box-3">
          <p className="text">FaceBook</p>
          <p className="text">Twitter</p>
        </div>
        <style jsx>
          {`
            .footer-container {
              display: flex;
              color : #fff;
              flex-direction: row;
              justify-content: center;
              background-color : #2196f3;
            }
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
              cursor: pointer;
            }
            .text-logo{
              margin : 0px;
              font-size: 1.25rem;
              font-family: "Roboto", "Helvetica", "Arial", sans-serif;
              font-weight: 500;
              line-height: 1.6;
              letter-spacing: 0.0075em;
              cursor: pointer;
            }
            .small-text {
              font-size: 1.00rem;
            }
          `}
        </style>
      </footer>
    );
  }
}

export default Footer;
