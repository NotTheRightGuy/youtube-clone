import "../../assets/styles/VideoCard.css";
import { ThreeDotIcon } from "../../assets/icons";
import { VideoProps } from "../../types/VideoProps";
import { useNavigate } from "react-router-dom";
import convertSecondsToDuration from "../../utils/formatters/convertSecondsToDuration";

export default function VideoCard({ videoInfo }: { videoInfo: VideoProps }) {
    const navigate = useNavigate();
    return (
        <div
            className="thumbnail-container"
            onClick={() => {
                navigate(`/watch?v=${videoInfo.id}`);
            }}
        >
            <div className="thumbnail-image-container">
                <img
                    src={videoInfo.thumbnailURL}
                    alt="Thumbnail Image"
                    className="thumbnail-image"
                />
                <div className="video-duration">
                    {convertSecondsToDuration(videoInfo.videoDurationInSeconds)}
                </div>
            </div>

            <div className="video-info-container">
                <img
                    src={videoInfo.creatorDisplayURL}
                    alt="Channel Display Picture"
                    className="video-creator-image"
                />
                <div className="video-text-info">
                    <div className="video-title">{videoInfo.videoTitle}</div>
                    <div className="video-creator">
                        {videoInfo.videoCreator}
                    </div>
                    <div className="video-stats">
                        <p>{videoInfo.videoViews} views</p>
                        <p>&#x2022;</p>
                        <p>{videoInfo.videoUploaded} ago</p>
                    </div>
                </div>
                <ThreeDotIcon className="video-option-icon" />
            </div>
        </div>
    );
}
