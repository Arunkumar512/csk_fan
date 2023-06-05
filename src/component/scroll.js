import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './scroll.css';
import First from './image/final.jpg'
import Love from './image/csk15.jpg'
import Team from './image/STD.jpeg'
import Fan from './image/fan.jpg'

function Scroll() {
  return (
    <div>
      <Carousel>
        <Carousel.Item interval={2500}>
          <img
            className="scrollimg"
            id="First"
            src={First}
            alt="First slide" />
        </Carousel.Item>

        <Carousel.Item interval={2500}>
          <img
            className="scrollimg"
            id="Love"
            src={Love}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={2500}>
          <img
            className="scrollimg"
            id="Team"
            src={Team}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={2500}>
          <img
            className="scrollimg"
            id="Fan"
            src={Fan}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>




    </div>
  )
}

export default Scroll