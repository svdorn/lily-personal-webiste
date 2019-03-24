import React from "react";

const SocialLinks = () => (
    <span>
        <a
            href="https://www.instagram.com/lilythongnuam/"
            target="_blank"
            rel="noopener noreferrer"
        >
            <img
                src="/images/Instagram.png"
                height={25}
                alt="Instagram"
                style={{ marginBottom: "-7px" }}
            />
        </a>
        <a
            href="https://www.youtube.com/channel/UCT-mxa8iyHZwZ-Fcqc7LEeQ"
            target="_blank"
            rel="noopener noreferrer"
        >
            <img
                src="/images/YouTube.png"
                height={25}
                alt="YouTube"
                style={{ marginLeft: "20px", marginBottom: "-7px" }}
            />
        </a>
    </span>
);

export default SocialLinks;
