import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const targetDate = new Date("2026-12-27T11:00:00");

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
            <div className="flex h-11 w-8 items-center justify-center rounded border border-[#D4C4AE]/60 bg-[#EDE8DC]/50 sm:h-14 sm:w-11">
                <span className="font-serif text-base text-[#3D2E1E] sm:text-2xl">
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
                <span className="mt-1.5 text-[8px] tracking-[0.25em] text-[#9B8470] sm:text-[9px]">
                    {label}
                </span>
            </div>
        );
    };

    const Colon = () => (
        <div className="flex items-center justify-center px-0.5">
            <span className="mb-5 font-serif text-base text-[#C4A882] sm:text-lg">:</span>
        </div>
    );

    return (
        <motion.div
            className="mx-auto max-w-sm px-6 py-20 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.4 }}
        >
            <p className="mb-2 text-[10px] tracking-[0.35em] text-[#9B8470] uppercase">
                Menghitung Hari
            </p>
            <h2 className="mb-2 font-serif text-xl font-light tracking-[0.2em] text-[#3D2E1E] uppercase">
                Akad Nikah
            </h2>
            <p className="mb-8 text-[10px] tracking-[0.2em] text-[#C4A882]">
                27 Disember 2026
            </p>

            <div className="flex w-full items-center justify-center gap-1 sm:gap-3">
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
