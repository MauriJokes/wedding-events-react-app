import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function GoldLineDivider() {
    return (
        <svg
            width="280"
            height="44"
            viewBox="0 0 280 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
        >
            {/* Left line */}
            <line
                x1="10"
                y1="22"
                x2="124"
                y2="22"
                stroke="#C4A882"
                strokeWidth="0.75"
                strokeLinecap="round"
            />
            {/* Center ornament — kept exactly as FloralDivider */}
            <circle cx="140" cy="22" r="2.2" fill="#3D2E1E" />
            <circle
                cx="140"
                cy="22"
                r="4.5"
                stroke="#3D2E1E"
                strokeWidth="0.5"
                fill="none"
            />
            {/* Right line */}
            <line
                x1="156"
                y1="22"
                x2="270"
                y2="22"
                stroke="#C4A882"
                strokeWidth="0.75"
                strokeLinecap="round"
            />
        </svg>
    );
}

interface AturcaraItem {
    time: string;
    item: string;
    subitems?: string[];
}

export interface EventDetailProps {
    /** Section anchor id (e.g. "khatam") */
    sectionId: string;
    title: string;
    day: string;
    date: string;
    venue: string[];
    aturcara: AturcaraItem[];
    /** CSS color value for the Tema Pakaian swatch */
    themeColor: string;
    themeLabel: string;
    dresscode: { lelaki: string; perempuan: string };
    location: string;
    /** Optional short description shown in an expandable panel */
    description?: string;
    index?: number;
}

function SectionLabel({ children }: { children: React.ReactNode }) {
    return (
        <p className="text-[10px] tracking-[0.38em] text-[#9B8470] uppercase">
            {children}
        </p>
    );
}

function ThinDivider() {
    return <div className="mx-auto my-8 h-px w-16 bg-[#D4C4AE]" />;
}

