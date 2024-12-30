import "./styles.css";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { PiShareFat } from "react-icons/pi";
import { TfiDownload } from "react-icons/tfi";
import { HiDotsHorizontal } from "react-icons/hi";
import { LiaHandshake } from "react-icons/lia";
import VideoDescription from "../VideoDescription/VideoDescription";
import Comments from "../Comments/Comments";

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
                            <AiOutlineLike size={20} />
                            <span>23K</span>
                        </button>
                        <div className="separator"></div>
                        <button className="action-button">
                            <AiOutlineDislike size={20} />
                        </button>
                    </div>

                    <button className="action-button">
                        <PiShareFat size={20} />
                        <span>Share</span>
                    </button>

                    <button className="action-button">
                        <TfiDownload size={20} />
                        <span>Download</span>
                    </button>

                    <button className="action-button">
                        <LiaHandshake size={20} />
                        <span>Thanks</span>
                    </button>

                    <button className="action-button">
                        <HiDotsHorizontal size={20} />
                    </button>
                </div>
            </div>
            <VideoDescription />
            <Comments />
        </section>
    );
}
