import React, { Component } from 'react';
import Slider from 'react-slick';

import './MainSlider.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import images from '../../images/thumbnails';

class MainSlider extends Component {
  renderImages = () => {
    if (!this.props.activeImage) {
      const imageName = this.props.place.name.replace(/\s+/g, '').toLowerCase();
      return images[imageName].map((image, index) => (
        <div className="MainSlider__main">
          <img src={image} alt="content" />
        </div>
      ));
    }
  };

  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1.8,
      slidesToScroll: 1,
      arrows: false
    };

    return <Slider {...settings}>{this.renderImages()}</Slider>;
  }
}

export default MainSlider;
