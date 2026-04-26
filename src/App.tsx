import { useState } from "react";
import IntroGate from "./components/intro-gate";
import MusicPlayer from "./components/music-player";
import Story from "./pages/Story";
import { Toaster } from "./components/ui/sonner";

export default function App() {
    const [entered, setEntered] = useState(false);

    return (
        <>
            <Toaster richColors position="top-center" />

            {!entered && <IntroGate onEnter={() => setEntered(true)} />}

            {entered && (
                <>
                    <MusicPlayer playOnMount={true} />
                    <Story />
                </>
            )}
        </>
    );
}
