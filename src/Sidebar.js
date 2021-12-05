import React from 'react'
import SidebarRow from "./SidebarRow";
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LogoutIcon from '@mui/icons-material/Logout';
import './Sidebar.css'
import { Link } from 'react-router-dom';



function Sidebar() {
    return (
        <div className="Sidebar">
            <div className="Home">
            <Link to="/" exact >
                <SidebarRow  Icon={HomeIcon} title="Home" />
            </Link>
            <Link to="/feed/explore">
                <SidebarRow Icon={ExploreIcon} title="Explore" />
            </Link>
            <Link to="/feed/subscriptions">
            <SidebarRow Icon={SubscriptionsIcon} title="Subscription" />
            </Link>
            <hr/>
            <Link to="/feed/library">
            <SidebarRow Icon={VideoLibraryIcon} title="Library"/>
            </Link>
            <Link to="/feed/history">
            <SidebarRow Icon={HistoryIcon} title="History"/>
            </Link>
            <Link to="/">
            <SidebarRow Icon={OndemandVideoIcon} title="Your videos"/>
            </Link>
            <Link to="/playlist/:listItem">
            <SidebarRow Icon={AccessTimeFilledIcon} title="Watch later"/>
            </Link>
            <Link to="/playlist/:listItem">
            <SidebarRow Icon={ThumbUpIcon} title="Liked video"/>
            </Link>
            <SidebarRow Icon={KeyboardArrowDownIcon} title="Show more"/>
            <hr/>
            <SidebarRow Icon={LogoutIcon} title="Log Out"/>
            </div> 
        </div>
    )
}

export default Sidebar
