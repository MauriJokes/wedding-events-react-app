import { useState } from "react";
import { useLenis } from "../hooks/useLenis";
import SectionNav from "../components/nav";
import Hero from "@/components/hero";
import NikahDetails, { OrnateFloralBorder } from "@/components/nikah-details";
import EventDetail from "@/components/event-detail";
import type { EventDetailProps } from "@/components/event-detail";
import Countdown from "@/components/countdown";

// ─── Event data ──────────────────────────────────────────────────────────────

const eventKhatam: EventDetailProps = {
    sectionId: "khatam",
    title: "MAJLIS KHATAM AL-QURAN\nDAN MAJLIS BERBEDAK SIANG",
    day: "Hari Jumaat",
    date: "25 Disember 2026M / 15 Rejab 1448H",
    venue: [
        "MJ Villa",
        "No. 10, Simpang 52-52",
        "Kg. Mata-Mata, Gadong BE1718",
        "Brunei Darussalam",
    ],
    themeColor: "#F5F5F0",
    themeLabel: "White / Putih",
    description: [
        "Majlis Khatam Al-Quran adalah satu pencapaian dan persiapan rohani yang signifikan bagi bakal mempelai sebelum melaksanakan tanggungjawab sebagai suami dan isteri. Majlis ini melambangkan kesediaan pengantin melangkah ke alam perkahwinan dengan pegangan agama yang teguh serta memohon keberkatan Ilahi.",
        "Majlis Bebadak Siang adalah upacara pembukaan rasmi bagi minggu perkahwinan. Ahli keluarga terdekat akan menyapu bedak tradisional (lulut) kepada pengantin bertujuan untuk pembersihan diri serta menaikkan 'seri' wajah sebelum hari bahagia.",
    ],
    dresscode: { lelaki: "Kurta", perempuan: "Jubah atau Abaya" },
    aturcara: [
        { time: "2:15 PTG", item: "Menerima Jemputan" },
        { time: "2:30 PTG", item: "Perarakan Masuk Pembaca Khatam" },
        { time: "", item: "Bacaan Surah Al-Fatihah" },
        { time: "", item: "Bacaan Surah-Surah, Tahktim & Doa Khatam" },
        { time: "", item: "Dikir Marhaban" },
        { time: "", item: "Menikmati Jamuan" },
        { time: "", item: "Upacara Merenjis Bunga Rampai" },
        { time: "", item: "Menikmati Jamuan" },
        { time: "", item: "Majlis Berbedak Siang Dimulakan" },
        { time: "", item: "Bacaan Doa Selamat" },
    ],
    location: "https://maps.app.goo.gl/hqtoseX2VETaqKqV7?g_st=ic",
};

const eventBerbedak: EventDetailProps = {
    sectionId: "berbedak",
    title: "MAJLIS MALAM BERBEDAK\nDAN MAJLIS BERINAI",
    day: "Hari Sabtu",
    date: "26 Disember 2026M / 16 Rejab 1448H",
    venue: [
        "MJ Villa",
        "No. 10, Simpang 52-52",
        "Kg. Mata-Mata, Gadong BE1718",
        "Brunei Darussalam",
    ],
    themeColor: "#DEA193",
    themeLabel: "Rose Gold / Merah Jambu",
    description: [
        "Majlis Malam Berbedak adalah salah satu acara yang paling unik di Brunei. Para jemputan akan dipanggil untuk 'menculiki' atau mencalitkan bedak tradisional berwarna-warni (7 warna) ke tapak tangan pengantin sebagai simbol pemberian restu dan doa.",
        "Majlis Dikir diadakan sebelum upacara berbedak, di mana alunan zikir dan selawat ke atas Nabi Muhammad S.A.W dilaungkan. Ia bertujuan untuk mewujudkan suasana penuh kerohanian dan memohon perlindungan buat pasangan.",
        "Majlis Berinai sering diadakan selepas upacara berbedak, inai atau pacar akan dipakaikan pada jari-jemari pengantin sebagai pelengkap hiasan tradisi. Ia melambangkan status pengantin yang sedang meraikan hari kebesaran mereka.",
    ],
    dresscode: {
        lelaki: "Baju Melayu",
        perempuan: "Baju Kurung atau Gaun Formal",
    },
    aturcara: [
        { time: "7:30 MLM", item: "Menerima Jemputan" },
        { time: "7:45 MLM", item: "Majlis Dikir Dimulakan" },
        {
            time: "",
            item: "Perarakan Masuk Pengantin Lelaki & Perempuan ke Pelamin",
        },
        { time: "", item: "Majlis Berbedak & Berinai Dimulakan" },
        { time: "", item: "Bacaan Doa Selamat" },
        { time: "", item: "Menikmati Jamuan" },
    ],
    location: "https://maps.app.goo.gl/hqtoseX2VETaqKqV7?g_st=ic",
};

