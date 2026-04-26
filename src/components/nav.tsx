import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
    Mail,
    List,
    BookOpen,
    Sparkles,
    Heart,
    Crown,
    Timer,
} from "lucide-react";

// ─── Section definitions ────────────────────────────────────────────────────

const sidebarSections = [
    { id: "invitation", label: "Jemputan", group: "main" },
    { id: "countdown", label: "Kiraan Hari", group: "main" },
    { id: "khatam", label: "Khatam & Berbedak Siang", group: "event" },
    { id: "berbedak", label: "Malam Berbedak & Berinai", group: "event" },
    { id: "akad", label: "Akad Nikah", group: "event" },
    { id: "bersanding", label: "Majlis Bersanding", group: "event" },
];

const bottomBarSections = [
    { id: "invitation", label: "Jemputan", Icon: Mail },
    { id: "countdown", label: "Kiraan", Icon: Timer },
    { id: "khatam", label: "Khatam", Icon: BookOpen },
    { id: "berbedak", label: "Berbedak", Icon: Sparkles },
    { id: "akad", label: "Akad", Icon: Heart },
    { id: "bersanding", label: "Bersanding", Icon: Crown },
];

// ─── Component ──────────────────────────────────────────────────────────────

export default function SectionNav({
    revealed = false,
}: {
    revealed?: boolean;
}) {
    const [active, setActive] = useState("home");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                // Pick the entry that intersects the most
                const visible = entries
                    .filter((e) => e.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
                if (visible.length > 0) {
                    setActive(visible[0].target.id);
                }
            },
            { threshold: [0.25, 0.5], rootMargin: "0px 0px -10% 0px" },
        );

        sidebarSections.forEach(({ id }) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const scrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={revealed ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
            <>
                {/* ────────────────────────────────────────────────────────────
                DESKTOP: Fixed Left Sidebar
                ──────────────────────────────────────────────────────── */}
                <nav
                    className="fixed top-0 left-0 z-50 hidden h-full w-44 flex-col justify-between border-r border-[#D4C4AE]/50 bg-[#F5F0E8]/92 backdrop-blur-sm lg:flex"
                    aria-label="Section navigation"
                >
                    {/* Logo / Monogram */}
                    <div className="px-5 pt-10 pb-8 text-center">
                        <p className="font-serif text-xs tracking-[0.28em] text-[#6B5544] uppercase">
                            Izyan &amp; Adam
                        </p>
                        <p className="mt-1 text-[9px] tracking-[0.22em] text-[#9B8470] uppercase">
                            25 – 28 Dec 2026
                        </p>
                        <div className="mx-auto mt-5 h-px w-10 bg-[#D4C4AE]/70" />
                    </div>

                    {/* Nav items */}
                    <ul className="flex flex-1 flex-col gap-0.5 px-3 py-2">
                        {sidebarSections.map((s, i) => {
                            const isActive = active === s.id;
                            const showGroupDivider =
                                i > 0 &&
                                sidebarSections[i - 1].group !== s.group;

                            return (
                                <li key={s.id}>
                                    {showGroupDivider && (
                                        <div className="mx-2 my-3 h-px bg-[#D4C4AE]/50" />
                                    )}
                                    <button
                                        onClick={() => scrollTo(s.id)}
                                        className={`w-full rounded-sm px-3 py-2 text-left text-[11px] tracking-wide transition-all duration-200 ${
                                            isActive
                                                ? "bg-[#3D2E1E]/6 font-medium text-[#3D2E1E]"
                                                : "text-[#9B8470] hover:text-[#6B5544]"
                                        }`}
                                        aria-current={
                                            isActive ? "location" : undefined
                                        }
                                    >
                                        <span className="flex items-center gap-2">
                                            <span
                                                className={`inline-block h-1 w-1 flex-shrink-0 rounded-full transition-colors duration-200 ${
                                                    isActive
                                                        ? "bg-[#C4A882]"
                                                        : "bg-transparent"
                                                }`}
                                            />
                                            {s.label}
                                        </span>
                                    </button>
                                </li>
                            );
                        })}
                    </ul>

                    {/* Footer mark */}
                    <div className="px-5 pb-8 text-center">
                        <div className="mx-auto mb-3 h-px w-10 bg-[#D4C4AE]/60" />
                        <p className="text-[9px] tracking-[0.2em] text-[#C4A882] uppercase">
                            Brunei Darussalam
                        </p>
                    </div>
                </nav>

                {/* ────────────────────────────────────────────────────────────
                MOBILE: Fixed Bottom Bar
                ──────────────────────────────────────────────────────── */}
                <nav
                    className="fixed right-0 bottom-0 left-0 z-50 lg:hidden"
                    aria-label="Section navigation"
                >
                    <div
                        className="flex items-stretch justify-around border-t border-[#D4C4AE]/60 bg-[#F5F0E8]/96 shadow-lg backdrop-blur-md"
                        style={{
                            paddingBottom:
                                "calc(0.5rem + env(safe-area-inset-bottom))",
                        }}
                    >
                        {bottomBarSections.map(({ id, label, Icon }) => {
                            const isActive = active === id;
                            return (
                                <button
                                    key={id}
                                    onClick={() => scrollTo(id)}
                                    aria-label={label}
                                    aria-current={
                                        isActive ? "location" : undefined
                                    }
                                    className="flex min-w-[60px] flex-col items-center gap-1 px-2 pt-2"
                                >
                                    <Icon
                                        size={17}
                                        className={
                                            isActive
                                                ? "text-[#6B5544]"
                                                : "text-[#C4A882]/70"
                                        }
                                        strokeWidth={isActive ? 2 : 1.5}
                                    />
                                    <span
                                        className={`text-[8.5px] tracking-wide ${
                                            isActive
                                                ? "font-medium text-[#6B5544]"
                                                : "text-[#B8A898]"
                                        }`}
                                    >
                                        {label}
                                    </span>
                                    <div
                                        className={`h-0.5 w-4 rounded-full transition-colors duration-200 ${
                                            isActive
                                                ? "bg-[#C4A882]"
                                                : "bg-transparent"
                                        }`}
                                    />
                                </button>
                            );
                        })}
                    </div>
                </nav>
            </>
        </motion.div>
    );
}
