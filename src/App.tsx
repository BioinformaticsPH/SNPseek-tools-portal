import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import DatabasesSection from "./components/DatabasesSection";
import ComingSoonStrip from "./components/ComingSoonStrip";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <DatabasesSection />
        <ComingSoonStrip />
      </main>
      <Footer />
    </>
  );
}
