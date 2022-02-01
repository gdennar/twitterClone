import React from "react";
import './tweetPost.css';
import {reply, retweet, like, share} from './icons';


function TweetPost({displayName, userName, timeStamp, text, gif, image}){
    
   const currentTimeInMilliseconds=Date.now();;
    
    return (
        <div className="tweetPost">
            <div className="sidebarphoto">
            <img alt="Golden Dennar" 
                draggable="true" 
                src={image} />
            </div>

            <div className="tweetBody">
                <div className="tweetHeader">
                    <div className="tweetHeadertext">
                        <h3> 
                            {displayName}{" "}
                            <span className="tweetSubhead">  @{userName}</span>
                            <span className="tweetTimestamp"> {currentTimeInMilliseconds}</span>
                            
                        </h3>
                    </div>
                    <div className="tweetDescription">
                        <p>{text}</p>
                    </div>
                </div>
                <img src={gif} alt="gif" />
                <div className="tweetFooter">
                    {reply}
                    {retweet}
                    {like}
                    {share}

                </div>
            </div>

            
            

            


        </div>
    )
}

export default TweetPost;