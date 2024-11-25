import React from "react";

export default function SidebarButton({
    Icon,
    text,
}: {
    Icon: React.FC;
    text: String;
}) {
    <style></style>;
    return (
        <div className="sidebar-button">
            <div className="icon-container">
                <Icon />
            </div>
            <p>{text}</p>
        </div>
    );
}
