import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

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
                <div className="home">
                    <Bio />
                    <Images activeStep={activeStep} handleStepChange={this.handleStepChange} />
                </div>
            </div>
        );
    }
}

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
            Let's Dance
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
