'use client'
import { Icon } from "@iconify/react/dist/iconify.js";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeToggler = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const next = resolvedTheme === "dark" ? "light" : "dark";

  if (!mounted) return null;

  return (
    <button
      aria-label="Toggle theme"
      title={`Switch to ${next} mode`}
      aria-pressed={resolvedTheme === 'dark'}
      onClick={() => setTheme(next)}
      className="group flex h-8 w-8 items-center justify-center duration-300"
    >
      <span className="group-hover:rotate-180 transition-transform duration-700 ease-in-out">
        <Icon icon="ri:sun-fill" width="24" height="24" className="hidden dark:block"/>
        <Icon icon="ri:moon-fill" width="24" height="24" className="dark:hidden" style={{ color: '#000' }} />
      </span>
    </button>
  );
};

export default ThemeToggler;
