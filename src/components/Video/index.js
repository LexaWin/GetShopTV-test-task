import React from 'react';
import video from '../../assets/video/test.mp4';

export default class Video extends React.Component {
  constructor(props) {
    super(props);

    this.video = null;
  }

  componentDidMount() {
    this.video = document.querySelector('.video');
    this.video.play();

    this.props.bannerControl();
  }

  render() {
    return (
      <video className='video' width='1280' height='720' muted>
        <source src={video} type='video/mp4' />
      </video>
    );
  }
}