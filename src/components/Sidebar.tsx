import "../assets/styles/Sidebar.css";
import SidebarButton from "./common/SidebarButton";
import SubscriptionButton from "./common/SubscriptionButton";
import {
    HomeIcon,
    ShortsIcon,
    SubscriptionIcon,
    ArrowIcon,
    HistoryIcon,
    PlaylistIcon,
    YourVideosIcon,
    CourseIcon,
    ClockIcon,
    LikeIcon,
} from "../assets/icons";

export default function Sidebar() {
    const mainContent = [
        { icon: HomeIcon, text: "Home" },
        { icon: ShortsIcon, text: "Shorts" },
        { icon: SubscriptionIcon, text: "Subscriptions" },
    ];

    const youContent = [
        { icon: HistoryIcon, text: "History" },
        { icon: PlaylistIcon, text: "Playlists" },
        { icon: YourVideosIcon, text: "Your Videos" },
        { icon: CourseIcon, text: "Your courses" },
        { icon: ClockIcon, text: "Watch later" },
        { icon: LikeIcon, text: "Liked videos" },
    ];

    return (
        <aside id="sidebar">
            <div className="main-three">
                {mainContent.map((b) => (
                    <SidebarButton
                        Icon={b.icon}
                        text={b.text}
                        disableIconHover
                    />
                ))}
            </div>

            <div className="you-btns">
                <div className="title">
                    <p>You</p>
                    <ArrowIcon id="arrow-icon" />
                </div>
                {youContent.map((b) => (
                    <SidebarButton
                        Icon={b.icon}
                        text={b.text}
                        disableIconHover
                    />
                ))}
            </div>
            <div className="subscription-btns">
                <div className="title not-hover">
                    <p>Subscriptions</p>
                </div>
                {Array.from({ length: 10 }).map(() => (
                    <SubscriptionButton />
                ))}
            </div>
        </aside>
    );
}
