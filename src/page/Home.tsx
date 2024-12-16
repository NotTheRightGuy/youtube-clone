import "../assets/styles/Home.css";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import YoutubeContent from "../components/YoutubeContent/YoutubeContent";

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
