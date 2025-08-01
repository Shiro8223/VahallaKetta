import Head from "next/head";
import { useState, useEffect } from "react";
import { format, differenceInWeeks } from "date-fns";
import {
  Star, Calendar, Clock, Heart, Crown
} from "lucide-react";
import Link from "next/link"; 
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Litters() {
  const [litters, setLitters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("current");

  useEffect(() => {
    loadLitters();
  }, []);

  const loadLitters = async () => {
  try {
    const res = await fetch("../data/litters.json");
    const data = await res.json();
    setLitters(data);
  } catch (e) {
    console.error("Failed to load litters.json", e);
  } finally {
    setIsLoading(false);
  }
};


  const getWeeksOld = (birthDate) =>
    differenceInWeeks(new Date(), new Date(birthDate));

  const filteredLitters = litters.filter((litter) => {
    if (activeTab === "current") return ["born", "ready"].includes(litter.status);
    if (activeTab === "planned") return litter.status === "planned";
    if (activeTab === "completed") return litter.status === "completed";
    return true;
  });

  return (
    <>
      <Head>
        <title>Litters | Vahalla Savannahs</title>
      </Head>

      <Navbar />

      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <Star className="w-16 h-16 mx-auto mb-6 text-amber-600 rune-glow" />
            <h1 className="norse-heading text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Litters & Timeline
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Follow the journey of our Savannah kittens from birth to their forever homes.
              Each litter is carefully planned and raised with Viking dedication.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex justify-center gap-4 mb-12">
            {["current", "planned", "completed"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 rounded-full font-medium text-sm transition ${
                  activeTab === tab
                    ? "bg-amber-600 text-white"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                }`}
              >
                {tab === "current" ? "Current Litters" : tab === "planned" ? "Planned" : "Past Litters"}
              </button>
            ))}
          </div>

          {/* Litters */}
          <div className="grid md:grid-cols-2 gap-8">
            {isLoading ? (
              Array(2).fill(0).map((_, i) => (
                <div key={i} className="rounded-xl bg-gray-100 animate-pulse h-64" />
              ))
            ) : filteredLitters.length > 0 ? (
              filteredLitters.map((litter) => (
                <Link key={litter.id} href={`/litters/${litter.id}`} className="block">
                  <LitterCard litter={litter} getWeeksOld={getWeeksOld} />
                </Link>

              ))
            ) : (
              <div className="col-span-full text-center py-16">
                <Star className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                <h3 className="text-xl font-bold text-gray-500 mb-2">No litters found</h3>
                <p className="text-gray-400">No litters match this category at the moment.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

function LitterCard({ litter, getWeeksOld }) {
  const weeksOld = litter.birth_date ? getWeeksOld(litter.birth_date) : 0;
  const readyDate = litter.expected_ready_date ? new Date(litter.expected_ready_date) : null;

  const getStatusColor = (status) => {
    switch (status) {
      case "planned": return "bg-blue-100 text-blue-800";
      case "born": return "bg-green-100 text-green-800";
      case "ready": return "bg-amber-100 text-amber-800";
      case "completed": return "bg-gray-100 text-gray-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow hover:shadow-xl transition group">
      {/* Image + status */}
      {litter.images?.[0] && (
        <div className="relative h-48 overflow-hidden">
          <img
            src={litter.images[0]}
            alt={litter.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform"
          />
          <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold text-white bg-opacity-90 bg-gray-800">
            {litter.status}
          </div>
          <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold bg-white/90 text-gray-800">
            {litter.expected_generation}
          </div>
        </div>
      )}

      {/* Content */}
      <div className="p-6">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xl font-bold text-gray-900">{litter.name}</h3>
          <Heart className="w-5 h-5 text-gray-400 hover:text-rose-500 cursor-pointer" />
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <p className="text-sm text-gray-500">Father</p>
            <p className="font-medium text-gray-900">{litter.father_name}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Mother</p>
            <p className="font-medium text-gray-900">{litter.mother_name}</p>
          </div>
        </div>

        {litter.birth_date && (
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-2">
              <Calendar className="w-4 h-4 text-amber-600" />
              <span className="text-sm font-medium">Timeline</span>
            </div>
            <div className="text-sm text-gray-600 space-y-1">
              <p>Born: {format(new Date(litter.birth_date), "MMM d, yyyy")}</p>
              <p>Age: {weeksOld} weeks</p>
              {readyDate && <p>Ready: {format(readyDate, "MMM d, yyyy")}</p>}
            </div>
          </div>
        )}

        <p className="text-sm text-gray-600 mb-4">{litter.description}</p>

        {litter.status === "born" && (
          <div className="p-3 bg-green-50 rounded-lg text-sm text-green-700">
            <div className="flex items-center gap-2 font-medium mb-1">
              <Clock className="w-4 h-4 text-green-600" />
              Growing Strong!
            </div>
            These kittens are developing beautifully and will be ready for their forever homes at 12 weeks.
          </div>
        )}

        {litter.status === "ready" && (
          <div className="p-3 bg-amber-50 rounded-lg text-sm text-amber-700">
            <div className="flex items-center gap-2 font-medium mb-1">
              <Crown className="w-4 h-4 text-amber-600" />
              Ready for Adoption!
            </div>
            These beautiful kittens are ready to join their new families.
          </div>
        )}
      </div>
    </div>
  );
}
