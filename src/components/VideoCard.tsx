import "../assets/styles/VideoCard.css";

export default function VideoCard() {
    return (
        <div className="thumbnail-container">
            <img
                src="https://i.ytimg.com/vi/WrV0CTnqUJA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA8OrfRoDDJ6-iD5p86wYxehTTI0Q"
                alt="Thumbnail Image"
                className="thumbnail-image"
            />
            <div className="video-info-container">
                <img
                    src="https://yt3.ggpht.com/dzgLCjRr-jI96sRdV8Ovl6F3LafGEh3a777hPBBwkN5VL2pixr98frJJwFL8fZQKBg289O574A=s68-c-k-c0x00ffffff-no-rj"
                    alt="Channel Display Picture"
                    className="video-creator-image"
                />
                <div className="video-text-info">
                    <div className="video-title">
                        Paal Dabba x ofRo - Kaathu Mela (Music Video) | Think
                        India
                    </div>
                    <div className="video-creator">Think Music India</div>
                    <div className="video-stats">
                        <p>56M views</p>
                        <p>&#x2022;</p>
                        <p>4 months ago</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
