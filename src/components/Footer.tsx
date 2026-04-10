"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-6xl mx-auto px-6 md:px-0 text-center space-y-2">
        <h4 className="text-lg font-semibold text-white">
          CÔNG TY TNHH GIẢI PHÁP CÔNG NGHỆ HOÀNG ÂN
        </h4>
        <p>Địa chỉ: 294 Nguyễn Phước Lan, Hòa Xuân, Đà Nẵng</p>
        <p>Hotline: 19005361</p>
        <p>Email: contact@gpcnhoangan.com</p>

        {/* Link pháp lý */}
        <div className="pt-4 mt-4 border-t border-gray-800">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
            <Link
              href="https://ghephang247.com/legal/terms/"
              className="hover:text-white transition"
            >
              Điều khoản hoạt động
            </Link>

            <Link
              href="https://ghephang247.com/legal/privacy/"
              className="hover:text-white transition"
            >
              Chính sách bảo mật
            </Link>

            <Link
              href="https://ghephang247.com/legal/dispute-resolution-mechanism"
              className="hover:text-white transition"
            >
              Chính sách quản lý khiếu nại
            </Link>
          </div>
        </div>

        <p className="text-sm text-gray-500 mt-4">
          © 2025 GhepHang247. All rights reserved.
        </p>
      </div>
    </footer>
  );
}