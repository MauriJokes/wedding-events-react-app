import { useState } from "react";
import { useLenis } from "../hooks/useLenis";
import SectionNav from "../components/nav";
import Hero from "@/components/hero";
import NikahDetails from "@/components/nikah-details";
import EventDetail from "@/components/event-detail";
import Countdown from "@/components/countdown";
import {
    eventKhatam,
    eventAkad,
    eventBerbedak,
    eventBersanding,
} from "@/data/event-details";
import OrnateFloralBorder from "@/components/ornate-floral-border";

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
                            backgroundImage:
                                "url('/static/assets/side_flowers.png')",
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
                            backgroundImage:
                                "url('/static/assets/side_flowers.png')",
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
                            backgroundImage:
                                "url('/static/assets/side_flowers.png')",
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
                            backgroundImage:
                                "url('/static/assets/side_flowers.png')",
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
                            backgroundImage:
                                "url('/static/assets/side_flowers.png')",
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
                            backgroundImage:
                                "url('/static/assets/side_flowers.png')",
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
