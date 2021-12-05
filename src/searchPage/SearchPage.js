import React from 'react'
import './SearchPage.css'
import TuneIcon from '@mui/icons-material/Tune';
import VideoRow from './VideoRow'
//import ChannelRow from './ChannelRow'

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="filtersIcon">
                <TuneIcon sx={{ fontSize: 30 }}/>
                <h2>FILTERS</h2>
            </div> 
            
{/*
            <div className="channelRow">
                <h2>Channel Row</h2>
                <ChannelRow
                channelImage=""
                channelName=""
                verified
                subs=""
                nbrVideo=""
                desc=""
                />
            </div> 
*/}
<hr/>
            <div className="videoRow">
            <VideoRow
                path="https://www.youtube.com/watch?v=RLCqtagfbyI"
                title="3- Application React via CDN, JSX, ES6 et Babel - (Formation React pour Débutants)"
                views="29,321 views"
                timestamp="Sep 9, 2019"
                channelImage="https://yt3.ggpht.com/ytc/AKedOLR2Bz3rSTPjCRQ4Frx_RFoaWWtrJwcjG9KjI8y89w=s88-c-k-c0x00ffffff-no-rj"
                channelName="Donkey Geek"
                verified
                desc="Dans cette vidéo, j’aborde avec vous les points suivants"
                /> 
            </div>  
            <div className="videoRow">
            <VideoRow
                path="https://www.youtube.com/watch?v=RLCqtagfbyI"
                title="3- Application React via CDN, JSX, ES6 et Babel - (Formation React pour Débutants)"
                views="29,321 views"
                timestamp="Sep 9, 2019"
                channelImage="https://yt3.ggpht.com/ytc/AKedOLR2Bz3rSTPjCRQ4Frx_RFoaWWtrJwcjG9KjI8y89w=s88-c-k-c0x00ffffff-no-rj"
                channelName="Donkey Geek"
                verified
                desc="Dans cette vidéo, j’aborde avec vous les points suivants"
                /> 
            </div>  
            <div className="videoRow">
            <VideoRow
                path="https://www.youtube.com/watch?v=RLCqtagfbyI"
                title="3- Application React via CDN, JSX, ES6 et Babel - (Formation React pour Débutants)"
                views="29,321 views"
                timestamp="Sep 9, 2019"
                channelImage="https://yt3.ggpht.com/ytc/AKedOLR2Bz3rSTPjCRQ4Frx_RFoaWWtrJwcjG9KjI8y89w=s88-c-k-c0x00ffffff-no-rj"
                channelName="Donkey Geek"
                verified
                desc="Dans cette vidéo, j’aborde avec vous les points suivants"
                /> 
            </div>  
            <div className="videoRow">
            <VideoRow
                path="https://www.youtube.com/watch?v=RLCqtagfbyI"
                title="3- Application React via CDN, JSX, ES6 et Babel - (Formation React pour Débutants)"
                views="29,321 views"
                timestamp="Sep 9, 2019"
                channelImage="https://yt3.ggpht.com/ytc/AKedOLR2Bz3rSTPjCRQ4Frx_RFoaWWtrJwcjG9KjI8y89w=s88-c-k-c0x00ffffff-no-rj"
                channelName="Donkey Geek"
                verified
                desc="Dans cette vidéo, j’aborde avec vous les points suivants"
                /> 
            </div>  
            <div className="videoRow">
            <VideoRow
                path="https://www.youtube.com/watch?v=RLCqtagfbyI"
                title="3- Application React via CDN, JSX, ES6 et Babel - (Formation React pour Débutants)"
                views="29,321 views"
                timestamp="Sep 9, 2019"
                channelImage="https://yt3.ggpht.com/ytc/AKedOLR2Bz3rSTPjCRQ4Frx_RFoaWWtrJwcjG9KjI8y89w=s88-c-k-c0x00ffffff-no-rj"
                channelName="Donkey Geek"
                verified
                desc="Dans cette vidéo, j’aborde avec vous les points suivants"
                /> 
            </div>  
            <div className="videoRow">
            <VideoRow
                path="https://www.youtube.com/watch?v=RLCqtagfbyI"
                title="3- Application React via CDN, JSX, ES6 et Babel - (Formation React pour Débutants)"
                views="29,321 views"
                timestamp="Sep 9, 2019"
                channelImage="https://yt3.ggpht.com/ytc/AKedOLR2Bz3rSTPjCRQ4Frx_RFoaWWtrJwcjG9KjI8y89w=s88-c-k-c0x00ffffff-no-rj"
                channelName="Donkey Geek"
                verified
                desc="Dans cette vidéo, j’aborde avec vous les points suivants"
                /> 
            </div>             
        </div>   
     
    )
}

export default SearchPage
