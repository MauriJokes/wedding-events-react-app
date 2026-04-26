import type { ReactNode } from "react";

type FormCardProps = {
    title: string;
    children: ReactNode;
};

export default function FormCard({ title, children }: FormCardProps) {
    return (
        <div className="w-full rounded-2xl bg-white/70 p-4 shadow-md backdrop-blur sm:p-6">
            <h2 className="mb-4 text-lg font-light sm:text-xl">{title}</h2>
            {children}
        </div>
    );
}
