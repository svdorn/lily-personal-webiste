import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import Card from "../components/Card";
import Swirl from "../components/Swirl";

import "./Pages.css";

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
            <div className="container">
                <div className="first-frame-container home-first-frame">
                    <Swirl />
                </div>
                <div className="home">
                    <Bio />
                    <Images activeStep={activeStep} handleStepChange={this.handleStepChange} />
                </div>
                <Cards />
            </div>
        );
    }
}

const Cards = () => {
    return (
        <div className="cards">
            <Card
                img="/images/Lily/Bodyshot_1.jpg"
                imgWidth={110}
                title="Dance"
                content="Lily is trained in a variety of styles since a young age, including contemporary, jazz, hip hop, modern, ballet, ballroom, and tap."
                link="/dance"
            />
            <Card
                img="/images/Chapman.jpg"
                imgWidth={150}
                title="Education"
                content="Lily graduated from Chapman University in May 2019 with a BFA in Dance Performance and a minor in Studio Art."
                link="/about"
            />
            <Card
                img="/images/Lily/Danceshot_2.jpg"
                imgWidth={110}
                title="Choreography"
                content=" During her time at Chapman, Lily has choreographed for multiple shows, such as Spring Dance Concert, Concert Intime, and Chapman Dance Alliance."
                link="/choreography"
            />
        </div>
    );
};

const Bio = () => {
    return (
        <div className="bio-container">
            <div>
                Lily is an artist in all of its meaning. She aspires to connect with others through
                her emotionally driven work. She graduated with a Bachelor of Fine Arts in dance
                performance and a minor in studio art from Chapman University in May 2019. From
                performing live on stage to producing/directing her own short dance films, you can
                find her involved in a variety of media. Lily currently lives in Los Angeles and is
                signed with Go 2 Talent Agency.
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
        label: `Headshot_1`,
        imgPath: "/images/Lily/Headshot_1.jpg"
    },
    {
        label: `Bodyshot_1`,
        imgPath: "/images/Lily/Bodyshot_1.jpg"
    },
    {
        label: `Danceshot_1`,
        imgPath: "/images/Lily/Danceshot_1.jpg"
    },
    {
        label: `Headshot_2`,
        imgPath: "/images/Lily/Headshot_2.jpg"
    },
    {
        label: `Bodyshot_2`,
        imgPath: "/images/Lily/Bodyshot_2.jpg"
    },
    {
        label: `Danceshot_2`,
        imgPath: "/images/Lily/Danceshot_2.jpg"
    }
];

export default Home;
