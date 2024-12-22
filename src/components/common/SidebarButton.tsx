import React from "react";

interface SidebarButtonProps {
    Icon: React.FC;
    text: String;
    disableIconHover?: Boolean;
}

export default function SidebarButton({
    Icon,
    text,
    disableIconHover,
}: SidebarButtonProps) {
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
