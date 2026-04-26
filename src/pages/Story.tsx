import { useLenis } from "../hooks/useLenis";
import EventsSummary from "../components/timeline";
import Countdown from "../components/countdown";
import NikahDetails from "../components/nikah-details";
import SectionNav from "../components/nav";
import Hero from "@/components/hero";
import FloralDivider from "@/components/floral-separator";
import EventDetail from "@/components/event-detail";

// ─── Event Data ────────────────────────────────────────────────────────────
const eventKhatam = {
    title: "MAJLIS KHATAM AL-QURAN\nDAN MAJLIS BERBEDAK SIANG",
    day: "Hari Jumaat",
    date: "25 Disember 2026M / 15 Rejab 1448H",
    venue: [
        "No. 10, Simpang 52-52",
        "Kg. Mata-Mata, Gadong BE1718",
        "Brunei Darussalam",
    ],
    themeColor: "#F5F5F0",
    themeLabel: "Putih / Off-White",
    aturcara: [
        "Ketibaan Tetamu dan Jemputan",
        "Perarakan Masuk Pembaca Khatam",
        {
            item: "Majlis Khatam Al-Quran Dimulakan",
            subitems: [
                "Bacaan Surah Al-Fatihah dikepalai oleh Awangku Mohamad Izzan Naqiuddin",
                "Bacaan Surah-Surah, Tahktim & Doa Khatam",
            ],
        },
        "Alunan Dikir Marhaban",
        "Upacara Merenjis Bunga Rampai",
        "Menikmati Jamuan",
        {
            item: "Majlis Berbedak Siang Dimulakan",
            subitems: ["Upacara Menculiki (Merenjis) Bedak"],
        },
        "Bacaan Doa Selamat",
    ],
};

const eventBerbedak = {
    title: "MAJLIS MALAM BERBEDAK\nDAN MAJLIS BERINAI",
    day: "Hari Sabtu",
    date: "26 Disember 2026M / 16 Rejab 1448H",
    venue: [
        "No. 10, Simpang 52-52",
        "Kg. Mata-Mata, Gadong BE1718",
        "Brunei Darussalam",
    ],
    themeColor: "#CFA8A1",
    themeLabel: "Dusty Rose",
    aturcara: [
        "Ketibaan Tetamu dan Jemputan",
        "Majlis Dikir Dimulakan",
        "Perarakan Masuk Pengantin Perempuan ke Pelamin",
        "Perarakan Masuk Pengantin Lelaki ke Pelamin",
        {
            item: "Majlis Berbedak & Berinai Dimulakan",
            subitems: [
                "Upacara Menculiki (Merenjis) Bedak 7 Warna & Menitiki Pacar (Inai)",
            ],
        },
        "Bacaan Doa Selamat",
        "Menikmati Jamuan",
    ],
};

const eventAkad = {
    title: "MAJLIS MENERIMA BERIAN\nDAN MAJLIS AKAD NIKAH",
    day: "Hari Ahad",
    date: "27 Disember 2026M / 17 Rejab 1448H",
    venue: [
        "The Garden's Veranda, Rimba Garden Central (RGC)",
        "Simpang 127, Kg. Rimba, Gadong BE3119",
        "Brunei Darussalam",
    ],
    themeColor: "#7B4A2D",
    themeLabel: "Coklat / Brown",
    aturcara: [
        "Ketibaan Tetamu dan Jemputan",
        "Jurunikah dan Saksi-Saksi Mengambil Tempat",
        "Ketibaan Rombongan Keluarga Pengantin Lelaki",
        {
            item: "Majlis Menerima Berian & Mas Kahwin Dimulakan",
            subitems: ["Pertukaran Dulang Hantaran & Balasan"],
        },
        "Perarakan Masuk Pengantin Lelaki & Perempuan",
        {
            item: "Majlis Akad Nikah Dimulakan",
            subitems: [
                "Upacara Penyerahan Mas Kahwin & Menyarungkan Cincin",
            ],
        },
        "Bacaan Doa Selamat",
        "Sesi Bergambar",
        "Menikmati Jamuan",
    ],
};

const eventBersanding = {
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
    aturcara: [
        "Ketibaan Tetamu dan Jemputan",
        "Perarakan Masuk Diraja Sehari",
        "Iringan Persembahan Tausyeh",
        {
            item: "Majlis Bersanding Dimulakan",
            subitems: ["Ucapan Alu-aluan daripada Wakil Keluarga"],
        },
        "Acara Memotong Kek",
        "Bacaan Doa Selamat",
        "Menikmati Jamuan",
        "Sesi bergambar & Rakaman Ucapan Kenangan",
    ],
};

// ─── Section Divider ────────────────────────────────────────────────────────
function SectionDivider() {
    return (
        <div className="flex w-full items-center justify-center py-6 bg-[#F5F0E8]">
            <FloralDivider size="sm" />
        </div>
    );
}

export default function Story() {
    useLenis();

    return (
        <div className="min-h-screen bg-[#F5F0E8] lg:pl-44">
            <SectionNav />

            {/* HERO / COVER */}
            <section id="home">
                <Hero />
            </section>

            <SectionDivider />

            {/* INVITATION (Assalamu'alaikum) */}
            <section id="invitation">
                <NikahDetails />
            </section>

            <SectionDivider />

            {/* COUNTDOWN */}
            <section id="countdown" className="bg-[#F5F0E8]">
                <Countdown />
            </section>

            <SectionDivider />

            {/* RINGKASAN MAJLIS */}
            <section id="events">
                <EventsSummary />
            </section>

            <SectionDivider />

            {/* EVENT 1: Khatam Al-Quran & Berbedak Siang */}
            <section id="khatam">
                <EventDetail {...eventKhatam} />
            </section>

            <SectionDivider />

            {/* EVENT 2: Malam Berbedak & Berinai */}
            <section id="berbedak">
                <EventDetail {...eventBerbedak} />
            </section>

            <SectionDivider />

            {/* EVENT 3: Menerima Berian & Akad Nikah */}
            <section id="akad">
                <EventDetail {...eventAkad} />
            </section>

            <SectionDivider />

            {/* EVENT 4: Bersanding */}
            <section id="bersanding" className="pb-24 lg:pb-8">
                <EventDetail {...eventBersanding} />
            </section>
        </div>
    );
}
