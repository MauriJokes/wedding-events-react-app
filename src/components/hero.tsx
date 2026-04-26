import { useState } from "react";
import { motion } from "framer-motion";

export default function Hero({
    onEnter,
    onOpened,
}: {
    onEnter?: () => void;
    onOpened?: () => void;
}) {
    const [isOpen, setIsOpen] = useState(false);
    const [hidden, setHidden] = useState(false);

    const handleOpen = () => {
        if (isOpen) return;
        document.body.style.overflow = "";
        setIsOpen(true);
        onEnter?.();
    };

    if (hidden) return null;

    return (
        <div
            className="fixed inset-0 z-[100] flex cursor-pointer overflow-hidden"
            onClick={handleOpen}
            aria-label="Tekan untuk buka"
        >
            {/* LEFT DOOR */}
            <motion.div
                className="relative h-full w-1/2 overflow-hidden backdrop-blur-sm"
                style={{
                    backgroundColor: "rgba(212, 195, 174, 0.88)",
                    willChange: "transform",
                }}
                animate={isOpen ? { x: "-110%" } : { x: 0 }}
                transition={{ duration: 1.3, ease: [0.4, 0, 0.15, 1] }}
                onAnimationComplete={() => {
                    if (isOpen) {
                        setHidden(true);
                        onOpened?.();
                    }
                }}
            >
                {/* Vertical center stripe on right edge */}
                <div
                    className="absolute inset-y-0 right-0"
                    style={{
                        width: "56%",
                        maxWidth: 160,
                        minWidth: 100,
                        backgroundColor: "#EDE6DC",
                    }}
                />
            </motion.div>

            {/* RIGHT DOOR */}
            <motion.div
                className="relative h-full w-1/2 overflow-hidden backdrop-blur-sm"
                style={{
                    backgroundColor: "rgba(212, 195, 174, 0.88)",
                    willChange: "transform",
                }}
                animate={isOpen ? { x: "110%" } : { x: 0 }}
                transition={{ duration: 1.3, ease: [0.4, 0, 0.15, 1] }}
            >
                {/* Vertical center stripe on left edge */}
                <div
                    className="absolute inset-y-0 left-0"
                    style={{
                        width: "56%",
                        maxWidth: 160,
                        minWidth: 100,
                        backgroundColor: "#EDE6DC",
                    }}
                />
            </motion.div>

            {/* Subtle center seam line */}
            <div className="pointer-events-none absolute inset-y-0 left-1/2 w-px bg-[#3D2E1E]/10" />

            {/* Logo — centered over seam, exits with left door */}
            <motion.div
                className="pointer-events-none absolute inset-0 flex items-center justify-center"
                style={{ willChange: "transform" }}
                animate={
                    isOpen ? { x: "-60vw", opacity: 0 } : { x: 0, opacity: 1 }
                }
                transition={{ duration: 1.3, ease: [0.4, 0, 0.15, 1] }}
            >
                <div
                    className="relative flex items-center justify-center rounded-full shadow-md"
                    style={{
                        width: 168,
                        height: 168,
                        backgroundColor: "#C4A882",
                    }}
                >
                    <div className="absolute inset-[10px] rounded-full border border-[#3D2010]/15" />
                    <img
                        src="/logo.png"
                        alt="Izyan & Adam calligraphy seal"
                        className="relative z-10 h-36 w-36 object-contain"
                        style={{ mixBlendMode: "multiply" }}
                    />
                </div>
            </motion.div>

            {/* Hint text */}
            <motion.button
                onClick={handleOpen}
                className="absolute bottom-48 left-1/2 -translate-x-1/2 border border-[#6B5544]/60 px-5 py-2 text-[10px] tracking-[0.3em] whitespace-nowrap text-[#6B5544]/60 uppercase transition-colors hover:border-[#6B5544] hover:text-[#6B5544] active:scale-[0.97]"
                animate={{ opacity: isOpen ? 0 : 1 }}
                transition={{ duration: 0.3 }}
            >
                Tekan untuk buka
            </motion.button>
        </div>
    );
}
