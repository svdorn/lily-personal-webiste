import React from "react";
import Swirl from "../components/Swirl";

import "./Pages.css";

class Gallery extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="first-frame-container dance-first-frame">
                    <h1 className="header">Gallery</h1>
                    <Swirl />
                </div>
                <GallaryImages />
            </div>
        );
    }
}

const imgs = [
    {
        images: ["Pictures/Sunset_1.jpeg", "Pictures/Falling.jpg", "Pictures/BrickWall.jpg"]
    },
    {
        images: ["Pictures/Gray_1.jpg", "Art/Flower.jpg", "Pictures/Danceshot.jpg"]
    },
    {
        images: ["Pictures/Sunset_2.jpg", "Pictures/Gray_2.jpg", "Art/Faces.jpg"]
    },
    {
        images: ["Art/Turtle.jpg", "Pictures/Glitter_2.jpg", "Pictures/Gray_3.jpg"]
    },
    {
        images: ["Pictures/Gray_4.jpg", "Pictures/Sunset_3.jpg", "Pictures/Glitter_2.jpg"]
    },
    {
        images: ["Pictures/Sunset_3.jpg", "Pictures/Headshot.jpg"]
    }
];

const GallaryImages = () => {
    return (
        <div className="gallery">
            {imgs.map(row => {
                return <Row images={row} />;
            })}
        </div>
    );
};

const Row = ({ images }) => {
    return (
        <div className="gallery-row">
            {images.images.map(img => {
                return <Image image={img} />;
            })}
        </div>
    );
};

const Image = ({ image }) => (
    <div className="gallery-image-container">
        <img src={`/images/Gallery/${image}`} alt={image} className="gallery-image" />
    </div>
);

export default Gallery;
