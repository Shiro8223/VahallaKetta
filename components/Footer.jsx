// Footer.jsx
import { Shield } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <Shield className="w-6 h-6 text-amber-500 rune-glow" />
              <h3 className="norse-heading text-lg font-bold">Vahalla</h3>
            </div>
            <p className="norse-body text-gray-300 text-sm leading-relaxed">
              Ethical Savannah cat breeding in North-West England. TICA registered members of the Savannah Cat Association.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="norse-heading font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {[
                { title: "Our Cats", url: "/ourcats" },
                { title: "Litters", url: "/litters" },
                { title: "Testimonials", url: "/testimonials" },
                { title: "Contact", url: "/contact" },
              ].map((item) => (
                <a
                  key={item.title}
                  href={item.url}
                  className="block norse-body text-gray-300 hover:text-amber-400 transition-colors duration-200 text-sm"
                >
                  {item.title}
                </a>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="norse-heading font-semibold mb-4">Connect</h4>
            <div className="space-y-2 norse-body text-gray-300 text-sm">
              <p>📍 Bolton, North-West England</p>
              <p>📱 Instagram: @catmantubs</p>
              <p>🏆 TICA Registered</p>
              <p>🛡️ Savannah Cat Association Member</p>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="norse-body text-gray-400 text-sm">
            © 2020 Vahalla. All rights reserved. | Where Viking spirit meets Savannah grace.
          </p>
        </div>
      </div>
    </footer>
  );
}
