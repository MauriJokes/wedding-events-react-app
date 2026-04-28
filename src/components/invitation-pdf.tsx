/**
 * Invitation PDF — generated with @react-pdf/renderer
 * No html2canvas, no DOM capture, no oklch issues.
 * Produces a crisp vector A4 PDF.
 */
import {
    Document,
    Page,
    View,
    Text,
    Image,
    StyleSheet,
    pdf,
} from "@react-pdf/renderer";

// ─── Types ────────────────────────────────────────────────────────────────────
interface PDFEventData {
    title: string;
    day: string;
    date: string;
    venue: string[];
    themeColor: string;
    themeLabel: string;
}

// ─── Event data ───────────────────────────────────────────────────────────────

const events: PDFEventData[] = [
    {
        title: "Majlis Khatam Al-Quran & Majlis Berbedak Siang",
        day: "Hari Jumaat",
        date: "25 Disember 2026M / 15 Rejab 1448H",
        venue: ["No. 10, Simpang 52-52", "Kg. Mata-Mata, Gadong BE1718"],
        themeColor: "#F0EFE9",
        themeLabel: "White/ Putih",
    },
    {
        title: "Majlis Malam Berbedak & Majlis Berinai",
        day: "Hari Sabtu",
        date: "26 Disember 2026M / 16 Rejab 1448H",
        venue: ["No. 10, Simpang 52-52", "Kg. Mata-Mata, Gadong BE1718"],
        themeColor: "#DEA193",
        themeLabel: "Rose Gold / Merah Jambu",
    },
    {
        title: "Majlis Menerima Berian & Majlis Akad Nikah",
        day: "Hari Ahad",
        date: "27 Disember 2026M / 17 Rejab 1448H",
        venue: [
            "The Garden's Veranda, Rimba Garden Central (RGC)",
            "Simpang 127, Kg. Rimba, Gadong BE3119",
        ],
        themeColor: "#7B4A2D",
        themeLabel: "Rich Brown / Coklat Gelap",
    },
    {
        title: "Majlis Bersanding",
        day: "Hari Isnin",
        date: "28 Disember 2026M / 18 Rejab 1448H",
        venue: [
            "Tarindak D'Polo, Royal Berkshire Hall",
            "Jerudong Park Polo & Riding Park, Kg. Jerudong, BG3122",
        ],
        themeColor: "#1A2744",
        themeLabel: "Dark Navy / Biru Gelap",
    },
];

// ─── Styles ───────────────────────────────────────────────────────────────────

const S = StyleSheet.create({
    page: {
        backgroundColor: "#FDFAF5",
        paddingHorizontal: 57,
        paddingTop: 48,
        paddingBottom: 48,
        fontFamily: "Helvetica",
    },
    header: { alignItems: "center", marginBottom: 12 },
    mainTitle: {
        fontSize: 26,
        fontFamily: "Times-Roman",
        color: "#3D2E1E",
        letterSpacing: 1,
        marginBottom: 5,
    },
    subNames: {
        fontSize: 8,
        color: "#9B8470",
        letterSpacing: 1.2,
        textTransform: "uppercase",
        marginBottom: 3,
    },
    dateRange: { fontSize: 8, color: "#9B8470" },
    sectionLabel: {
        fontSize: 7,
        letterSpacing: 2.5,
        color: "#C4A882",
        textTransform: "uppercase",
        textAlign: "center",
        marginBottom: 14,
    },
    eventBlock: { marginBottom: 18 },
    eventHeader: { alignItems: "center", marginBottom: 7 },
    eventNumber: {
        fontSize: 7,
        letterSpacing: 2,
        color: "#9B8470",
        textTransform: "uppercase",
        marginBottom: 3,
    },
    eventTitle: {
        fontSize: 12,
        fontFamily: "Times-Roman",
        color: "#3D2E1E",
        textAlign: "center",
        letterSpacing: 0.5,
        textTransform: "uppercase",
        marginBottom: 2,
    },
    eventDate: { fontSize: 8, color: "#9B8470" },
    venueThemeRow: { flexDirection: "row", marginVertical: 6 },
    venueCol: { flex: 1, paddingRight: 10 },
    themeCol: { alignItems: "flex-end" },
    colLabel: {
        fontSize: 7,
        letterSpacing: 1.5,
        color: "#C4A882",
        textTransform: "uppercase",
        marginBottom: 3,
    },
    venueText: { fontSize: 8, color: "#3D2E1E", lineHeight: 1.5 },
    themeSwatchRow: { flexDirection: "row", alignItems: "center" },
    themeSwatch: {
        width: 10,
        height: 10,
        borderRadius: 5,
        borderWidth: 0.5,
        borderColor: "#D4C4AE",
        marginRight: 5,
    },
    themeText: { fontSize: 8, color: "#3D2E1E" },
    footer: {
        // marginTop: 14,
        // borderTopWidth: 0.5,
        // borderTopColor: "#D4C4AE",
        // paddingTop: 10,
        alignItems: "center",
    },
    footerText: { fontSize: 9, fontFamily: "Times-Roman", color: "#9B8470" },
    logo: { width: 70, height: 70, marginBottom: 6 },
});

