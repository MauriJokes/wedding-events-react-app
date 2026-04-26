import { motion } from "framer-motion";
import FloralDivider from "./floral-separator";

/**
 * ASSET: Event Photo Placeholders
 * For each event, replace the circle placeholder with:
 *   import khatamPhoto from "@/assets/events/khatam.jpg";
 *   <img src={khatamPhoto} alt="Majlis Khatam" className="w-full h-full object-cover rounded-full" />
 *
 * Photo slots:
 *   khatam    → src/assets/events/khatam.jpg
 *   berbedak  → src/assets/events/berbedak.jpg
 *   akad      → src/assets/events/akad.jpg
 *   bersanding → src/assets/events/bersanding.jpg
 */

const events = [
    {
        id: "khatam",
        title: "Majlis Khatam Al-Quran\ndan Majlis Berbedak Siang",
        date: "25 Disember 2026M / 15 Rejab 1448H",
        jam: "",
        venue: "Rumah Pengantin Perempuan",
        photoAlt: "Event photo placeholder — replace with src/assets/events/khatam.jpg",
    },
    {
        id: "berbedak",
        title: "Majlis Malam Berbedak\ndan Majlis Berinai",
        date: "26 Disember 2026M / 16 Rejab 1448H",
        jam: "",
        venue: "Rumah Pengantin Perempuan",
        photoAlt: "Event photo placeholder — replace with src/assets/events/berbedak.jpg",
    },
    {
        id: "akad",
        title: "Majlis Menerima Berian\ndan Majlis Akad Nikah",
        date: "27 Disember 2026M / 17 Rejab 1448H",
        jam: "",
        venue: "The Garden's Veranda",
        photoAlt: "Event photo placeholder — replace with src/assets/events/akad.jpg",
    },
    {
        id: "bersanding",
        title: "Majlis Bersanding",
        date: "28 Disember 2026M / 18 Rejab 1448H",
        jam: "",
        venue: "Tarindak D'Polo",
        photoAlt: "Event photo placeholder — replace with src/assets/events/bersanding.jpg",
    },
];

export default function EventsSummary() {
    const scrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section
            id="events"
            className="w-full bg-[#F5F0E8] px-6 py-20"
        >
            <div className="mx-auto max-w-sm">
                {/* Section title */}
                <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="text-center"
                >
                    <h2 className="font-serif text-xl font-light tracking-[0.3em] text-[#3D2E1E] uppercase sm:text-2xl">
                        Ringkasan Majlis-Majlis
                    </h2>
                </motion.div>

                {/* Floral divider */}
                <div className="flex justify-center my-8">
                    <FloralDivider size="lg" />
                </div>

                {/* Event rows */}
                <div className="space-y-10">
                    {events.map((event, index) => (
                        <motion.div
                            key={event.id}
                            initial={{ opacity: 0, y: 14 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.08, duration: 0.65 }}
                            className="flex items-start gap-5 cursor-pointer group"
                            onClick={() => scrollTo(event.id)}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => e.key === "Enter" && scrollTo(event.id)}
                            aria-label={`Go to ${event.title.replace("\n", " ")}`}
                        >
                            {/* Circular event photo */}
                            <div
                                className="h-[88px] w-[88px] flex-shrink-0 overflow-hidden rounded-full transition-opacity group-hover:opacity-85"
                                style={{ backgroundColor: "#C9AD8E" }}
                                role="img"
                                aria-label={event.photoAlt}
                            >
                                {/* Photo placeholder — remove this inner div when adding a real image */}
                                <div className="w-full h-full flex items-end justify-center pb-2">
                                    <p className="text-[6px] tracking-wide text-[#8B6B45]/45 uppercase text-center leading-tight px-1">
                                        Photo
                                    </p>
                                </div>
                            </div>

                            {/* Event details */}
                            <div className="flex-1 pt-1">
                                <h3 className="font-serif text-sm font-medium leading-snug text-[#3D2E1E] whitespace-pre-line">
                                    {event.title}
                                </h3>
                                <div className="mt-2.5 space-y-0.5">
                                    <p className="text-[10px] leading-snug text-[#9B8470]">
                                        Tarikh: {event.date}
                                    </p>
                                    <p className="text-[10px] text-[#9B8470]">
                                        Jam:{event.jam ? ` ${event.jam}` : ""}
                                    </p>
                                    <p className="text-[10px] text-[#9B8470]">
                                        Tempat: {event.venue}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Action links */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.35, duration: 0.65 }}
                    className="mt-14 flex items-start justify-between gap-4"
                >
                    <button
                        className="text-left text-[10px] leading-snug tracking-[0.18em] text-[#6B5544] uppercase underline-offset-4 transition hover:underline"
                        onClick={() => {
                            // TODO: implement PDF download
                        }}
                        aria-label="Muat turun ringkasan majlis"
                    >
                        Muat Turun Ringkasan
                        <br />
                        Majllis-Majlis Tersebut
                    </button>

                    <button
                        className="text-right text-[10px] leading-snug tracking-[0.18em] text-[#6B5544] uppercase underline-offset-4 transition hover:underline"
                        onClick={() => {
                            // TODO: implement calendar save
                        }}
                        aria-label="Simpan tarikh dalam kalendar"
                    >
                        Simpan Tarikh-Tarikh
                        <br />
                        dalam Kalendar Anda
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
