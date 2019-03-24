import React from "react";
import Swirl from "../components/Swirl";
import YouTube from "react-youtube";

import "./Pages.css";

class Choreography extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="first-frame-container dance-first-frame">
                    <h1 className="header">Choreography</h1>
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

const videoIds = ["6ERPHK5OphA", "E25ajKqx7Vs", "XAmql0AR3Zg", "UloxCh4tQsg"];

export default Choreography;
