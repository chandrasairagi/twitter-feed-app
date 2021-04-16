import React from "react";
import "./Widget.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
 
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="widgets__widgetContainer">
    

      

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="Sweditapp"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={"https://sweditapp.com/"}
          options={{ text: "#swedit is awesome", via: "Sweditapp" }}
        />
      </div>
    </div>
  );
}

export default Widgets;