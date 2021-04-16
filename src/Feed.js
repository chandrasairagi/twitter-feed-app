 import React,{useState,useEffect} from 'react';
 import "./Feed.css";
 import TweetBox from './TweetBox';
 import Post from './Post';
 import db from "./firebase";
 import FlipMove from 'react-flip-move';

function Feed() {
    const [posts,setPosts] = useState([]);



    useEffect(() => {
       db.collection("posts").orderBy('createdAt','desc').onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => doc.data()))
    
    );
      

    }, []);
     

   

    


    return (
        <div className="feed">
            <div className="feed_header"><h2>Home</h2></div>

            <TweetBox/>
            <FlipMove>
          { posts.map( (post) => (
              <Post
              key={post.createdAt}
            displayName={post.displayName}
            userName={post.userName}
            verified={post.verified}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
            date={post.createdAt}
            />
    ))
            
          }
          </FlipMove>

          
            
        </div>
    )
}

export default Feed
