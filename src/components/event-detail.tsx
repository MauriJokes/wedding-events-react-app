import { motion } from "framer-motion";
import FloralDivider from "./floral-separator";

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
}: EventDetailProps) {
    return (
        <section id={sectionId} className="w-full bg-[#F5F0E8] px-6 py-20">
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

                {/* Floral divider */}
                <div className="mt-7 mb-10 flex justify-center">
                    <FloralDivider size="md" />
                </div>

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
