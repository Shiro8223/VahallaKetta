import { useEffect } from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar"; 
import Footer from "../components/Footer";
import Home from "../components/Home";

export default function IndexPage() {
  return (
    <main className="bg-white text-black"> {/* ← Add pt-24 or similar */}
      <Navbar />
      <Hero />
      <Home />
      <Footer />
    </main>
  );
}
