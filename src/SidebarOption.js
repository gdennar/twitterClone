import React from "react";


function SidebarOption({ text, Icons}){
    return (
        <div className="sidebarOption" >
            {Icons}
            <p>{text}</p>
        </div>
    )
}

export default SidebarOption;