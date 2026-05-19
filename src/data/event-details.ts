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
    theme: { themeColor: string; themeLabel: string; designation?: string }[];
    dresscode: { lelaki: string; perempuan: string };
    location: string;
    /** Optional short description shown in an expandable panel */
    description?: string[];
    index?: number;
}
// ─── Event data ──────────────────────────────────────────────────────────────

export const eventKhatam: EventDetailProps = {
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
    theme: [
        {
            themeColor: "#F5F5F0",
            themeLabel: "White / Putih",
        },
    ],
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

export const eventBerbedak: EventDetailProps = {
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
    theme: [
        {
            themeColor: "#DEA193",
            themeLabel: "Rose Gold / Merah Jambu",
        },
    ],
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

export const eventAkad: EventDetailProps = {
    sectionId: "akad",
    title: "MAJLIS MENERIMA BERIAN\nDAN MAJLIS AKAD NIKAH",
    day: "Hari Ahad",
    date: "27 Disember 2026M / 17 Rejab 1448H",
    venue: [
        "The Garden's Veranda, Rimba Garden Central (RGC)",
        "Simpang 127, Kg. Rimba, Gadong BE3119",
        "Brunei Darussalam",
    ],
    theme: [
        {
            themeColor: "#7B4A2D",
            themeLabel: "Rich Brown / Coklat Gelap",
        },
    ],
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

export const eventBersanding: EventDetailProps = {
    sectionId: "bersanding",
    title: "MAJLIS BERSANDING",
    day: "Hari Isnin",
    date: "28 Disember 2026M / 18 Rejab 1448H",
    venue: [
        "Songket Ballroom, Level 4,",
        "The Rizqun International Hotel,",
        "Abdul Razak Complex, Gadong BE3519,",
        "Brunei Darussalam",
    ],
    theme: [
        {
            themeColor: "#1A2744",
            themeLabel: "Navy Blue /\nBiru Gelap",
            designation: "Pihak Perempuan",
        },
        {
            themeColor: "#4E0000",
            themeLabel: "Burgundy /\nMerah Anggur",
            designation: "Pihak Lelaki",
        },
    ],
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
    location: "https://maps.app.goo.gl/8qFWynBpwba4RuJF6",
};
