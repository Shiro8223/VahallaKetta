import { Crown, Heart, ArrowRight } from "lucide-react";

export default function FeaturedCats({ cats = [], isLoading = false }) {
  const defaultCats = [
    {
      id: 1,
      name: "Siggi",
      type: "queen",
      generation: "F3",
      pattern: "Marbled",
      image_url:
        "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=600&h=400&fit=crop&crop=center",
      temperament: ["Social", "Playful", "Gentle"],
      description:
        "Our beloved F3 marbled queen with exceptional temperament and stunning coat patterns.",
    },
    {
      id: 2,
      name: "Solvi",
      type: "queen",
      generation: "F6",
      pattern: "Silver",
      image_url:
        "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?w=600&h=400&fit=crop&crop=center",
      temperament: ["Calm", "Affectionate", "Intelligent"],
      description:
        "A graceful F6 silver mother known for her calm demeanor and loving nature.",
    },
  ];

  const displayCats = cats.length > 0 ? cats : defaultCats;

  return (
    <section id="cats" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Crown className="w-12 h-12 mx-auto mb-6 text-amber-600 rune-glow" />
          <h2 className="norse-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet Our Noble Cats
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our carefully selected studs and queens, each with their own Viking
            heritage and exceptional temperaments. Discover the parents of your
            future companion.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {isLoading
            ? Array(3)
                .fill(0)
                .map((_, index) => (
                  <div
                    key={index}
                    className="rounded-xl border overflow-hidden shadow-sm"
                  >
                    <div className="h-64 w-full bg-gray-200 animate-pulse" />
                    <div className="p-6">
                      <div className="h-6 w-24 bg-gray-200 mb-2 animate-pulse" />
                      <div className="h-4 w-full bg-gray-200 mb-4 animate-pulse" />
                      <div className="flex gap-2 mb-4">
                        <div className="h-6 w-16 bg-gray-200 rounded-full animate-pulse" />
                        <div className="h-6 w-16 bg-gray-200 rounded-full animate-pulse" />
                      </div>
                      <div className="h-4 w-full bg-gray-200 animate-pulse" />
                    </div>
                  </div>
                ))
            : displayCats.map((cat) => (
                <div
                  key={cat.id}
                  className="rounded-xl border overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="relative">
                    <img
                      src={cat.image_url}
                      alt={`${cat.name} - ${cat.generation} ${cat.type}`}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="inline-block bg-amber-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                        {cat.generation} {cat.type}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Heart className="w-6 h-6 text-white drop-shadow-lg" />
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="norse-heading text-xl font-bold text-gray-900 mb-2">
                      {cat.name}
                    </h3>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {cat.temperament?.map((trait, i) => (
                        <span
                          key={i}
                          className="text-xs border border-gray-300 rounded-full px-2 py-1"
                        >
                          {trait}
                        </span>
                      ))}
                    </div>

                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {cat.description}
                    </p>

                    <div className="text-sm text-gray-500">
                      <span className="font-medium">Pattern:</span>{" "}
                      {cat.pattern}
                    </div>
                  </div>
                </div>
              ))}
        </div>

        <div className="text-center">
          <a
            href="/ourcats"
            className="inline-flex items-center bg-amber-600 hover:bg-amber-700 text-white text-sm font-medium px-6 py-3 rounded-md group transition"
          >
            Meet All Our Cats
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
