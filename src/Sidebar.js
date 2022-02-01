import React from "react";
import { home, messages, profile, more, notifications, bookmarks, lists, explore, twitter } from "./icons";
import SidebarOption from "./SidebarOption";
import Button from 'react-bootstrap/Button';
import SidebarProfile from "./SidebarProfile";

// import 'bootstrap/dist/css/bootstrap.min.css';


function Sidebar() {
    return (
        <div className="sidebar">
            
                {twitter}
                <SidebarOption Icons={home} text="Home" />
                <SidebarOption Icons={explore} text="Explore"/>
                <SidebarOption Icons={notifications} text="Notifications"/>
                <SidebarOption Icons={messages} text="Message"/>
                <SidebarOption Icons={bookmarks} text="Bookmarks"/>
                <SidebarOption Icons={lists} text="Lists"/>
                <SidebarOption Icons={profile} text="Profile"/>
                <SidebarOption Icons={more} text="More"/>
         


                <Button className = "tweetBtn" variant="primary">Tweet</Button>


                <SidebarProfile />


                

        </div>
    );
}


export default Sidebar;