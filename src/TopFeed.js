import React from "react";
import { topTweet, media, gif, emoji, search} from './icons';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from "react";
import axios from "axios";
import db from './firebase';
import Popup from "./Popup";
import './popUp.css';



function TopFeed(props){
    const [tweetMessage, setTweetMessage] = useState(" ");  //For tweet
    const [tweetGif, setTweetGif] = useState(" ");  //For gif
    const [isOpen, setIsOpen] = useState(false);  //For popUp
    
  
    
    const sendTweet = e => {
        e.preventDefault();

        db.collection("posts").add({
            displayName: "Golden Dennar",
            userName: "dennie_gold",
            text: tweetMessage,
            image: "https://pbs.twimg.com/profile_images/979300286891286529/D10yPff6_bigger.jpg",
            gif: "https://media.giphy.com/media/y10mc7MAZRO0MoIvFc/giphy.gif"
        });

        setTweetMessage("");
    }


//For Toggle Popup Button
const togglePopup = e => {
    e.preventDefault();
      setIsOpen(!isOpen);
   }


// Giphy API Call


    useEffect(()=>{
        const fetchData = async () => {
            const results = await axios('https://api.giphy.com/v1/gifs/trending', {
                params: {
                    api_key: "50fXYF4uigHWRc4OTxFTGHMHsc75kPc6",
                    limit: 22
                }
            });
            console.log(results.data.data[0].url)      
            setTweetGif(results.data.data[0].url);               
        };
        fetchData();
    }, [])






    return(

        
        
        <div className="createTweet">

            <div className="topFeed">
                <h2>Home</h2>
                {topTweet}
            </div>

            <div className="tweetBox">
            <div className="sidebarphoto">
            <img alt="Golden Dennar" 
                draggable="true" 
                src="https://pbs.twimg.com/profile_images/979300286891286529/D10yPff6_bigger.jpg" />
            </div>

            <div className = "tweetField">
                <form>
                    <input 
                    value={tweetMessage}
                    onChange={(e) => setTweetMessage(e.target.value)}
                    type= "text" 
                    className="inputTweet" 
                    placeholder="What is happening?"></input>
                </form>
            </div>
            </div>


            <div className="tweetFieldbtns">
                <div className="tweetEmoji">   
                {media}
                <button class="gifBtn" 
                type="button" 
                onClick={togglePopup}
                ><img src={tweetGif}/>
                
                </button>

                {emoji}
                </div>


                <div className="tweetBoxFooter">
                <Button onClick={sendTweet} 
                className = "tweetSubmitBtn" 
                variant="primary"
                >Tweet</Button>
                </div> 

               

            </div>
            {isOpen && <Popup 
                handleClose={togglePopup}
                content = "This is my content"/> }
            
            </div>   


    )
}

export default TopFeed;