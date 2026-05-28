import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import DatabasesSection from "./components/DatabasesSection";
import ComingSoonStrip from "./components/ComingSoonStrip";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="relative flex-1">
        {/* Full-page grid pattern behind all main sections */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            opacity: 0.35,
          }}
        />
        <main className="relative">
          <Hero />
          <DatabasesSection />
          <ComingSoonStrip />
        </main>
      </div>
      <Footer />
    </>
  );
}
