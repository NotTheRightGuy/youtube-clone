import generateRandomChannel from "../../utils/generateRandomChannel";

export default function SubscriptionButton({ ...props }) {
    return (
        <div className="sidebar-button" {...props}>
            <div className={`img-container`}>
                <img
                    src={`https://picsum.photos/id/${Math.floor(
                        Math.random() * 100
                    )}/100`}
                    alt="youtube-image-display"
                />
            </div>
            <p>{generateRandomChannel()}</p>
        </div>
    );
}
