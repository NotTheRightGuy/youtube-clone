import "./styles.css";
import SidebarButton from "../common/SidebarButton";
import SubscriptionButton from "../common/SubscriptionButton";
import { mainContent, youContent } from "../../constants";
import { ArrowIcon } from "../../assets/icons";

export default function Sidebar() {
    return (
        <aside id="sidebar">
            <div className="main-three">
                {mainContent.map((content) => (
                    <SidebarButton
                        Icon={content.icon}
                        text={content.text}
                        disableIconHover
                    />
                ))}
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
                {Array.from({ length: 10 }).map(() => (
                    <SubscriptionButton />
                ))}
            </div>
        </aside>
    );
}
