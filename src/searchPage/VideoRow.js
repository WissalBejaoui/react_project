import React from 'react'
import './videoRow.css'
import ReactPlayer from 'react-player/youtube'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function VideoRow({path, title, views, timestamp, channelImage,
    channelName, verified, desc}) {
    return (
        <div className="videoRow">
            <div className="path">
            <ReactPlayer height="150px" width="300px" url={path} controls />
            </div>  
            <div className="text">
                <h3> {title} </h3> 
                <p>  {views} • {timestamp} </p>
                    <div className="channelSrc">
                        <img src={channelImage} />   
                        <p> {channelName} {verified && <CheckCircleIcon fontSize="small"  />}</p>             
                    </div>
                <p>  {desc} </p>
            </div> 
            
        </div>
    )
}

export default VideoRow
