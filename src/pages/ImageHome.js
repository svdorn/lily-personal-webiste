import React from "react";

import "./Pages.css";

class ImageHome extends React.Component {
    render() {
        let coverImg = "Cover.jpg";
        if (window.innerWidth < 800) {
            coverImg = "Cover-Mobile.jpg";
        }
        console.log("coverimg: ", coverImg);
        return (
            <div>
                <img src={`/images/${coverImg}`} alt="Cover" className={"image-home "} />
            </div>
        );
    }
}

export default ImageHome;
