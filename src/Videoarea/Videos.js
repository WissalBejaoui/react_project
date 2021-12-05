import React from 'react'
import ReactPlayer from 'react-player/youtube'
import './Videos.css'

function Videos({path, title, channelName, channelImage, views, timestamp}) {
    return (
        <div className="path">
            <ReactPlayer height="140px" width="270px" url={path} controls />
            <div className="channelImage">
             <img
             src={channelImage} 
             alt={channelName} 
             />
             <div className="info"> 
                <h4> {title} </h4> 
                <p>  {channelName} </p>
                <p>  {views} • {timestamp} </p>
             </div>
            </div> 
        </div>
    )
}

export default Videos
