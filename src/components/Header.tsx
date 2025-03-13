import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@lib/utils";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navItems = {
    home: "Главная",
    services: "Услуги",
    products: "Продукты",
    about: "О нас",
    testimonials: "Отзывы",
    contact: "Контакты",
  };
  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out py-4 px-4 sm:px-6 lg:px-8",
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm dark:bg-slate-900/80 dark:shadow-slate-800/10"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl  mx-auto flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center space-x-2 text-foreground dark:text-white"
        >
          <span className="font-bold text-2xl">
            Qaraqalpaq<span className="text-blue-clean">Cleaning</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          {Object.entries(navItems).map(([key, value]) => (
            <a
              key={key}
              href={`#${key}`}
              className="relative text-foreground/80 hover:text-foreground dark:text-white/80 dark:hover:text-white transition-colors duration-300 font-medium after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:-bottom-1 after:left-0 after:bg-blue-clean after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
            >
              {value}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <ThemeToggle />
          <a
            href="#contact"
            className="btn-primary dark:bg-blue-clean/90 dark:text-white dark:hover:bg-blue-clean"
          >
            Узнать цену
          </a>
        </div>

        <div className="md:hidden flex items-center space-x-4">
          <ThemeToggle />
          <button
            className="text-foreground dark:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg dark:bg-slate-900/95 dark:shadow-slate-800/20 md:hidden">
          <div className="px-4 py-6 space-y-4">
            {Object.entries(navItems).map(([key, value]) => (
              <a
                key={key}
                href={`#${key}`}
                className="relative text-foreground/80 hover:text-foreground dark:text-white/80 dark:hover:text-white transition-colors duration-300 font-medium after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:-bottom-1 after:left-0 after:bg-blue-clean after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
              >
                {value}
              </a>
            ))}
            <a
              href="#contact"
              className="btn-primary w-full flex justify-center mt-4 dark:bg-blue-clean/90 dark:text-white dark:hover:bg-blue-clean"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Узнать цену
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
