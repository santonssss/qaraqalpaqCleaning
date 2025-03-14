import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { cn } from "@lib/utils";
import { testimonials } from "@data/data";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [, setDirection] = useState<"left" | "right" | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handlePrev = () => {
    setDirection("left");
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection("right");
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 6000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        className={cn(
          "w-5 h-5",
          index < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
        )}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0"></div>

      <div className="absolute top-1/3 left-0 w-72 h-72 bg-blue-clean-light rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-mint-clean-light rounded-full filter blur-3xl opacity-20"></div>

      <div className="section-container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 text-sm font-medium bg-mint-clean/10 text-mint-clean rounded-full mb-4">
            Рекомендации
          </span>
          <h2 className="section-title">Что говорят наши клиенты</h2>
          <p className="text-lg text-muted-foreground">
            Не верьте нам на слово. Выслушайте отзывы наших довольных клиентов
            об их опыте работы с Qaraqalpaq Cleaning.
          </p>
        </div>

        <div className="relative">
          <div ref={containerRef} className="overflow-hidden px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="relative h-[30rem] md:h-[26rem] w-full">
                {testimonials.map((testimonial, idx) => (
                  <div
                    key={testimonial.id}
                    className={cn(
                      "absolute top-0 left-0 h-full w-full glass-card p-8 flex flex-col",
                      "transition-all duration-700 transform",
                      idx === activeIndex
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 translate-x-full"
                    )}
                    style={{
                      zIndex: idx === activeIndex ? 10 : 0,
                      transform:
                        idx === activeIndex
                          ? "translateX(0)"
                          : idx < activeIndex
                          ? "translateX(-100%)"
                          : "translateX(100%)",
                    }}
                  >
                    <div className="flex items-center gap-4 mb-6">
                      {testimonial.image && (
                        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                      <div>
                        <h4 className="font-semibold text-lg">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.position}
                        </p>
                      </div>
                    </div>

                    <div className="flex mb-4">
                      {renderStars(testimonial.rating)}
                    </div>

                    <blockquote className="text-lg italic text-foreground/90 flex-grow">
                      "{testimonial.content}"
                    </blockquote>

                    <div className="mt-6 flex justify-between items-center">
                      <div className="flex gap-1">
                        {testimonials.map((_, idx) => (
                          <button
                            key={idx}
                            onClick={() => setActiveIndex(idx)}
                            className={cn(
                              "w-3 h-3 rounded-full transition-all duration-300",
                              idx === activeIndex
                                ? "bg-blue-clean w-8"
                                : "bg-blue-clean/30"
                            )}
                            aria-label={`Go to testimonial ${idx + 1}`}
                          />
                        ))}
                      </div>

                      <div className="flex gap-2">
                        <button
                          onClick={handlePrev}
                          className="w-10 h-10 rounded-full flex items-center justify-center border border-blue-clean/20 text-blue-clean hover:bg-blue-clean hover:text-white transition-colors duration-300"
                          aria-label="Previous testimonial"
                        >
                          <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                          onClick={handleNext}
                          className="w-10 h-10 rounded-full flex items-center justify-center border border-blue-clean/20 text-blue-clean hover:bg-blue-clean hover:text-white transition-colors duration-300"
                          aria-label="Next testimonial"
                        >
                          <ChevronRight className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="hidden lg:block relative">
                <div className="aspect-square max-w-lg mx-auto">
                  <img
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Clean, modern interior"
                    className="w-full h-full object-cover rounded-2xl shadow-clean-card"
                  />
                </div>

                <div className="glass-card  absolute -bottom-0 -left-8 py-4 px-6 flex items-center gap-3 animate-float">
                  <div className="flex -space-x-4">
                    {[1, 2, 3].map((_, idx) => (
                      <div
                        key={idx}
                        className="w-12 h-12 rounded-full border-2 border-white overflow-hidden"
                      >
                        <img
                          src={`https://randomuser.me/api/portraits/${
                            idx % 2 === 0 ? "women" : "men"
                          }/${20 + idx}.jpg`}
                          alt="Customer"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      <span className="font-semibold">4.9/5</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Из более чем 200 отзывов
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
