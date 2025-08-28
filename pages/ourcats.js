import Head from "next/head";
import { useState, useEffect } from "react";
import { Crown, Shield, Heart, Filter } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function OurCats() {
  const [cats, setCats] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState("all");

  useEffect(() => {
    loadCats();
  }, []);

  const loadCats = async () => {
  try {
    const res = await fetch("../data/cats.json");
    const data = await res.json();
    setCats(data);
  } catch (e) {
    console.error("Error loading cats:", e);
  } finally {
    setIsLoading(false);
  }
};


  const filteredCats = activeFilter === "all" ? cats : cats.filter(cat => cat.type === activeFilter);
  const studs = cats.filter(cat => cat.type === "stud");
  const queens = cats.filter(cat => cat.type === "queen");

  return (
    <>
      <Head>
        <title>Our Cats | Vahalla Savannahs</title>
      </Head>

      <Navbar />

      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <Crown className="w-16 h-16 mx-auto mb-6 text-amber-600" />
            <h1 className="norse-heading text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Noble Cats
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Meet the royal bloodlines of Vahalla. Each of our cats has been selected for temperament, health, and beauty.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <Stat icon={<Crown className="w-8 h-8 text-amber-600" />} label={queens.length} sub="Queens" />
            <Stat icon={<Shield className="w-8 h-8 text-teal-600" />} label={studs.length} sub="Studs" />
            <Stat icon={<Heart className="w-8 h-8 text-rose-600" />} label="F4 & F6" sub="Generations" />
            <Stat icon={<Filter className="w-8 h-8 text-purple-600" />} label="TICA" sub="Registered" />
          </div>

          {/* Filters */}
          <div className="flex justify-center gap-4 mb-12">
            {["all", "queen", "stud"].map(value => (
              <button
                key={value}
                onClick={() => setActiveFilter(value)}
                className={`px-5 py-2 rounded-full font-medium text-sm transition ${
                  activeFilter === value
                    ? "bg-amber-600 text-white"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                }`}
              >
                {value === "all" ? "All Cats" : value === "queen" ? "Queens" : "Studs"}
              </button>
            ))}
          </div>

          {/* Cat Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {!isLoading ? (
              filteredCats.length > 0 ? (
                filteredCats.map(cat => (
                  <div key={cat.id} className="bg-white rounded-xl overflow-hidden shadow hover:shadow-xl transition group">
                    <div className="relative">
                      <img
                        src={cat.image_url}
                        alt={cat.name}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform"
                      />
                      <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold text-white bg-opacity-90 
                        bg-gradient-to-r from-rose-500 to-rose-700 uppercase">
                        {cat.generation} {cat.type}
                      </div>
                      {cat.is_featured && (
                        <div className="absolute top-4 right-4 bg-amber-600 text-white text-xs px-3 py-1 rounded-full font-medium">
                          ⭐ Featured
                        </div>
                      )}
                    </div>

                    <div className="p-6">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="text-xl font-bold text-gray-900">{cat.name}</h3>
                        <Heart className="w-5 h-5 text-gray-400 hover:text-rose-500 transition cursor-pointer" />
                      </div>
                      <p className="text-sm text-gray-500 mb-3">
                        <span className="font-semibold">Pattern:</span> {cat.pattern}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {cat.temperament?.map((trait, index) => (
                          <span key={index} className="px-3 py-1 text-xs bg-gray-100 rounded-full border border-gray-200">
                            {trait}
                          </span>
                        ))}
                      </div>
                      <p className="text-sm text-gray-600">{cat.description}</p>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-full text-center py-16">
                  <Crown className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                  <h3 className="text-xl font-bold text-gray-500 mb-2">No cats found</h3>
                  <p className="text-gray-400">No cats match your current filter selection.</p>
                </div>
              )
            ) : (
              Array(6)
                .fill(0)
                .map((_, index) => (
                  <div key={index} className="rounded-xl bg-gray-100 animate-pulse h-96" />
                ))
            )}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

function Stat({ icon, label, sub }) {
  return (
    <div className="text-center p-6 bg-white rounded-xl shadow-sm">
      <div className="mb-2">{icon}</div>
      <h3 className="text-2xl font-bold text-gray-900">{label}</h3>
      <p className="text-gray-600">{sub}</p>
    </div>
  );
}
