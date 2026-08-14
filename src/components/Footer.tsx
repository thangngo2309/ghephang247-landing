"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Building2,
  Mail,
  MapPin,
  Phone,
  ArrowUpRight,
} from "lucide-react";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-[#0D1932] text-white"
    >
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.4fr_0.8fr]">
          {/* BRAND */}
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-xl bg-white">
                <Image
                  src="/logo.jpeg"
                  alt="GhepHang247"
                  width={264}
                  height={224}
                  className="h-full w-full object-contain"
                />
              </div>

              <div>
                <div className="text-xl font-extrabold">
                  Ghép Hàng
                  <span className="text-[#F4B414]">{' '}24/7</span>
                </div>

                <div className="mt-1 text-xs text-slate-400">
                  Kết nối vận chuyển
                </div>
              </div>
            </div>

            <p className="mt-5 max-w-sm text-sm leading-6 text-slate-400">
              Nền tảng hỗ trợ kết nối nhu cầu vận chuyển hàng hóa với
              tài xế phù hợp, thuận tiện cho cả khách hàng và đối tác
              vận chuyển.
            </p>
          </div>

          {/* COMPANY */}
          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-[0.12em] text-white">
              Thông tin doanh nghiệp
            </h3>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Building2
                  size={18}
                  className="mt-0.5 shrink-0 text-[#F4B414]"
                />

                <div className="text-sm leading-6 text-slate-300">
                  <div className="font-semibold text-white">
                    Công ty TNHH Giải pháp Công nghệ Hoàng Ân
                  </div>

                  <div className="mt-1">
                    Người đại diện: Trần Hữu Hoàng
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin
                  size={18}
                  className="mt-0.5 shrink-0 text-[#F4B414]"
                />

                <p className="text-sm leading-6 text-slate-300">
                  294 Nguyễn Phước Lan, Phường Hòa Xuân,
                  Thành phố Đà Nẵng, Việt Nam
                </p>
              </div>

              <p className="border-l-2 border-[#24559D] pl-4 text-sm leading-6 text-slate-400">
                <span className="font-semibold text-slate-200">
                  GPKD số:
                </span>{" "}
                0402259323, cấp ngày 06/01/2025, nơi cấp:
                Sở Kế hoạch và Đầu tư Thành phố Đà Nẵng
              </p>
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-[0.12em] text-white">
              Liên hệ
            </h3>

            <div className="space-y-3">
              <a
                href="mailto:contact@gpcnhoangan.com"
                className="
                  group flex items-center gap-3
                  rounded-xl
                  border border-white/10
                  bg-white/[0.04]
                  px-4 py-3
                  transition
                  hover:border-[#24559D]
                  hover:bg-white/[0.07]
                "
              >
                <Mail size={18} className="text-[#F4B414]" />

                <span className="min-w-0 flex-1 truncate text-sm text-slate-300">
                  contact@gpcnhoangan.com
                </span>

                <ArrowUpRight
                  size={15}
                  className="text-slate-500 transition group-hover:text-white"
                />
              </a>

              <a
                href="tel:19005361"
                className="
                  group flex items-center gap-3
                  rounded-xl
                  border border-white/10
                  bg-white/[0.04]
                  px-4 py-3
                  transition
                  hover:border-[#24559D]
                  hover:bg-white/[0.07]
                "
              >
                <Phone size={18} className="text-[#F4B414]" />

                <span className="flex-1 text-sm text-slate-300">
                  1900 5361
                </span>

                <ArrowUpRight
                  size={15}
                  className="text-slate-500 transition group-hover:text-white"
                />
              </a>
            </div>
          </div>
        </div>

        {/* LEGAL */}
        <div className="mt-12 border-t border-white/10 pt-7">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap gap-x-6 gap-y-3">
              <Link
                href="https://ghephang247.com/legal/terms/"
                className="text-sm text-slate-400 transition hover:text-white"
              >
                Quy chế hoạt động
              </Link>

              <Link
                href="https://ghephang247.com/legal/privacy/"
                className="text-sm text-slate-400 transition hover:text-white"
              >
                Chính sách bảo mật
              </Link>

              <Link
                href="https://ghephang247.com/legal/dispute-resolution-mechanism"
                className="text-sm text-slate-400 transition hover:text-white"
              >
                Chính sách quản lý khiếu nại
              </Link>

              <Link
                href="https://ghephang247.com/admin/phan-anh-to-chuc-bvntd"
                className="text-sm text-slate-400 transition hover:text-white"
              >
                Phản ánh của tổ chức bảo vệ người tiêu dùng
              </Link>
            </div>

            <p className="shrink-0 text-sm text-slate-500">
              © {new Date().getFullYear()} GhepHang247. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}