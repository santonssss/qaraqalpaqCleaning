import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "@lib/utils";

export default function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);

    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "relative w-12 h-6 rounded-full p-1 transition-colors duration-300",
        isDarkMode ? "bg-slate-700" : "bg-blue-clean-light"
      )}
      aria-label="Toggle dark mode"
    >
      <span
        className={cn(
          "block w-4 h-4 rounded-full transition-transform duration-500 ease-elastic",
          isDarkMode
            ? "bg-blue-clean transform translate-x-6"
            : "bg-white transform translate-x-0"
        )}
      />

      <span
        className={cn(
          "absolute top-1 left-1 text-xs transition-opacity duration-300",
          isDarkMode ? "opacity-0" : "opacity-100"
        )}
      >
        <Sun size={16} />
      </span>

      <span
        className={cn(
          "absolute top-1 right-1 text-xs transition-opacity duration-300",
          isDarkMode ? "opacity-100" : "opacity-0"
        )}
      >
        <Moon size={16} />
      </span>
    </button>
  );
}
