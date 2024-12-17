import { createContext, useState, ReactNode } from "react";

interface SidebarContextProps {
    isSidebarOpen: boolean;
    toggleSidebar: () => void;
}

export const SidebarContext = createContext<SidebarContextProps | undefined>(
    undefined
);

export const SidebarProvider = ({ children }: { children: ReactNode }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen((prev) => !prev);
    };

    return (
        <SidebarContext.Provider value={{ isSidebarOpen, toggleSidebar }}>
            {children}
        </SidebarContext.Provider>
    );
};