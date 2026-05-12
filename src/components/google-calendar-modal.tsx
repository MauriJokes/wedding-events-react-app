import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CalendarEvent {
    title: string;
    startUtc: string; // e.g. "20261225T061500Z"
    endUtc: string;
    location: string;
    description: string;
}

const EVENTS: CalendarEvent[] = [
    {
        title: "Majlis Khatam Al-Quran dan Majlis Berbedak Siang",
        startUtc: "20261225T061500Z",
        endUtc: "20261225T100000Z",
        location: "Rumah Pengantin Perempuan",
        description: "Majlis Perkahwinan Izyan & Adam",
    },
    {
        title: "Majlis Malam Berbedak dan Majlis Berinai",
        startUtc: "20261226T113000Z",
        endUtc: "20261226T150000Z",
        location: "Rumah Pengantin Perempuan",
        description: "Majlis Perkahwinan Izyan & Adam",
    },
    {
        title: "Majlis Menerima Berian dan Majlis Akad Nikah",
        startUtc: "20261227T060000Z",
        endUtc: "20261227T100000Z",
        location: "The Garden's Veranda",
        description: "Majlis Perkahwinan Izyan & Adam",
    },
    {
        title: "Majlis Bersanding",
        startUtc: "20261228T111500Z",
        endUtc: "20261228T150000Z",
        location: "Tarindak D'Polo",
        description: "Majlis Perkahwinan Izyan & Adam",
    },
];

const EVENT_DATES: Record<string, string> = {
    "20261225T061500Z": "25 Disember 2026 · 2:15 – 6:00 PTG",
    "20261226T113000Z": "26 Disember 2026 · 7:30 – 11:00 MLM",
    "20261227T060000Z": "27 Disember 2026 · 2:00 – 6:00 PTG",
    "20261228T111500Z": "28 Disember 2026 · 7:15 – 11:00 MLM",
};

function buildGoogleCalendarUrl(event: CalendarEvent): string {
    const params = new URLSearchParams({
        action: "TEMPLATE",
        text: event.title,
        dates: `${event.startUtc}/${event.endUtc}`,
        location: event.location,
        details: event.description,
    });
    return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

interface Props {
    open: boolean;
    onClose: () => void;
}

export default function GoogleCalendarModal({ open, onClose }: Props) {
    // ESC key to close
    useEffect(() => {
        if (!open) return;
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [open, onClose]);

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    key="gcal-backdrop"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="fixed inset-0 z-50 flex items-center justify-center p-4"
                    style={{ backgroundColor: "rgba(20, 28, 38, 0.82)" }}
                    onClick={onClose}
                    aria-modal="true"
                    role="dialog"
                    aria-label="Simpan tarikh dalam Google Calendar"
                >
                    {/* Panel */}
                    <motion.div
                        key="gcal-panel"
                        initial={{ opacity: 0, y: 20, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 14, scale: 0.97 }}
                        transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                        className="relative w-full max-w-sm overflow-hidden md:max-w-md"
                        style={{
                            backgroundColor: "#2E3A4A",
                            border: "1px solid rgba(196, 168, 130, 0.25)",
                        }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header */}
                        <div
                            className="flex items-center justify-between px-6 py-5"
                            style={{
                                borderBottom:
                                    "1px solid rgba(196, 168, 130, 0.18)",
                            }}
                        >
                            <div>
                                <p className="text-[9px] tracking-[0.35em] text-[#C4A882] uppercase md:text-xs">
                                    Simpan dalam
                                </p>
                                <p className="mt-0.5 font-serif text-sm tracking-[0.18em] text-[#F0E6D8] md:text-base">
                                    Google Calendar
                                </p>
                            </div>
                            <button
                                onClick={onClose}
                                aria-label="Tutup"
                                className="flex h-8 w-8 items-center justify-center text-[#C4A882]/60 transition-colors hover:text-[#C4A882] active:opacity-70"
                            >
                                <svg
                                    width="14"
                                    height="14"
                                    viewBox="0 0 14 14"
                                    fill="none"
                                    aria-hidden="true"
                                >
                                    <path
                                        d="M1 1L13 13M13 1L1 13"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </button>
                        </div>

                        {/* Event list */}
                        <ul className="flex flex-col">
                            {EVENTS.map((event, i) => (
                                <li
                                    key={i}
                                    style={
                                        i < EVENTS.length - 1
                                            ? {
                                                  borderBottom:
                                                      "1px solid rgba(196, 168, 130, 0.12)",
                                              }
                                            : undefined
                                    }
                                >
                                    <a
                                        href={buildGoogleCalendarUrl(event)}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex items-center justify-between gap-4 px-6 py-4 transition-colors hover:bg-[#3a4a5c] active:opacity-80"
                                    >
                                        <div className="text-left">
                                            <p className="text-[11px] font-light leading-snug tracking-wide text-[#F0E6D8] md:text-sm">
                                                {event.title}
                                            </p>
                                            <p className="mt-1 text-[9px] tracking-[0.18em] text-[#C4A882]/70 md:text-[10px]">
                                                {EVENT_DATES[event.startUtc]}
                                            </p>
                                            <p className="mt-0.5 text-[9px] tracking-wide text-[#C4A882]/50 md:text-[10px]">
                                                {event.location}
                                            </p>
                                        </div>
                                        {/* Arrow icon */}
                                        <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            fill="none"
                                            className="flex-shrink-0 text-[#C4A882]/40 transition-colors group-hover:text-[#C4A882]"
                                            aria-hidden="true"
                                        >
                                            <path
                                                d="M3 8h10M9 4l4 4-4 4"
                                                stroke="currentColor"
                                                strokeWidth="1.2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </a>
                                </li>
                            ))}
                        </ul>

                        {/* Footer hint */}
                        <div
                            className="px-6 py-4 text-center"
                            style={{
                                borderTop:
                                    "1px solid rgba(196, 168, 130, 0.18)",
                            }}
                        >
                            <p className="text-[8px] tracking-[0.22em] text-[#C4A882]/40 uppercase md:text-[9px]">
                                Setiap butang akan membuka Google Calendar
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
