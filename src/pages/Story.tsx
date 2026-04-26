import { useState } from "react";
import { useLenis } from "../hooks/useLenis";
import SectionNav from "../components/nav";
import Hero from "@/components/hero";
import NikahDetails from "@/components/nikah-details";
import EventDetail from "@/components/event-detail";
import type { EventDetailProps } from "@/components/event-detail";
import Countdown from "@/components/countdown";
import FloralDivider from "@/components/floral-separator";

// ─── Event data ──────────────────────────────────────────────────────────────

const eventKhatam: EventDetailProps = {
    sectionId: "khatam",
    title: "MAJLIS KHATAM AL-QURAN\nDAN MAJLIS BERBEDAK SIANG",
    day: "Hari Jumaat",
    date: "25 Disember 2026M / 15 Rejab 1448H",
    venue: [
        "No. 10, Simpang 52-52",
        "Kg. Mata-Mata, Gadong BE1718",
        "Brunei Darussalam",
    ],
    themeColor: "#F5F5F0",
    themeLabel: "Putih / White",
    dresscode: { lelaki: "Kurta", perempuan: "Jubah atau Abaya" },
    aturcara: [
        { time: "9:00 PG", item: "Ketibaan Tetamu dan Jemputan" },
        { time: "9:30 PG", item: "Perarakan Masuk Pembaca Khatam" },
        {
            time: "10:00 PG",
            item: "Majlis Khatam Al-Quran Dimulakan",
            subitems: [
                "Bacaan Surah Al-Fatihah dikepalai oleh Awangku Mohamad Izzan Naqiuddin",
                "Bacaan Surah-Surah, Tahktim & Doa Khatam",
            ],
        },
        { time: "11:00 PG", item: "Alunan Dikir Marhaban" },
        { time: "11:30 PG", item: "Upacara Merenjis Bunga Rampai" },
        { time: "12:00 TGH", item: "Menikmati Jamuan" },
        {
            time: "2:30 PTG",
            item: "Majlis Berbedak Siang Dimulakan",
            subitems: ["Upacara Menculiki (Merenjis) Bedak"],
        },
        { time: "3:30 PTG", item: "Bacaan Doa Selamat" },
    ],
    location: "https://maps.app.goo.gl/hqtoseX2VETaqKqV7?g_st=ic",
};

const eventBerbedak: EventDetailProps = {
    sectionId: "berbedak",
    title: "MAJLIS MALAM BERBEDAK\nDAN MAJLIS BERINAI",
    day: "Hari Sabtu",
    date: "26 Disember 2026M / 16 Rejab 1448H",
    venue: [
        "No. 10, Simpang 52-52",
        "Kg. Mata-Mata, Gadong BE1718",
        "Brunei Darussalam",
    ],
    themeColor: "#DEA193",
    themeLabel: "Rose Gold / Merah Jambu",
    dresscode: {
        lelaki: "Baju Melayu",
        perempuan: "Baju Kurung atau Gaun Formal",
    },
    aturcara: [
        { time: "8:00 MLM", item: "Ketibaan Tetamu dan Jemputan" },
        { time: "8:30 MLM", item: "Majlis Dikir Dimulakan" },
        {
            time: "9:00 MLM",
            item: "Perarakan Masuk Pengantin Perempuan ke Pelamin",
        },
        {
            time: "9:15 MLM",
            item: "Perarakan Masuk Pengantin Lelaki ke Pelamin",
        },
        {
            time: "9:30 MLM",
            item: "Majlis Berbedak & Berinai Dimulakan",
            subitems: [
                "Upacara Menculiki (Merenjis) Bedak 7 Warna & Menitiki Pacar (Inai)",
            ],
        },
        { time: "10:30 MLM", item: "Bacaan Doa Selamat" },
        { time: "11:00 MLM", item: "Menikmati Jamuan" },
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
    themeLabel: "Coklat Gelap / Rich Brown",
    dresscode: {
        lelaki: "Baju Melayu",
        perempuan: "Baju Kurung atau Gaun Formal",
    },
    aturcara: [
        { time: "9:30 PG", item: "Ketibaan Tetamu dan Jemputan" },
        {
            time: "10:00 PG",
            item: "Jurunikah dan Saksi-Saksi Mengambil Tempat",
        },
        {
            time: "10:30 PG",
            item: "Ketibaan Rombongan Keluarga Pengantin Lelaki",
        },
        {
            time: "11:00 PG",
            item: "Majlis Menerima Berian & Mas Kahwin Dimulakan",
            subitems: ["Pertukaran Dulang Hantaran & Balasan"],
        },
        {
            time: "11:30 PG",
            item: "Perarakan Masuk Pengantin Lelaki & Perempuan",
        },
        {
            time: "12:00 TGH",
            item: "Majlis Akad Nikah Dimulakan",
            subitems: ["Upacara Penyerahan Mas Kahwin & Menyarungkan Cincin"],
        },
        { time: "12:30 TGH", item: "Bacaan Doa Selamat" },
        { time: "1:00 PTG", item: "Sesi Bergambar" },
        { time: "1:30 PTG", item: "Menikmati Jamuan" },
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
    themeLabel: "Biru Gelap / Dark Navy",
    dresscode: {
        lelaki: "Baju Melayu",
        perempuan: "Baju Kurung atau Gaun Formal",
    },
    aturcara: [
        { time: "7:00 MLM", item: "Ketibaan Tetamu dan Jemputan" },
        { time: "8:00 MLM", item: "Perarakan Masuk Diraja Sehari" },
        { time: "8:30 MLM", item: "Iringan Persembahan Tausyeh" },
        {
            time: "9:00 MLM",
            item: "Majlis Bersanding Dimulakan",
            subitems: ["Ucapan Alu-aluan daripada Wakil Keluarga"],
        },
        { time: "9:45 MLM", item: "Acara Memotong Kek" },
        { time: "10:00 MLM", item: "Bacaan Doa Selamat" },
        { time: "10:30 MLM", item: "Menikmati Jamuan" },
        { time: "11:00 MLM", item: "Sesi bergambar & Rakaman Ucapan Kenangan" },
    ],
    location: "https://maps.app.goo.gl/Nfbe8NC5Kz59Ft1NA",
};

// ─── Section divider ─────────────────────────────────────────────────────────

function SectionDivider() {
    return (
        <div className="flex w-full items-center justify-center bg-[#F5F0E8] py-6">
            <FloralDivider size="sm" />
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

            <SectionDivider />

            {/* Countdown — before the summary */}
            <section id="countdown">
                <Countdown />
            </section>

            <SectionDivider />

            {/* Event 1 — Khatam Al-Quran & Berbedak Siang */}
            <EventDetail {...eventKhatam} />

            <SectionDivider />

            {/* Event 2 — Malam Berbedak & Berinai */}
            <EventDetail {...eventBerbedak} />

            <SectionDivider />

            {/* Event 3 — Menerima Berian & Akad Nikah */}
            <EventDetail {...eventAkad} />

            <SectionDivider />

            {/* Event 4 — Bersanding */}
            <div className="pb-24 lg:pb-8">
                <EventDetail {...eventBersanding} />
            </div>
        </div>
    );
}

// ─── Event Data ────────────────────────────────────────────────────────────
