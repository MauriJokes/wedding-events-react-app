export default function GoldLineDivider() {
    return (
        <div className="aria-hidden=true flex w-60 items-center gap-3 md:w-80 lg:w-96">
            <div className="h-px flex-1 bg-[#C4A882]/60" />
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <circle cx="7" cy="7" r="2.2" fill="#3D2E1E" />
                <circle
                    cx="7"
                    cy="7"
                    r="4.5"
                    stroke="#3D2E1E"
                    strokeWidth="0.5"
                    fill="none"
                />
            </svg>
            <div className="h-px flex-1 bg-[#C4A882]/60" />
        </div>
    );
}
