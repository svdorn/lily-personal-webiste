import React, { Component } from "react";
import Avatar from '@material-ui/core/Avatar';
import CardContainer from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import "./Card.css";

class Card extends Component {
    render() {

        const { avatar, content, image, title } = this.props;

        return (
            <CardContainer className="card">
                <CardHeader
                  avatar={
                    <Avatar aria-label={title} className="avatar">
                      R
                    </Avatar>
                  }
                  title={title}
                  titleTypographyProps={{variant: "h4", color: "primary"}}
                />
                <CardMedia
                  className="media"
                  image={image}
                />
                <CardContent>
                  <Typography component="p">
                    {content}
                  </Typography>
                </CardContent>
            </CardContainer>
        );
    }
}

export default Card;
