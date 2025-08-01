import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Head from "next/head";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

// Your existing KittenCard component
function KittenCard({ kitten }) {
  const [currentImage, setCurrentImage] = useState(0);

  const prevImage = () => {
    setCurrentImage((prev) =>
      prev === 0 ? kitten.images.length - 1 : prev - 1
    );
  };

  const nextImage = () => {
    setCurrentImage((prev) =>
      prev === kitten.images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow hover:shadow-md transition relative">
      <div className="relative h-96 overflow-hidden rounded-lg mb-3">
        {kitten.images?.length > 0 && (
          <>
            <img
              src={kitten.images[currentImage]}
              alt={`${kitten.name} image`}
              className="w-full h-full object-cover rounded-lg"
            />
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 p-1 rounded-full hover:bg-white transition"
            >
              <ChevronLeft className="w-5 h-5 text-gray-700" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 p-1 rounded-full hover:bg-white transition"
            >
              <ChevronRight className="w-5 h-5 text-gray-700" />
            </button>
          </>
        )}
      </div>

      <h2 className="text-xl font-semibold text-gray-900">{kitten.name}</h2>
      <p className="text-gray-600 text-sm mb-1">{kitten.gender}</p>
      <p className="text-sm text-gray-800 mb-2">{kitten.notes}</p>
      <p className="text-sm font-bold text-amber-600">Price: {kitten.price}</p>
    </div>
  );
}

// ✅ Page Component
export default function LitterDetailsPage() {
  const router = useRouter();
  const { id } = router.query;
  const [litter, setLitter] = useState(null);

  useEffect(() => {
    const fetchLitter = async () => {
      try {
        const res = await fetch("/data/litters.json");
        const data = await res.json();
        const found = data.find((l) => String(l.id) === String(id));

        setLitter(found);
      } catch (e) {
        console.error("Error loading litter:", e);
      }
    };

    if (id) fetchLitter();
  }, [id]);

  if (!litter) return <div className="p-8 text-center">Loading...</div>;

  return (
    <>
      <Head>
        <title>{litter.name} | Vahalla Savannahs</title>
      </Head>

      <Navbar />

      <main className="min-h-screen bg-slate-50 pt-28 py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8">{litter.name}</h1>

          <div className="grid md:grid-cols-2 gap-6">
            {litter.kittens?.map((kitten, i) => (
              <KittenCard key={i} kitten={kitten} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
