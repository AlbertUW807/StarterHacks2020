import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';

const Header = props => {
  return (
    <Jumbotron fluid>
      <h1>{props.text}</h1>
        <p>
          A One-stop Movie Portal for social media highlights.
        </p>
    </Jumbotron>
    
  );
};

export default Header;