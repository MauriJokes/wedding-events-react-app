interface FloralDividerProps {
    className?: string;
    size?: "sm" | "md" | "lg";
}

export default function FloralDivider({ className = "", size = "md" }: FloralDividerProps) {
    const width = size === "sm" ? 200 : size === "lg" ? 360 : 280;
    const height = size === "sm" ? 36 : size === "lg" ? 52 : 44;

    return (
        <div className={`flex justify-center ${className}`}>
            <svg
                width={width}
                height={height}
                viewBox="0 0 280 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="opacity-75"
            >
                {/* Center ornament */}
                <circle cx="140" cy="22" r="2.2" fill="#3D2E1E" />
                <circle cx="140" cy="22" r="4.5" stroke="#3D2E1E" strokeWidth="0.5" fill="none" />

                {/* Left main stem */}
                <path
                    d="M 135 22 C 118 22 100 21 82 24 C 64 27 50 25 33 28"
                    stroke="#3D2E1E"
                    strokeWidth="0.75"
                    strokeLinecap="round"
                    fill="none"
                />

                {/* Left leaves - pair 1 */}
                <path d="M 125 22 C 121 17 115 14 113 17 C 116 21 122 22 125 22Z" fill="#3D2E1E" />
                <path d="M 125 22 C 121 27 115 30 113 27 C 116 23 122 22 125 22Z" fill="#3D2E1E" opacity="0.55" />

                {/* Left leaves - pair 2 */}
                <path d="M 107 22.5 C 102 17 95 14 93 17 C 97 21 103 22 107 22.5Z" fill="#3D2E1E" />
                <path d="M 107 22.5 C 102 28 95 31 93 28 C 97 24 103 23 107 22.5Z" fill="#3D2E1E" opacity="0.55" />

                {/* Left leaves - pair 3 */}
                <path d="M 87 23.5 C 81 18 74 16 72 19 C 76 23 82 24 87 23.5Z" fill="#3D2E1E" opacity="0.85" />
                <path d="M 87 23.5 C 81 29 74 31 72 28 C 76 24 82 24 87 23.5Z" fill="#3D2E1E" opacity="0.45" />

                {/* Left leaves - pair 4 */}
                <path d="M 65 26 C 59 21 52 19 50 22 C 54 26 60 27 65 26Z" fill="#3D2E1E" opacity="0.75" />
                <path d="M 65 26 C 59 31 52 33 50 30 C 54 26 60 26 65 26Z" fill="#3D2E1E" opacity="0.4" />

                {/* Left tip leaf */}
                <path d="M 43 27.5 C 38 24 32 22 30 25 C 34 28 39 28 43 27.5Z" fill="#3D2E1E" opacity="0.6" />

                {/* Right main stem (mirror) */}
                <path
                    d="M 145 22 C 162 22 180 21 198 24 C 216 27 230 25 247 28"
                    stroke="#3D2E1E"
                    strokeWidth="0.75"
                    strokeLinecap="round"
                    fill="none"
                />

                {/* Right leaves - pair 1 */}
                <path d="M 155 22 C 159 17 165 14 167 17 C 164 21 158 22 155 22Z" fill="#3D2E1E" />
                <path d="M 155 22 C 159 27 165 30 167 27 C 164 23 158 22 155 22Z" fill="#3D2E1E" opacity="0.55" />

                {/* Right leaves - pair 2 */}
                <path d="M 173 22.5 C 178 17 185 14 187 17 C 183 21 177 22 173 22.5Z" fill="#3D2E1E" />
                <path d="M 173 22.5 C 178 28 185 31 187 28 C 183 24 177 23 173 22.5Z" fill="#3D2E1E" opacity="0.55" />

                {/* Right leaves - pair 3 */}
                <path d="M 193 23.5 C 199 18 206 16 208 19 C 204 23 198 24 193 23.5Z" fill="#3D2E1E" opacity="0.85" />
                <path d="M 193 23.5 C 199 29 206 31 208 28 C 204 24 198 24 193 23.5Z" fill="#3D2E1E" opacity="0.45" />

                {/* Right leaves - pair 4 */}
                <path d="M 215 26 C 221 21 228 19 230 22 C 226 26 220 27 215 26Z" fill="#3D2E1E" opacity="0.75" />
                <path d="M 215 26 C 221 31 228 33 230 30 C 226 26 220 26 215 26Z" fill="#3D2E1E" opacity="0.4" />

                {/* Right tip leaf */}
                <path d="M 237 27.5 C 242 24 248 22 250 25 C 246 28 241 28 237 27.5Z" fill="#3D2E1E" opacity="0.6" />
            </svg>
        </div>
    );
}