// ─── Sub-components ───────────────────────────────────────────────────────────

function GoldRule() {
    return (
        <View
            style={{
                height: 0.5,
                backgroundColor: "#C4A882",
                marginVertical: 7,
            }}
        />
    );
}

function PDFEventBlock({
    event,
    index,
}: {
    event: PDFEventData;
    index: number;
}) {
    return (
        <View style={S.eventBlock}>
            <View style={S.eventHeader}>
                <Text style={S.eventNumber}>Majlis {index + 1}</Text>
                <Text style={S.eventTitle}>{event.title}</Text>
                <Text style={S.eventDate}>
                    {event.day} . {event.date}
                </Text>
            </View>

            <GoldRule />

            <View style={S.venueThemeRow}>
                <View style={S.venueCol}>
                    <Text style={S.colLabel}>Bertempat Di</Text>
                    {event.venue.map((line, i) => (
                        <Text key={i} style={S.venueText}>
                            {line}
                        </Text>
                    ))}
                </View>
                <View style={S.themeCol}>
                    <Text style={S.colLabel}>Tema Pakaian</Text>
                    <View style={S.themeSwatchRow}>
                        <View
                            style={[
                                S.themeSwatch,
                                { backgroundColor: event.themeColor },
                            ]}
                        />
                        <Text style={S.themeText}>{event.themeLabel}</Text>
                    </View>
                </View>
            </View>

            <GoldRule />
        </View>
    );
}

function InvitationPDFDocument({ logoSrc }: { logoSrc: string }) {
    return (
        <Document
            title="Jemputan Nikah - Izyan & Adam"
            author="Izyan & Adam Wedding"
        >
            <Page size="A4" style={S.page}>
                <View style={S.header}>
                    <Image style={S.logo} src={logoSrc} />
                    <Text style={S.subNames}>
                        Dayangku Izyan Naqiyah . Nik Adam Danish
                    </Text>
                    <Text style={S.dateRange}>
                        25 - 28 Disember 2026 . Brunei Darussalam
                    </Text>
                </View>

                <View
                    style={{
                        height: 0.5,
                        backgroundColor: "#C4A882",
                        marginBottom: 12,
                    }}
                />

                <Text style={S.sectionLabel}>Ringkasan Majlis-Majlis</Text>

                {events.map((event, index) => (
                    <PDFEventBlock key={index} event={event} index={index} />
                ))}

                <View style={S.footer}>
                    <Text style={S.footerText}>
                        Semoga Allah SWT merahmati dan memberkati perkahwinan
                        ini.
                    </Text>
                </View>
            </Page>
        </Document>
    );
}

// ─── Download function ────────────────────────────────────────────────────────

export async function downloadPDF() {
    try {
        const logoSrc = window.location.origin + "/logo.png";
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const blob = await pdf(
            (<InvitationPDFDocument logoSrc={logoSrc} />) as any,
        ).toBlob();
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "jemputan-nikah.pdf";
        a.click();
        URL.revokeObjectURL(url);
    } catch (err) {
        console.error("[PDF] Generation failed:", err);
    }
}

// No longer rendered as a DOM component — kept as no-op so Story.tsx import is harmless
export default function InvitationPDFVersion() {
    return null;
}
