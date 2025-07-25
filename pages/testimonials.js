import { useState, useEffect } from "react";
import { Star, Quote, Heart, Users } from "lucide-react";
import { format } from "date-fns";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Head from "next/head";


export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadTestimonials();
  }, []);

  const loadTestimonials = async () => {
    try {
      // Replace with actual API call when ready
      setTestimonials([
        {
          id: 1,
          owner_name: "Sarah Mitchell",
          cat_name: "Luna",
          location: "Manchester, UK",
          testimonial:
            "Luna has been the perfect addition to our family. Her temperament is exactly as described - playful yet gentle with our children. The Viking spirit really shows in her confident personality! We couldn't be happier with our choice.",
          rating: 5,
          date: "2024-01-15",
        },
        {
          id: 2,
          owner_name: "James Kennedy",
          cat_name: "Thor",
          location: "Liverpool, UK",
          testimonial:
            "Exceptional breeding quality and outstanding customer service. The team at Vahalla really knows their craft. Highly recommend!",
          rating: 5,
          date: "2024-01-10",
        },
        {
          id: 3,
          owner_name: "Emma Thompson",
          cat_name: "Freya",
          location: "Leeds, UK",
          testimonial:
            "We were looking for an ethical breeder and found exactly that with Vahalla. Freya came to us well-socialized and healthy. The entire process was professional and caring. Thank you!",
          rating: 5,
          date: "2024-01-05",
        },
      ]);
    } catch (error) {
      console.error("Error loading testimonials:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const averageRating =
    testimonials.length > 0
      ? (
          testimonials.reduce((sum, t) => sum + t.rating, 0) /
          testimonials.length
        ).toFixed(1)
      : 5.0;

  return (
    <>
      <Head>
        <title>Testimonials | Vahalla Savannahs</title>
      </Head>

      <Navbar />
        <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-16">
            <Star className="w-16 h-16 mx-auto mb-6 text-amber-600 rune-glow" />
            <h1 className="norse-heading text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                What Our Families Say
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Read testimonials from our satisfied families across North-West
                England. Their stories reflect our commitment to ethical breeding
                and exceptional care.
            </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
                <Star className="w-12 h-12 mx-auto mb-4 text-amber-600" />
                <h3 className="norse-heading text-3xl font-bold text-gray-900 mb-2">
                {averageRating}
                </h3>
                <p className="text-gray-600">Average Rating</p>
                <div className="flex justify-center mt-2">
                {Array(5)
                    .fill(0)
                    .map((_, i) => (
                    <Star
                        key={i}
                        className="w-4 h-4 text-amber-400 fill-current"
                    />
                    ))}
                </div>
            </div>

            <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
                <Users className="w-12 h-12 mx-auto mb-4 text-teal-600" />
                <h3 className="norse-heading text-3xl font-bold text-gray-900 mb-2">
                {testimonials.length}+
                </h3>
                <p className="text-gray-600">Happy Families</p>
            </div>

            <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
                <Heart className="w-12 h-12 mx-auto mb-4 text-rose-600" />
                <h3 className="norse-heading text-3xl font-bold text-gray-900 mb-2">
                100%
                </h3>
                <p className="text-gray-600">Satisfaction Rate</p>
            </div>
            </div>

            {/* Testimonials */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t) => (
                <div
                key={t.id}
                className="hover:shadow-xl transition-all duration-300 group bg-white overflow-hidden rounded-xl p-6"
                >
                <Quote className="w-8 h-8 text-amber-400 mb-4 opacity-60" />
                <div className="flex mb-4">
                    {Array(t.rating)
                    .fill(0)
                    .map((_, i) => (
                        <Star
                        key={i}
                        className="w-4 h-4 text-amber-400 fill-current"
                        />
                    ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-6 text-sm">
                    "{t.testimonial}"
                </p>
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">
                        {t.owner_name[0]}
                    </span>
                    </div>
                    <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-gray-900 text-sm">
                        {t.owner_name}
                    </h4>
                    <p className="text-gray-500 text-xs">
                        {t.cat_name && `Owner of ${t.cat_name}`}
                    </p>
                    <p className="text-gray-400 text-xs">
                        {t.location} •{" "}
                        {t.date && format(new Date(t.date), "MMM yyyy")}
                    </p>
                    </div>
                </div>
                </div>
            ))}
            </div>

            {/* CTA */}
            <div className="text-center mt-16 p-12 bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl">
            <Star className="w-12 h-12 mx-auto mb-6 text-amber-400 rune-glow" />
            <h2 className="norse-heading text-2xl md:text-3xl font-bold text-white mb-4">
                Ready to Join Our Family?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Experience the joy of welcoming a Vahalla Kitten into your home.
                Our ethical breeding and loving care ensure you'll have a companion
                for life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="mailto:contact@vahalla.com?subject=Inquiry about Savannah Kittens">
                <button className="px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-xl font-medium transition-colors duration-200">
                    Contact Us Today
                </button>
                </a>
            </div>
            </div>
        </div>
        </div>
        <Footer />
    </>
  );
}