const eventAkad: EventDetailProps = {
    sectionId: "akad",
    title: "MAJLIS MENERIMA BERIAN\nDAN MAJLIS AKAD NIKAH",
    day: "Hari Ahad",
    date: "27 Disember 2026M / 17 Rejab 1448H",
    venue: [
        "The Garden's Veranda, Rimba Garden Central (RGC)",
        "Simpang 127, Kg. Rimba, Gadong BE3119",
        "Brunei Darussalam",
    ],
    themeColor: "#7B4A2D",
    themeLabel: "Rich Brown / Coklat Gelap",
    description: [
        "Majlis Menerima Berian adalah upacara penghantaran dan penerimaan dulang hantaran serta mas kahwin yang telah dipersetujui. Ia menandakan ikatan perjanjian dan tanda penghargaan di antara pihak lelaki dan pihak perempuan.",
        "Majlis Akad Nikah adalah acara kemuncak yang paling mulia di mana ikatan perkahwinan disahkan melalui Ijab dan Qabul. Di sinilah pasangan secara rasminya menjadi suami dan isteri yang sah di sisi agama dan undang-undang.",
    ],
    dresscode: {
        lelaki: "Baju Melayu",
        perempuan: "Baju Kurung atau Gaun Formal",
    },
    aturcara: [
        { time: "2:00 PTG", item: "Menerima Jemputan" },
        {
            time: "2:30 PTG",
            item: "Rombongan Pengantin Lelaki Dijangka Tiba",
        },
        {
            time: "",
            item: "Majlis Menerima Berian & Mas Kahwin",
        },
        {
            time: "",
            item: "Pertukaran Dulang Hantaran & Balasan",
        },
        {
            time: "",
            item: "Jurunikah dan Saksi-Saksi Mengambil Tempat",
        },
        { time: "", item: "Perarakan Masuk Pengantin Lelaki & Perempuan" },
        { time: "", item: "Majlis Akad Nikah Dimulakan" },
        {
            time: "",
            item: "Upacara Penyerahan Mas Kahwin & Menyarungkan Cincin",
        },
        { time: "", item: "Bacaan Doa Selamat" },
        { time: "", item: "Sesi Bergambar" },
        { time: "", item: "Menikmati Jamuan" },
    ],
    location: "https://maps.app.goo.gl/uxXXArTPfgnjCdbH9",
};

const eventBersanding: EventDetailProps = {
    sectionId: "bersanding",
    title: "MAJLIS BERSANDING",
    day: "Hari Isnin",
    date: "28 Disember 2026M / 18 Rejab 1448H",
    venue: [
        "Tarindak D'Polo, Royal Berkshire Hall",
        "Jerudong Park Polo & Riding Park, Kg. Jerudong, BG3122",
        "Brunei Darussalam",
    ],
    themeColor: "#1A2744",
    themeLabel: "Navy Blue / Biru Gelap",
    description: [
        "Majlis Bersanding adalah hari di mana pasangan mempelai diraikan sebagai 'Raja Sehari' di atas pelamin yang indah setelah di ijab qabulkan. Majlis ini bertujuan untuk mengumumkan dan meraikan penyatuan pasangan kepada semua saudara-mara dan rakan-rakan.",
    ],
    dresscode: {
        lelaki: "Baju Melayu",
        perempuan: "Baju Kurung atau Gaun Formal",
    },
    aturcara: [
        { time: "7:15 MLM", item: "Menerima Jemputan" },
        { time: "8:15 MLM", item: "Perarakan Masuk Raja Sehari" },
        { time: "", item: "Iringan Persembahan Tausyeh" },
        {
            time: "",
            item: "Majlis Bersanding",
        },
        { time: "", item: "Ucapan Alu-aluan daripada Wakil Keluarga" },
        { time: "", item: "Acara Memotong Kek" },
        { time: "", item: "Bacaan Doa Selamat" },
        { time: "", item: "Menikmati Jamuan" },
        { time: "", item: "Sesi bergambar & Rakaman Ucapan Kenangan" },
    ],
    location: "https://maps.app.goo.gl/Nfbe8NC5Kz59Ft1NA",
};

// ─── Section divider ─────────────────────────────────────────────────────────

