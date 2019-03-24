import React, { Component } from "react";
import { Link } from "react-router-dom";
import CardContainer from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import "./Card.css";

class Card extends Component {
    render() {
        const { content, img, imgWidth, link, title } = this.props;

        return (
            <Link to={link}>
                <CardContainer className="card">
                    <CardMedia className="media" image={img} style={{ width: imgWidth }} />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {title}
                        </Typography>
                        <Typography component="p">{content}</Typography>
                    </CardContent>
                </CardContainer>
            </Link>
        );
    }
}

export default Card;
