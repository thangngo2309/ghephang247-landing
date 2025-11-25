"use client";

import { ShieldCheck, Timer, Users, Route, ThumbsUp, Headphones } from "lucide-react";

export default function AppsSection() {
  const reasons = [
    {
      icon: ShieldCheck,
      title: "An toàn & tin cậy",
      desc: "Mọi đơn hàng đều được theo dõi nghiêm ngặt với thông tin tài xế rõ ràng.",
    },
    {
      icon: Timer,
      title: "Nhanh chóng",
      desc: "Nhận đơn & ghép tuyến nhanh nhờ hệ thống phân bổ thông minh.",
    },
    {
      icon: Users,
      title: "Đội ngũ tài xế đông đảo",
      desc: "Luôn có tài xế gần bạn – giảm thời gian chờ đợi.",
    },
    {
      icon: Route,
      title: "Tối ưu lộ trình",
      desc: "Giảm quãng đường dư thừa, giao hàng nhanh – tiết kiệm chi phí.",
    },
    {
      icon: ThumbsUp,
      title: "Đơn giản & dễ sử dụng",
      desc: "Giao diện thân thiện cho cả khách hàng và tài xế.",
    },
    {
      icon: Headphones,
      title: "Hỗ trợ tận tâm",
      desc: "Đội ngũ CSKH sẵn sàng hỗ trợ khi bạn cần.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto text-center px-6">
        <h2 className="text-3xl font-bold mb-12">Vì sao chọn GhepHang247?</h2>

        {/* GRID REASONS */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {reasons.map((r, i) => {
            const Icon = r.icon;
            return (
              <div
                key={i}
                className="p-8 rounded-2xl bg-gray-50 shadow-sm hover:shadow-md transition"
              >
                <Icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">{r.title}</h3>
                <p className="text-gray-600 text-sm">{r.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
