import "./styles.css";
import VideoDescription from "../VideoDescription/VideoDescription";
import Comments from "../Comments/Comments";
import {
    LikeIcon,
    DownloadIcon,
    DislikeIcon,
    ShareIcon,
    ThreeDotHorizontal,
} from "../../assets/icons";

export default function VideoInfo() {
    return (
        <section className="video-info-container">
            <h1 className="video-title">
                The Battle Within - The Bhagavad Geeta
            </h1>
            <div className="video-info-stats">
                <div className="channel-info">
                    <img
                        className="channel-avatar"
                        src="https://yt3.ggpht.com/0JdajEkof02Anu9AkaK5ITU9GZbDhFyEvCMI-l82o2JbGA6siHIBnrnRs1cHVxMFn94vJLsx2RA=s88-c-k-c0x00ffffff-no-rj"
                        alt="channel avatar"
                    />
                    <div className="channel-meta">
                        <h3 className="channel-name">dead but dope</h3>
                        <p className="channel-subscribers">6.08K subscribers</p>
                    </div>
                    <button className="subscribe-button">Subscribe</button>
                </div>

                <div className="video-actions">
                    <div className="like-dislike-container">
                        <button className="action-button">
                            <LikeIcon height={22} width={22} />
                            <span>23K</span>
                        </button>
                        <div className="separator"></div>
                        <button className="action-button">
                            <DislikeIcon height={22} width={22} />
                        </button>
                    </div>

                    <button className="action-button">
                        <ShareIcon height={24} width={24} />
                        <span>Share</span>
                    </button>

                    <button className="action-button">
                        <DownloadIcon height={22} width={22} />
                        <span>Download</span>
                    </button>

                    <button className="action-button">
                        <ThreeDotHorizontal height={22} width={22} />
                    </button>
                </div>
            </div>
            <VideoDescription />
            <Comments />
        </section>
    );
}
