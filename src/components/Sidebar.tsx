import "../assets/styles/Sidebar.css";
import SidebarButton from "./common/SidebarButton";
import { HomeIcon, ShortsIcon, SubscriptionIcon } from "../assets/icons";

export default function Sidebar() {
    const mainContent = [
        { icon: HomeIcon, text: "Home" },
        { icon: ShortsIcon, text: "Shorts" },
        { icon: SubscriptionIcon, text: "Subscriptions" },
    ];

    const youContent = [
        { icon: HomeIcon, text: "History" },
        { icon: ShortsIcon, text: "Playlists" },
        { icon: SubscriptionIcon, text: "Your Videos" },
        { icon: SubscriptionIcon, text: "Your courses" },
        { icon: SubscriptionIcon, text: "Watch later" },
        { icon: SubscriptionIcon, text: "Liked videos" },
    ];

    return (
        <aside id="sidebar">
            <div className="main-three">
                {mainContent.map((b) => (
                    <SidebarButton Icon={b.icon} text={b.text} />
                ))}
            </div>

            <div className="you-btns">
                <p style={{ fontWeight: "500", padding: "12px" }}>You</p>
                {youContent.map((b) => (
                    <SidebarButton Icon={b.icon} text={b.text} />
                ))}
            </div>
            <div className="subscription-btns"></div>
        </aside>
    );
}
