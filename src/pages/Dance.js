import React from "react";
import Swirl from "../components/Swirl";
import YouTube from "react-youtube";

import "./Pages.css";

class Dance extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="first-frame-container dance-first-frame">
                    <h1 className="header">Dance</h1>
                    <div className="intro">
                        Lily has experience in both the commercial and concert side of dance. She is
                        well trained in a variety of styles, including hip hop, jazz, contemporary,
                        ballroom, modern, and ballet. Check out some some of her experience below!
                    </div>
                    <Swirl />
                </div>
                <div className="videos">
                    <Videos />
                </div>
            </div>
        );
    }
}

const opts = {
    playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
        iv_load_policy: 3
    }
};

const Videos = () => (
    <div>
        {videoIds.map(videoId => {
            return (
                <YouTube className="video" key={videoId} videoId={videoId.toString()} opts={opts} />
            );
        })}
    </div>
);

const videoIds = [
    "CR7Mqgipnbc",
    "eR_SrN8xz90",
    "1YUkzn6SWCI",
    "AeM2KMAksQ8",
    "0no8zNM05uk",
    "J7yqAfRpEi0"
];

export default Dance;
