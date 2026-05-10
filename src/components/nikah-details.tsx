import { motion } from "framer-motion";

/**
 * Ornate floral border used in the invitation section.
 * Mimics the rose-and-stem decorations visible in the Canva design (Image 6).
 * Top variant faces downward; bottom variant is flipped.
 */
export function OrnateFloralBorder({ flip = false }: { flip?: boolean }) {
    return (
        <div
            className="flex w-full justify-center"
            style={{ transform: flip ? "scaleY(-1)" : undefined }}
            aria-hidden="true"
        >
            <svg
                viewBox="0 0 320 70"
                width="320"
                height="70"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                {/* Center dot */}
                <circle cx="160" cy="35" r="3" fill="#C4A882" opacity="0.7" />
                <circle
                    cx="160"
                    cy="35"
                    r="6"
                    stroke="#C4A882"
                    strokeWidth="0.5"
                    opacity="0.5"
                />

                {/* Left main curling stem */}
                <path
                    d="M 154 35 C 140 35 120 30 105 22 C 90 14 72 10 55 15"
                    stroke="#C4A882"
                    strokeWidth="0.8"
                    strokeLinecap="round"
                    fill="none"
                    opacity="0.75"
                />
                {/* Left secondary stem curling up */}
                <path
                    d="M 120 27 C 112 18 108 10 112 5"
                    stroke="#C4A882"
                    strokeWidth="0.7"
                    strokeLinecap="round"
                    fill="none"
                    opacity="0.6"
                />
                {/* Left small rose */}
                <circle cx="112" cy="5" r="5" fill="#C4A882" opacity="0.45" />
                <circle cx="112" cy="5" r="3" fill="#C4A882" opacity="0.55" />
                <circle cx="110" cy="3" r="1.5" fill="#C4A882" opacity="0.4" />
                <circle cx="114" cy="3" r="1.5" fill="#C4A882" opacity="0.4" />

                {/* Left rose at end of main stem */}
                <path
                    d="M 55 15 C 48 12 42 16 46 22 C 50 28 58 24 55 15Z"
                    fill="#C4A882"
                    opacity="0.5"
                />
                <circle cx="50" cy="18" r="4" fill="#C4A882" opacity="0.35" />

                {/* Left leaves */}
                <path
                    d="M 95 24 C 91 16 84 12 83 16 C 86 21 92 24 95 24Z"
                    fill="#C4A882"
                    opacity="0.4"
                />
                <path
                    d="M 95 24 C 91 32 84 36 83 32 C 86 27 92 24 95 24Z"
                    fill="#C4A882"
                    opacity="0.28"
                />
                <path
                    d="M 130 26 C 126 18 119 15 118 19 C 121 24 127 26 130 26Z"
                    fill="#C4A882"
                    opacity="0.38"
                />
                <path
                    d="M 130 26 C 126 34 119 37 118 33 C 121 28 127 26 130 26Z"
                    fill="#C4A882"
                    opacity="0.25"
                />

                {/* Left small curl at stem end */}
                <path
                    d="M 55 15 C 42 14 34 20 38 28"
                    stroke="#C4A882"
                    strokeWidth="0.6"
                    strokeLinecap="round"
                    fill="none"
                    opacity="0.45"
                />

                {/* ── RIGHT SIDE (mirror) ── */}
                <path
                    d="M 166 35 C 180 35 200 30 215 22 C 230 14 248 10 265 15"
                    stroke="#C4A882"
                    strokeWidth="0.8"
                    strokeLinecap="round"
                    fill="none"
                    opacity="0.75"
                />
                <path
                    d="M 200 27 C 208 18 212 10 208 5"
                    stroke="#C4A882"
                    strokeWidth="0.7"
                    strokeLinecap="round"
                    fill="none"
                    opacity="0.6"
                />
                <circle cx="208" cy="5" r="5" fill="#C4A882" opacity="0.45" />
                <circle cx="208" cy="5" r="3" fill="#C4A882" opacity="0.55" />
                <circle cx="206" cy="3" r="1.5" fill="#C4A882" opacity="0.4" />
                <circle cx="210" cy="3" r="1.5" fill="#C4A882" opacity="0.4" />

                <path
                    d="M 265 15 C 272 12 278 16 274 22 C 270 28 262 24 265 15Z"
                    fill="#C4A882"
                    opacity="0.5"
                />
                <circle cx="270" cy="18" r="4" fill="#C4A882" opacity="0.35" />

                <path
                    d="M 225 24 C 229 16 236 12 237 16 C 234 21 228 24 225 24Z"
                    fill="#C4A882"
                    opacity="0.4"
                />
                <path
                    d="M 225 24 C 229 32 236 36 237 32 C 234 27 228 24 225 24Z"
                    fill="#C4A882"
                    opacity="0.28"
                />
                <path
                    d="M 190 26 C 194 18 201 15 202 19 C 199 24 193 26 190 26Z"
                    fill="#C4A882"
                    opacity="0.38"
                />
                <path
                    d="M 190 26 C 194 34 201 37 202 33 C 199 28 193 26 190 26Z"
                    fill="#C4A882"
                    opacity="0.25"
                />

                <path
                    d="M 265 15 C 278 14 286 20 282 28"
                    stroke="#C4A882"
                    strokeWidth="0.6"
                    strokeLinecap="round"
                    fill="none"
                    opacity="0.45"
                />
            </svg>
        </div>
    );
}

