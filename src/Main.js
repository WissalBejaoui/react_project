import React from 'react';
import "./Main.css";
import Categoriesbar from './Videoarea/Categoriesbar'
import Videos from './Videoarea/Videos'

function Main() {
    return (
        <div className="main">
            <Categoriesbar/>
            <hr/>
            <div className="videoArea">
                <Videos
                    path="https://www.youtube.com/watch?v=-w3H6WUN1mUt=859s"
                    title="Let's Build a YouTube Clone with REACT JS for Beginners"
                    channelName="React Js Developer"
                    channelImage="	https://yt3.ggpht.com/ytc/AKedOLQNNdMoVv4oz_Owgw-ndHJqr2tc5Tvn0MmT-QKc=s88-c-k-c0x00ffffff-no-rj"
                    views="2,843 views"
                    timestamp="Sep 25, 2020"/>
                <Videos
                    path="https://www.youtube.com/watch?v=NT299zIk2JYt=6586s"
                    title="Let's Build a YouTube Clone with REACT JS for Beginners"
                    channelName="Clever Programmer"
                    channelImage="	https://yt3.ggpht.com/ytc/AKedOLRbdv3Di8paQyrgMF_VwFXPkhwVzcW59Vgo8dTsyw=s88-c-k-c0x00ffffff-no-rj"
                    views="206,321 views"
                    timestamp="Streamed 1 year ago"/>

                <Videos
                    path="https://www.youtube.com/watch?v=RLCqtagfbyI"
                    title="3- Application React via CDN, JSX, ES6 et Babel - (Formation React pour Débutants)"
                    channelName="Donkey Geek"
                    channelImage="https://yt3.ggpht.com/ytc/AKedOLR2Bz3rSTPjCRQ4Frx_RFoaWWtrJwcjG9KjI8y89w=s88-c-k-c0x00ffffff-no-rj"
                    views="29,321 views"
                    timestamp="Sep 9, 2019"/>
               
                <Videos
                    path="https://www.youtube.com/watch?v=w7ejDZ8SWv8"
                    title="React JS Crash Course 2021"
                    channelName="Traversy Media"
                    channelImage="	https://yt3.ggpht.com/ytc/AKedOLSxHOOxxa9Af8Bfb2XMop3lm4tor9bViWiC-d5aaw=s88-c-k-c0x00ffffff-no-rj"
                    views="1,679,246 views"
                    timestamp="Jan 18, 2021"/>
    
                <Videos
                    path="https://www.youtube.com/watch?v=poQXNp9ItL4"
                    title="Redux Tutorial - Learn Redux from Scratch"
                    channelName="Programming with Mosh"
                    channelImage="https://yt3.ggpht.com/tBEPr-zTNXEeae7VZKSZYfiy6azzs9OHowq5ZvogJeHoVtKtEw2PXSwzMBKVR7W0MI7gyND8=s176-c-k-c0x00ffffff-no-rj"
                    views="580,982 views"
                    timestamp="1 year ago"/>
                
                <Videos
                    path="https://www.youtube.com/watch?v=HJAwAKwFX-A"
                    title="Learn how to use GitHub for Beginners | GitHub Tutorial"
                    channelName="techTFQ"
                    channelImage="https://yt3.ggpht.com/ICr89DNdy4Xe3eA4ceTDJ7ty18uM7bf5Xmk2b-aQsSAazCtqzSqEvPFQEXiENlmVq92MGNwj9w=s88-c-k-c0x00ffffff-no-rj"
                    views="5,975 views"
                    timestamp="Aug 6, 2021"/>
                
                <Videos
                    path="https://www.youtube.com/watch?v=w7ejDZ8SWv8"
                    title="React JS Crash Course 2021"
                    channelName="Traversy Media"
                    channelImage="https://yt3.ggpht.com/ytc/AKedOLSxHOOxxa9Af8Bfb2XMop3lm4tor9bViWiC-d5aaw=s88-c-k-c0x00ffffff-no-rj"
                    views="1,679,246 views"
                    timestamp="Jan 18, 2021"/>
                <Videos
                    path="https://www.youtube.com/watch?v=iUCyU_U0J2Elist=PL4cUxeGkcC9joIM91nLzd_qaH_AimmdAR"
                    title="Bootstrap 5 Crash Course Tutorial #3 - Colours Typography"
                    channelName="The Net Ninja"
                    channelImage="https://yt3.ggpht.com/ytc/AKedOLT3v89U-2iVX-78hqPk1-lBIduTcljrKLIH9YJg1A=s88-c-k-c0x00ffffff-no-rj"
                    views="28,106 views"
                    timestamp="Jun 15, 2021"/>
            </div> 
        </div> 
    )
}

export default Main
