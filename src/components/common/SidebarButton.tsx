import React from "react";

interface SidebarButtonProps {
    Icon: React.FC;
    text: string;
    disableIconHover?: boolean;
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