function SectionDivider({ flip }: { flip?: boolean }) {
    return (
        <div className="flex w-full items-center justify-center bg-[#F5F0E8] py-6">
            <OrnateFloralBorder
                flip={flip}
                className="w-[320px] md:w-[480px] lg:w-[640px]"
            />
        </div>
    );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Story({ onEnter }: { onEnter?: () => void }) {
    const [isRevealed, setIsRevealed] = useState(false);
    useLenis(!isRevealed);

    return (
        <div className="min-h-screen bg-[#F5F0E8] lg:pl-44">
            {/* Opening doors overlay */}
            <Hero onEnter={onEnter} onOpened={() => setIsRevealed(true)} />

            <SectionNav revealed={isRevealed} />

            {/* Scroll anchor for #home nav item */}
            <div id="home" />

            {/* Invitation / Jemputan — dark background butts directly against hero */}
            <NikahDetails revealed={isRevealed} />

            {/* Side-flower bordered zone — spans countdown, events and footer */}
            <div className="relative">
                {/* Left side flowers — tiled vertically */}
                <div
                    className="pointer-events-none absolute top-0 bottom-0 left-0 z-0 w-22 overflow-hidden md:w-40 lg:w-50"
                    style={{ opacity: 0.15 }}
                    aria-hidden="true"
                >
                    {/* Mobile: tile 70px fits in 80px strip — no clipping */}
                    <div
                        className="md:hidden"
                        style={{
                            position: "absolute",
                            top: "50%",
                            left: "5%",
                            width: "30000px",
                            height: "240px",
                            backgroundImage: "url('/side_flowers.png')",
                            backgroundRepeat: "repeat-x",
                            backgroundSize: "auto 240px",
                            transform: "translate(-50%, -50%) rotate(90deg)",
                        }}
                    />
                    {/* Tablet: tile 160px fits in 176px strip — no clipping */}
                    <div
                        className="hidden md:block lg:hidden"
                        style={{
                            position: "absolute",
                            top: "50%",
                            left: "35%",
                            width: "30000px",
                            height: "300px",
                            backgroundImage: "url('/side_flowers.png')",
                            backgroundRepeat: "repeat-x",
                            backgroundSize: "auto 300px",
                            transform: "translate(-50%, -50%) rotate(90deg)",
                        }}
                    />
                    {/* Laptop: tile 220px fits in 240px strip — no clipping */}
                    <div
                        className="hidden lg:block"
                        style={{
                            position: "absolute",
                            top: "50%",
                            left: "40%",
                            width: "30000px",
                            height: "320px",
                            backgroundImage: "url('/side_flowers.png')",
                            backgroundRepeat: "repeat-x",
                            backgroundSize: "auto 320px",
                            transform: "translate(-50%, -50%) rotate(90deg)",
                        }}
                    />
                </div>

                {/* Right side flowers — mirrored horizontally */}
                <div
                    className="pointer-events-none absolute top-0 right-0 bottom-0 z-0 w-22 overflow-hidden md:w-40 lg:w-50"
                    style={{ opacity: 0.15, transform: "scaleX(-1)" }}
                    aria-hidden="true"
                >
                    {/* Mobile: tile 70px fits in 80px strip — no clipping */}
                    <div
                        className="md:hidden"
                        style={{
                            position: "absolute",
                            top: "50%",
                            left: "5%",
                            width: "30000px",
                            height: "240px",
                            backgroundImage: "url('/side_flowers.png')",
                            backgroundRepeat: "repeat-x",
                            backgroundSize: "auto 240px",
                            transform: "translate(-50%, -50%) rotate(90deg)",
                        }}
                    />
                    {/* Tablet: tile 160px fits in 176px strip — no clipping */}
                    <div
                        className="hidden md:block lg:hidden"
                        style={{
                            position: "absolute",
                            top: "50%",
                            left: "35%",
                            width: "30000px",
                            height: "300px",
                            backgroundImage: "url('/side_flowers.png')",
                            backgroundRepeat: "repeat-x",
                            backgroundSize: "auto 300px",
                            transform: "translate(-50%, -50%) rotate(90deg)",
                        }}
                    />
                    {/* Laptop: tile 220px fits in 240px strip — no clipping */}
                    <div
                        className="hidden lg:block"
                        style={{
                            position: "absolute",
                            top: "50%",
                            left: "40%",
                            width: "30000px",
                            height: "320px",
                            backgroundImage: "url('/side_flowers.png')",
                            backgroundRepeat: "repeat-x",
                            backgroundSize: "auto 320px",
                            transform: "translate(-50%, -50%) rotate(90deg)",
                        }}
                    />
                    <div />
                </div>

                <SectionDivider />

                {/* Countdown */}
                <section id="countdown">
                    <Countdown />
                </section>

                <SectionDivider flip={true} />

                {/* Event 1 — Khatam Al-Quran & Berbedak Siang */}
                <EventDetail {...eventKhatam} index={0} />

                {/* Event 2 — Malam Berbedak & Berinai */}
                <EventDetail {...eventBerbedak} index={1} />

                {/* Event 3 — Menerima Berian & Akad Nikah */}
                <EventDetail {...eventAkad} index={2} />

                {/* Event 4 — Bersanding */}
                <EventDetail {...eventBersanding} index={3} />

                {/* Footer */}
                <div className="pt-4 pb-18 text-center text-[12px] leading-relaxed tracking-wide text-[#C4A882] md:text-sm lg:pb-10 lg:text-base">
                    Dengan penuh sayang, Izyan &amp; Adam
                </div>
            </div>
        </div>
    );
}
