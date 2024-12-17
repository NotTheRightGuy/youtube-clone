import { ShortsIcon2 } from "../../assets/icons";
import { ShortsProps } from "../../types/ShortsProps";
import shortContent from "../../constants/shortContent";
import "./styles.css";

function ShortsCard({ title, views, thumbnail }: ShortsProps) {
    return (
        <div>
            <div className="shorts-card">
                <img
                    className="shorts-card-image"
                    src={thumbnail}
                    alt="shorts-thumbnail"
                ></img>
                <div className="shorts-card-content">
                    <div className="shorts-card-title">{title}</div>
                    <div className="shorts-card-info">{views} views</div>
                </div>
            </div>
        </div>
    );
}

export default function Shorts() {
    return (
        <div className="shorts-container">
            <div className="top-section">
                <ShortsIcon2 height={24} />
                <b>Shorts</b>
            </div>
            <div className="shorts-content">
                {shortContent.map((short) => (
                    <ShortsCard
                        title={short.title}
                        views={short.views}
                        thumbnail={short.thumbnail}
                    />
                ))}
            </div>
        </div>
    );
}
