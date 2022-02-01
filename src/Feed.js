import React, { useEffect, useState } from "react";
import TopFeed from "./TopFeed";
import './topFeed.css';
import TweetPost from './TweetPost';
import './tweetPost.css';
import db from './firebase';


function Feed (){
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection('posts').onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => doc.data()))
        ))

    }, []);



    return(

        <div className="feed">
           <TopFeed />

           {posts.map(post => (
               <TweetPost 
               displayName={post.displayName}
               userName={post.userName}
               text={post.text}
               image={post.image}
               gif={post.gif}
               />
           ))}
           
           
           



        </div>
    )
}

export default Feed;