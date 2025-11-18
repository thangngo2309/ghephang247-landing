"use client";

import { Package, Wallet, MapPin, Clock } from "lucide-react";

export default function Features() {
  const items = [
    { icon: Package, title: "Giao hàng ghép", desc: "Tối ưu chi phí vận chuyển cho khách hàng, tăng thu nhập cho tài xế." },
    { icon: MapPin, title: "Định vị thông minh", desc: "Theo dõi đơn hàng theo thời gian thực, chính xác từng địa điểm." },
    { icon: Wallet, title: "Ví điện tử", desc: "Nhận thưởng, chiết khấu và rút tiền nhanh chóng, minh bạch." },
    { icon: Clock, title: "Nhanh & Tiện", desc: "Giao hàng mọi lúc, mọi nơi – chỉ với vài thao tác đơn giản." }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">Tính năng nổi bật</h2>
        <div className="grid md:grid-cols-4 gap-8 px-6 md:px-0">
          {items.map((item, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-md p-6">
              <item.icon className="h-10 w-10 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
