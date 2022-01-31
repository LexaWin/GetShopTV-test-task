import React from 'react';
import video from '../../assets/video/test.mp4';

export default class Video extends React.Component {
  constructor(props) {
    super(props);

    this.video = null;
  }

  componentDidMount() {
    this.video = document.querySelector('.video');

    if (this.props.canPlayVideo) this.video.play();

    setTimeout(() => {
      this.props.bannerControl();
    }, 5000);
  }

  componentDidUpdate(prevProps) {
    if (this.props.canPlayVideo !== prevProps.canPlayVideo) {
      this.props.canPlayVideo ? this.video.play() : this.video.pause();
    }
  }

  render() {
    return (
      <video className='video' width='1280' height='720' muted>
        <source src={video} type='video/mp4' />
      </video>
    );
  }
}