import { motion } from "framer-motion";
import { InvitationPDFLink } from "./invitation-pdf";

function formatIcsDate(
    year: number,
    month: number,
    day: number,
    hour: number,
    minute: number,
) {
    const pad = (n: number) => String(n).padStart(2, "0");
    return `${year}${pad(month)}${pad(day)}T${pad(hour)}${pad(minute)}00`;
}

function downloadAllEventsIcs() {
    const icsEvents = [
        {
            title: "Majlis Khatam Al-Quran dan Majlis Berbedak Siang",
            year: 2026,
            month: 12,
            day: 25,
            startHour: 14,
            startMinute: 15,
            endHour: 18,
            endMinute: 0,
            location: "Rumah Pengantin Perempuan",
        },
        {
            title: "Majlis Malam Berbedak dan Majlis Berinai",
            year: 2026,
            month: 12,
            day: 26,
            startHour: 19,
            startMinute: 30,
            endHour: 23,
            endMinute: 0,
            location: "Rumah Pengantin Perempuan",
        },
        {
            title: "Majlis Menerima Berian dan Majlis Akad Nikah",
            year: 2026,
            month: 12,
            day: 27,
            startHour: 14,
            startMinute: 0,
            endHour: 18,
            endMinute: 0,
            location: "The Garden's Veranda",
        },
        {
            title: "Majlis Bersanding",
            year: 2026,
            month: 12,
            day: 28,
            startHour: 19,
            startMinute: 0,
            endHour: 23,
            endMinute: 0,
            location: "Tarindak D'Polo",
        },
    ];
    const vevents = icsEvents
        .map((e, i) =>
            [
                "BEGIN:VEVENT",
                `UID:izyan-adam-2026-${i + 1}@wedding`,
                `DTSTART;TZID=Asia/Brunei:${formatIcsDate(e.year, e.month, e.day, e.startHour, e.startMinute)}`,
                `DTEND;TZID=Asia/Brunei:${formatIcsDate(e.year, e.month, e.day, e.endHour, e.endMinute)}`,
                `SUMMARY:${e.title}`,
                `LOCATION:${e.location}`,
                "DESCRIPTION:Perkahwinan Dayangku Izyan Naqiyah & Nik Adam Danish",
                "END:VEVENT",
            ].join("\r\n"),
        )
        .join("\r\n");
    const ics = [
        "BEGIN:VCALENDAR",
        "VERSION:2.0",
        "PRODID:-//Izyan & Adam Wedding//EN",
        "CALSCALE:GREGORIAN",
        "METHOD:PUBLISH",
        vevents,
        "END:VCALENDAR",
    ].join("\r\n");
    const blob = new Blob([ics], { type: "text/calendar;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "majlis-izyan-adam-2026.ics";
    a.click();
    URL.revokeObjectURL(url);
}

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
            className="w-full px-6 py-16 text-center"
            style={{ backgroundColor: "#2E3A4A" }}
        >
            <div className="mx-auto max-w-sm">
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
                        className="-mt-45 -mb-40 h-100 object-contain"
                    />
                </motion.div>

                {/* Salutation */}
                <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    animate={
                        revealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }
                    }
                    transition={{ delay: 0.1, duration: 0.8 }}
                    className="font-serif text-lg font-light tracking-[0.12em] text-[#F0E6D8] sm:text-3xl"
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
                    className="mt-7 text-[12px] leading-relaxed tracking-wide text-[#C4A882]"
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
                    <p className="text-sm font-light text-[#E8D9C5]">
                        Pengiran Haji Mohamad Jaludin bin Pengiran Haji Puteh
                    </p>
                    <p className="text-sm font-light text-[#E8D9C5]">
                        Dayang Masdiah binti Awang Haji Tuah
                    </p>
                    <div className="mx-auto my-3 h-px w-10 bg-[#C4A882]/35" />
                    <p className="text-sm font-light text-[#E8D9C5]">
                        Nik Joharris bin Nik Ahmad
                    </p>
                    <p className="text-sm font-light text-[#E8D9C5]">
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
                    className="mx-auto mt-8 max-w-[260px] text-[12px] leading-relaxed tracking-wide text-[#C4A882]"
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
                    <p className="font-serif text-sm tracking-[0.25em] text-[#F0E6D8] uppercase">
                        DAYANGKU IZYAN NAQIYAH
                    </p>
                    <p className="text-[11px] tracking-[0.18em] text-[#C4A882]">
                        BINTI PENGIRAN HAJI MOHD JALUDIN
                    </p>
                    <p className="my-1 font-serif text-xl tracking-[0.3em] text-[#C4A882]">
                        &amp;
                    </p>
                    <p className="font-serif text-sm tracking-[0.25em] text-[#F0E6D8] uppercase">
                        NIK ADAM DANISH
                    </p>
                    <p className="text-[11px] tracking-[0.18em] text-[#C4A882]">
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
                    className="mt-8 flex flex-col gap-3 sm:flex-row"
                >
                    <InvitationPDFLink className="flex-1 border border-[#C4A882]/50 px-4 py-3 text-center text-[10px] leading-snug tracking-[0.18em] text-[#C4A882] uppercase transition-colors hover:border-[#C4A882] hover:text-[#F0E6D8] active:opacity-80">
                        Muat Turun Ringkasan
                        <br />
                        Majlis-Majlis
                    </InvitationPDFLink>
                    <button
                        className="flex-1 border border-[#C4A882]/50 px-4 py-3 text-center text-[10px] leading-snug tracking-[0.18em] text-[#C4A882] uppercase transition-colors hover:border-[#C4A882] hover:text-[#F0E6D8] active:opacity-80"
                        onClick={downloadAllEventsIcs}
                        aria-label="Simpan tarikh dalam kalendar"
                    >
                        Simpan Tarikh-Tarikh
                        <br />
                        dalam Kalendar Anda
                    </button>
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
