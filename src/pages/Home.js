import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import Card from "../components/Card";

import "./Home.css";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

class Home extends React.Component {
    state = {
        activeStep: 0
    };

    handleStepChange = activeStep => {
        this.setState({ activeStep });
    };

    render() {
        const { activeStep } = this.state;

        return (
            <div className="home-container">
                <div className="first-frame-container">
                    <div className="home">
                        <Bio />
                        <Images activeStep={activeStep} handleStepChange={this.handleStepChange} />
                        <Swirl />
                    </div>
                </div>
                <Cards />
            </div>
        );
    }
}

const Swirl = () => (
    <div className="swirly">
        <svg width={2013} height={172} viewBox="0 0 2013 172">
            <path
                fill="#faf9f7"
                fillrule="evenodd"
                d="M 533.92 171.687 h 1479.53 c -89.242 -1.566 -149.858 -6.098 -181.848 -13.595 c -131.213 -30.753 -189.294 -82.86 -330.47 -91.905 c -179.91 -11.527 -348.43 69.52 -517.539 52.257 C 736.719 93.24 708.709 0.31 528.737 0.31 C 405.42 0.31 315.541 78.92 201.16 141.23 C 149.456 169.393 -0.554 171.686 -0.554 171.686 H 533.92 Z"
            />
        </svg>
    </div>
);

const Cards = () => {
    return (
        <div className="cards">
            <Card title="Education" content="Lily studied at Chapman University" />
        </div>
    );
};

const Bio = () => {
    return (
        <div className="bio-container">
            <h1>Lily Thongnuam</h1>
            <div>
                Lily is currently graduating with a Bachelor of Fine Arts in dance performance and a
                minor in studio art at Chapman University. Lily can be seen as a featured dancer on
                CBS’s “The Bold and the Beautiful” alongside Nia Sioux. She has worked on short
                films involving dance and has produced/directed her own dance films. After
                graduation, Lily looks forward moving to Los Angeles to continue to pursue a
                commercial dance career.
            </div>
            <HomeButton />
        </div>
    );
};

const Images = ({ activeStep, handleStepChange }) => {
    return (
        <AutoPlaySwipeableViews
            axis="x"
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
            className="images-container"
        >
            {images.map((step, index) => (
                <div key={step.label}>
                    <Image activeStep={activeStep} step={step} index={index} />
                </div>
            ))}
        </AutoPlaySwipeableViews>
    );
};

const Image = ({ activeStep, step, index }) =>
    Math.abs(activeStep - index) <= 2 ? (
        <img className="image" src={step.imgPath} alt={step.label} />
    ) : null;

const HomeButton = () => (
    <div className="button-container">
        <Button component={GoToDance} className="button" size="large">
            Let{"'"}s Dance
        </Button>
    </div>
);

const GoToDance = props => <Link to="/dance" {...props} />;

const images = [
    {
        label: `Headshot`,
        imgPath: "/images/Lily/Headshot.jpg"
    },
    {
        label: `Bodyshot_2`,
        imgPath: "/images/Lily/Bodyshot_2.jpg"
    },
    {
        label: `Danceshot_1`,
        imgPath: "/images/Lily/Danceshot_1.jpg"
    },
    {
        label: `Danceshot_2`,
        imgPath: "/images/Lily/Danceshot_2.jpg"
    }
];

export default Home;
