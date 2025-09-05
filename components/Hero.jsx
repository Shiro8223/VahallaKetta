import { useState, useEffect } from "react";
import { Shield, Crown, ArrowRight } from "lucide-react";

const images = [
  "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=1200&h=800&fit=crop&crop=center",
  "/images/siggiHero.png",
  "/images/kittensHero.png",
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (idx) => setCurrent(idx);

  return (
    <section className="relative h-[100vh] w-full flex items-center justify-center text-white overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0">
        {images.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`Hero image ${idx + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              idx === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Shield className="w-20 h-20 mx-auto mb-6 text-amber-400 rune-glow animate-pulse" />
        </div>

        <h1 className="norse-heading text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          <span className="block text-amber-400">VahallaKetta</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-200 mb-4 font-light">
          Where Viking Spirit Meets Savannah Grace
        </p>

        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          Ethical Savannah F4 & F6 breeding in North-West England. TICA registered,
          Savannah Cat Association members since 2020.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#cats"
            className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-md text-lg shadow-2xl flex items-center justify-center group min-w-[180px]"
          >
            <Crown className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
            Meet Our Cats
          </a>

          <a
            href="/litters"
            className="border-2 border-white text-black bg-white hover:bg-gray-100 hover:text-black px-6 py-3 rounded-md text-lg shadow-2xl flex items-center justify-center group min-w-[180px]"
          >
            Current Litters
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-8 right-8 flex gap-2 z-10">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goTo(idx)}
            aria-label={`Show image ${idx + 1}`}
            className={`w-3 h-3 rounded-full ${
              idx === current ? "bg-yellow-400 scale-125" : "bg-white/70"
            } border transition-all`}
          />
        ))}
      </div>
    </section>
  );
}
