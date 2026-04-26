import { useCallback, useEffect, useRef, useState } from "react";
import music from "../assets/music.mp3";

export function useMusicPlayer(playOnMount?: boolean) {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [playing, setPlaying] = useState(false);

    // initialize audio once
    useEffect(() => {
        const audio = new Audio(music);
        audio.loop = true;
        audioRef.current = audio;

        return () => {
            audio.pause();
            audioRef.current = null;
        };
    }, []);

    const play = useCallback(async () => {
        const audio = audioRef.current;
        if (!audio) return;

        try {
            await audio.play();
            setPlaying(true);
        } catch (err) {
            console.log("Playback blocked:", err);
        }
    }, []);

    const pause = useCallback(() => {
        const audio = audioRef.current;
        if (!audio) return;

        audio.pause();
        setPlaying(false);
    }, []);

    const toggle = useCallback(() => {
        if (playing) pause();
        else play();
    }, [playing, play, pause]);

    // optional auto-play trigger (IntroGate)
    useEffect(() => {
        if (playOnMount) {
            play();
        }
    }, [playOnMount, play]);

    return {
        playing,
        play,
        pause,
        toggle,
    };
}
