import Sidebar from "../components/Sidebar/Sidebar";
import YoutubeContent from "../components/YoutubeContent/YoutubeContent";

export default function Home() {
    return (
        <section id="youtube-container">
            <Sidebar />
            <YoutubeContent />
        </section>
    );
}
