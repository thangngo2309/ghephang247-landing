"use client";

export default function AppsSection() {
    return (
      <section id="apps" className="py-20">
        <div className="max-w-6xl mx-auto text-center px-6 md:px-0">
          <h2 className="text-3xl font-bold mb-12">Hai ứng dụng – Một hệ sinh thái</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-green-50 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-primary mb-3">GhepHang247 - Khách hàng</h3>
              <p className="text-gray-700 mb-6">Đặt ghép hàng nhanh chóng, theo dõi hành trình và thanh toán tiện lợi.</p>
              <a href="https://play.google.com/store/apps/details?id=com.ghephang247khach" target="_blank" className="inline-block">
                <img src="/googleplay.svg" alt="Google Play" className="h-12" />
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.ghephang247khach" target="_blank" className="inline-block">
                <img src="/appstore.svg" alt="App Store" className="h-12" />
              </a>
            </div>
  
            <div className="bg-blue-50 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-blue-600 mb-3">GhepHang247 - Tài xế</h3>
              <p className="text-gray-700 mb-6">Nhận đơn linh hoạt, định vị thông minh và nhận thưởng nhanh chóng.</p>
              <a href="https://play.google.com/store/apps/details?id=com.ghephang247driver" target="_blank" className="inline-block">
                <img src="/googleplay.svg" alt="Google Play" className="h-12" />
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.ghephang247khach" target="_blank" className="inline-block">
                <img src="/appstore.svg" alt="App Store" className="h-12" />
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
  