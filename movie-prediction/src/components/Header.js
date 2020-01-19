import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Jumbotron from "react-bootstrap/Jumbotron";
import Media from "react-bootstrap/Media";
import image from "./mapdblogo.png";

const Header = props => {
  return (
    <Jumbotron fluid>
      {/* <div class ="col-md-6 align-items-left">
        <img src={image} width="100" height="100"/>
        <h1>{props.text}</h1>
      </div>
      <div class="col-md-6 align-items-right">
        <p>
          A One-stop Movie Portal for social media highlights.
        </p>
      </div> */

    <Media>
      <img
      width={100}
      height={100}
      className="align-self-right mr-3"
      src={image}
      alt="Generic Placeholder"/>
      <Media.Body>
        <h1>{props.text}</h1>
          <p>
          A One-stop Movie Portal for social media highlights.
          </p>
      </Media.Body>
    </Media>

      // <li class="media">
      //   <div class="verticalcenter justify-content-md-center">
      //     <img src={image} align="middle" class="img-fluid" width="100" height="100"/>
      //   </div>

      //   <div class="media-body">
      //     <h1>{props.text}</h1>
      //     <p>
      //     A One-stop Movie Portal for social media highlights.
      //   </p>
      //   </div>
      // </li>
  }
    </Jumbotron>
  );
};

export default Header;
