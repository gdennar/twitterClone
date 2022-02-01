import React from "react";
import { viewBox } from "./icons";

function SidebarProfile(){
    return (
        <div className="sidebarProfile">

            <div className="sidebarphoto">
            <img alt="Golden Dennar" 
                draggable="true" 
                src="https://pbs.twimg.com/profile_images/979300286891286529/D10yPff6_bigger.jpg" />
            </div>

            <div className="profileName">
              <div className="name">Golden Dennar</div>
              <div className="username">@dennie_gold</div>
            </div>

            <div className="sidebarView">
              {viewBox}
            </div>

        </div>

    )
};

export default SidebarProfile;