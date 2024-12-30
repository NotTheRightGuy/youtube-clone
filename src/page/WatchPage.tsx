import "../assets/styles/WatchPage.css";
import VideoStream from "../components/VideoStream/VideoStream";
import VideoInfo from "../components/VideoInfo/VideoInfo";
import SuggestedVideos from "../components/SuggestedVideos/SuggestedVideos";
import Categorybar from "../components/Categorybar/Categorybar";

export default function WatchPage() {
    return (
        <section id="watch-container">
            <div id="column-video">
                <VideoStream />
                <VideoInfo />
            </div>
            <div id="column-video-recommendation">
                {/* <Categorybar /> */}
                <SuggestedVideos />
            </div>
        </section>
    );
}
