import React from "react";

const SocialLinks = ({ extras }) => (
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
        {extras ? (
            <span>
                <a
                    href="https://open.spotify.com/user/lilythongnuam?si=usHLceH2TfKddeGg4f7aww&fbclid=IwAR3zBjvDwFZle1HZ2ILpzmCDKDSY_BLHo0pISw2BfP70z7b9M1JUCaxUXPg"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src="/images/Spotify.png"
                        height={25}
                        alt="YouTube"
                        style={{ marginLeft: "20px", marginBottom: "-7px" }}
                    />
                </a>
                <a
                    href="https://www.facebook.com/lily.thongnuam"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src="/images/Facebook.png"
                        height={25}
                        alt="YouTube"
                        style={{ marginLeft: "20px", marginBottom: "-7px" }}
                    />
                </a>
            </span>
        ) : null}
    </span>
);

export default SocialLinks;
