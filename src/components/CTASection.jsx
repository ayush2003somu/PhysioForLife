import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle } from 'lucide-react';

export default function CTASection({
  title = "Not sure where to start?",
  subtitle = "Book a FREE consultation and let us help you create a personalized recovery plan.",
  primaryText = "Book Free Consultation",
  primaryLink = "#",
  showWhatsApp = true,
}) {
  return (
    <section id="cta-section" className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-white/20 blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-accent-400/30 blur-3xl" />
      </div>

      {/* Pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
          {title}
        </h2>
        <p className="text-lg text-primary-100 mb-10 max-w-2xl mx-auto">
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={primaryLink}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-700 font-bold rounded-2xl hover:bg-primary-50 transition-all duration-300 shadow-xl shadow-black/10 hover:-translate-y-1 hover:shadow-2xl text-sm sm:text-base"
          >
            {primaryText}
            <ArrowRight size={18} />
          </a>
          {showWhatsApp && (
            <a
              href="https://wa.me/91XXXXXXXXXX?text=Hi%20I%20want%20to%20book%20a%20consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-green-500 text-white font-bold rounded-2xl hover:bg-green-600 transition-all duration-300 shadow-xl shadow-green-700/20 hover:-translate-y-1 text-sm sm:text-base"
            >
              <MessageCircle size={18} />
              WhatsApp Us
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
