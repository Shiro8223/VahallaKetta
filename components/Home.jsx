import { useState, useEffect } from "react";
import { Shield, Crown, Award, Users, Clock, ArrowRight } from "lucide-react";

import FeaturedCats from "../components/home/FeaturedCats";
import WhyChooseUs from "../components/home/WhyChooseUs";
import RecentTestimonials from "../components/home/RecentTestimonials";

export default function Home() {
  const [featuredCats, setFeaturedCats] = useState([]);
  const [recentTestimonials, setRecentTestimonials] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadHomeData();
  }, []);

  const loadHomeData = async () => {
    try {
      const cats = [];
      const testimonials = [];
      setFeaturedCats(cats);
      setRecentTestimonials(testimonials);
    } catch (error) {
      console.error("Error loading home data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="norse-body">
        

      {/* Stats Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <Stat icon={<Clock className="w-8 h-8 text-amber-600" />} bg="bg-amber-100" label="5+" sub="Years Experience" />
            <Stat icon={<Crown className="w-8 h-8 text-teal-600" />} bg="bg-teal-100" label="F4 & F6" sub="Generations" />
            <Stat icon={<Award className="w-8 h-8 text-purple-600" />} bg="bg-purple-100" label="TICA" sub="Registered" />
            <Stat icon={<Users className="w-8 h-8 text-rose-600" />} bg="bg-rose-100" label="1.5K" sub="Instagram Followers" />
          </div>
        </div>
      </section>

      <FeaturedCats cats={featuredCats} isLoading={isLoading} /> 
      <WhyChooseUs /> 
      <RecentTestimonials testimonials={recentTestimonials} isLoading={isLoading} /> 

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-teal-500/10"></div>
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <Shield className="w-16 h-16 mx-auto mb-6 text-amber-400 rune-glow" />
          <h2 className="norse-heading text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Welcome a Viking Companion?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join the Vahalla family and discover the perfect Savannah kitten.
            Ethically bred with love, raised with Norse spirit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#cats"
              className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-md text-lg shadow-lg flex items-center justify-center w-full sm:w-auto"
            >
              <Crown className="w-5 h-5 mr-2" />
              Meet Our Cats
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-6 py-3 rounded-md text-lg shadow-lg flex items-center justify-center w-full sm:w-auto"
            >
              Contact Us
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

function Stat({ icon, bg, label, sub }) {
  return (
    <div className="text-center">
      <div className={`w-16 h-16 mx-auto mb-4 ${bg} rounded-full flex items-center justify-center`}>
        {icon}
      </div>
      <h3 className="norse-heading text-2xl font-bold text-gray-900">{label}</h3>
      <p className="text-gray-600 text-sm">{sub}</p>
    </div>
  );
}
