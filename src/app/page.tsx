import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import AppsSection from "@/components/AppsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <Header />
      <Hero />
      <Features />
      <AppsSection />
      <Footer />
    </main>
  );
}