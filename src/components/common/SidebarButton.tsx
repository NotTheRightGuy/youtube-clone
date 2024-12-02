import React from "react";

export default function SidebarButton({
    Icon,
    text,
    disableIconHover,
}: {
    Icon: React.FC;
    text: String;
    disableIconHover?: Boolean;
}) {
    return (
        <div className="sidebar-button">
            <div
                className={`icon-container ${
                    disableIconHover ? "not-hover" : ""
                }`}
            >
                <Icon />
            </div>
            <p>{text}</p>
        </div>
    );
}
