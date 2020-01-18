import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Swirl from "../components/Swirl";

import "./Pages.css";

class About extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="first-frame-container about-first-frame">
                    <h1 className="header hold-header">About Lily</h1>
                    <Swirl />
                </div>
                <div className="philosophy">
                    <Bio />
                    <span>
                        <img src="/images/Lily/Headshot_2.jpg" alt="Headshot_2" />
                        <div>
                            <Button component={GoToContact} size="large">
                                Send An Inquiry
                            </Button>
                        </div>
                    </span>
                </div>
                <Resume />
            </div>
        );
    }
}

const Bio = () => {
    return (
        <Paper elevation={3} square={false}>
            <div>
                <b>Bio</b>
            </div>
            <p>
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
                ensemble.
            </p>
            <p>
                Lily has a strong passion for teaching and choreographing. During her time at
                Chapman, she has choreographed for multiple shows, such as Spring Dance Concert,
                Concert Intime, and Chapman Dance Alliance. Pieces that she has choreographed for
                dance studios have received many awards including choreography, technical, and
                musicality awards. As a student, she participates in prestigious organizations like
                National Dance Education Organization. Lily is also a certified yoga instructor and
                is actively teaching in the fitness community.
            </p>
            <p>
                In the commercial world, she can be seen as a featured dancer on CBS’s “The Bold and
                the Beautiful” alongside Nia Sioux. She has worked on short films involving dance
                and has produced/directed her own dance films. Lily currently lives in Los Angeles
                and is signed with Go 2 Talent Agency.
            </p>
        </Paper>
    );
};

const Resume = () => {
    return (
        <div className="resume">
            <h1>Resume</h1>
            <img src="/images/Resume.jpg" alt="Lily Thongnuam Resume" />
            <div className="upon-request">
                Available upon request - CV, headshots, work resume, references, school transcript,
                dance films, and/or class videos.
            </div>
        </div>
    );
};

const GoToContact = props => <Link to="/contact" {...props} />;

export default About;
