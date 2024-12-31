import "./styles.css";
import {
    MenuIcon,
    YouTubeIcon,
    SearchIcon,
    MicIcon,
    NotificationIcon,
    CreateIcon,
} from "../../assets/icons";
import { useContext } from "react";
import { SidebarContext } from "../../context/SidebarContext";

export default function Navbar() {
    const sidebarContext = useContext(SidebarContext);
    if (!sidebarContext) {
        throw new Error(
            "useSidebarContext must be used within a SidebarProvider"
        );
    }
    const { toggleSidebar } = sidebarContext;
    return (
        <section id="navbar">
            <div>
                <MenuIcon id="yt-menu-icon" onClick={toggleSidebar} />
                <YouTubeIcon
                    id="yt-logo-icon"
                    onClick={() => {
                        window.location.href = "/";
                    }}
                />
            </div>
            <div>
                <form id="yt-search">
                    <input type="text" placeholder="Search" />
                    <button>
                        <SearchIcon id="yt-search-icon" />
                    </button>
                </form>
                <button id="mic-button">
                    <MicIcon id="yt-mic-icon" />
                </button>
            </div>
            <div>
                <div className="icon-container">
                    <CreateIcon id="yt-create-icon" />
                </div>
                <div className="icon-container">
                    <NotificationIcon id="yt-notification-icon" />
                </div>
                <div id="yt-user-icon">
                    <img
                        height="36px"
                        width="36px"
                        src="https://t4.ftcdn.net/jpg/00/97/58/97/360_F_97589769_t45CqXyzjz0KXwoBZT9PRaWGHRk5hQqQ.jpg"
                        alt="placeholder-image"
                    />
                </div>
            </div>
        </section>
    );
}
