import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

import "./Home.css";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
    {
        label: `Headshot`,
        imgPath: '/images/Lily/Headshot.jpg'
    },
    {
        label: `Bodyshot_2`,
        imgPath: '/images/Lily/Bodyshot_2.jpg'
    },
    {
        label: `Danceshot_1`,
        imgPath: '/images/Lily/Danceshot_1.jpg'
    },
    {
        label: `Danceshot_2`,
        imgPath: '/images/Lily/Danceshot_2.jpg'
    }
];

class Home extends Component {

    state = {
        activeStep: 0
    };

    handleStepChange = activeStep => {
      this.setState({ activeStep });
    };

    render() {
        const { activeStep } = this.state;

        return (
            <div className="home">
                <div className="header">
                    Lily Thongnuam
                </div>
                <AutoPlaySwipeableViews
                  axis='x'
                  index={activeStep}
                  onChangeIndex={this.handleStepChange}
                  enableMouseEvents
                  className="images-container"
                >
                  {images.map((step, index) => (
                    <div key={step.label}>
                      {Math.abs(activeStep - index) <= 2 ? (
                        <img className="image" src={step.imgPath} alt={step.label} />
                      ) : null}
                    </div>
                  ))}
                </AutoPlaySwipeableViews>
            </div>
        );
    }
}

export default Home;
