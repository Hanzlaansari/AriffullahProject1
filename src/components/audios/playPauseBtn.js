import React, { Component } from 'react'
import { withMediaProps } from 'react-media-player'

class CustomPlayPause extends Component {
  shouldComponentUpdate({ media }) {
    return this.props.media.isPlaying !== media.isPlaying
  }

  _handlePlayPause = () => {
    this.props.media.playPause()
  }

  render() {
    const { className, style, media } = this.props
    return (
      
      <div  className={className+" column pb"}  onClick={this._handlePlayPause}>
        {media.isPlaying ? <i className={"fa fa-pause fa-fw " + "play-btn"} aria-hidden="true"></i> 
        :
        <i className={"fa fa-play fa-fw " + "play-btn"} aria-hidden="true"></i>
        }
        
      </div>
      
      // <button
       
      //   className={className}
      //   style={style}
      //   onClick={this._handlePlayPause}
      // >
      // </button>
    )
  }
}
export default withMediaProps(CustomPlayPause)