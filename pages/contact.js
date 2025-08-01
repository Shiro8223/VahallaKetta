import Head from "next/head";
import { useState } from "react";
import {
  MapPin,
  Mail,
  Instagram,
  Award,
  Shield,
  Clock,
  Phone,
  MessageCircle,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Email failed");

      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });

      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <>
      <Head>
        <title>Contact | Vahalla Savannahs</title>
      </Head>

      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <Shield className="w-16 h-16 mx-auto mb-6 text-amber-600 rune-glow" />
            <h1 className="norse-heading text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Contact Vahalla
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Ready to welcome a Savannah kitten into your family? Get in touch
              with us to learn more about our available litters and ethical
              breeding practices.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2 bg-white rounded-xl shadow-xl p-8">
              <h2 className="text-2xl font-bold flex items-center gap-3 mb-4">
                <MessageCircle className="w-6 h-6 text-amber-600" />
                Send Us a Message
              </h2>
              <p className="text-gray-600 mb-6">
                Fill out the form below and we’ll get back to you within 24
                hours.
              </p>

              {submitted ? (
                <div className="text-center py-12">
                  <Shield className="w-16 h-16 mx-auto mb-6 text-green-600" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-gray-600">
                    Thank you for your interest. We’ll respond within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-700">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          handleInputChange("name", e.target.value)
                        }
                        className="w-full px-4 py-2 border rounded-md text-sm"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-700">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                        className="w-full px-4 py-2 border rounded-md text-sm"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-700">
                      Subject *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) =>
                        handleInputChange("subject", e.target.value)
                      }
                      className="w-full px-4 py-2 border rounded-md text-sm"
                      placeholder="What can we help you with?"
                    />
                  </div>

                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-700">
                      Message *
                    </label>
                    <textarea
                      required
                      value={formData.message}
                      onChange={(e) =>
                        handleInputChange("message", e.target.value)
                      }
                      className="w-full px-4 py-2 border rounded-md text-sm h-32 resize-none"
                      placeholder="Tell us about your interest in our Savannah kittens..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 rounded-md transition"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </div>

            {/* Info Cards */}
            <div className="space-y-8">
              {/* Contact Info */}
              <div className="bg-white rounded-xl shadow-lg p-6 space-y-6">
                <h3 className="text-xl font-bold mb-2">Get In Touch</h3>
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-amber-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Location</h4>
                    <p className="text-sm text-gray-600">
                      Bolton, North-West England <br />
                      Greater Manchester, UK
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-amber-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <a
                      href="mailto:contact@valhallakittens.com"
                      className="text-sm text-amber-600 hover:text-amber-700"
                    >
                      contact@valhallakittens.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Instagram className="w-6 h-6 text-amber-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Instagram</h4>
                    <a
                      href="https://instagram.com/catmantubs"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-amber-600 hover:text-amber-700"
                    >
                      @catmantubs (1.5K followers)
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-amber-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Response Time
                    </h4>
                    <p className="text-sm text-gray-600">
                      We typically respond within 24 hours.
                    </p>
                  </div>
                </div>
              </div>

              {/* Credentials */}
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-xl shadow-lg p-6 space-y-4">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Award className="w-6 h-6 text-amber-400" />
                  Our Credentials
                </h3>
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-amber-400" />
                  <span className="text-sm">TICA Registered Breeder</span>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-amber-400" />
                  <span className="text-sm">
                    Savannah Cat Association Member
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-amber-400" />
                  <span className="text-sm">Active Since 2022</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-amber-400" />
                  <span className="text-sm">North-West England Based</span>
                </div>
              </div>

              {/* FAQ */}
              <div className="bg-white rounded-xl shadow-lg p-6 space-y-4">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Common Questions
                </h3>
                <div>
                  <h4 className="font-semibold text-sm mb-1">
                    What generations do you breed?
                  </h4>
                  <p className="text-sm text-gray-600">
                    We specialize in F4 and F7 Savannah cats, offering the
                    perfect balance of wild beauty and domestic temperament.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-1">
                    When are kittens ready?
                  </h4>
                  <p className="text-sm text-gray-600">
                    Our kittens are ready for their forever homes at 12 weeks
                    old, fully socialized and health-checked.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-1">
                    Do you offer health guarantees?
                  </h4>
                  <p className="text-sm text-gray-600">
                    Yes, all our kittens come with comprehensive health
                    guarantees and veterinary documentation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
