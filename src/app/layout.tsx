import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "GhepHang247 - Kết nối vận chuyển",
    template: "%s | GhepHang247",
  },
  description:
    "Ghép Hàng 24/7 - Nền tảng kết nối nhu cầu vận chuyển hàng hóa với tài xế phù hợp.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={inter.variable}>
        {children}
      </body>
    </html>
  );
}