import { motion } from "framer-motion";
import FloralDivider from "./floral-separator";

interface AturcaraItem {
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
    aturcara: (string | AturcaraItem)[];
    /** CSS color value for the Tema Pakaian swatch */
    themeColor: string;
    themeLabel: string;
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
}: EventDetailProps) {
    return (
        <section
            id={sectionId}
            className="w-full bg-[#F5F0E8] px-6 py-20"
        >
            <div className="mx-auto max-w-sm">
                {/* ── Title ── */}
                <motion.h2
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="font-serif text-xl font-light leading-snug tracking-[0.22em] text-[#3D2E1E] uppercase text-center whitespace-pre-line sm:text-2xl"
                >
                    {title}
                </motion.h2>

                {/* Floral divider */}
                <div className="flex justify-center mt-7 mb-10">
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
                        <p className="font-serif text-sm font-light text-[#3D2E1E]">{day}</p>
                        <p className="font-serif text-sm font-light text-[#3D2E1E]">{date}</p>
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
                            <p key={i} className="text-sm font-light leading-relaxed text-[#6B5544]">
                                {line}
                            </p>
                        ))}
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
                    <ul className="space-y-2.5">
                        {aturcara.map((entry, i) => {
                            if (typeof entry === "string") {
                                return (
                                    <li
                                        key={i}
                                        className="flex items-start gap-2.5 text-sm font-light text-[#6B5544]"
                                    >
                                        <span className="mt-[7px] h-1 w-1 flex-shrink-0 rounded-full bg-[#C4A882]" />
                                        <span>{entry}</span>
                                    </li>
                                );
                            }
                            return (
                                <li key={i}>
                                    <div className="flex items-start gap-2.5 text-sm font-light text-[#6B5544]">
                                        <span className="mt-[7px] h-1 w-1 flex-shrink-0 rounded-full bg-[#C4A882]" />
                                        <span>{entry.item}</span>
                                    </div>
                                    {entry.subitems && (
                                        <ul className="mt-1.5 ml-6 space-y-1.5">
                                            {entry.subitems.map((sub, j) => (
                                                <li
                                                    key={j}
                                                    className="flex items-start gap-2 text-[12px] font-light text-[#9B8470]"
                                                >
                                                    <span className="mt-[6px] h-[3px] w-[3px] flex-shrink-0 rounded-full bg-[#C4A882]/55" />
                                                    <span>{sub}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            );
                        })}
                    </ul>
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
                </motion.div>
            </div>
        </section>
    );
}

