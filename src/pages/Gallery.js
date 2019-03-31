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
        images: ["Pictures/Snake.jpg", "Pictures/Intense.jpg", "Pictures/BrickWall_2.jpg"] //
    },
    {
        images: ["Pictures/WhiteDress.jpg", "Art/Monkeys.jpg"] //
    },
    {
        images: ["Pictures/Gray_1.jpg", "Pictures/Gray_2.jpg", "Pictures/Gray_3.jpg"] //
    },
    {
        images: ["Art/Colorful.jpg", "Art/Schmear.jpg"] //
    },
    {
        images: ["Pictures/Cirque_2.jpg", "Pictures/Cirque_3.jpg", "Pictures/Cirque_1.jpg"] //
    },
    {
        images: ["Pictures/Sunset_3.jpg", "Pictures/Sunset_1.jpeg"] //
    },
    {
        images: ["Pictures/Glitter_1.jpg", "Pictures/Kick.jpg", "Pictures/Glitter_2.jpg"] //
    },
    {
        images: ["Art/Person.jpg", "Art/Rose.jpg"] //
    },
    {
        images: ["Pictures/Harmony_1.jpeg", "Pictures/Lift.jpg", "Pictures/Harmony_2.jpeg"] //
    },
    {
        images: ["Pictures/Jump_1.jpg", "Pictures/Jump_2.jpg"] //
    },
    {
        images: ["Art/Faces.jpg", "Art/Turtle.jpg", "Art/Flower.jpg"] //
    },
    {
        images: ["Pictures/Jumps.jpg", "Pictures/Cast.jpg"]
    },
    {
        images: ["Pictures/Yoga.jpg", "Pictures/PurpleDress.jpg", "Pictures/Danceshot.jpg"] //
    },
    {
        images: ["Pictures/Gray_4.jpg", "Pictures/Stage_21.jpeg"]
    },
    {
        images: ["Pictures/Group.jpg", "Pictures/Sunset_2.jpg", "Pictures/ColorWall.jpg"]
    },
    {
        images: ["Art/Wolf.jpg", "Pictures/BrickWall.jpg"]
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
