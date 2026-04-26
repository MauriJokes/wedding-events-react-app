import { motion } from "framer-motion";
import { useMusicPlayer } from "@/hooks/useMusicPlayer";
import { Volume2, VolumeX } from "lucide-react";

export default function MusicPlayer({
    playOnMount,
}: {
    playOnMount?: boolean;
}) {
    const { playing, toggle } = useMusicPlayer(playOnMount);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="fixed top-4 right-4 z-50"
        >
            <button
                onClick={toggle}
                className="flex h-9 w-9 items-center justify-center border border-[#D4C4AE]/60 bg-[#F5F0E8]/90 text-[#8B6B45] shadow-sm backdrop-blur-sm transition hover:bg-[#EDE8DC]"
                title={playing ? "Henti muzik" : "Main muzik"}
            >
                {playing ? <Volume2 size={14} /> : <VolumeX size={14} />}
            </button>
        </motion.div>
    );
}
