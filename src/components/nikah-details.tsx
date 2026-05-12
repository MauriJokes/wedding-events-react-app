import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import GoogleCalendarModal from "./google-calendar-modal";

function detectPlatform(): "ios" | "android" | "other" {
    if (typeof navigator === "undefined") return "other";
    const ua =
        navigator.userAgent || (navigator as { vendor?: string }).vendor || "";
    if (/android/i.test(ua)) return "android";
    if (
        /iPad|iPhone|iPod/.test(ua) ||
        (ua.includes("Mac") && "ontouchend" in document)
    )
        return "ios";
    return "other";
}

export default function NikahDetails({
    revealed = false,
}: {
    revealed?: boolean;
}) {
    const [calModalOpen, setCalModalOpen] = useState(false);
    const closeCalModal = useCallback(() => setCalModalOpen(false), []);

    function handleCalendarClick() {
        const platform = detectPlatform();
        if (platform === "android") {
            setCalModalOpen(true);
        } else {
            // iOS and desktop: trigger .ics download
            const link = document.createElement("a");
            link.href = "/static/ics/majlis-izyan-adam-2026.ics";
            link.download = "majlis-izyan-adam-2026.ics";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    }

    return (
        <>
            <GoogleCalendarModal open={calModalOpen} onClose={closeCalModal} />
            <section
                id="invitation"
                className="relative w-full overflow-hidden px-6 py-16 text-center"
                style={{ backgroundColor: "#2E3A4A" }}
            >
                {/* Right side flower — anchored bottom-left, rises to top */}
                <img
                    src="/static/assets/left_side_flower.png"
                    alt=""
                    aria-hidden="true"
                    className="pointer-events-none absolute right-[-35px] bottom-0 z-0 h-[94%] w-auto object-contain object-right-bottom select-none md:right-0"
                    style={{ opacity: 0.3, transform: "scaleX(-1)" }}
                />
                {/* Left side flower — anchored bottom-right, rises to top */}
                <img
                    src="/static/assets/right_side_flower.png"
                    alt=""
                    aria-hidden="true"
                    className="pointer-events-none absolute bottom-0 left-[-20px] z-0 h-full w-auto object-contain object-left-bottom select-none md:left-0"
                    style={{ opacity: 0.3, transform: "scaleX(-1)" }}
                />

                <div className="relative z-10 mx-auto max-w-sm md:max-w-xl lg:max-w-2xl">
                    {/* Bismillah */}
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={
                            revealed
                                ? { opacity: 1, y: 0 }
                                : { opacity: 0, y: 12 }
                        }
                        transition={{ delay: 0.1, duration: 0.8 }}
                    >
                        <img
                            src="/static/assets/bismillah.png"
                            alt="Bismillah"
                            className="mx-auto -mt-20 -mb-12 h-40 w-40 object-contain md:-mt-24 md:-mb-12 md:h-56 md:w-56 lg:-mt-32 lg:-mb-20 lg:h-70 lg:w-70"
                        />
                    </motion.div>

                    {/* Salutation */}
                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        animate={
                            revealed
                                ? { opacity: 1, y: 0 }
                                : { opacity: 0, y: 12 }
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
                            revealed
                                ? { opacity: 1, y: 0 }
                                : { opacity: 0, y: 8 }
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
                            revealed
                                ? { opacity: 1, y: 0 }
                                : { opacity: 0, y: 10 }
                        }
                        transition={{ delay: 0.3, duration: 0.7 }}
                        className="mt-6 space-y-2 font-serif"
                    >
                        <p className="text-sm font-light text-[#E8D9C5] md:text-lg lg:text-xl">
                            Pengiran Haji Mohamad Jaludin bin Pengiran Haji
                            Puteh
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
                            revealed
                                ? { opacity: 1, y: 0 }
                                : { opacity: 0, y: 8 }
                        }
                        transition={{ delay: 0.4, duration: 0.7 }}
                        className="mx-auto mt-8 max-w-[260px] text-[12px] leading-relaxed tracking-wide text-[#C4A882] md:max-w-lg md:text-base lg:max-w-xl lg:text-lg"
                    >
                        Dengan segala hormat dan takzim sukacita memohon restu
                        dan ingin memaklumkan Majlis-Majlis penyatuan anakanda
                        kami:
                    </motion.p>

                    {/* Couple names */}
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={
                            revealed
                                ? { opacity: 1, y: 0 }
                                : { opacity: 0, y: 12 }
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
                            src="/static/assets/art.png"
                            alt="Izyan & Adam one-line illustration"
                            className="relative z-10 h-80 w-80 object-contain"
                        />
                    </motion.div>

                    {/* Action buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={
                            revealed
                                ? { opacity: 1, y: 0 }
                                : { opacity: 0, y: 8 }
                        }
                        transition={{ delay: 0.7, duration: 0.7 }}
                        className="flex flex-col gap-3 sm:flex-row"
                    >
                        <a
                            href="/static/files/Aturcara Majlis.pdf"
                            download="Aturcara-Majlis-Perkahwinan.pdf"
                            className="flex-1 border-[1.5px] border-[#C4A882]/50 bg-[#2E3A4A] px-4 py-3 text-center text-[10px] leading-snug tracking-[0.18em] text-[#C4A882] uppercase transition-colors hover:border-[#C4A882] hover:text-[#F0E6D8] active:opacity-80 md:text-sm lg:text-base"
                        >
                            Muat Turun Ringkasan
                            <br />
                            Majlis-Majlis
                        </a>
                        <button
                            onClick={handleCalendarClick}
                            className="flex-1 border-[1.5px] border-[#C4A882]/50 bg-[#2E3A4A] px-4 py-3 text-center text-[10px] leading-snug tracking-[0.18em] text-[#C4A882] uppercase transition-colors hover:border-[#C4A882] hover:text-[#F0E6D8] active:opacity-80 md:text-sm lg:text-base"
                            aria-label="Simpan tarikh dalam kalendar"
                        >
                            Simpan Tarikh-Tarikh
                            <br />
                            dalam Kalendar Anda
                        </button>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
