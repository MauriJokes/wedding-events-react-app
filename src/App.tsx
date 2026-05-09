import { useState } from "react";
import MusicPlayer from "./components/music-player";
import Story from "./pages/Story";
import { Toaster } from "./components/ui/sonner";
import { Analytics } from "@vercel/analytics/react";

export default function App() {
    const [entered, setEntered] = useState(false);

    return (
        <>
            <Toaster richColors position="top-center" />
            <MusicPlayer playOnMount={entered} />
            <Story onEnter={() => setEntered(true)} />
            <Analytics />
        </>
    );
}
