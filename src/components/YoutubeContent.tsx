import "../assets/styles/YoutubeContent.css";
import VideoCard from "./common/VideoCard";
import videoDetails from "../utils/videoDetails";
import Categorybar from "./Categorybar";

export default function YoutubeContent() {
    return (
        <section id="youtube-content">
            <Categorybar />
            <section className="videos-section">
                {videoDetails.map((video) => (
                    <VideoCard videoInfo={video} />
                ))}
                {videoDetails.map((video) => (
                    <VideoCard videoInfo={video} />
                ))}
            </section>
        </section>
    );
}
