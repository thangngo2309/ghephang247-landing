"use client";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 md:pt-36 pb-24 bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-7xl mx-auto px-10 md:px-16">
        
        {/* GRID 2 CỘT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* ===== CỘT 1 — APP KHÁCH HÀNG ===== */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
              GhepHang247 – Khách hàng
            </h1>

            <p className="text-gray-700 text-xl max-w-xl">
              Đặt ghép hàng nhanh chóng, theo dõi hành trình và thanh toán tiện lợi.
            </p>

            <div className="flex space-x-5 mt-8">
              <a
                href="https://play.google.com/store/apps/details?id=com.anonymous.GhepHang247Khach&pcampaignid=web_share"
                target="_blank"
              >
                <img
                  src="/googleplay.svg"
                  alt="Google Play"
                  className="h-14 hover:scale-105 transition-transform"
                />
              </a>
              <a 
                href="https://apps.apple.com/vn/app/gh%C3%A9p-h%C3%A0ng-24-7/id6747367108" 
                target="_blank"
              >
                <img
                  src="/appstore.svg"
                  alt="App Store"
                  className="h-14 hover:scale-105 transition-transform"
                />
              </a>
            </div>
          </div>

          {/* ===== CỘT 2 — APP TÀI XẾ ===== */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
              GhepHang247 – Tài xế
            </h1>

            <p className="text-gray-700 text-xl max-w-xl">
              Nhận đơn linh hoạt, định vị thông minh và nhận thưởng nhanh chóng.
            </p>

            <div className="flex space-x-5 mt-8">
              <a
                href="https://play.google.com/store/apps/details?id=com.anonymous.GhepHang247TaiXe&pcampaignid=web_share"
                target="_blank"
              >
                <img
                  src="/googleplay.svg"
                  alt="Google Play"
                  className="h-14 hover:scale-105 transition-transform"
                />
              </a>
              <a 
                href="https://apps.apple.com/vn/app/gh%C3%A9p-h%C3%A0ng-24-7-t%C3%A0i-x%E1%BA%BF/id6747101145" 
                target="_blank"
              >
                <img
                  src="/appstore.svg"
                  alt="App Store"
                  className="h-14 hover:scale-105 transition-transform"
                />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
