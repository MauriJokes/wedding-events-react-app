import { motion } from "framer-motion";
import { useState } from "react";

function KraftLogo() {
    return (
        <div className="relative mx-auto flex h-32 w-32 items-center justify-center">
            {/* Outer ring */}
            <div className="absolute inset-0 rounded-full border border-[#8B6B45]/40" />
            <div className="absolute inset-2 rounded-full border border-[#8B6B45]/25" />
            {/* Inner content */}
            <div className="flex flex-col items-center">
                <p className="font-serif text-lg font-medium tracking-[0.15em] text-[#3D2E1E]">
                    إزيان
                </p>
                <div className="my-0.5 h-px w-8 bg-[#8B6B45]/40" />
                <p className="font-serif text-[10px] tracking-[0.2em] text-[#6B5544] uppercase">& Adam</p>
            </div>
        </div>
    );
}

export default function IntroGate({ onEnter }: { onEnter: () => void }) {
    const [opened, setOpened] = useState(false);
    const [exiting, setExiting] = useState(false);

    const handleEnter = () => {
        setOpened(true);
        setTimeout(() => {
            setExiting(true);
            onEnter();
        }, 900);
    };

    return (
        <motion.div
            className="fixed inset-0 z-50 overflow-hidden bg-[#F5F0E8]"
            animate={{ opacity: exiting ? 0 : 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
        >
            {/* Paper texture overlay */}
            <div className="pointer-events-none absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='400' height='400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='400' height='400' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
                }}
            />

            {/* Flap open animation */}
            <motion.div
                className="absolute top-0 left-0 h-1/2 w-full origin-top bg-[#EDE8DC]"
                animate={{ scaleY: opened ? 0 : 1 }}
                transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
            />
            <motion.div
                className="absolute bottom-0 left-0 h-1/2 w-full origin-bottom bg-[#EDE8DC]"
                animate={{ scaleY: opened ? 0 : 1 }}
                transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
            />

            {/* Content */}
            <div className="relative z-10 flex h-full flex-col items-center justify-center px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: opened ? 0 : 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="flex flex-col items-center gap-6"
                >
                    {/* Decorative top line */}
                    <div className="flex items-center gap-3">
                        <div className="h-px w-12 bg-[#C4A882]" />
                        <div className="h-1 w-1 rounded-full bg-[#C4A882]" />
                        <div className="h-px w-12 bg-[#C4A882]" />
                    </div>

                    {/* Logo badge */}
                    <KraftLogo />

                    {/* Names */}
                    <div className="space-y-1">
                        <p className="font-serif text-2xl font-light tracking-widest text-[#3D2E1E]">
                            IZYAN
                        </p>
                        <p className="font-serif text-sm tracking-[0.4em] text-[#9B8470]">&</p>
                        <p className="font-serif text-2xl font-light tracking-widest text-[#3D2E1E]">
                            ADAM
                        </p>
                    </div>

                    {/* Date */}
                    <p className="text-[11px] tracking-[0.3em] text-[#9B8470] uppercase">
                        25 – 28 Disember 2026
                    </p>

                    {/* Decorative bottom line */}
                    <div className="flex items-center gap-3">
                        <div className="h-px w-12 bg-[#C4A882]" />
                        <div className="h-1 w-1 rounded-full bg-[#C4A882]" />
                        <div className="h-px w-12 bg-[#C4A882]" />
                    </div>

                    {/* CTA */}
                    <button
                        onClick={handleEnter}
                        className="mt-2 border border-[#8B6B45]/40 bg-transparent px-8 py-3 text-[11px] tracking-[0.3em] text-[#6B5544] uppercase transition-all hover:bg-[#8B6B45]/8 active:scale-[0.98]"
                    >
                        Buka Jemputan
                    </button>
                </motion.div>
            </div>
        </motion.div>
    );
}
