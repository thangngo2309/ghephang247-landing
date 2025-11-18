import Hero from "../components/Hero";
import Features from "../components/Features";
import AppsSection from "../components/AppsSection";
import Footer from "../components/Footer";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Features />
      <AppsSection />
      <Footer />
    </main>
  );
}
