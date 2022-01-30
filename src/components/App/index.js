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
    });  
  }  

  render() {
    return (
      <div className='app'>
        <Video
          bannerControl={this.activateBanner}
        />

        {this.state.isBannerActive && <Banner
          bannerControl={this.activatePromo}
        />}

        {this.state.isPromoActive && <Promo
          // promoControl={this.handlePopups}
        />}
      </div>
    );
  }
}