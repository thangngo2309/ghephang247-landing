"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    title: "GhepHang247 – Khách hàng",
    desc: "Đặt ghép hàng nhanh chóng, theo dõi hành trình và thanh toán tiện lợi.",
    image: "/phone-khach.png",
    google: "https://play.google.com/store/apps/details?id=com.ghephang247khach",
    apple: "#",
    bg: "from-green-50 to-white",
  },
  {
    id: 2,
    title: "GhepHang247 – Tài xế",
    desc: "Nhận đơn linh hoạt, định vị thông minh và nhận thưởng nhanh chóng.",
    image: "/phone-driver.png",
    google: "https://play.google.com/store/apps/details?id=com.ghephang247driver",
    apple: "#",
    bg: "from-blue-50 to-white",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((index + 1) % slides.length);
  const prevSlide = () => setIndex((index - 1 + slides.length) % slides.length);

  const slide = slides[index];

  return (
    <section
      className={`relative overflow-hidden pt-28 md:pt-36 pb-24 bg-gradient-to-b ${slide.bg}`}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-10 md:px-16 relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 60 }}
            transition={{ duration: 0.45 }}
            className="flex-1 space-y-6"
          >
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
              {slide.title}
            </h1>
            <p className="text-gray-700 text-xl max-w-lg">{slide.desc}</p>
            <div className="flex space-x-5 mt-8">
              <a href={slide.google} target="_blank">
                <img
                  src="/googleplay.png"
                  alt="Google Play"
                  className="h-14 hover:scale-105 transition-transform"
                />
              </a>
              <a href={slide.apple} target="_blank">
                <img
                  src="/appstore.png"
                  alt="App Store"
                  className="h-14 hover:scale-105 transition-transform"
                />
              </a>
            </div>
          </motion.div>

          <motion.div
            key={`img-${slide.id}`}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 }}
            transition={{ duration: 0.45 }}
            className="flex-1 mt-10 md:mt-0 text-center"
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="mx-auto w-80 md:w-[440px] object-contain"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Mũi tên điều hướng */}
      <button
        onClick={prevSlide}
        className="absolute left lg:left-[40px] top-1/2 -translate-y-1/2 bg-white shadow-lg p-4 rounded-full hover:bg-primary hover:text-white transition z-30"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right lg:right-[40px] top-1/2 -translate-y-1/2 bg-white shadow-lg p-4 rounded-full hover:bg-primary hover:text-white transition z-30"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dấu chấm điều hướng */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex space-x-3">
        {slides.map((s, i) => (
          <button
            key={s.id}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              i === index ? "bg-primary w-6" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
