import "../assets/styles/Home.css";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import YoutubeContent from "../components/YoutubeContent/YoutubeContent";
import { SidebarProvider } from "../context/SidebarContext";

export default function Home() {
    return (
        <main>
            <SidebarProvider>
                <Navbar />
                <section id="youtube-container">
                    <Sidebar />
                    <YoutubeContent />
                </section>
            </SidebarProvider>
        </main>
    );
}
