import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";

import { createGuestbook } from "../services/guestbook";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
    Dialog,
    DialogContent,
    DialogTrigger,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";

const schema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    message: z.string().min(1, "Message cannot be empty"),
});

type FormData = z.infer<typeof schema>;

export default function GuestbookForm({
    onRefresh,
    open,
    setOpen,
}: {
    onRefresh: () => void;
    open: boolean;
    setOpen: (open: boolean) => void;
}) {
    const form = useForm<FormData>({
        resolver: zodResolver(schema),
        defaultValues: {
            name: "",
            message: "",
        },
    });

    const onSubmit = async (data: FormData) => {
        const promise = createGuestbook(data);

        toast.promise(promise, {
            loading: "Sending your wishes...",
            success: async () => {
                form.reset();

                // wait a bit so user feels it “landed”
                await new Promise((r) => setTimeout(r, 600));

                await onRefresh();

                // slight delay before closing (feels intentional)
                setTimeout(() => {
                    setOpen(false);
                }, 300);

                return "Message sent 🌸";
            },
            error: (err) =>
                err.message || "Something went wrong. Please try again.",
        });
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button className="mt-4 rounded-none border border-[#8B6B45]/40 bg-transparent px-8 py-3 text-[10px] tracking-[0.3em] text-[#6B5544] uppercase transition hover:bg-[#8B6B45]/8">
                    Tulis Ucapan
                </Button>
            </DialogTrigger>

            <DialogContent className="w-full border border-[#D4C4AE]/60 bg-[#F5F0E8] p-8 shadow-xl">
                <DialogHeader className="mb-6">
                    <DialogTitle className="text-center font-serif text-2xl font-light tracking-[0.2em] text-[#3D2E1E] uppercase">
                        Buku Tamu
                    </DialogTitle>
                    <p className="mt-1 text-center text-[9px] tracking-[0.3em] text-[#9B8470] uppercase">
                        Tinggalkan ucapan
                    </p>
                </DialogHeader>

                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-8"
                >
                    {/* NAME */}
                    <div className="flex flex-col gap-3">
                        <label className="ml-1 text-[9px] tracking-[0.3em] text-[#9B8470] uppercase">
                            Nama Anda
                        </label>
                        <Controller
                            name="name"
                            control={form.control}
                            render={({ field }) => (
                                <Input
                                    placeholder="Nama"
                                    {...field}
                                    className="w-full rounded-none border border-[#D4C4AE] bg-[#FAF8F4] px-4 py-3 text-sm text-[#3D2E1E] focus-visible:ring-1 focus-visible:ring-[#C4A882]"
                                />
                            )}
                        />
                    </div>

                    {/* MESSAGE */}
                    <div className="flex flex-col gap-3">
                        <label className="ml-1 text-[9px] tracking-[0.3em] text-[#9B8470] uppercase">
                            Ucapan Anda
                        </label>
                        <Controller
                            name="message"
                            control={form.control}
                            render={({ field }) => (
                                <Textarea
                                    placeholder="Tuliskan ucapan anda di sini..."
                                    {...field}
                                    className="min-h-32 w-full rounded-none border border-[#D4C4AE] bg-[#FAF8F4] px-4 py-3 text-sm text-[#3D2E1E] focus-visible:ring-1 focus-visible:ring-[#C4A882]"
                                />
                            )}
                        />
                    </div>

                    {/* SUBMIT BUTTON */}
                    <Button
                        type="submit"
                        disabled={form.formState.isSubmitting}
                        className="w-full rounded-none border border-[#8B6B45]/40 bg-transparent py-4 text-[10px] tracking-[0.3em] text-[#6B5544] uppercase transition hover:bg-[#8B6B45]/8 disabled:opacity-50"
                    >
                        Hantar Ucapan
                    </Button>
                </form>
            </DialogContent>
        </Dialog>
    );
}
