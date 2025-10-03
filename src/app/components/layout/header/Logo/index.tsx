import Link from 'next/link';

interface HeaderProps { }
const Logo: React.FC<HeaderProps> = () => {
    return (
        <Link
            href="/"
            aria-label="ICLP Home"
            className="group flex items-center gap-2 md:gap-3 select-none"
        >
            {/* Icon */}
            <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white dark:bg-[#0f172a] ring-1 ring-[#5bc6d0]/30 shadow-sm group-hover:shadow-md transition-shadow">
                <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#5bc6d0"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-transform group-hover:scale-105"
                >
                    <path d="M12 3 4.5 7v5c0 5 3.5 8.5 7.5 9 4-0.5 7.5-4 7.5-9V7L12 3Z" />
                    <path d="M9 12l2 2 4-4" />
                </svg>
            </span>
            {/* Wordmark */}
            <span className="text-2xl font-bold tracking-tight leading-none">
                <span className="text-[#0f172a] dark:text-white">IC</span>
                <span className="text-[#5bc6d0] group-hover:brightness-110 transition">LP</span>
            </span>
        </Link>
    );
};

export default Logo;
