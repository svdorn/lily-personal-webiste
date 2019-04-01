import React from "react";
import Dialog from "@material-ui/core/Dialog";
import Swirl from "../components/Swirl";

import "./Pages.css";

class Gallery extends React.Component {
    state = {
        // the image to be displayed in the dialog
        image: null,
        open: false
    };

    // close the dialog
    handleClose = () => {
        this.setState({ open: false });
    };

    // if an image is clicked, open dialog
    handleClick = image => {
        this.setState({ image, open: true });
    };

    render() {
        return (
            <div className="container">
                <div className="first-frame-container gallery-first-frame">
                    <h1 className="header">Gallery</h1>
                    <Swirl />
                </div>
                <GallaryImages handleClick={this.handleClick} />
                <ImgDialog
                    handleClose={this.handleClose}
                    image={this.state.image}
                    open={this.state.open}
                />
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
        images: ["Pictures/Danceshot_1.jpg", "Pictures/Bodyshot_2.jpg", "Pictures/Danceshot_2.jpg"] //
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
        images: ["Pictures/Bodyshot_1.jpg", "Art/Person.jpg"] //
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
        images: ["Art/Rose.jpg", "Pictures/Stage_21.jpeg"]
    },
    {
        images: ["Pictures/Group.jpg", "Pictures/Sunset_2.jpg", "Pictures/ColorWall.jpg"]
    },
    {
        images: ["Art/Wolf.jpg", "Pictures/BrickWall.jpg"]
    }
];

const descriptors = [
    {
        image: "Pictures/Snake.jpg",
        description:
            "photography from “Cold Heart” Technology for Live Performance show on Cirque du Soleil’s “Zumanity” stage in Las Vegas, NV",
        width: 500
    },
    {
        image: "Pictures/Intense.jpg",
        description: "photography from Works in Progress, choreography by Daniel Huyhn",
        width: 500
    },
    {
        image: "Pictures/BrickWall_2.jpg",
        description: "taken by Ellie Edwards",
        width: 500
    },
    {
        image: "Pictures/WhiteDress.jpg",
        description: "taken by Jen Kopka",
        width: 500
    },
    {
        image: "Art/Monkeys.jpg",
        description: "“Passing Down Wisdom”, ceramic sculpture",
        width: 500
    },
    {
        image: "Pictures/Bodyshot_1.jpg",
        description: "photography by Alissa Roseborough",
        width: 400
    },
    {
        image: "Pictures/Bodyshot_2.jpg",
        description: "photography by Alissa Roseborough",
        width: 400
    },
    {
        image: "Pictures/Danceshot_1.jpg",
        description: "photography by Alissa Roseborough",
        width: 400
    },
    {
        image: "Pictures/Danceshot_2.jpg",
        description: "photography by Alissa Roseborough",
        width: 400
    },
    {
        image: "Art/Colorful.jpg",
        description: "“inside my mind”, watercolor, screen printing, pen",
        width: 550
    },
    {
        image: "Art/Schmear.jpg",
        description: "“Cascade Disarray”, acrylic, modeling paste",
        width: 550
    },
    {
        image: "Pictures/Cirque_2.jpg",
        description:
            "photography from “This is a Missy Elliot One-Time Exclusive” Technology for Live Performance show, on Cirque du Soleil’s “Zumanity” stage in Las Vegas, NV",
        width: 650
    },
    {
        image: "Pictures/Cirque_3.jpg",
        description:
            "photography from “This is a Missy Elliot One-Time Exclusive” Technology for Live Performance show, on Cirque du Soleil’s “Zumanity” stage in Las Vegas, NV",
        width: 370
    },
    {
        image: "Pictures/Cirque_1.jpg",
        description:
            "photography from “This is a Missy Elliot One-Time Exclusive” Technology for Live Performance show, on Cirque du Soleil’s “Zumanity” stage in Las Vegas, NV",
        width: 650
    },
    {
        image: "Pictures/Sunset_3.jpg",
        description: "yoga on the lake in Madison, Wisconsin",
        width: 400
    },
    {
        image: "Pictures/Sunset_1.jpeg",
        description: "yoga on the lake in Madison, Wisconsin",
        width: 400
    },
    {
        image: "Pictures/Glitter_1.jpg",
        description: "photography from film “Break the Silence” by Liandra Davis",
        width: 600
    },
    {
        image: "Pictures/Kick.jpg",
        description: "taken by Jen Kopka",
        width: 350
    },
    {
        image: "Pictures/Glitter_2.jpg",
        description: "photography from film “Break the Silence” by Liandra Davis",
        width: 600
    },
    {
        image: "Art/Person.jpg",
        description:
            "“Trepidation & Misgivings part II”, from a dance work to an artwork; pencil, ink, marker, acrylic",
        width: 400
    },
    {
        image: "Art/Rose.jpg",
        description: "“for grandma”, inspired by Salvador Dali, acrylic",
        width: 400
    },
    {
        image: "Pictures/Harmony_1.jpeg",
        description: "photography from film “Irresistible: Irrepressible”",
        width: 600
    },
    {
        image: "Pictures/Lift.jpg",
        description:
            "photography from “Emerging Euphoria”, from Chapman Dance Alliance showcase, taken by Lindsey Sandri",
        width: 550
    },
    {
        image: "Pictures/Harmony_2.jpeg",
        description: "photography from film “Irresistible: Irrepressible”",
        width: 600
    },
    {
        image: "Pictures/Jump_1.jpg",
        description: "photography by Kimberly Kirn Arneson",
        width: 550
    },
    {
        image: "Pictures/Jump_2.jpg",
        description: "photography by Kimberly Kirn Arneson",
        width: 550
    },
    {
        image: "Art/Faces.jpg",
        description: "“Bodies Fall”, acrylic",
        width: 600
    },
    {
        image: "Art/Turtle.jpg",
        description: "“Unattainable World”, acrylic on wood panel",
        width: 600
    },
    {
        image: "Art/Flower.jpg",
        description: "“Summer Winds”, pastel, acrylic, marker",
        width: 600
    },
    {
        image: "Pictures/Jumps.jpg",
        description: "photography from Concert Intime choreography by Spencer Biggs",
        width: 600
    },
    {
        image: "Pictures/Cast.jpg",
        description: "photography from Works in Progress choreography by Daniel Huyhn",
        width: 600
    },
    {
        image: "Pictures/Yoga.jpg",
        description: "yoga at Dragonfly Hot Yoga, Madison, WI",
        width: 550
    },
    {
        image: "Pictures/PurpleDress.jpg",
        description: "silhouette in Chicago, IL",
        width: 550
    },
    {
        image: "Pictures/Danceshot.jpg",
        description: "taken by Jen Kopka",
        width: 550
    },
    {
        image: "Pictures/Stage_21.jpeg",
        description: "taken from backstage at “The Bold and the Beautiful”",
        width: 550
    },
    {
        image: "Pictures/Group.jpg",
        description: "photography from Concert Intime choreography by Spencer Biggs",
        width: 550
    },
    {
        image: "Pictures/Sunset_2.jpg",
        description: "yoga on the beach in OC, California",
        width: 450
    },
    {
        image: "Pictures/ColorWall.jpg",
        description: "taken by Lexi McCann",
        width: 550
    },
    {
        image: "Art/Wolf.jpg",
        description: "“Untitled”; scratchboard, prize award at student showcase",
        width: 550
    },
    {
        image: "Pictures/BrickWall.jpg",
        description: "taken by Ellie Edwards",
        width: 450
    }
];

const ImgDialog = ({ image, handleClose, open }) => {
    const description = descriptors.find(descriptor => {
        return descriptor.image === image;
    });

    return (
        <Dialog
            onClose={handleClose}
            open={open}
            className="gallery-dialog"
            style={{ width: description && description.description ? description.width : null }}
        >
            <img src={`/images/Gallery/${image}`} className="gallery-dialog-img" alt={image} />
            {description && description.description ? (
                <div className="gallery-dialog-description">{description.description}</div>
            ) : null}
        </Dialog>
    );
};

const GallaryImages = ({ handleClick }) => {
    return (
        <div className="gallery">
            {imgs.map(row => {
                return <Row images={row} handleClick={handleClick} />;
            })}
        </div>
    );
};

const Row = ({ images, handleClick }) => {
    return (
        <div className="gallery-row">
            {images.images.map(img => {
                return <Image image={img} handleClick={handleClick} />;
            })}
        </div>
    );
};

const Image = ({ image, handleClick }) => (
    <div className="gallery-image-container" onClick={() => handleClick(image)}>
        <img src={`/images/Gallery/${image}`} alt={image} className="gallery-image" />
    </div>
);

export default Gallery;
