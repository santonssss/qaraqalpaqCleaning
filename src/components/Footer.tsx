import { useState } from "react";
import {
  Mail,
  ArrowRight,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import { cn } from "@lib/utils";
import { toast } from "sonner";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setEmail("");
      toast.success("Вы успешно подписались на нашу рассылку новостей!");
    }, 1000);
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-blue-gradient opacity-5 z-0"></div>

      <div className="relative z-10 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                Будьте в курсе наших советов по уборке
              </h3>
              <p className="text-muted-foreground">
                Подпишитесь на нашу рассылку и эксклюзивные советы по уборке,
                специальные предложения и последние тенденции отрасли.
              </p>
            </div>

            <div>
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-3"
              >
                <div className="flex-grow relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-blue-clean focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    "btn-primary whitespace-nowrap",
                    isSubmitting && "opacity-70 cursor-not-allowed"
                  )}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Подписываюсь...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      Подписываться
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </span>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <a
                href="/"
                className="flex items-center space-x-2 text-foreground mb-6"
              >
                <span className="font-bold text-2xl">
                  Qaraqalpaq<span className="text-blue-clean">Cleaning</span>
                </span>
              </a>
              <p className="text-muted-foreground mb-6">
                Профессиональные услуги по уборке, которые превратят ваше
                помещение в более чистую и здоровую среду обитания.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full flex items-center justify-center border border-border text-muted-foreground hover:text-blue-clean hover:border-blue-clean transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full flex items-center justify-center border border-border text-muted-foreground hover:text-blue-clean hover:border-blue-clean transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full flex items-center justify-center border border-border text-muted-foreground hover:text-blue-clean hover:border-blue-clean transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full flex items-center justify-center border border-border text-muted-foreground hover:text-blue-clean hover:border-blue-clean transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">Services</h4>
              <ul className="space-y-4">
                {[
                  "Уборка жилых помещений",
                  "Уборка коммерческих помещений",
                  "Генеральная уборка",
                  "Регулярное обслуживание",
                  "Специализированная уборка",
                  "Экологичные варианты уборки",
                ].map((service) => (
                  <li key={service}>
                    <a
                      href="#services"
                      className="text-muted-foreground hover:text-blue-clean transition-colors"
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">Company</h4>
              <ul className="space-y-4">
                {[
                  "О нас",
                  "Наша команда",
                  "Карьера",
                  "Блог",
                  "Отзывы",
                  "FAQ (Частые вопросы)",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-blue-clean transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">Support</h4>
              <ul className="space-y-4">
                {[
                  "Связаться с нами",
                  "Центр поддержки",
                  "Политика конфиденциальности",
                  "Условия обслуживания",
                  "Цены",
                  "Запросить цену",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-blue-clean transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">
              © {currentYear} QaraqalpaqCleaning. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-muted-foreground text-sm hover:text-blue-clean transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-muted-foreground text-sm hover:text-blue-clean transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
