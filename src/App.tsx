import "./assets/styles/App.css";
import Navbar from "./components/Navbar/Navbar";
import { SidebarProvider } from "./context/SidebarContext";
import Home from "./page/Home";
import WatchPage from "./page/WatchPage";
import { BrowserRouter, Route, Routes } from "react-router";
export default function App() {
    return (
        <main>
            <SidebarProvider>
                <Navbar />
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/watch" element={<WatchPage />} />
                    </Routes>
                </BrowserRouter>
            </SidebarProvider>
        </main>
    );
}
