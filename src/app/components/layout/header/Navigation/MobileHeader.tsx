"use client";

import { useState } from 'react';
import Link from 'next/link';
import { HeaderItem } from '../../../../types/menu';

const MobileHeader: React.FC<{ item: HeaderItem }> = ({ item }) => {
    const [open, setOpen] = useState(false);
    const hasChildren = !!item.children?.length;

    return (
        <li className="w-full">
            {hasChildren ? (
                <div className="w-full">
                    <button
                        type="button"
                        aria-expanded={open}
                        onClick={() => setOpen((o) => !o)}
                        className="flex w-full items-center justify-between rounded-md px-4 py-2 text-base font-medium text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/5"
                    >
                        <span>{item.label}</span>
                        <svg
                            className={`h-4 w-4 transition-transform ${open ? 'rotate-180' : ''}`}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>

                    {open && (
                        <ul className="mt-1 space-y-1 border-l border-black/10 dark:border-white/10 pl-4">
                            {item.children!.map((child) => (
                                <li key={child.label}>
                                    <Link
                                        href={child.href}
                                        className="block rounded-md px-3 py-2 text-sm text-black/80 hover:text-black hover:bg-black/5 dark:text-white/80 dark:hover:text-white dark:hover:bg-white/5"
                                    >
                                        {child.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            ) : (
                <Link
                    href={item.href}
                    className="block rounded-md px-4 py-2 text-base font-medium text-black hover:text-opacity-70 dark:text-white dark:hover:text-opacity-80"
                >
                    {item.label}
                </Link>
            )}
        </li>
    );
};

export default MobileHeader;
