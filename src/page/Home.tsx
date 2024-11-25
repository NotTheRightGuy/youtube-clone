import "../assets/styles/Home.css";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import YoutubeContent from "../components/YoutubeContent";

export default function Home() {
    return (
        <main>
            <Navbar />
            <section id="youtube-container">
                <Sidebar />
                <YoutubeContent />
            </section>
        </main>
    );
}
