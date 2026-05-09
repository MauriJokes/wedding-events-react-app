import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const targetDate = new Date("2026-12-27T14:00:00+08:00");

type Time = {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
};

export default function Countdown() {
    const [time, setTime] = useState<Time>({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const diff = targetDate.getTime() - now.getTime();

            setTime({
                days: Math.max(0, Math.floor(diff / (1000 * 60 * 60 * 24))),
                hours: Math.max(0, Math.floor((diff / (1000 * 60 * 60)) % 24)),
                minutes: Math.max(0, Math.floor((diff / (1000 * 60)) % 60)),
                seconds: Math.max(0, Math.floor((diff / 1000) % 60)),
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const format = (n: number) => n.toString().padStart(2, "0");

    const DigitBox = ({ digit }: { digit: string }) => {
        return (
            <div className="flex h-11 w-8 items-center justify-center rounded border border-[#D4C4AE]/60 bg-[#EDE8DC]/50 sm:h-14 sm:w-12 md:h-18 md:w-14 lg:h-24 lg:w-16">
                <span className="font-serif text-base text-[#3D2E1E] sm:text-2xl md:text-3xl lg:text-4xl">
                    {digit}
                </span>
            </div>
        );
    };

    const Unit = ({ label, value }: { label: string; value: number }) => {
        const digits = format(value).split("");

        return (
            <div className="flex flex-col items-center">
                <div className="flex items-center gap-[2px]">
                    {digits.map((d, i) => (
                        <div key={i}>
                            <DigitBox digit={d} />
                        </div>
                    ))}
                </div>
                <span className="mt-1.5 text-[8px] tracking-[0.25em] text-[#9B8470] sm:text-[10px] md:text-xs lg:text-sm">
                    {label}
                </span>
            </div>
        );
    };

    const Colon = () => (
        <div className="flex items-center justify-center px-0.5">
            <span className="mb-5 font-serif text-base text-[#C4A882] sm:text-lg md:text-xl lg:text-2xl">
                :
            </span>
        </div>
    );

    return (
        <motion.div
            className="mx-auto max-w-sm px-6 py-8 text-center md:max-w-lg md:py-12 lg:max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.4 }}
        >
            <p className="mb-2 text-[10px] tracking-[0.35em] text-[#9B8470] uppercase md:text-sm lg:text-base">
                Menghitung Hari
            </p>
            <h2 className="mb-2 font-serif text-xl font-light tracking-[0.2em] text-[#3D2E1E] uppercase md:text-3xl lg:text-4xl">
                Ijab & Qabul
            </h2>
            <p className="mb-8 text-[10px] tracking-[0.2em] text-[#C4A882] md:text-sm lg:text-base">
                27 Disember 2026
            </p>

            <div className="flex w-full items-center justify-center gap-1 sm:gap-3 md:gap-5 lg:gap-8">
                <Unit label="HARI" value={time.days} />
                <Colon />
                <Unit label="JAM" value={time.hours} />
                <Colon />
                <Unit label="MINIT" value={time.minutes} />
                <Colon />
                <Unit label="SAAT" value={time.seconds} />
            </div>
        </motion.div>
    );
}
