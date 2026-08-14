"use client";

import {
  Package,
  MapPin,
  Search,
  CheckCircle2,
  ClipboardList,
  Route,
} from "lucide-react";

export default function Features() {
  const items = [
    {
      icon: Package,
      title: "Giao hàng ghép thông minh",
      desc: "Hỗ trợ tối ưu chi phí vận chuyển cho khách hàng và khai thác hành trình hiệu quả hơn cho tài xế.",
      color: "blue",
    },
    {
      icon: MapPin,
      title: "Định vị thời gian thực",
      desc: "Theo dõi vị trí tài xế và hành trình đơn hàng thuận tiện trong quá trình vận chuyển.",
      color: "orange",
    },
    {
      icon: Search,
      title: "Tìm tài xế phù hợp",
      desc: "Hỗ trợ kết nối đơn hàng với tài xế phù hợp dựa trên nhu cầu và hành trình vận chuyển.",
      color: "blue",
    },
    {
      icon: CheckCircle2,
      title: "Theo dõi trạng thái đơn hàng",
      desc: "Cập nhật tiến trình đơn hàng qua từng giai đoạn để khách hàng dễ dàng theo dõi.",
      color: "orange",
    },
    {
      icon: ClipboardList,
      title: "Quản lý đơn hàng tiện lợi",
      desc: "Theo dõi lịch sử, xem thông tin chi tiết và quản lý các đơn hàng ngay trên ứng dụng.",
      color: "blue",
    },
    {
      icon: Route,
      title: "Tối ưu hành trình vận chuyển",
      desc: "Hỗ trợ tài xế kết hợp chuyến phù hợp, giảm quãng đường trống và nâng cao hiệu quả vận chuyển.",
      color: "orange",
    },
  ];

  return (
    <section
      id="features"
      className="relative bg-white py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* HEADING */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#E77A1F]">
            Tính năng nổi bật
          </div>

          <h2
            className="
              mt-4
              text-3xl font-extrabold
              tracking-[-0.03em]
              text-[#172033]
              sm:text-4xl
              lg:text-5xl
            "
          >
            Một nền tảng cho toàn bộ
            <span className="text-[#24559D]"> hành trình vận chuyển</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-500 sm:text-lg">
            Các tính năng được xây dựng để giúp khách hàng và tài xế kết nối,
            theo dõi và xử lý đơn hàng thuận tiện hơn.
          </p>
        </div>

        {/* GRID */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => {
            const Icon = item.icon;
            const blue = item.color === "blue";

            return (
              <div
                key={index}
                className="
                  group
                  rounded-[24px]
                  border border-slate-200/80
                  bg-white
                  p-7
                  transition-all duration-300
                  hover:-translate-y-1.5
                  hover:border-[#24559D]/20
                  hover:shadow-[0_20px_50px_rgba(30,50,110,0.09)]
                  sm:p-8
                "
              >
                <div
                  className={`
                    mb-6
                    flex h-13 w-13
                    h-14 w-14
                    items-center justify-center
                    rounded-2xl
                    transition-transform duration-300
                    group-hover:scale-110
                    ${
                      blue
                        ? "bg-[#24559D]/10 text-[#24559D]"
                        : "bg-[#F4B414]/15 text-[#E77A1F]"
                    }
                  `}
                >
                  <Icon size={27} strokeWidth={2} />
                </div>

                <h3 className="text-lg font-bold text-[#172033]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {item.desc}
                </p>

                <div
                  className={`
                    mt-6 h-[3px] w-10
                    rounded-full
                    transition-all duration-300
                    group-hover:w-16
                    ${
                      blue
                        ? "bg-[#24559D]"
                        : "bg-gradient-to-r from-[#F4B414] to-[#E77A1F]"
                    }
                  `}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
