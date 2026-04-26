import { motion } from "framer-motion";

export default function Hero() {
    return (
        <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#F5F0E8]">
            {/* Vertical center stripe */}
            <div className="absolute inset-y-0 left-1/2 w-28 -translate-x-1/2 bg-[#FAF8F4]" />

            {/* Content container */}
            <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 flex flex-col items-center gap-6 px-6 text-center"
            >
                {/* Botanical illustration placeholder */}
                <div className="relative mb-2">
                    <div className="mx-auto flex h-40 w-40 items-center justify-center rounded-full border border-dashed border-[#C4A882]/40 bg-[#EDE8DC]/60">
                        <div className="text-center">
                            <p className="text-[9px] tracking-[0.2em] text-[#C4A882] uppercase">Illustration</p>
                            <p className="text-[9px] tracking-[0.1em] text-[#C4A882]/60">Placeholder</p>
                        </div>
                    </div>
                </div>

                {/* Circular badge / stamp */}
                <div className="relative">
                    <div className="flex h-28 w-28 flex-col items-center justify-center rounded-full border border-[#8B6B45]/35 bg-[#C4A882]/20">
                        <div className="absolute inset-1.5 rounded-full border border-[#8B6B45]/20" />
                        <div className="relative flex flex-col items-center">
                            <p className="font-serif text-base font-medium tracking-wider text-[#3D2E1E]">
                                إزيان
                            </p>
                            <div className="my-0.5 h-px w-7 bg-[#8B6B45]/35" />
                            <p className="text-[8px] tracking-[0.2em] text-[#6B5544] uppercase">& Adam</p>
                        </div>
                    </div>
                </div>

                {/* Couple names */}
                <div className="mt-2 space-y-1">
                    <p className="font-serif text-3xl font-light tracking-[0.2em] text-[#3D2E1E] sm:text-4xl">
                        IZYAN
                    </p>
                    <p className="font-serif text-sm tracking-[0.5em] text-[#C4A882]">&</p>
                    <p className="font-serif text-3xl font-light tracking-[0.2em] text-[#3D2E1E] sm:text-4xl">
                        ADAM
                    </p>
                </div>

                {/* Date */}
                <div className="flex items-center gap-3">
                    <div className="h-px w-10 bg-[#C4A882]/60" />
                    <p className="text-[10px] tracking-[0.3em] text-[#9B8470] uppercase">
                        25 – 28 Disember 2026
                    </p>
                    <div className="h-px w-10 bg-[#C4A882]/60" />
                </div>

                <p className="text-[10px] tracking-[0.25em] text-[#B8A898] uppercase">
                    Brunei Darussalam
                </p>
            </motion.div>
        </div>
    );
}
