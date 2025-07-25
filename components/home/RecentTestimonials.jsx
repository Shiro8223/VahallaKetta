import { Star, Quote, ArrowRight } from "lucide-react";

export default function RecentTestimonials({ testimonials = [], isLoading = false }) {
  const defaultTestimonials = [
    {
      id: 1,
      owner_name: "Sarah Mitchell",
      cat_name: "Luna",
      location: "Manchester, UK",
      testimonial:
        "Luna has been the perfect addition to our family. Her temperament is exactly as described – playful yet gentle with our children. The Viking spirit really shows in her confident personality! We couldn't be happier with our choice.",
      rating: 5,
    },
    {
      id: 2,
      owner_name: "James Kennedy",
      cat_name: "Thor",
      location: "Liverpool, UK",
      testimonial:
        "Exceptional breeding quality and outstanding customer service. Thor is healthy, social, and has the most beautiful markings. The team at Valhalla Kittens really knows their craft. Highly recommend!",
      rating: 5,
    },
    {
      id: 3,
      owner_name: "Emma Thompson",
      cat_name: "Freya",
      location: "Leeds, UK",
      testimonial:
        "We were looking for an ethical breeder and found exactly that with Valhalla Kittens. Freya came to us well-socialized and healthy. The entire process was professional and caring. Thank you!",
      rating: 5,
    },
  ];

  const displayTestimonials = testimonials.length > 0 ? testimonials : defaultTestimonials;

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Quote className="w-12 h-12 mx-auto mb-6 text-amber-400 rune-glow" />
          <h2 className="norse-heading text-3xl md:text-4xl font-bold text-white mb-4">
            Testimonials from Our Viking Families
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Hear from the families who have welcomed our Savannah kittens into their homes
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayTestimonials.map((t) => (
            <div
              key={t.id}
              className="bg-slate-800 text-gray-100 p-6 rounded-lg border border-slate-700 hover:border-amber-400 transition duration-300"
            >
              {/* Quote */}
              <Quote className="w-6 h-6 text-amber-400 mb-4" />
              {/* Stars */}
              <div className="flex mb-4">
                {Array(t.rating)
                  .fill(0)
                  .map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                  ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-200 leading-relaxed mb-6 text-base">
                “{t.testimonial}”
              </p>

              {/* Footer Info */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-amber-500 text-white font-bold flex items-center justify-center rounded-full">
                  {t.owner_name[0]}
                </div>
                <div>
                  <p className="font-semibold">{t.owner_name}</p>
                  <p className="text-sm text-gray-400">
                    Owner of {t.cat_name} • {t.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <a
            href="/testimonials"
            className="inline-flex items-center bg-amber-600 text-white px-6 py-3 rounded-md hover:bg-amber-700 transition group"
          >
            Read More Reviews
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
