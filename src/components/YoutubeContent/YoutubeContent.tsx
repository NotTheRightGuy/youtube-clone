import "./styles.css";
import VideoCard from "../common/VideoCard";
import videoDetails from "../../constants/videoDetails";
import Categorybar from "../Categorybar/Categorybar";
import Shorts from "../Shorts/Shorts";

export default function YoutubeContent() {
    return (
        <section id="youtube-content">
            <Categorybar />
            <section className="videos-section">
                {videoDetails.map((video) => (
                    <VideoCard videoInfo={video} />
                ))}
                <Shorts />
                {videoDetails.map((video) => (
                    <VideoCard videoInfo={video} />
                ))}
            </section>
        </section>
    );
}
