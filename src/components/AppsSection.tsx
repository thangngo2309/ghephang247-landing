"use client";

import {
  ShieldCheck,
  Timer,
  Users,
  Route,
  ThumbsUp,
  Headphones,
} from "lucide-react";

export default function AppsSection() {
  const reasons = [
    {
      icon: ShieldCheck,
      title: "An toàn & tin cậy",
      desc: "Thông tin đơn hàng và tài xế được quản lý rõ ràng trong suốt quá trình kết nối vận chuyển.",
    },
    {
      icon: Timer,
      title: "Kết nối nhanh chóng",
      desc: "Giúp khách hàng tiếp cận tài xế phù hợp và giảm thời gian tìm kiếm phương tiện vận chuyển.",
    },
    {
      icon: Users,
      title: "Kết nối mạng lưới tài xế",
      desc: "Hỗ trợ kết nối khách hàng với các tài xế đang có nhu cầu nhận và ghép chuyến.",
    },
    {
      icon: Route,
      title: "Tối ưu hành trình",
      desc: "Hỗ trợ tận dụng các chuyến xe phù hợp để giảm quãng đường trống và nâng cao hiệu quả.",
    },
    {
      icon: ThumbsUp,
      title: "Đơn giản & dễ sử dụng",
      desc: "Giao diện trực quan, thuận tiện cho cả khách hàng gửi hàng và tài xế vận chuyển.",
    },
    {
      icon: Headphones,
      title: "Hỗ trợ tận tâm",
      desc: "Đội ngũ hỗ trợ sẵn sàng tiếp nhận và xử lý các vấn đề phát sinh trong quá trình sử dụng.",
    },
  ];

  return (
    <section
      id="why-us"
      className="
        relative overflow-hidden
        bg-[#162956]
        py-20
        sm:py-24
        lg:py-28
      "
    >
      {/* DECORATION */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-[#24559D]/40 blur-[120px]" />

      <div className="pointer-events-none absolute -bottom-40 right-0 h-[420px] w-[420px] rounded-full bg-[#E77A1F]/15 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* HEADING */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#F4B414]">
            Ghép Hàng 24/7
          </div>

          <h2
            className="
              mt-4
              text-3xl font-extrabold
              tracking-[-0.03em]
              text-white
              sm:text-4xl
              lg:text-5xl
            "
          >
            Vì sao chọn Ghép Hàng 24/7?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-blue-100/70 sm:text-lg">
            Chúng tôi tập trung vào trải nghiệm đơn giản, minh bạch
            và hiệu quả cho cả người gửi hàng lẫn tài xế.
          </p>
        </div>

        {/* GRID */}
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;

            return (
              <div
                key={index}
                className="
                  group
                  rounded-[24px]
                  border border-white/10
                  bg-white/[0.06]
                  p-7
                  backdrop-blur-sm
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-white/20
                  hover:bg-white/[0.10]
                  sm:p-8
                "
              >
                <div
                  className="
                    mb-6
                    flex h-14 w-14
                    items-center justify-center
                    rounded-2xl
                    bg-white/10
                    text-[#F4B414]
                    transition-all duration-300
                    group-hover:bg-[#F4B414]
                    group-hover:text-[#162956]
                  "
                >
                  <Icon size={27} strokeWidth={2} />
                </div>

                <h3 className="text-lg font-bold text-white">
                  {reason.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-blue-100/65">
                  {reason.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}