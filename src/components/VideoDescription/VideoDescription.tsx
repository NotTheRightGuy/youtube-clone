import { useState } from "react";
import "./styles.css";

export default function VideoDescription() {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className={`video-description ${isExpanded ? "expanded" : ""}`}>
            <div className="video-stats">
                <span className="views">294K views</span>
                <span className="upload-date">Oct 12, 2023</span>
            </div>

            <div className="description-content">
                <div className="hashtags">
                    <a href="#">#programming</a>
                    <a href="#">#technology</a>
                    <a href="#">#developer</a>
                </div>

                <p className="description-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    {!isExpanded && "..."}
                </p>

                {isExpanded && (
                    <div className="extra-content">
                        <p>
                            Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt
                            in culpa qui officia deserunt mollit anim id est
                            laborum.
                        </p>
                    </div>
                )}

                <button
                    className="show-more-btn"
                    onClick={() => setIsExpanded(!isExpanded)}
                >
                    {isExpanded ? "Show less" : "Show more"}
                </button>
            </div>
        </div>
    );
}
