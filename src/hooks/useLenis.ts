import { useEffect, useRef } from "react";
import Lenis from "lenis";

export const useLenis = (locked = false) => {
    const lenisRef = useRef<Lenis | null>(null);

    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            smoothWheel: true,
        });
        lenisRef.current = lenis;

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        return () => lenis.destroy();
    }, []);

    useEffect(() => {
        const lenis = lenisRef.current;
        if (!lenis) return;
        if (locked) lenis.stop();
        else lenis.start();
    }, [locked]);
};