export default function EventDetail({
    sectionId,
    title,
    day,
    date,
    venue,
    aturcara,
    themeColor,
    themeLabel,
    dresscode,
    location,
    description,
    index = 0,
}: EventDetailProps) {
    const [descOpen, setDescOpen] = useState(false);
    return (
        <section
            id={sectionId}
            className="w-full bg-[#F5F0E8] px-6 py-15"
            style={
                index > 0
                    ? { borderTop: "1px solid rgba(196, 168, 130, 0.25)" }
                    : undefined
            }
        >
            <div className="mx-auto max-w-sm">
                {/* ── Title ── */}
                <motion.h2
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="text-center font-serif text-base leading-snug font-light tracking-[0.22em] whitespace-pre-line text-[#3D2E1E] uppercase sm:text-2xl"
                >
                    {title}
                </motion.h2>

                {/* Title divider */}
                <div className="mt-7 mb-10 flex justify-center">
                    <GoldLineDivider />
                </div>

                {/* ── Tentang Majlis (expandable description) ── */}
                {description && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-8 text-center"
                    >
                        <button
                            onClick={() => setDescOpen((v) => !v)}
                            className="group inline-flex items-center gap-2 border border-[#D4C4AE] px-5 py-2 text-[9px] tracking-[0.3em] text-[#6B5544]/60 uppercase transition-colors hover:border-[#6B5544] hover:text-[#6B5544] active:scale-[0.97]"
                            aria-expanded={descOpen}
                        >
                            <span>Tentang Majlis Ini</span>
                            <motion.svg
                                width="9"
                                height="9"
                                viewBox="0 0 9 9"
                                fill="none"
                                animate={{ rotate: descOpen ? 180 : 0 }}
                                transition={{
                                    duration: 0.35,
                                    ease: "easeInOut",
                                }}
                                className="flex-shrink-0 opacity-60 group-hover:opacity-100"
                            >
                                <path
                                    d="M1 2.5L4.5 6L8 2.5"
                                    stroke="currentColor"
                                    strokeWidth="1"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </motion.svg>
                        </button>

                        <AnimatePresence initial={false}>
                            {descOpen && (
                                <motion.div
                                    key="desc"
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{
                                        duration: 0.45,
                                        ease: [0.4, 0, 0.2, 1],
                                    }}
                                    style={{ overflow: "hidden" }}
                                >
                                    <motion.p
                                        initial={{ opacity: 0, y: 6 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 4 }}
                                        transition={{
                                            duration: 0.3,
                                            delay: 0.1,
                                        }}
                                        className="mx-auto mt-5 max-w-xs text-[12px] leading-[1.85] font-light tracking-wide text-[#6B5544]"
                                    >
                                        {description}
                                    </motion.p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                )}

                {/* ── Tarikh Majlis ── */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1, duration: 0.6 }}
                    className="text-center"
                >
                    <SectionLabel>Tarikh Majlis</SectionLabel>
                    <div className="mt-4 space-y-1">
                        <p className="text-sm font-light text-[#6B5544]">
                            {day}
                        </p>
                        <p className="text-sm font-light text-[#6B5544]">
                            {date}
                        </p>
                    </div>
                </motion.div>

                <ThinDivider />

                {/* ── Bertempat Di ── */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15, duration: 0.6 }}
                    className="text-center"
                >
                    <SectionLabel>Bertempat Di</SectionLabel>
                    <div className="mt-4 space-y-1">
                        {venue.map((line, i) => (
                            <p
                                key={i}
                                className="text-sm leading-relaxed font-light text-[#6B5544]"
                            >
                                {line}
                            </p>
                        ))}
                    </div>
                    <div className="mt-4 flex justify-center">
                        <a
                            className="border border-[#D4C4AE] px-5 py-2 text-[9px] tracking-[0.3em] whitespace-nowrap text-[#6B5544]/60 uppercase transition-colors hover:border-[#6B5544] hover:text-[#6B5544] active:scale-[0.97]"
                            href={location}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Lihat lokasi
                        </a>
                    </div>
                </motion.div>

                <ThinDivider />

                {/* ── Aturcara Majlis ── */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                >
                    <p className="mb-5 text-center text-[10px] tracking-[0.38em] text-[#9B8470] uppercase">
                        Aturcara Majlis
                    </p>
                    <div className="relative">
                        <div className="absolute top-0 bottom-0 left-[72px] w-px bg-[#D4C4AE]/40" />
                        <ul className="space-y-3">
                            {aturcara.map((entry, i) => (
                                <li key={i} className="flex gap-4">
                                    <div className="w-16 flex-shrink-0 pt-[3px] text-right text-[10px] leading-relaxed tracking-wide text-[#9B8470]">
                                        {entry.time}
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-start gap-2.5 text-sm font-light text-[#6B5544]">
                                            <span>{entry.item}</span>
                                        </div>
                                        {entry.subitems && (
                                            <ul className="mt-1.5 ml-[14px] space-y-1.5">
                                                {entry.subitems.map(
                                                    (sub, j) => (
                                                        <li
                                                            key={j}
                                                            className="flex items-start gap-2 text-[12px] font-light text-[#9B8470]"
                                                        >
                                                            <span className="mt-[6px] h-[3px] w-[3px] flex-shrink-0 rounded-full bg-[#C4A882]/55" />
                                                            <span>{sub}</span>
                                                        </li>
                                                    ),
                                                )}
                                            </ul>
                                        )}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </motion.div>

                <ThinDivider />

                {/* ── Tema Pakaian ── */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.25, duration: 0.6 }}
                    className="text-center"
                >
                    <SectionLabel>Tema Pakaian</SectionLabel>
                    {/* Color swatch circle */}
                    <div className="mt-6 flex justify-center">
                        <div
                            className="h-28 w-28 rounded-full shadow-sm"
                            style={{ backgroundColor: themeColor }}
                            aria-label={`Tema pakaian: ${themeLabel}`}
                            title={themeLabel}
                        />
                    </div>
                    <p className="mt-3 text-[10px] tracking-[0.22em] text-[#9B8470] uppercase">
                        {themeLabel}
                    </p>
                    {/* Two-column dresscode */}
                    <div className="mt-5 grid grid-cols-2 gap-px border border-[#D4C4AE]/60">
                        <div className="border-r border-[#D4C4AE]/60 px-4 py-4">
                            <p className="mb-2 text-[8px] tracking-[0.3em] text-[#C4A882] uppercase">
                                Lelaki
                            </p>
                            <p className="text-[11px] leading-relaxed font-light text-[#6B5544]">
                                {dresscode.lelaki}
                            </p>
                        </div>
                        <div className="px-4 py-4">
                            <p className="mb-2 text-[8px] tracking-[0.3em] text-[#C4A882] uppercase">
                                Perempuan
                            </p>
                            <p className="text-[11px] leading-relaxed font-light text-[#6B5544]">
                                {dresscode.perempuan}
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
