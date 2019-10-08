import React, { Component } from 'react';
import MapView from './components/MapView';
import Sidebar from './components/Sidebar';
import './App.scss';

class App extends Component {
  state = {
    place: null
  };

  openFeature = place => {
    this.setState({ place: place });
  };

  closeSidebar = () => {
    this.setState({ place: null });
  };

  render() {
    return (
      <div className="App">
        <Sidebar close={this.closeSidebar} place={this.state.place} />
        <MapView openFeature={this.openFeature} place={this.state.place} />
      </div>
    );
  }
}

export default App;
