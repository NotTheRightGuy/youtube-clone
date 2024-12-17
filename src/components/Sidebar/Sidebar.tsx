import "./styles.css";
import SidebarButton from "../common/SidebarButton";
import SubscriptionButton from "../common/SubscriptionButton";
import { mainContent, youContent } from "../../constants";
import { ArrowIcon } from "../../assets/icons";
import { useContext } from "react";
import { SidebarContext } from "../../context/SidebarContext";
import { useMemo } from "react";
import { YouIcon } from "../../assets/icons";
import { useEffect } from "react";

export default function Sidebar() {
    const sidebarContext = useContext(SidebarContext);
    if (!sidebarContext) {
        throw new Error(
            "useSidebarContext must be used within a SidebarProvider"
        );
    }
    const { isSidebarOpen, toggleSidebar } = sidebarContext;

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 1200 && isSidebarOpen) {
                toggleSidebar();
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [isSidebarOpen, toggleSidebar]);

    return (
        <aside id="sidebar" className={isSidebarOpen ? "open" : "close"}>
            <div className="main-three">
                {mainContent.map((content) => (
                    <SidebarButton
                        Icon={content.icon}
                        text={content.text}
                        disableIconHover
                    />
                ))}
                {!isSidebarOpen && (
                    <SidebarButton Icon={YouIcon} text={"You"} />
                )}
            </div>

            <div className="you-btns">
                <div className="title">
                    <p>You</p>
                    <ArrowIcon id="arrow-icon" />
                </div>
                {youContent.map((content) => (
                    <SidebarButton
                        Icon={content.icon}
                        text={content.text}
                        disableIconHover
                    />
                ))}
            </div>
            <div className="subscription-btns">
                <div className="title not-hover">
                    <p>Subscriptions</p>
                </div>
                {useMemo(
                    () =>
                        Array.from({ length: 10 }).map((_, index) => (
                            <SubscriptionButton key={index} />
                        )),
                    []
                )}
            </div>
        </aside>
    );
}
