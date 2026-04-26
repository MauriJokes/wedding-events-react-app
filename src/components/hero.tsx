import { motion } from "framer-motion";

/**
 * ASSET: Botanical Bouquet Illustration
 * Path: src/assets/botanical-bouquet.png  (or .svg)
 * Usage: Replace <BotanicalPlaceholder /> with:
 *   import botanicalBouquet from "@/assets/botanical-bouquet.png";
 *   <img src={botanicalBouquet} alt="Dried botanical bouquet" className="w-56 h-64 object-contain drop-shadow-sm" />
 */
function BotanicalPlaceholder() {
    return (
        <div
            className="relative mx-auto flex flex-col items-center justify-center"
            style={{ width: 224, height: 256 }}
            role="img"
            aria-label="Botanical bouquet illustration — replace with src/assets/botanical-bouquet.png"
        >
            {/* Outer dashed frame */}
            <div className="absolute inset-0 rounded-sm border border-dashed border-[#8B6B45]/20" />
            {/* Inner placeholder content */}
            <div className="flex flex-col items-center gap-2 text-center">
                {/* Decorative dots representing bouquet stems */}
                <div className="flex gap-1.5 mb-1">
                    {[0.6, 1, 0.7, 0.9, 0.5].map((o, i) => (
                        <div
                            key={i}
                            className="h-12 w-px bg-[#8B6B45]"
                            style={{ opacity: o * 0.25 }}
                        />
                    ))}
                </div>
                {/* Circle representing bouquet head */}
                <div className="h-20 w-20 rounded-full border border-dashed border-[#8B6B45]/20 flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-[#8B6B45]/25" />
                </div>
                <p className="text-[8px] tracking-[0.18em] text-[#8B6B45]/40 uppercase mt-2">
                    Botanical Bouquet
                </p>
                <p className="text-[7px] tracking-wide text-[#8B6B45]/28">
                    Illustration Placeholder
                </p>
            </div>
        </div>
    );
}

/**
 * ASSET: Calligraphy Badge / Seal
 * The circular badge contains Arabic calligraphy for "Izyan & Adam"
 * Path: src/assets/calligraphy-badge.png  (optional — can remain as styled text)
 * Usage: Replace inner content with:
 *   <img src={calligraphyBadge} alt="Izyan & Adam calligraphy seal" className="w-full h-full object-contain rounded-full" />
 */
function CalligraphyBadge() {
    return (
        <div className="relative -mt-10 z-10">
            <div
                className="relative flex h-32 w-32 sm:h-36 sm:w-36 items-center justify-center rounded-full shadow-md"
                style={{ backgroundColor: "#C4A882" }}
            >
                {/* Inner decorative ring */}
                <div className="absolute inset-[10px] rounded-full border border-[#3D2010]/18" />
                {/* Arabic calligraphy content */}
                <div className="relative flex flex-col items-center justify-center text-center">
                    <p
                        className="font-serif text-[#2A1A0E]"
                        style={{ fontSize: 22, fontWeight: 500, lineHeight: 1.2 }}
                    >
                        إزيان
                    </p>
                    <div className="my-1 h-px w-8 bg-[#3D2010]/25" />
                    <p
                        className="font-serif text-[#2A1A0E]"
                        style={{ fontSize: 15, lineHeight: 1.2 }}
                    >
                        آدم
                    </p>
                </div>
                {/* Small circular text at bottom */}
                <p className="absolute bottom-[14px] text-[6px] tracking-[0.05em] text-[#3D2010]/38 whitespace-nowrap">
                    Izyan • Adam
                </p>
            </div>
        </div>
    );
}

export default function Hero() {
    return (
        <section
            id="home"
            className="relative flex min-h-screen w-full items-center justify-center overflow-hidden"
            style={{ backgroundColor: "#D4C3AE" }}
        >
            {/* Vertical center stripe — lighter cream running full height */}
            <div
                className="absolute inset-y-0 left-1/2 -translate-x-1/2"
                style={{ width: "28%", maxWidth: 160, minWidth: 100, backgroundColor: "#EDE6DC" }}
            />

            {/* Main content — centered over stripe */}
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 flex flex-col items-center"
            >
                <BotanicalPlaceholder />
                <CalligraphyBadge />
            </motion.div>
        </section>
    );
}
