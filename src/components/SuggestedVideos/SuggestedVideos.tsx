import { useState } from "react";
import "./styles.css";
import { suggestedVideos } from "../../constants/suggestedVideos";
import { ThreeDotIcon } from "../../assets/icons";

export default function SuggestedVideos() {
    const [videos, _] = useState(suggestedVideos);

    return (
        <div className="suggested-videos-container">
            {videos.map((video, index) => (
                <div key={index} className="suggested-video">
                    <img
                        className="suggested-video-thumbnail"
                        src={video.thumbnail}
                        alt={`${video.title} thumbnail`}
                        onMouseOver={(e) => {
                            e.currentTarget.src = video.hover as string;
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.src = video.thumbnail;
                        }}
                    />
                    <div className="suggested-video-info">
                        <h4 className="suggested-video-title">{video.title}</h4>
                        <p className="suggested-video-channel">
                            {video.channel}
                        </p>
                        <div className="suggested-video-metadata">
                            <p className="suggested-video-views">
                                {video.views} views
                            </p>
                            <span>•</span>
                            <p className="suggested-video-time">
                                {video.time} ago
                            </p>
                        </div>
                    </div>
                    <ThreeDotIcon height={24} width={24} />
                </div>
            ))}
        </div>
    );
}
