import { useState } from "react";
import { motion } from "framer-motion";
import { GuestbookSlider } from "./guestbook-slider";
import GuestbookForm from "./guestbook-form";
import type { GuestbookEntry } from "@/types/guestbook";

interface GuestbookProps {
    messages: GuestbookEntry[];
    onRefresh: any;
}

export default function Guestbook({ messages, onRefresh }: GuestbookProps) {
    const [open, setOpen] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex w-full flex-col items-center justify-center px-6 py-20"
        >
            <div className="mb-2 text-center">
                <p className="text-[10px] tracking-[0.35em] text-[#9B8470] uppercase">Ucapan Anda</p>
                <h2 className="mt-2 font-serif text-2xl font-light tracking-[0.2em] text-[#3D2E1E] uppercase">
                    Buku Tamu
                </h2>
            </div>

            <GuestbookSlider entries={messages} />
            <GuestbookForm
                onRefresh={onRefresh}
                open={open}
                setOpen={setOpen}
            />
        </motion.div>
    );
}
