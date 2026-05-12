"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-6xl mx-auto px-6 md:px-0 text-center space-y-3">
        <h4 className="text-lg font-semibold text-white uppercase">
          Công ty TNHH Giải pháp Công nghệ Hoàng Ân
        </h4>

        <div className="space-y-2 text-sm md:text-base leading-relaxed">
          <p>
            <span className="font-semibold text-white">Người đại diện:</span>{" "}
            Trần Hữu Hoàng
          </p>

          <p>
            <span className="font-semibold text-white">Địa chỉ:</span>{" "}
            294 Nguyễn Phước Lan, Phường Hòa Xuân, Thành phố Đà Nẵng, Việt Nam
          </p>

          <p>
            <span className="font-semibold text-white">Email:</span>{" "}
            <a
              href="mailto:contact@gpcnhoangan.com"
              className="text-orange-400 hover:text-orange-300 underline underline-offset-2 transition"
            >
              contact@gpcnhoangan.com
            </a>
          </p>

          <p>
            <span className="font-semibold text-white">Điện thoại:</span>{" "}
            <a
              href="tel:19005361"
              className="text-orange-400 hover:text-orange-300 underline underline-offset-2 transition"
            >
              19005361
            </a>
          </p>

          <p>
            <span className="font-semibold text-white">GPKD số:</span>{" "}
            0402259323, cấp ngày 06/01/2025, nơi cấp: Sở Kế hoạch và Đầu tư
            Thành phố Đà Nẵng
          </p>
        </div>

        {/* Link pháp lý */}
        <div className="pt-4 mt-4 border-t border-gray-800">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
            <Link
              href="https://ghephang247.com/legal/terms/"
              className="hover:text-white transition"
            >
              Quy chế hoạt động
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