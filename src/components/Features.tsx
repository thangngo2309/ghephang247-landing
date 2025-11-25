"use client";

import {
  Package,
  MapPin,
  Search,
  CheckCircle,
  ClipboardList,
  Route,
} from "lucide-react";

export default function Features() {
  const items = [
    {
      icon: Package,
      title: "Giao hàng ghép thông minh",
      desc: "Tiết kiệm chi phí vận chuyển cho khách hàng và tối ưu thu nhập cho tài xế.",
    },
    {
      icon: MapPin,
      title: "Định vị thời gian thực",
      desc: "Theo dõi vị trí tài xế và đơn hàng liên tục, chính xác đến từng điểm.",
    },
    {
      icon: Search,
      title: "Tìm tài xế gần nhất",
      desc: "Hệ thống tự động đề xuất tài xế phù hợp dựa trên vị trí và thời gian.",
    },
    {
      icon: CheckCircle,
      title: "Theo dõi trạng thái đơn hàng",
      desc: "Cập nhật từng bước: chờ nhận – đang lấy – đang giao – hoàn thành.",
    },
    {
      icon: ClipboardList,
      title: "Quản lý đơn hàng tiện lợi",
      desc: "Lưu trữ lịch sử, xem chi tiết đơn và hỗ trợ nhanh khi cần.",
    },
    {
      icon: Route,
      title: "Tối ưu lộ trình giao hàng",
      desc: "Sắp xếp giao hợp lý, giảm thời gian di chuyển và nâng cao hiệu suất.",
    },
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center px-6">
        <h2 className="text-3xl font-bold mb-12">Tính năng nổi bật</h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition"
              >
                <Icon className="h-10 w-10 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
