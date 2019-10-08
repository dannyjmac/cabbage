import React, { Component } from 'react';
import classNames from 'classnames';
import MainSlider from '../Slider/MainSlider';
import Reviews from '../Reviews';
import FontAwesome from 'react-fontawesome';

import images from '../../images/thumbnails';
import star from '../../images/star.png';

import './Sidebar.scss';

class Sidebar extends Component {
  state = {
    activeImage: ''
  };

  renderStars = () => {
    const rating = [];
    let i = 0;
    while (i < this.props.place.rate) {
      rating.push(<img src={star} alt="star" />);
      i++;
    }
    return rating;
  };

  renderReviews = () => {
    return this.props.place.reviews.map((review, index) => (
      <Reviews review={review} key={`${this.props.place.name}-${index}`} />
    ));
  };

  render() {
    const { place, open, close } = this.props;
    return (
      <div className={classNames('Sidebar', { Sidebar__open: place })}>
        <div className="Sidebar__close" onClick={() => this.props.close()}>
          <FontAwesome
            style={{
              color: '#999',
              fontSize: 16,
              marginTop: 1
            }}
            name="times"
          />
        </div>
        {place && (
          <div className="Sidebar__content">
            <h3 className="Sidebar__header">{place.name}</h3>
            <div className="Sidebar__hero">
              <MainSlider activeImage={this.state.activeImage} place={this.props.place} />
            </div>
            <div className="Sidebar__stats">
              <div className="Sidebar__stats-rating">{this.renderStars()}</div>
              <div className="Sidebar__stats-level">
                {place.allVegan ? (
                  <span className="Sidebar__stats-level-vegan">All Vegan</span>
                ) : (
                  <span className="Sidebar__stats-level-non">Vegan Options</span>
                )}
              </div>
            </div>
            <div className="Sidebar__reviews">
              <h4>Reviews</h4>
              <div className="Sidebar__reviews-container">{this.renderReviews()}</div>
            </div>
            <div className="Sidebar__address">
              <p>{this.props.place.address}</p>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Sidebar;
