import { useState } from "react";
import { Mail, Phone, MapPin, Calendar, Clock, Send } from "lucide-react";
import { cn } from "@lib/utils";
import { toast } from "sonner";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });

      toast.success(
        "Благодарим вас за ваш запрос! Мы свяжемся с вами в ближайшее время."
      );
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 z-0"></div>

      <div className="section-container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 text-sm font-medium bg-blue-clean/10 text-blue-clean rounded-full mb-4">
            Cвязаться с нами
          </span>
          <h2 className="section-title">Cвязаться</h2>
          <p className="text-lg text-muted-foreground">
            У вас есть вопросы или вы готовы преобразить свое пространство?
            Обратитесь к нам за получить бесплатную консультацию или узнать
            больше о наших услугах.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="glass-card p-8 order-2 lg:order-1">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Ваше имя
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-blue-clean focus:border-transparent transition-all duration-300"
                    placeholder="Айнура Бегдулаева"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Адрес электронной почты
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-blue-clean focus:border-transparent transition-all duration-300"
                    placeholder="aynurabegdulaeva@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium mb-2"
                  >
                    Номер телефона
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-blue-clean focus:border-transparent transition-all duration-300"
                    placeholder="+998 90 123 45 67"
                  />
                </div>
                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium mb-2"
                  >
                    Услуга, Заинтересованная В
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-blue-clean focus:border-transparent transition-all duration-300 appearance-none"
                  >
                    <option value="">Выберите услугу</option>
                    <option value="residential">Уборка жилых помещений</option>
                    <option value="commercial">
                      Уборка коммерческих помещений
                    </option>
                    <option value="deep">Глубокая уборка</option>
                    <option value="maintenance">Регулярное обслуживание</option>
                    <option value="specialized">
                      Специализированная уборка
                    </option>
                    <option value="eco">Эко-уборка</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Сообщение
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-blue-clean focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell us about your cleaning needs..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "w-full btn-primary ripple-btn",
                  isSubmitting && "opacity-70 cursor-not-allowed"
                )}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
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
                    Обработка...
                  </span>
                ) : (
                  <span className="flex items-center justify-center">
                    Отправить запрос
                    <Send className="ml-2 h-4 w-4" />
                  </span>
                )}
              </button>
            </form>
          </div>

          <div className="flex flex-col space-y-8 order-1 lg:order-2">
            <div className="glass-card p-8">
              <h3 className="text-xl font-semibold mb-6">
                Контактная информация
              </h3>

              <div className="space-y-6">
                <div className="flex flex-col  items-center  md:flex-row gap-4 ">
                  <div className="w-10 h-10 rounded-full bg-blue-clean/10 flex items-center justify-center text-blue-clean flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="flex w-[80%] flex-col justify-center items-center md:ml-4 ">
                    <h4 className="font-medium">Телефон</h4>
                    <p className="text-muted-foreground">+998 90 593 26 05</p>
                    <p className="text-sm text-blue-clean mt-1">
                      Звоните нам в любое время
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-center  md:flex-row  gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-clean/10 flex items-center justify-center text-blue-clean flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex w-[80%] flex-col justify-center items-center md:ml-4 ">
                    <h4 className="font-medium">Email</h4>
                    <p className="text-muted-foreground">
                      sarvarkalmuratvo370@gmail.com
                    </p>
                    <p className="text-sm text-blue-clean mt-1">
                      Мы ответим в течение 24 часов
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-center justify md:flex-row  gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-clean/10 flex items-center justify-center text-blue-clean flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="flex w-[80%] flex-col justify-center items-center md:ml-4 ">
                    <h4 className="font-medium">Офис</h4>
                    <p className="text-muted-foreground">
                      Tumaris 21
                      <br />
                      Каракалпакстан, г Нукус
                    </p>
                    <p className="text-sm text-blue-clean mt-1">
                      Работаем по всей республике
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card p-8">
              <h3 className="text-xl font-semibold mb-6">Часы работы</h3>

              <div className="space-y-4">
                <div className="flex flex-col items-center  md:flex-row  gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-clean/10 flex items-center justify-center text-blue-clean flex-shrink-0">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div className="flex w-[80%] flex-col justify-center items-center md:ml-4 ">
                    <h4 className="font-medium">Будни</h4>
                    <p className="text-muted-foreground">
                      Понедельник – пятница: с 8:00 до 18:00
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-center  md:flex-row  gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-clean/10 flex items-center justify-center text-blue-clean flex-shrink-0">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div className="flex w-[80%] flex-col justify-center items-center md:ml-4 ">
                    <h4 className="font-medium">Выходные</h4>
                    <p className="text-muted-foreground">
                      Суббота: с 9:00 утра до 16:00 вечера
                      <br />
                      Воскресенье: Закрыто
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-center  md:flex-row  gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-clean/10 flex items-center justify-center text-blue-clean flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="flex w-[80%] flex-col justify-center items-center md:ml-4 ">
                    <h4 className="font-medium">Служба экстренной помощи</h4>
                    <p className="text-muted-foreground">
                      Предоставляется по запросу
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
