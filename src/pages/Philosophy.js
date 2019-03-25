import React from "react";
import Paper from "@material-ui/core/Paper";
import Swirl from "../components/Swirl";

import "./Pages.css";

class Philosophy extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="first-frame-container philosophy-first-frame">
                    <h1 className="header">Philosophy</h1>
                    <Swirl />
                </div>
                <div className="philosophy">
                    <ArtistStatement />
                    <img src="/images/Lily/Danceshot_1.jpg" alt="Danceshot_1" />
                </div>
            </div>
        );
    }
}

const ArtistStatement = () => (
    <Paper elevation={3} square={false}>
        <div>
            <b>Artist Statement</b>
        </div>
        <p>
            As I walk on stage, I feel my heart beat fast. My senses awaken and adrenaline rushes
            through my blood. The music plays, and I come alive as I express myself through my body
            language. I open myself up to the audience and allow myself to evoke true emotions that
            create the artistic vision that I portray. As a dancer, I strive to connect and
            communicate with others in my movement. There is no better feeling in this world that
            compares to when I am dancing. No matter where I am, no matter how casual or formal it
            is, I make sure every movement is personal. Because I am generating movement through my
            entire body, there is no single performance that is the exact same. There is always
            something new that I explore through this artform, which makes it so therapeutic and
            meditative for me.
        </p>
        <p>
            Every time I dance, I investigate and travel through space in ways that feel natural to
            my body. I envision myself being or telling a story that compliments the music
            composition. I allow the rhythm and lyrics be the momentum to my movement and dynamics.
            I challenge myself to weave in and out of full body and internal movements.
        </p>
        <p>
            {" "}
            Along with dance, I am well versed in other artforms, such as painting, drawing, and
            ceramics. I am constantly inspired by the energy and movement that I find in these
            artforms and use them and dance to feed off each other and create my own art. Like every
            paint stroke on a painting, my body makes vibrant colors and marks through the space.
            Although all artforms are near to my heart, I see dance as a something very special
            because it encompasses all other artforms. I generate movement with my body when I dance
            that creates auditory, visual, and physical art. It is an entirely unique form of art
            and movement that expresses who I am as a human being.
        </p>
    </Paper>
);

export default Philosophy;
