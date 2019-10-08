import React, { Component } from 'react';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import locations from '../../locationList';
import classNames from 'classnames';
import { dineLayout, takeLayout, marketLayout } from './config.js';

import logo from '../../images/logo.png';
import dine from '../../images/icons/dine.png';
import take from '../../images/icons/take.png';
import market from '../../images/icons/market.png';

import './MapView.scss';

const Map = ReactMapboxGl({
  accessToken: 'pk.eyJ1IjoiZGFubnlqbWFjIiwiYSI6ImNqdTd5bHJsbDBjYjkzenBkZ3hmcHM0ODgifQ.58yapA-hsVUyUpjDJt6znQ',
  attributionControl: false
});

const dineIcon = new Image(),
  takeIcon = new Image(),
  marketIcon = new Image();
dineIcon.src = dine;
takeIcon.src = take;
marketIcon.src = market;

const images = [['dine', dineIcon], ['take', takeIcon], ['market', marketIcon]];

class MapView extends Component {
  state = {
    hideNav: ''
  };

  componentDidMount() {
    window.addEventListener('resize', this.resize.bind(this));
    this.resize();
  }

  resize() {
    this.setState({ smallMap: window.innerWidth <= 700 });
  }

  render() {
    return (
      <div className={classNames('MapView')}>
        <Map
          style="mapbox://styles/dannyjmac/cjwvtceef217f1cprb9e5at3l"
          center={this.props.place ? this.props.place.position : [-0.106509, 51.51661]}
          containerStyle={{
            height: this.state.smallMap && this.props.place ? '60vh' : '100vh',
            width: '100%',
            transition: '0.4s ease-in-out'
          }}
          zoom={[13]}
        >
          <div className="MapView__logo">
            <img src={logo} alt="" />
          </div>

          <Layer type="symbol" layout={marketLayout} images={images}>
            {locations.market.map((place, index) => (
              <Feature key={place.id} coordinates={place.position} onClick={() => this.props.openFeature(place)} />
            ))}
          </Layer>

          <Layer type="symbol" layout={takeLayout} images={images}>
            {locations.take.map((place, index) => (
              <Feature key={place.id} coordinates={place.position} onClick={() => this.props.openFeature(place)} />
            ))}
          </Layer>

          <Layer type="symbol" layout={dineLayout} images={images}>
            {locations.dine.map((place, index) => (
              <Feature key={place.id} coordinates={place.position} onClick={() => this.props.openFeature(place)} />
            ))}
          </Layer>
        </Map>
      </div>
    );
  }
}

export default MapView;
