import React, { useState } from 'react';
import Video from '../Video';
import Banner from '../Banner';
import { Promo } from '../Promo';

import './App.css';

export const App = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [isBannerActive, setIsBannerActive] = useState(false);
  const [isPromoActive, setIsPromoActive] = useState(false);

  const activateBanner = () => {
    setIsBannerActive(true);
  };

  const activatePromo = () => {
    setIsBannerActive(false);
    setIsPromoActive(true);
    setIsVideoPlaying(false);
  };

  const deactivatePromo = () => {
    setIsPromoActive(false);
    setIsVideoPlaying(true);
  };

  return (
    <div className="app">
      <Video bannerControl={activateBanner} canPlayVideo={isVideoPlaying} />

      {isBannerActive && <Banner bannerControl={activatePromo} />}

      {isPromoActive && <Promo promoControl={deactivatePromo} />}
    </div>
  );
};
