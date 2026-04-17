import React, { useEffect, useRef } from 'react';
import video from '../../assets/video/test.mp4';

interface VideoProps {
  canPlayVideo: boolean;
  bannerControl(): void;
}

export const Video = ({ canPlayVideo, bannerControl }: VideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setTimeout(bannerControl, 5000);
  }, [bannerControl]);

  useEffect(() => {
    if (canPlayVideo) {
      videoRef.current?.play();
    } else {
      videoRef.current?.pause();
    }
  }, [canPlayVideo]);

  return (
    <video
      ref={videoRef}
      data-testid="video"
      className="video"
      width="1280"
      height="720"
      muted
    >
      <source src={video} type="video/mp4" />
    </video>
  );
};
