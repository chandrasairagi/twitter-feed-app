import React,{useState} from 'react';
import {Avatar,Button } from "@material-ui/core";
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import './TweetBox.css';
import db from "./firebase"
import 'firebase/database';    // for realtime database
import 'firebase/firestore';  



function TweetBox() {
    const [tweetmsg, setTweetmsg] = useState("");
    const [tweetImage, setTweetImage] = useState("");
     

//   function handleUpload(e) {
    
//   }

let timestamp =  Date.now();

    const addtodb = (e)=>{
        e.preventDefault();
      
        if(tweetmsg){
        db.collection("posts").add({
            displayName:"Swedit",
            userName: "@Sweditapp",
            verified:true,
            text:tweetmsg,
            avatar:"https://sweditapp.com/wp-content/uploads/2020/10/Profile-Image-copy.png",
            image:tweetImage,
            createdAt:timestamp

        });
        setTweetmsg("");
        setTweetImage("");
    }


    }


    return (
        <div className="tweetbox">
            <form action="">
                <div className="tweetbox-input">
                    <Avatar src="https://sweditapp.com/wp-content/uploads/2020/10/Profile-Image-copy.png" className="tweet-avatar"/>
                    <input 
                    value={tweetmsg}
                    onChange={(e)=>setTweetmsg(e.target.value)}
                    type="text" placeholder="What's happening?"/>

                </div>
                 <input 
                 value={tweetImage}
                 onChange={(e)=>setTweetImage(e.target.value)}
                 className="tweetbox-img" type="text" placeholder="Enter Image Url"/>
                 

                <Button className="tweetbox_button" onClick={addtodb}>Tweet</Button>
            </form>

            
        </div>
    )
}

export default TweetBox
