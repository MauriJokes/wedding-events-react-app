import { motion } from "framer-motion";
import FloralDivider from "./floral-separator";

interface AturcaraItem {
    item: string;
    subitems?: string[];
}

interface EventDetailProps {
    title: string;
    day: string;
    date: string;
    venue: string[];
    aturcara: (string | AturcaraItem)[];
    themeColor: string;
    themeLabel: string;
}

function SectionLabel({ children }: { children: React.ReactNode }) {
    return (
        <p className="text-[10px] tracking-[0.35em] text-[#9B8470] uppercase">
            {children}
        </p>
    );
}

export default function EventDetail({
    title,
    day,
    date,
    venue,
    aturcara,
    themeColor,
    themeLabel,
}: EventDetailProps) {
    return (
        <div className="w-full min-h-screen bg-[#F5F0E8] px-6 py-20">
            <div className="mx-auto max-w-sm">
                {/* Title */}
                <motion.h2
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="font-serif text-xl font-light leading-snug tracking-[0.2em] text-[#3D2E1E] uppercase text-center whitespace-pre-line sm:text-2xl"
                >
                    {title}
                </motion.h2>

                <div className="flex justify-center mt-6 mb-8">
                    <FloralDivider size="md" />
                </div>

                {/* Tarikh Majlis */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1, duration: 0.6 }}
                    className="mb-8 text-center"
                >
                    <SectionLabel>Tarikh Majlis</SectionLabel>
                    <div className="mt-3 space-y-0.5">
                        <p className="font-serif text-sm font-light text-[#3D2E1E]">{day}</p>
                        <p className="font-serif text-sm font-light text-[#3D2E1E]">{date}</p>
                    </div>
                </motion.div>

                {/* Divider line */}
                <div className="mx-auto mb-8 h-px w-16 bg-[#D4C4AE]" />

                {/* Bertempat Di */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="mb-8 text-center"
                >
                    <SectionLabel>Bertempat Di</SectionLabel>
                    <div className="mt-3 space-y-0.5">
                        {venue.map((line, i) => (
                            <p key={i} className="text-sm font-light leading-relaxed text-[#6B5544]">
                                {line}
                            </p>
                        ))}
                    </div>
                </motion.div>

                {/* Divider line */}
                <div className="mx-auto mb-8 h-px w-16 bg-[#D4C4AE]" />

                {/* Aturcara Majlis */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="mb-8"
                >
                    <p className="mb-4 text-center text-[10px] tracking-[0.35em] text-[#9B8470] uppercase">
                        Aturcara Majlis
                    </p>
                    <ul className="space-y-2">
                        {aturcara.map((entry, i) => {
                            if (typeof entry === "string") {
                                return (
                                    <li
                                        key={i}
                                        className="flex items-start gap-2 text-sm font-light text-[#6B5544]"
                                    >
                                        <span className="mt-[6px] h-1 w-1 flex-shrink-0 rounded-full bg-[#C4A882]" />
                                        <span>{entry}</span>
                                    </li>
                                );
                            } else {
                                return (
                                    <li key={i}>
                                        <div className="flex items-start gap-2 text-sm font-light text-[#6B5544]">
                                            <span className="mt-[6px] h-1 w-1 flex-shrink-0 rounded-full bg-[#C4A882]" />
                                            <span>{entry.item}</span>
                                        </div>
                                        {entry.subitems && (
                                            <ul className="mt-1 ml-5 space-y-1">
                                                {entry.subitems.map((sub, j) => (
                                                    <li
                                                        key={j}
                                                        className="flex items-start gap-2 text-xs font-light text-[#9B8470]"
                                                    >
                                                        <span className="mt-[5px] h-0.5 w-0.5 flex-shrink-0 rounded-full bg-[#C4A882]/60" />
                                                        <span>{sub}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </li>
                                );
                            }
                        })}
                    </ul>
                </motion.div>

                {/* Divider line */}
                <div className="mx-auto mb-8 h-px w-16 bg-[#D4C4AE]" />

                {/* Tema Pakaian */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="text-center"
                >
                    <SectionLabel>Tema Pakaian</SectionLabel>
                    <div className="mt-5 flex flex-col items-center gap-2">
                        <div
                            className="h-24 w-24 rounded-full shadow-sm"
                            style={{ backgroundColor: themeColor }}
                        />
                        <p className="mt-1 text-[10px] tracking-[0.2em] text-[#9B8470] uppercase">
                            {themeLabel}
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
