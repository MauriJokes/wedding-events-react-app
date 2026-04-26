import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { motion } from "framer-motion";

import { createRsvp } from "../services/rsvp";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import { Field } from "@/components/ui/field";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label"; // Ensure you have this shadcn component

const schema = z.object({
    name: z.string().min(2, "Name is required"),
    attendance: z.enum(["yes", "no"]),
    pax: z.number().min(1).max(10),
    notes: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

export default function RsvpForm() {
    const form = useForm<FormData>({
        resolver: zodResolver(schema),
        defaultValues: {
            name: "",
            attendance: "yes",
            pax: 1,
            notes: "",
        },
    });

    const onSubmit = async (data: FormData) => {
        try {
            await createRsvp(data);
            toast.success("Thank you for your response 💌");
            form.reset();
        } catch (error) {
            toast.error("Something went wrong. Please try again.");
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mx-auto max-w-sm px-6 py-20"
        >
            <div className="mb-10 text-center">
                <p className="text-[10px] tracking-[0.35em] text-[#9B8470] uppercase">Pengesahan Kehadiran</p>
                <h2 className="mt-2 font-serif text-2xl font-light tracking-[0.2em] text-[#3D2E1E] uppercase">
                    RSVP
                </h2>
                <p className="mt-2 text-[11px] tracking-wide text-[#9B8470]">
                    Sila maklumkan kehadiran anda
                </p>
            </div>

            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                {/* NAME */}
                <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    className="space-y-3"
                >
                    <Label
                        htmlFor="name"
                        className="ml-1 text-[9px] font-medium tracking-[0.3em] text-[#9B8470] uppercase"
                    >
                        Nama Penuh
                    </Label>
                    <Controller
                        name="name"
                        control={form.control}
                        render={({ field, fieldState }) => (
                            <Field data-invalid={fieldState.invalid}>
                                <Input
                                    id="name"
                                    placeholder="Contoh: Ahmad bin Ali"
                                    {...field}
                                    className="h-12 rounded-none border border-[#D4C4AE] bg-[#FAF8F4] px-4 text-sm text-[#3D2E1E] transition-all focus-visible:ring-1 focus-visible:ring-[#C4A882]"
                                />
                                {fieldState.error && (
                                    <p className="text-start text-xs text-red-400">
                                        {fieldState.error.message}
                                    </p>
                                )}
                            </Field>
                        )}
                    />
                </motion.div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    {/* ATTENDANCE */}
                    <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                        className="space-y-3"
                    >
                        <Label
                            htmlFor="attendance"
                            className="ml-1 text-[9px] font-medium tracking-[0.3em] text-[#9B8470] uppercase"
                        >
                            Kehadiran
                        </Label>
                        <Controller
                            name="attendance"
                            control={form.control}
                            render={({ field }) => (
                                <Select
                                    value={field.value}
                                    onValueChange={field.onChange}
                                >
                                    <SelectTrigger className="h-12 w-full rounded-none border border-[#D4C4AE] bg-[#FAF8F4] px-4 text-sm text-[#3D2E1E]">
                                        <SelectValue placeholder="Pilih" />
                                    </SelectTrigger>
                                    <SelectContent className="border border-[#D4C4AE] bg-[#FAF8F4]">
                                        <SelectItem value="yes" className="text-sm text-[#3D2E1E]">
                                            Ya, hadir
                                        </SelectItem>
                                        <SelectItem value="no" className="text-sm text-[#3D2E1E]">
                                            Tidak dapat hadir
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            )}
                        />
                    </motion.div>

                    {/* PAX */}
                    <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                        className="space-y-3"
                    >
                        <Label
                            htmlFor="pax"
                            className="ml-1 text-[9px] font-medium tracking-[0.3em] text-[#9B8470] uppercase"
                        >
                            Bilangan Tetamu
                        </Label>
                        <Controller
                            name="pax"
                            control={form.control}
                            render={({ field }) => {
                                const value = field.value ?? 1;

                                const increment = () => {
                                    if (value >= 10) return;
                                    field.onChange(value + 1);
                                };

                                const decrement = () => {
                                    if (value <= 1) return;
                                    field.onChange(value - 1);
                                };

                                return (
                                    <div className="flex flex-col gap-3">
                                        <div className="flex h-12 items-center justify-between border border-[#D4C4AE] bg-[#FAF8F4] px-4">
                                            <button
                                                type="button"
                                                onClick={decrement}
                                                className="h-8 w-8 text-lg leading-none text-[#8B6B45] transition hover:text-[#3D2E1E]"
                                            >
                                                −
                                            </button>
                                            <span className="font-serif text-base text-[#3D2E1E]">
                                                {value}
                                            </span>
                                            <button
                                                type="button"
                                                onClick={increment}
                                                className="h-8 w-8 text-lg leading-none text-[#8B6B45] transition hover:text-[#3D2E1E]"
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                );
                            }}
                        />
                    </motion.div>
                </div>

                {/* NOTES */}
                <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    className="space-y-3"
                >
                    <Label
                        htmlFor="notes"
                        className="ml-1 text-[9px] font-medium tracking-[0.3em] text-[#9B8470] uppercase"
                    >
                        Nota
                    </Label>
                    <Controller
                        name="notes"
                        control={form.control}
                        render={({ field }) => (
                            <Textarea
                                id="notes"
                                placeholder="Sebarang pesanan atau keperluan khas..."
                                {...field}
                                className="min-h-32 rounded-none border border-[#D4C4AE] bg-[#FAF8F4] px-4 py-3 text-sm text-[#3D2E1E] focus-visible:ring-1 focus-visible:ring-[#C4A882]"
                            />
                        )}
                    />
                </motion.div>

                {/* SUBMIT */}
                <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                    className="flex justify-center"
                >
                    <Button
                        type="submit"
                        disabled={form.formState.isSubmitting}
                        className="w-full rounded-none border border-[#8B6B45]/40 bg-transparent py-4 text-[10px] tracking-[0.3em] text-[#6B5544] uppercase transition hover:bg-[#8B6B45]/8 disabled:opacity-50"
                    >
                        {form.formState.isSubmitting
                            ? "Menghantar..."
                            : "Hantar RSVP"}
                    </Button>
                </motion.div>
            </form>
        </motion.div>
    );
}
