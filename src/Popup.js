import React from "react";
import { search } from "./icons";




function Popup(props){
    return(
        <div className="popUp">
         <div className="popup-box">
           <button className="close-icon" onClick={props.handleClose}>x</button>
           <div className="popup-search">
           {search}
           <input type="search" className="popupInput" placeholder="Search for GIFs" />
           </div> 
         </div>
         <p>{props.content}</p>
        </div>
    )
}

export default Popup;