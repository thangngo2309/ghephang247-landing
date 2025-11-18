import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "GhepHang247 - Ứng dụng giao hàng ghép tiện lợi",
  description: "Giải pháp giao hàng ghép nhanh chóng, tiết kiệm cho khách hàng và tài xế.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="vi">
      <body className="bg-white text-gray-800">
        {children}
      </body>
    </html>
  );
}
