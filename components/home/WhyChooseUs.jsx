import { Shield, Award, Heart, Users, Clock, Crown } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      icon: Shield,
      title: "Ethical Breeding",
      description:
        "TICA registered with strict ethical standards. Members of the Savannah Cat Association since 2020.",
      color: "bg-amber-100 text-amber-600",
    },
    {
      icon: Crown,
      title: "Premium Lineage",
      description:
        "Carefully selected F4 & F6 generations offering the perfect balance of wild beauty and domestic temperament.",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: Heart,
      title: "Loving Care",
      description:
        "Each kitten is raised with love in our family home, ensuring proper socialization and health.",
      color: "bg-rose-100 text-rose-600",
    },
    {
      icon: Users,
      title: "Community Trust",
      description:
        "Strong social media presence with 1.5K Instagram followers and numerous satisfied families.",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: Clock,
      title: "Experience",
      description:
        "Over 5 years of dedicated breeding experience in North-West England, near Bolton.",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: Award,
      title: "Health Guarantee",
      description:
        "All kittens come with health guarantees and are ready for their forever homes at 12 weeks.",
      color: "bg-teal-100 text-teal-600",
    },
  ];

  return (
    <section id="why" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Shield className="w-12 h-12 mx-auto mb-6 text-amber-600 rune-glow" />
          <h2 className="norse-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Vahalla?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We combine Viking dedication with modern ethical breeding practices
            to bring you exceptional Savannah companions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map(({ icon: Icon, title, description, color }, i) => (
            <div
              key={i}
              className="group p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div
                className={`w-16 h-16 rounded-2xl ${color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <Icon className="w-8 h-8" />
              </div>
              <h3 className="norse-heading text-lg font-bold text-gray-900 mb-3">
                {title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
