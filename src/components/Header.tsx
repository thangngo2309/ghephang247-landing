"use client";

import Image from "next/image";
import { useState } from "react";
import { Menu, X, Download } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const navItems = [
    {
      label: "Tính năng",
      href: "#features",
    },
    {
      label: "Vì sao chọn",
      href: "#why-us",
    },
    {
      label: "Liên hệ",
      href: "#contact",
    },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        {/* LOGO */}
        <a
          href="#apps"
          className="group flex items-center gap-3"
          aria-label="GhepHang247"
        >
          <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl bg-white">
            <Image
              src="/logo.jpeg"
              alt="GhepHang247"
              width={264}
              height={224}
              className="h-full w-full object-contain"
              priority
            />
          </div>

          <div className="leading-none">
            <div className="text-[20px] font-extrabold tracking-[-0.02em] text-[#1E326E]">
              Ghép Hàng 
              <span className="text-[#E77A1F]">{' '}24/7</span>
            </div>

            <div className="mt-1 text-[10px] font-medium uppercase tracking-[0.16em] text-slate-400">
              Kết nối vận chuyển
            </div>
          </div>
        </a>

        {/* DESKTOP NAV */}
        <div className="hidden items-center gap-8 md:flex">
          <nav className="flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative text-sm font-semibold text-slate-600 transition-colors hover:text-[#24559D]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#download"
            className="
              inline-flex items-center gap-2
              rounded-xl
              bg-[#24559D]
              px-5 py-3
              text-sm font-semibold text-white
              shadow-[0_8px_24px_rgba(36,85,157,0.20)]
              transition-all
              hover:-translate-y-0.5
              hover:bg-[#1E326E]
              hover:shadow-[0_12px_30px_rgba(36,85,157,0.28)]
            "
          >
            <Download size={17} />
            Tải ứng dụng
          </a>
        </div>

        {/* MOBILE BUTTON */}
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="
            flex h-10 w-10 items-center justify-center
            rounded-lg border border-slate-200
            text-[#1E326E]
            md:hidden
          "
          aria-label="Mở menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="border-t border-slate-100 bg-white px-5 pb-5 pt-3 shadow-xl md:hidden">
          <nav className="flex flex-col">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="
                  border-b border-slate-100
                  py-4
                  text-sm font-semibold
                  text-slate-700
                "
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#download"
            onClick={() => setOpen(false)}
            className="
              mt-4 flex items-center justify-center gap-2
              rounded-xl
              bg-[#24559D]
              px-5 py-3
              text-sm font-semibold text-white
            "
          >
            <Download size={17} />
            Tải ứng dụng
          </a>
        </div>
      )}
    </header>
  );
}
