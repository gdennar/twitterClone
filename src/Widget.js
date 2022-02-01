import React from "react";
import { search, settings } from "./icons";
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed,
} from "react-twitter-embed";


function Widget (){
    return (
        <div className="widget">
            <div className="widegtInput">
            {search}
            <input className="searchInput" placeholder="Search Twitter" type="text" />
            </div>

            <div className="widgetContainer">
                <div className="widegetSubhead">
                <h3>Trends for you</h3>
                {settings}
                </div>
                
                <TwitterTweetEmbed /> 
                <a className="twitter-timeline" data-height="300" href="https://twitter.com/JoyceMeyer?ref_src=twsrc%5Etfw">Tweets by JoyceMeyer</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

                <TwitterTimelineEmbed
                  sourceType="profile"
                  screenName="dennie_gold"
                  options={{ height: 300 }}
                 />

                <TwitterShareButton
                  url={"https://facebook.com/dennie_gold"}
                  options={{text: "Hiya! my first react project"}}
                 />
            </div>
        </div>
    )
};

export default Widget;