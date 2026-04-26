import { motion } from "framer-motion";
import FloralDivider from "./floral-separator";

const events = [
    {
        id: "khatam",
        title: "Majlis Khatam Al-Quran\ndan Majlis Berbedak Siang",
        date: "25 Disember 2026M / 15 Rejab 1448H",
        time: "TBA",
        venue: "Rumah Pengantin Perempuan",
    },
    {
        id: "berbedak",
        title: "Majlis Malam Berbedak\ndan Majlis Berinai",
        date: "26 Disember 2026M / 16 Rejab 1448H",
        time: "TBA",
        venue: "Rumah Pengantin Perempuan",
    },
    {
        id: "akad",
        title: "Majlis Menerima Berian\ndan Majlis Akad Nikah",
        date: "27 Disember 2026M / 17 Rejab 1448H",
        time: "TBA",
        venue: "The Garden's Veranda",
    },
    {
        id: "bersanding",
        title: "Majlis Bersanding",
        date: "28 Disember 2026M / 18 Rejab 1448H",
        time: "TBA",
        venue: "Tarindak D'Polo",
    },
];

export default function EventsSummary() {
    const scrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="w-full min-h-screen bg-[#F5F0E8] px-6 py-20">
            {/* Title */}
            <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="mb-6 text-center"
            >
                <h2 className="font-serif text-xl font-light tracking-[0.25em] text-[#3D2E1E] uppercase sm:text-2xl">
                    Ringkasan Majlis-Majlis
                </h2>
            </motion.div>

            <div className="flex justify-center mb-10">
                <FloralDivider size="lg" />
            </div>

            {/* Event cards */}
            <div className="mx-auto max-w-sm space-y-8">
                {events.map((event, index) => (
                    <motion.div
                        key={event.id}
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.6 }}
                        className="flex items-start gap-5 cursor-pointer"
                        onClick={() => scrollTo(event.id)}
                    >
                        {/* Circular image placeholder */}
                        <div className="flex-shrink-0">
                            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#C4A882]/25 border border-[#C4A882]/30">
                                <div className="text-center">
                                    <p className="text-[7px] tracking-wide text-[#9B8470] uppercase leading-tight">
                                        Photo
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Event info */}
                        <div className="flex-1 pt-1">
                            <h3 className="font-serif text-sm font-medium leading-snug text-[#3D2E1E] whitespace-pre-line">
                                {event.title}
                            </h3>
                            <p className="mt-2 text-[10px] leading-relaxed text-[#9B8470]">
                                Tarikh: {event.date}
                            </p>
                            <p className="text-[10px] text-[#9B8470]">
                                Jam: {event.time}
                            </p>
                            <p className="text-[10px] text-[#9B8470]">
                                Tempat: {event.venue}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Action buttons */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="mx-auto mt-14 flex max-w-sm flex-col gap-3 sm:flex-row sm:justify-between"
            >
                <button className="border border-[#8B6B45]/30 px-4 py-3 text-[10px] tracking-[0.2em] text-[#6B5544] uppercase transition hover:bg-[#8B6B45]/5">
                    Muat Turun Ringkasan
                    <br />
                    Majlis-Majlis Tersebut
                </button>
                <button className="border border-[#8B6B45]/30 px-4 py-3 text-[10px] tracking-[0.2em] text-[#6B5544] uppercase transition hover:bg-[#8B6B45]/5">
                    Simpan Tarikh-Tarikh
                    <br />
                    dalam Kalendar Anda
                </button>
            </motion.div>
        </div>
    );
}
