import React, { useState } from 'react';
import './Header.css';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications'; 
import { Link } from 'react-router-dom';

function Header() {
    //var for the search bar
    const[inputSearch, setInputSearch]= useState('');

    return (
        <div className="header">
            <div className ="left_corner">
            <MenuIcon className="spase_icon" />
            {/*everyyime u click on the youtube icon it will take u to the homepage */}  
            <Link to="/">
                <img className="logo" src="/logo.png" alt="youtubeLogo" />
            </Link>
            </div>
                    
            <div className="center">
                 {/*everytime u type s.th u can search 4 it */}
                <input  onChange={e=>setInputSearch(e.target.value)} value={inputSearch} 
                 placeholder="search" className ="search_bar" type="text" />
                <Link to={`/search/${inputSearch}`}>
                {/*everyyime u click on the serarch icon it will search 
                for the "inpuSearch" u typed and take u to the search page */}
                    <SearchIcon  className="search_button"/>
                </Link>
                <KeyboardVoiceIcon />
            </div>

            <div className ="right_corner">
            <VideoCallIcon className="spase_icon"/>
            <AppsIcon  className="spase_icon"/>
            <NotificationsIcon className="spase_icon" />
            <img className= "avatar" src="/wissal.png" alt="wissal" />
            </div>         
        </div>
    )
}

export default Header;