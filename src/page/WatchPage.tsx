import "../assets/styles/WatchPage.css";
import VideoStream from "../components/VideoStream/VideoStream";
import VideoInfo from "../components/VideoInfo/VideoInfo";
import SuggestedVideos from "../components/SuggestedVideos/SuggestedVideos";

export default function WatchPage() {
    return (
        <section id="watch-container">
            <div id="column-video">
                <VideoStream />
                <VideoInfo />
            </div>
            <div id="column-video-recommendation">
                <SuggestedVideos />
            </div>
        </section>
    );
}
