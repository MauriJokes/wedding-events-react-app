import { motion } from "framer-motion";
import FloralDivider from "./floral-separator";

export default function NikahDetails() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
            }}
            className="w-full min-h-screen bg-[#6B4530] px-6 py-20 text-center"
        >
            {/* Top floral border */}
            <div className="mb-10 flex justify-center opacity-40">
                <FloralDivider size="lg" />
            </div>

            {/* Salutation */}
            <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.7 }}
                className="font-serif text-2xl font-light tracking-[0.15em] text-[#F0E6D8] sm:text-3xl"
            >
                ASSALAMU'ALAIKUM WR. WB.
            </motion.p>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="mt-8 space-y-1"
            >
                <p className="text-[11px] tracking-[0.3em] text-[#C4A882] uppercase">
                    Dengan izin Allah S.W.T dan rahmatnya, kami:
                </p>
            </motion.div>

            {/* Parents / Family names */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.7 }}
                className="mt-6 space-y-1.5 font-serif"
            >
                <p className="text-base font-light text-[#E8D9C5]">Pengiran Haji Mohamad Jaludin bin Pengiran Haji Puteh</p>
                <p className="text-base font-light text-[#E8D9C5]">Dayang Masdiah binti Awang Haji Tuah</p>
                <p className="mt-2 text-base font-light text-[#E8D9C5]">Nik Joharris bin Nik Ahmad</p>
                <p className="text-base font-light text-[#E8D9C5]">Nerisa binti Nawi</p>
            </motion.div>

            {/* Message */}
            <motion.p
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.7 }}
                className="mx-auto mt-8 max-w-xs text-[12px] leading-relaxed tracking-wide text-[#C4A882]"
            >
                Dengan segala hormat dan takzim sukacita memohon restu dan ingin
                mengumumkan Majlis-Majlis penyatuan anakanda kami:
            </motion.p>

            {/* Couple names */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="mt-10 space-y-3"
            >
                <p className="font-serif text-sm tracking-[0.25em] text-[#F0E6D8] uppercase">
                    DAYANGKU IZYAN NAQIYAH
                </p>
                <p className="text-[10px] tracking-[0.2em] text-[#C4A882]">
                    BINTI PENGIRAN HAJI MOHD JALUDIN
                </p>
                <p className="font-serif text-xl tracking-[0.3em] text-[#C4A882]">&</p>
                <p className="font-serif text-sm tracking-[0.25em] text-[#F0E6D8] uppercase">
                    NIK ADAM DANISH
                </p>
                <p className="text-[10px] tracking-[0.2em] text-[#C4A882]">
                    BIN NIK JOHARRIS
                </p>
            </motion.div>

            {/* Couple illustration placeholder */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.9 }}
                className="mx-auto mt-12 flex h-48 w-48 items-end justify-center overflow-hidden rounded-none border border-dashed border-[#C4A882]/30"
            >
                <div className="pb-4 text-center">
                    <p className="text-[9px] tracking-[0.2em] text-[#C4A882]/50 uppercase">Couple Illustration</p>
                    <p className="text-[9px] text-[#C4A882]/30">Placeholder</p>
                </div>
            </motion.div>

            {/* Bottom floral border */}
            <div className="mt-10 flex justify-center opacity-40">
                <FloralDivider size="lg" />
            </div>
        </motion.section>
    );
}
