import { useState, useEffect } from "react";
import "./styles.css";
import { suggestedVideos } from "../../constants/suggestedVideos";

const generateFakeVideo = (index: number) => ({
    title: `Video ${index}`,
    channel: `Channel ${index}`,
    views: `${Math.floor(Math.random() * 1000)}K views`,
    thumbnail: "https://via.placeholder.com/150",
    time: `${Math.floor(Math.random() * 60)} minutes ago`, // Add time property
});

export default function SuggestedVideos() {
    const [videos, setVideos] = useState(suggestedVideos);

    const loadMoreVideos = () => {
        const newVideos = Array.from({ length: 10 }, (_, i) =>
            generateFakeVideo(videos.length + i + 1)
        );
        setVideos((prevVideos) => [...prevVideos, ...newVideos]);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (
                window.innerHeight + window.scrollY >=
                document.body.offsetHeight - 10
            ) {
                loadMoreVideos();
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="suggested-videos-container">
            {videos.map((video, index) => (
                <div key={index} className="suggested-video">
                    <img
                        className="suggested-video-thumbnail"
                        src={video.thumbnail}
                        alt={`${video.title} thumbnail`}
                    />
                    <div className="suggested-video-info">
                        <h4 className="suggested-video-title">{video.title}</h4>
                        <p className="suggested-video-channel">
                            {video.channel}
                        </p>
                        <div className="suggested-video-metadata">
                            <p className="suggested-video-views">
                                {video.views}
                            </p>
                            <span>•</span>
                            <p className="suggested-video-time">{video.time}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
