import React from "react";
import { Carousel } from 'react-bootstrap'

function Banner() {
  return (
    <>
      {" "}
      <Carousel className="mt-3">
        <Carousel.Item>
          <img
            style={{ width: "100%", height: "200px", cursor:'pointer'}}
            src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/a2d45385904d2bfa.jpg?q=20"
            alt=""
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ width: "100%", height: "200px", cursor:'pointer' }}
            src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/2a7604f5df2cd496.jpg?q=20"
            alt=""
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ width: "100%", height: "200px", cursor:'pointer' }}
            src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/5f515750b4e4ec8e.jpeg?q=20"
            alt=""
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ width: "100%", height: "200px", cursor:'pointer' }}
            src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/4732d7a1b8921f82.jpg?q=20"
            alt=""
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ width: "100%", height: "200px" , cursor:'pointer'}}
            src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/039ec2390c9d9c67.jpeg?q=20"
            alt=""
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ width: "100%", height: "200px  " , cursor:'pointer'}}
            src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/ab3be449bccba68f.jpg?q=20"
            alt=""
          />
        </Carousel.Item>
      </Carousel>{" "}
    </>
  );
}

export default Banner;
