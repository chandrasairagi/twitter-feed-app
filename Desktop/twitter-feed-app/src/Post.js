import React,{useState,forwardRef} from 'react';
import {Avatar } from "@material-ui/core";
import './Post.css';
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";
import ReactTimeAgo from 'react-time-ago';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import  Submenu from './Submenu';
import TurnedInNotIcon from '@material-ui/icons/TurnedInNot';
import FavoriteIcon from '@material-ui/icons/Favorite';
import db from './firebase'



const  Post = forwardRef(({displayName,userName,verified,text,image,avatar,date},ref)=> {
    const [more, setMore] = useState(false);
    const [likeActive, setLikeActive] = useState(false);
    
    
    return (
        <div className="post" ref={ref}  >
            <div className="post-avatar"><Avatar src={avatar}/></div>
            <div className="post-body">
                <div className="post-header">
                    <div className="post-headerText">
                        <h3>
                           {displayName}
                        </h3>
                        <p>{verified && <CheckCircleIcon className="post-badge" />}</p>
                        <p><span className="user-name">{userName}</span></p>
                        <ReactTimeAgo date={date} locale="en-US" timeStyle="twitter" className="time-ago"/>
                       
                        <div className="post-more">
                         <MoreHorizIcon  onClick={()=>setMore(!more)} className="post-more-icon" />
                         {more && <Submenu date={date}/>}
                         
                         </div>
                        
                    </div>
                    
                    <div className="post-headerDescription">
                       {text}
                    </div>
                </div>
                <img src={image} alt="" />
                <div className="post-footer">
            <ChatBubbleOutlineIcon fontSize="small" className="chat-icon"/>
            <RepeatIcon fontSize="small" className="retweet-icon"/>
            { likeActive ? <FavoriteIcon fontSize="small" className="filled-like-icon" onClick={()=>setLikeActive(false)}/> :
                <FavoriteBorderIcon fontSize="small" className="like-icon" onClick={()=>setLikeActive(true)} />
            }
            <TurnedInNotIcon fontSize="small" className="bookmark-icon"/>
            
                </div>
                 

            </div>
          

            
        </div>
    )
}
);

export default Post
