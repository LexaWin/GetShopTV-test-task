import React from 'react';
import Video from '../Video';
import Banner from '../Banner';
import Promo from '../Promo';

import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isVideoPlaying: true,
      isBannerActive: false,
      isPromoActive: false,
    };

    this.activateBanner = this.activateBanner.bind(this);
    this.activatePromo = this.activatePromo.bind(this);
    this.deactivatePromo = this.deactivatePromo.bind(this);
  }

  activateBanner() {
    this.setState({
      isBannerActive: true,
    });
  }

  activatePromo() {
    this.setState({
      isBannerActive: false,
      isPromoActive: true,
      isVideoPlaying: false,
    });  
  }

  deactivatePromo() {
    this.setState({
      isPromoActive: false,
      isVideoPlaying: true,
    })
  }

  render() {
    return (
      <div className='app'>
        {/* <Promo /> */}
        <Video
          bannerControl={this.activateBanner}
          canPlayVideo={this.state.isVideoPlaying}
        />

        {this.state.isBannerActive && <Banner
          bannerControl={this.activatePromo}
        />}

        {this.state.isPromoActive && <Promo
          promoControl={this.deactivatePromo}
        />}
      </div>
    );
  }
}