export default function NikahDetails({
    revealed = false,
}: {
    revealed?: boolean;
}) {
    return (
        <section
            id="invitation"
            className="relative w-full overflow-hidden px-6 py-16 text-center"
            style={{ backgroundColor: "#2E3A4A" }}
        >
            {/* Corner flower images */}
            {/* <img
                src="/top_corner_flower.png"
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute top-0 left-0 z-0 w-44 select-none md:w-64 lg:w-80"
                style={{ opacity: 0.3 }}
            />
            <img
                src="/bottom_corner_flower.png"
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute right-0 bottom-0 z-0 w-44 select-none md:w-64 lg:w-80"
                style={{ opacity: 0.3 }}
            /> */}
            <div className="mx-auto max-w-sm md:max-w-xl lg:max-w-2xl">
                {/* Top ornate floral border */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={revealed ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="mb-4"
                >
                    <OrnateFloralBorder />
                </motion.div>

                {/* Bismillah */}
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={
                        revealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }
                    }
                    transition={{ delay: 0.1, duration: 0.8 }}
                >
                    <img
                        src="/bismillah.png"
                        alt="Bismillah"
                        className="mx-auto -mt-20 -mb-12 h-40 w-40 object-contain md:-mt-24 md:-mb-12 md:h-56 md:w-56 lg:-mt-32 lg:-mb-20 lg:h-70 lg:w-70"
                    />
                </motion.div>

                {/* Salutation */}
                <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    animate={
                        revealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }
                    }
                    transition={{ delay: 0.1, duration: 0.8 }}
                    className="font-serif text-lg font-light tracking-[0.12em] text-[#F0E6D8] md:text-3xl lg:text-4xl"
                >
                    ASSALAMU&apos;ALAIKUM WR. WB.
                </motion.p>

                {/* Opening line */}
                <motion.p
                    initial={{ opacity: 0, y: 8 }}
                    animate={
                        revealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }
                    }
                    transition={{ delay: 0.2, duration: 0.7 }}
                    className="mt-7 text-[12px] leading-relaxed tracking-wide text-[#C4A882] md:text-base lg:text-lg"
                >
                    Dengan izin Allah S.W.T dan rahmatnya, kami:
                </motion.p>

                {/* Parents names */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={
                        revealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
                    }
                    transition={{ delay: 0.3, duration: 0.7 }}
                    className="mt-6 space-y-2 font-serif"
                >
                    <p className="text-sm font-light text-[#E8D9C5] md:text-lg lg:text-xl">
                        Pengiran Haji Mohamad Jaludin bin Pengiran Haji Puteh
                    </p>
                    <p className="text-sm font-light text-[#E8D9C5] md:text-lg lg:text-xl">
                        Dayang Masdiah binti Awang Haji Tuah
                    </p>
                    <div className="mx-auto my-3 h-px w-10 bg-[#C4A882]/35" />
                    <p className="text-sm font-light text-[#E8D9C5] md:text-lg lg:text-xl">
                        Nik Joharris bin Nik Ahmad
                    </p>
                    <p className="text-sm font-light text-[#E8D9C5] md:text-lg lg:text-xl">
                        Nerisa binti Nawi
                    </p>
                </motion.div>

                {/* Invitation message */}
                <motion.p
                    initial={{ opacity: 0, y: 8 }}
                    animate={
                        revealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }
                    }
                    transition={{ delay: 0.4, duration: 0.7 }}
                    className="mx-auto mt-8 max-w-[260px] text-[12px] leading-relaxed tracking-wide text-[#C4A882] md:max-w-lg md:text-base lg:max-w-xl lg:text-lg"
                >
                    Dengan segala hormat dan takzim sukacita memohon restu dan
                    ingin memaklumkan Majlis-Majlis penyatuan anakanda kami:
                </motion.p>

                {/* Couple names */}
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={
                        revealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }
                    }
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="mt-10 space-y-2"
                >
                    <p className="font-serif text-base tracking-[0.25em] text-[#F0E6D8] uppercase md:text-xl lg:text-2xl">
                        DAYANGKU IZYAN NAQIYAH
                    </p>
                    <p className="text-xs tracking-[0.18em] text-[#C4A882] md:text-sm lg:text-base">
                        BINTI PENGIRAN HAJI MOHD JALUDIN
                    </p>
                    <p className="my-1 font-serif text-xl tracking-[0.3em] text-[#C4A882] md:text-3xl lg:text-4xl">
                        &amp;
                    </p>
                    <p className="font-serif text-base tracking-[0.25em] text-[#F0E6D8] uppercase md:text-xl lg:text-2xl">
                        NIK ADAM DANISH
                    </p>
                    <p className="text-xs tracking-[0.18em] text-[#C4A882] md:text-sm lg:text-base">
                        BIN NIK JOHARRIS
                    </p>
                </motion.div>

                {/* Couple illustration placeholder */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={revealed ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 0.6, duration: 0.9 }}
                    className="mt-1 flex justify-center"
                >
                    <img
                        src="/art.png"
                        alt="Izyan & Adam one-line illustration"
                        className="relative z-10 h-80 w-80 object-contain"
                    />
                </motion.div>

                {/* Action buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={
                        revealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }
                    }
                    transition={{ delay: 0.7, duration: 0.7 }}
                    className="flex flex-col gap-3 sm:flex-row"
                >
                    <a
                        href="/Aturcara Majlis.pdf"
                        download="Aturcara-Majlis-Perkahwinan.pdf"
                        className="flex-1 border border-[#C4A882]/50 px-4 py-3 text-center text-[10px] leading-snug tracking-[0.18em] text-[#C4A882] uppercase transition-colors hover:border-[#C4A882] hover:text-[#F0E6D8] active:opacity-80 md:text-sm lg:text-base"
                    >
                        Muat Turun Ringkasan
                        <br />
                        Majlis-Majlis
                    </a>
                    <a
                        href="/majlis-izyan-adam-2026.ics"
                        download="majlis-izyan-adam-2026.ics"
                        className="flex-1 border border-[#C4A882]/50 px-4 py-3 text-center text-[10px] leading-snug tracking-[0.18em] text-[#C4A882] uppercase transition-colors hover:border-[#C4A882] hover:text-[#F0E6D8] active:opacity-80 md:text-sm lg:text-base"
                        aria-label="Simpan tarikh dalam kalendar"
                    >
                        Simpan Tarikh-Tarikh
                        <br />
                        dalam Kalendar Anda
                    </a>
                </motion.div>

                {/* Bottom ornate floral border */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={revealed ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 0.3, duration: 1 }}
                >
                    <OrnateFloralBorder flip />
                </motion.div>
            </div>
        </section>
    );
}
