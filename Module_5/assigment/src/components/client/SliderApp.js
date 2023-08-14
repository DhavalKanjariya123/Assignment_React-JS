import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, Row } from "react-bootstrap";
import img3 from "../../assets/images/3.jpg"
import img4 from "../../assets/images/4.jpg"
import img5 from "../../assets/images/5.jpg"
import img6 from "../../assets/images/6.jpg"
import img7 from "../../assets/images/7.jpg"
import img8 from "../../assets/images/8.jpg"
import img9 from "../../assets/images/9.jpg"

export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 1000,
      cssEase: "linear",
    };
    return (
      <Container className="mt-5">
        <Row className="mt-5">
          <div className="mt-5">
            <h3>Featured Categories</h3>
            <Slider {...settings}>
              <div className="slider-img ">
                <img src={img3} className="img-fluid" alt="slider" />
              </div>
              <div className="slider-img">
                <img src={img4} className="img-fluid" alt="slider" />
              </div>
              
              <div className="slider-img">
                <img src={img5} className="img-fluid" alt="slider" />
              </div>
              
              <div className="slider-img">
                <img src={img6} className="img-fluid" alt="slider" />
              </div>
              
              <div className="slider-img">
                <img src={img7} className="img-fluid" alt="slider" />
              </div>
              
              <div className="slider-img">
                <img src={img8} className="img-fluid" alt="slider" />
              </div>
              
              <div className="slider-img">
                <img src={img9} className="img-fluid" alt="slider" />
              </div>
              
              <div className="slider-img">
                <img src={img5} className="img-fluid" alt="slider" />
              </div>
              
            </Slider>
          </div>
        </Row>
      </Container>
    );
  }
}
