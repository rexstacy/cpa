import React from "react";
import ReactPlayer from "react-player";

export default function ResponsivePlayer(props) {

      return (
        <div className='player-wrapper'>
          <ReactPlayer controls
            className='react-player'
            url={props.url}
            width='90%'
            height='90%'
          />
        </div>
      );

  }