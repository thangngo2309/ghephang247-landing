"use client";

import Image from "next/image";
import { ArrowRight, Check, PackageCheck, Truck } from "lucide-react";

interface AppStoreButtonsProps {
  googlePlay: string;
  appStore: string;
}

const AppStoreButtons = ({ googlePlay, appStore }: AppStoreButtonsProps) => {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <a
        href={googlePlay}
        target="_blank"
        rel="noopener noreferrer"
        className="transition-all duration-300 hover:-translate-y-1 hover:opacity-90"
      >
        <Image
          src="/googleplay.svg"
          alt="Tải ứng dụng trên Google Play"
          width={170}
          height={52}
          className="h-[48px] w-auto sm:h-[52px]"
        />
      </a>

      <a
        href={appStore}
        target="_blank"
        rel="noopener noreferrer"
        className="transition-all duration-300 hover:-translate-y-1 hover:opacity-90"
      >
        <Image
          src="/appstore.svg"
          alt="Tải ứng dụng trên App Store"
          width={170}
          height={52}
          className="h-[48px] w-auto sm:h-[52px]"
        />
      </a>
    </div>
  );
};

export default function Hero() {
  return (
    <section
      id="apps"
      className="
        relative overflow-hidden
        bg-gradient-to-b
        from-[#F4F8FF]
        via-white
        to-white
        pb-20 pt-32
        sm:pb-24 sm:pt-36
        lg:pb-28 lg:pt-40
      "
    >
      {/* DECORATION */}
      <div className="pointer-events-none absolute -left-40 top-24 h-[420px] w-[420px] rounded-full bg-[#24559D]/10 blur-[100px]" />
      <div className="pointer-events-none absolute -right-40 top-0 h-[440px] w-[440px] rounded-full bg-[#F4B414]/15 blur-[110px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* INTRO */}
        <div className="mx-auto max-w-4xl text-center">
          <div
            className="
              mb-6 inline-flex items-center gap-2
              rounded-full
              border border-[#24559D]/15
              bg-white
              px-4 py-2
              text-xs font-bold uppercase
              tracking-[0.14em]
              text-[#24559D]
              shadow-sm
            "
          >
            <span className="h-2 w-2 rounded-full bg-[#F4B414]" />
            Nền tảng kết nối vận chuyển
          </div>

          <h1
            className="
              text-4xl font-extrabold
              leading-[1.1]
              tracking-[-0.035em]
              text-slate-900
              sm:text-5xl
              lg:text-6xl
              xl:text-[68px]
            "
          >
            Ghép đúng chuyến.
            <br />
            <span className="brand-text-gradient">
              Vận chuyển hiệu quả hơn.
            </span>
          </h1>

          <p
            className="
              mx-auto mt-6
              max-w-2xl
              text-base leading-8
              text-slate-600
              sm:text-lg
            "
          >
            GhepHang247 kết nối nhu cầu gửi hàng với tài xế phù hợp, giúp khách
            hàng thuận tiện hơn trong vận chuyển và hỗ trợ tài xế tối ưu hành
            trình.
          </p>

          {/* BENEFITS */}
          <div className="mt-7 flex flex-wrap justify-center gap-x-6 gap-y-3">
            {["Theo dõi hành trình", "Quản lý đơn hàng", "Kết nối tài xế"].map(
              (item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-sm font-medium text-slate-600"
                >
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#24559D]/10">
                    <Check
                      size={12}
                      strokeWidth={3}
                      className="text-[#24559D]"
                    />
                  </span>

                  {item}
                </div>
              )
            )}
          </div>
        </div>

        {/* APP CARDS */}
        <section id="download">
          <div className="mt-14 grid gap-6 lg:grid-cols-2 lg:gap-8">
            {/* CUSTOMER */}
            <div
              className="
              group relative overflow-hidden
              rounded-[28px]
              border border-[#24559D]/10
              bg-white
              p-7
              brand-shadow
              transition-all duration-300
              hover:-translate-y-1
              hover:shadow-[0_25px_60px_rgba(30,50,110,0.13)]
              sm:p-9
            "
            >
              <div className="absolute right-0 top-0 h-48 w-48 translate-x-16 -translate-y-16 rounded-full bg-[#24559D]/5" />

              <div className="relative">
                <div className="mb-7 flex items-center justify-between">
                  <div
                    className="
                    flex h-14 w-14 items-center justify-center
                    rounded-2xl
                    bg-[#24559D]
                    text-white
                    shadow-[0_12px_30px_rgba(36,85,157,0.25)]
                  "
                  >
                    <PackageCheck size={28} />
                  </div>

                  <span
                    className="
                    rounded-full
                    bg-[#24559D]/8
                    px-3 py-1.5
                    text-xs font-bold
                    text-[#24559D]
                  "
                  >
                    DÀNH CHO KHÁCH HÀNG
                  </span>
                </div>

                <h2 className="text-2xl font-extrabold tracking-tight text-[#1E326E] sm:text-3xl">
                  Ghép Hàng 24/7 -
                  <span className="text-[#24559D]"> Khách hàng</span>
                </h2>

                <p className="mt-4 max-w-lg text-base leading-7 text-slate-600">
                  Đặt ghép hàng nhanh chóng, theo dõi hành trình và quản lý đơn
                  hàng thuận tiện ngay trên điện thoại.
                </p>

                <div className="mt-8">
                  <AppStoreButtons
                    googlePlay="https://play.google.com/store/apps/details?id=com.anonymous.GhepHang247Khach&pcampaignid=web_share"
                    appStore="https://apps.apple.com/vn/app/gh%C3%A9p-h%C3%A0ng-24-7/id6747367108"
                  />
                </div>
              </div>
            </div>

            {/* DRIVER */}
            <div
              className="
              group relative overflow-hidden
              rounded-[28px]
              border border-[#E77A1F]/15
              bg-white
              p-7
              brand-shadow
              transition-all duration-300
              hover:-translate-y-1
              hover:shadow-[0_25px_60px_rgba(231,122,31,0.12)]
              sm:p-9
            "
            >
              <div className="absolute right-0 top-0 h-48 w-48 translate-x-16 -translate-y-16 rounded-full bg-[#F4B414]/10" />

              <div className="relative">
                <div className="mb-7 flex items-center justify-between">
                  <div
                    className="
                    flex h-14 w-14 items-center justify-center
                    rounded-2xl
                    bg-gradient-to-br
                    from-[#F4B414]
                    to-[#E77A1F]
                    text-white
                    shadow-[0_12px_30px_rgba(231,122,31,0.25)]
                  "
                  >
                    <Truck size={29} />
                  </div>

                  <span
                    className="
                    rounded-full
                    bg-[#F4B414]/10
                    px-3 py-1.5
                    text-xs font-bold
                    text-[#C56718]
                  "
                  >
                    DÀNH CHO TÀI XẾ
                  </span>
                </div>

                <h2 className="text-2xl font-extrabold tracking-tight text-[#1E326E] sm:text-3xl">
                  Ghép Hàng 24/7 -
                  <span className="text-[#E77A1F]"> Tài xế</span>
                </h2>

                <p className="mt-4 max-w-lg text-base leading-7 text-slate-600">
                  Tìm kiếm đơn hàng phù hợp, quản lý hành trình và chủ động lựa
                  chọn chuyến hàng ngay trên ứng dụng.
                </p>

                <div className="mt-8">
                  <AppStoreButtons
                    googlePlay="https://play.google.com/store/apps/details?id=com.anonymous.GhepHang247TaiXe&pcampaignid=web_share"
                    appStore="https://apps.apple.com/vn/app/gh%C3%A9p-h%C3%A0ng-24-7-t%C3%A0i-x%E1%BA%BF/id6747101145"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* SCROLL CTA */}
          <div className="mt-10 text-center">
            <a
              href="#features"
              className="
              inline-flex items-center gap-2
              text-sm font-semibold
              text-[#24559D]
              transition
              hover:text-[#1E326E]
            "
            >
              Khám phá các tính năng
              <ArrowRight size={17} />
            </a>
          </div>
        </section>
      </div>
    </section>
  );
}
