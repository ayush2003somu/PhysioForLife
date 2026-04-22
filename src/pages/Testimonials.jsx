import { testimonialsData } from '../data/testimonialsData';
import TestimonialCard from '../components/TestimonialCard';
import CTASection from '../components/CTASection';
import { Star, Play, Users } from 'lucide-react';
import { ratingAverage,testimonialsCount } from '../data/testimonialsData';
import { useState } from 'react';
export default function Testimonials() {
  const videoTestimonials = testimonialsData.filter((t) => t.videoUrl);
  const textTestimonials = testimonialsData;
  const [data,showData] = useState(false);
  return (
    <main>
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-50" />
        <div className="absolute top-20 left-0 w-96 h-96 rounded-full bg-primary-100/30 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold text-primary-600 uppercase tracking-wider mb-3">
            Testimonials
          </p>
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-neutral-900 mb-4">
            Real Patients. <span className="gradient-text">Real Results.</span>
          </h1>
          <p className="text-lg text-neutral-500 max-w-2xl mx-auto mb-10">
            Don't just take our word for it — hear from the patients whose lives
            we've helped transform through expert physiotherapy care.
          </p>

          {/* Trust stats */}
          <div className="inline-flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-2 px-5 py-2.5 bg-white rounded-xl border border-neutral-100 shadow-sm">
              <Users size={18} className="text-primary-600" />
              <span className="text-sm font-semibold text-neutral-700">{testimonialsCount}+ Patients</span>
            </div>
            <div className="flex items-center gap-2 px-5 py-2.5 bg-white rounded-xl border border-neutral-100 shadow-sm">
              <Star size={18} className="text-amber-500 fill-amber-500" />
              <span className="text-sm font-semibold text-neutral-700">{ratingAverage} Average Rating</span>
            </div>
            <div className="flex items-center gap-2 px-5 py-2.5 bg-white rounded-xl border border-neutral-100 shadow-sm">
              <span className="text-sm font-semibold text-neutral-700">95% Recovery Rate</span>
            </div>
          </div>
        </div>
      </section>

      {/* Video Testimonials (placeholder section) */}
      {videoTestimonials.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="font-heading font-bold text-2xl text-neutral-900 flex items-center justify-center gap-2">
                <Play size={24} className="text-primary-600" />
                Video Testimonials
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {videoTestimonials.map((t) => (
                <div
                  key={t.id}
                  className="aspect-video bg-neutral-100 rounded-2xl flex items-center justify-center border border-neutral-200 hover:border-primary-200 transition-colors group cursor-pointer"
                >
                  <div className="text-center">
                    <div className="w-14 h-14 mx-auto rounded-full bg-primary-100 flex items-center justify-center group-hover:bg-primary-500 transition-colors duration-300 mb-3">
                      <Play
                        size={24}
                        className="text-primary-600 group-hover:text-white transition-colors duration-300 ml-0.5"
                      />
                    </div>
                    <p className="text-sm font-medium text-neutral-600">{t.name}</p>
                    <p className="text-xs text-neutral-400">{t.condition}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
      {/* Testimonals text */}
      <section id="text-testimonials" className="py-20 bg-neutral-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-neutral-900">
              Patient Success Stories
            </h2>
            <p className="text-neutral-500 mt-2">
              Every recovery story motivates us to do better.
            </p>
          </div>

          {(() => {
            // Show only first 20 if data is false, else show all
            const testimonialsToShow = data ? textTestimonials : textTestimonials.slice(0, 12);
            return (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {testimonialsToShow.map((t) => (
                  <TestimonialCard key={t.id} testimonial={t} />
                ))}
              </div>
            );
          })()}
          <div className="flex justify-center">
          {textTestimonials.length > 10 && (
            <button
              className="mt-8 px-10 py-2 rounded bg-primary-600 text-white font-semibold hover:bg-primary-700 transition"
              onClick={() => showData(!data)}
            >
              {data ? 'Show Less' : 'Read More'}
            </button>
          )}
          </div>
        </div>
      </section>
      {/* CTA */}
      <CTASection
        title="Ready to write your success story?"
        subtitle="Join 200+ patients who have recovered with Physio For Life. Book your first consultation today."
      />
    </main>
  );
}
