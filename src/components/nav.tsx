import { useEffect, useState } from "react";
import { Home, Mail, List, Book, Sparkles, Heart, Crown } from "lucide-react";

const mobileSections = [
    { id: "home", label: "Beranda", icon: Home },
    { id: "invitation", label: "Jemputan", icon: Mail },
    { id: "events", label: "Ringkasan", icon: List },
    { id: "khatam", label: "Khatam", icon: Book },
    { id: "berbedak", label: "Berbedak", icon: Sparkles },
    { id: "akad", label: "Akad", icon: Heart },
    { id: "bersanding", label: "Bersanding", icon: Crown },
];

const allSections = [
    { id: "home", label: "Beranda", group: "main" },
    { id: "invitation", label: "Jemputan", group: "main" },
    { id: "events", label: "Ringkasan Majlis", group: "main" },
    { id: "khatam", label: "Khatam & Berbedak Siang", group: "event" },
    { id: "berbedak", label: "Malam Berbedak & Berinai", group: "event" },
    { id: "akad", label: "Akad Nikah", group: "event" },
    { id: "bersanding", label: "Majlis Bersanding", group: "event" },
];

export default function SectionNav() {
    const [active, setActive] = useState("home");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActive(entry.target.id);
                    }
                });
            },
            { threshold: 0.4 },
        );

        allSections.forEach((s) => {
            const el = document.getElementById(s.id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const scrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            {/* ── DESKTOP: Fixed Left Sidebar ── */}
            <nav className="fixed top-0 left-0 z-50 hidden h-full w-44 flex-col justify-center border-r border-[#D4C4AE]/50 bg-[#F5F0E8]/90 backdrop-blur-sm lg:flex">
                {/* Logo area */}
                <div className="px-5 pb-8 pt-10 text-center">
                    <p className="font-serif text-xs tracking-[0.25em] text-[#6B5544] uppercase">
                        Izyan & Adam
                    </p>
                    <p className="mt-1 text-[10px] tracking-[0.2em] text-[#9B8470] uppercase">
                        25 – 28 Dec 2026
                    </p>
                </div>

                {/* Divider */}
                <div className="mx-5 mb-6 h-px bg-[#D4C4AE]/60" />

                {/* Nav items */}
                <ul className="flex flex-col gap-1 px-3">
                    {allSections.map((s, i) => {
                        const isActive = active === s.id;
                        const isPrevGroupDifferent =
                            i > 0 && allSections[i - 1].group !== s.group;

                        return (
                            <li key={s.id}>
                                {isPrevGroupDifferent && (
                                    <div className="mx-2 my-2 h-px bg-[#D4C4AE]/50" />
                                )}
                                <button
                                    onClick={() => scrollTo(s.id)}
                                    className={`w-full rounded-md px-3 py-2 text-left text-[11px] tracking-wide transition-all duration-200 ${
                                        isActive
                                            ? "bg-[#3D2E1E]/8 font-medium text-[#3D2E1E]"
                                            : "text-[#9B8470] hover:text-[#6B5544]"
                                    }`}
                                >
                                    <span className="flex items-center gap-2">
                                        {isActive && (
                                            <span className="inline-block h-1 w-1 rounded-full bg-[#C4A882]" />
                                        )}
                                        {!isActive && (
                                            <span className="inline-block h-1 w-1 rounded-full bg-transparent" />
                                        )}
                                        {s.label}
                                    </span>
                                </button>
                            </li>
                        );
                    })}
                </ul>

                {/* Bottom mark */}
                <div className="mt-auto px-5 pb-8 text-center">
                    <div className="mx-auto h-px w-10 bg-[#D4C4AE]/60" />
                    <p className="mt-3 text-[9px] tracking-[0.2em] text-[#C4A882] uppercase">
                        Brunei Darussalam
                    </p>
                </div>
            </nav>

            {/* ── MOBILE: Fixed Bottom Bar ── */}
            <nav className="fixed right-0 bottom-0 left-0 z-50 lg:hidden">
                <div className="flex items-center justify-start overflow-x-auto border-t border-[#D4C4AE]/60 bg-[#F5F0E8]/95 px-2 py-2 pb-[calc(0.5rem+env(safe-area-inset-bottom))] shadow-lg backdrop-blur-md scrollbar-none">
                    {mobileSections.map((s) => {
                        const Icon = s.icon;
                        const isActive = active === s.id;
                        return (
                            <button
                                key={s.id}
                                onClick={() => scrollTo(s.id)}
                                className="flex min-w-[64px] flex-col items-center gap-1 px-2 py-1"
                            >
                                <Icon
                                    size={18}
                                    className={
                                        isActive
                                            ? "text-[#6B5544]"
                                            : "text-[#B8A898]"
                                    }
                                    strokeWidth={isActive ? 2 : 1.5}
                                />
                                <span
                                    className={`text-[9px] tracking-wide ${
                                        isActive
                                            ? "font-medium text-[#6B5544]"
                                            : "text-[#B8A898]"
                                    }`}
                                >
                                    {s.label}
                                </span>
                                {isActive && (
                                    <div className="h-0.5 w-4 rounded-full bg-[#C4A882]" />
                                )}
                            </button>
                        );
                    })}
                </div>
            </nav>
        </>
    );
}
