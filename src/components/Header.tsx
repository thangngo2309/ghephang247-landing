"use client";

export default function Header() {
    return (
      <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
          <div className="flex items-center space-x-2">
            <img src="/logo.png" alt="GhepHang247" className="h-8 w-8" />
            <span className="font-semibold text-lg">GhepHang247</span>
          </div>
          <nav className="space-x-6 hidden md:block">
            <a href="#features" className="hover:text-primary">Tính năng</a>
            <a href="#apps" className="hover:text-primary">Ứng dụng</a>
            <a href="#contact" className="hover:text-primary">Liên hệ</a>
          </nav>
        </div>
      </header>
    );
  }
  