import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

export function GuestbookSlider({ entries }: { entries: any[] }) {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: "center",
    });

    const [selectedIndex, setSelectedIndex] = useState(0);

    useEffect(() => {
        if (!emblaApi) return;
        const timeout = setTimeout(() => {
            emblaApi.scrollTo(0, true);
        }, 400);
        return () => clearTimeout(timeout);
    }, [entries, emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        const interval = setInterval(() => {
            emblaApi.scrollNext();
        }, 5500);
        emblaApi.on("select", () => {
            setSelectedIndex(emblaApi.selectedScrollSnap());
        });
        return () => clearInterval(interval);
    }, [emblaApi]);

    if (entries.length === 0) {
        return (
            <div className="mx-auto w-full max-w-sm py-8 text-center">
                <p className="text-[11px] tracking-wide text-[#C4A882]">Belum ada ucapan lagi.</p>
            </div>
        );
    }

    return (
        <div className="mx-auto w-full max-w-sm py-8">
            {/* VIEWPORT */}
            <div className="overflow-hidden px-4" ref={emblaRef}>
                <div className="flex">
                    {entries.map((entry, i) => (
                        <div
                            key={i}
                            className="min-w-0 flex-shrink-0 basis-full px-4"
                        >
                            <div
                                className={`relative mx-auto w-full max-w-xs border border-[#D4C4AE]/60 bg-[#EDE8DC]/40 px-6 py-8 text-center transition-all duration-700 ${
                                    i === selectedIndex
                                        ? "opacity-100"
                                        : "opacity-50"
                                }`}
                            >
                                {/* decorative quote mark */}
                                <p className="mb-3 font-serif text-4xl leading-none text-[#C4A882]/40">“</p>
                                <p className="font-serif text-sm leading-relaxed text-[#6B5544]">
                                    {entry.message}
                                </p>
                                <div className="mt-4 h-px w-8 bg-[#C4A882]/40 mx-auto" />
                                <p className="mt-3 text-[9px] tracking-[0.3em] text-[#9B8470] uppercase">
                                    {entry.name}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Dots */}
            <div className="mt-4 flex justify-center gap-1.5">
                {entries.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => emblaApi?.scrollTo(i)}
                        className={`h-1 rounded-full transition-all ${
                            i === selectedIndex
                                ? "w-4 bg-[#C4A882]"
                                : "w-1 bg-[#D4C4AE]"
                        }`}
                    />
                ))}
            </div>
        </div>
    );
}
