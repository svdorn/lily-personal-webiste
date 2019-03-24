import React from "react";
import Button from "@material-ui/core/Button";
import Swirl from "../components/Swirl";

import { animateScroll } from "react-scroll";

import "./Pages.css";

class About extends React.Component {
    handleClick = () => {
        animateScroll.scrollTo(800);
    };

    render() {
        return (
            <div className="container">
                <div className="first-frame-container about-first-frame">
                    <Bio />
                    <AboutButton handleClick={this.handleClick} />
                    <Swirl />
                </div>
                <Resume />
            </div>
        );
    }
}

const AboutButton = ({ handleClick }) => (
    <div className="button-container">
        <Button onClick={handleClick} className="button" size="large">
            View Resume
        </Button>
    </div>
);

const Bio = () => {
    return (
        <div className="about-bio-container">
            <h1>About Lily</h1>
            <div>
                Lily Thongnuam is originally from Madison, Wisconsin where she started dancing at
                age 3. She is trained in a variety of styles since a young age, including
                contemporary, jazz, hip hop, modern, ballet, ballroom, and tap. She studied at
                Studio One Dance School and competed competitively for years. She graduated from
                Edgewood High School in 2015 where she was co-captain of dance team and president of
                underground society of art. She is currently graduating with a Bachelor of Fine Arts
                in dance performance and a minor in studio art at Chapman University. Throughout her
                dance career, she has had the opportunity to train and work with renowned
                choreographers, such as Jackie Sleight, Ido Tadmor, Alicia Guy, Melaina Larson,
                Steven Sofia, Marissa Osato, and Will Johnston. Through her Technology for Live
                Performance class, she performed/choreographed on the “Zumanity” Cirque du Soleil
                stage in Las Vegas. She also had the pleasure working with acclaimed choreographers
                Hamilton Evans, Nick Lanzisera, Ido Tadmor, and Justin Giles for the dance touring
                ensemble. Lily has a strong passion for teaching and choreographing. During her time
                at Chapman, she has choreographed for multiple shows, such as Spring Dance Concert,
                Concert Intime, and Chapman Dance Alliance. Pieces that she has choreographed for
                dance studios have received many awards including choreography, technical, and
                musicality awards. As a student, she participates in prestigious organizations like
                National Dance Education Organization. Lily is also a certified yoga instructor and
                is actively teaching in the fitness community. In the commercial world, she can be
                seen as a featured dancer on CBS’s “The Bold and the Beautiful” alongside Nia Sioux.
                She has worked on short films involving dance and has produced/directed her own
                dance films. After graduation, Lily looks forward moving to Los Angeles to continue
                to pursue a commercial dance career.
            </div>
        </div>
    );
};

const Resume = () => {
    return (
        <div className="resume">
            <h1>Resume</h1>
            <img src="/images/Resume.jpg" alt="Lily Thongnuam Resume" />
        </div>
    );
};

export default About;
