import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  MessageCircle,
  Users,
  Award,
  Wifi,
  ClipboardList,
  Stethoscope,
  Sparkles,
} from 'lucide-react';
import { servicesData } from '../data/servicesData';
import { testimonialsData } from '../data/testimonialsData';
import { staffData } from '../data/staffData';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';
import CTASection from '../components/CTASection';
import group1 from '../media/group1.jpeg';
import { testimonialsCount } from '../data/testimonialsData';

const stats = [
  { icon: Users, value: testimonialsCount, label: 'Patients Treated' },
  { icon: Award, value: '3+', label: 'Years Experience' },
  { icon: Wifi, value: 'All Week', label: 'Online & Offline Sessions' },
];

const steps = [
  {
    step: 1,
    icon: ClipboardList,
    title: 'Book Consultation',
    description: 'Schedule your first appointment online or via WhatsApp — quick and hassle-free.',
  },
  {
    step: 2,
    icon: Stethoscope,
    title: 'Get Assessment',
    description: 'Our expert physiotherapist will carefully assess your condition and medical history.',
  },
  {
    step: 3,
    icon: Sparkles,
    title: 'Start Recovery Plan',
    description: 'Receive a personalized treatment plan and begin your journey to recovery.',
  },
];

export default function Home() {
  const drAnsil = staffData.find((s) => s.id === 1);
  const [failedDoctorSrc, setFailedDoctorSrc] = useState(null);

  const testimonialsPreview = (() => {
    const withQuote = testimonialsData.filter((t) => (t?.result || '').trim().length > 0);
    const withoutQuote = testimonialsData.filter((t) => (t?.result || '').trim().length === 0);
    return [...withQuote, ...withoutQuote].slice(0, 16);
  })();

  return (
    <main>
      {/* ───── HERO ───── */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center overflow-hidden pt-20"
      >
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-50" />
        <div className="absolute top-20 right-0 w-[600px] h-[600px] rounded-full bg-primary-100/40 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-accent-100/30 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, var(--color-primary-400) 1px, transparent 0)`,
            backgroundSize: '32px 32px',
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
                  <div className="animate-fade-in-up">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary-50 border border-primary-100 rounded-full text-sm text-primary-700 font-medium mb-6">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    Now offering Online Rehab sessions
                    </div>

                    <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-neutral-900 leading-tight mb-6">
                    Recover from Pain.{' '}
                    <span className="gradient-text">Return to Performance.</span>
                    </h1>

                    <p className="text-lg text-neutral-500 leading-relaxed mb-8 max-w-xl">
                    Expert physiotherapy — both in clinic and online.
                    Personalized treatment plans designed to get you back to the
                    life you love, faster and stronger.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="#"
                      id="hero-book-now"
                      className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-bold rounded-2xl hover:from-primary-700 hover:to-primary-800 transition-all duration-300 shadow-xl shadow-primary-600/25 hover:shadow-primary-600/40 hover:-translate-y-1 text-sm sm:text-base"
                    >
                      Book Now
                      <ArrowRight size={18} />
                    </a>
                    <a
                      href="https://wa.me/918004500646?text=Hi%20I%20want%20to%20book%20a%20consultation"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-500 text-white font-bold rounded-2xl hover:bg-green-600 transition-all duration-300 shadow-lg shadow-green-600/20 hover:-translate-y-1 text-sm sm:text-base"
                    >
                      {/* WhatsApp SVG */}
                      <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="35"
                      height="35"
                      fill="none"
                      viewBox="0 0 32 32"
                      >
                      <g>
                        <circle cx="16" cy="16" r="16" fill="#25D366" />
                        <path
                        fill="#fff"
                        d="M16.02 8.5c-4.13 0-7.49 3.36-7.49 7.5 0 1.32.35 2.6 1.01 3.73l-1.08 3.95 4.06-1.06c1.1.6 2.34.92 3.6.92 4.13 0 7.49-3.36 7.49-7.5s-3.36-7.5-7.49-7.5zm0 13.5c-1.13 0-2.24-.3-3.2-.87l-.23-.13-2.41.63.65-2.35-.15-.24c-.62-.99-.95-2.13-.95-3.29 0-3.48 2.83-6.31 6.29-6.31 3.47 0 6.3 2.83 6.3 6.31 0 3.48-2.83 6.31-6.3 6.31zm3.45-4.77c-.19-.1-1.13-.56-1.3-.62-.17-.06-.3-.1-.43.1-.13.19-.5.62-.62.75-.11.13-.23.14-.42.05-.19-.1-.8-.29-1.53-.93-.57-.51-.95-1.13-1.06-1.32-.11-.19-.01-.29.08-.39.08-.09.19-.23.29-.34.1-.12.13-.2.2-.33.07-.13.03-.24-.01-.34-.05-.1-.43-1.04-.59-1.43-.16-.39-.32-.34-.43-.35-.11-.01-.24-.01-.37-.01-.13 0-.34.05-.52.24-.18.19-.7.68-.7 1.65 0 .97.71 1.91.81 2.04.1.13 1.39 2.13 3.38 2.91.47.16.84.25 1.13.32.47.12.9.1 1.24.06.38-.06 1.13-.46 1.29-.9.16-.44.16-.82.11-.9-.05-.08-.17-.13-.36-.23z"
                        />
                      </g>
                      </svg>
                      WhatsApp
                    </a>
                    </div>

                    {/* Trust badges */}
              <div className="flex items-center gap-6 mt-10 pt-8 border-t border-neutral-200/60">
                <div className="flex -space-x-3">
                  {['R', 'P', 'A', 'S'].map((letter, i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full border-2 border-white bg-gradient-to-br from-primary-400 to-accent-400 flex items-center justify-center text-white text-xs font-bold shadow-sm"
                    >
                      {letter}
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-sm font-semibold text-neutral-800">
                    Trusted by {testimonialsCount} patients
                  </p>
                  <p className="text-xs text-neutral-400">
                    Rated 5.0 ★ by our patients
                  </p>
                </div>
              </div>
            </div>

            {/* Right Visual */}
            <div className="hidden lg:flex justify-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="relative">
                <div className="w-[700px] h-[480px] rounded-3xl bg-gradient-to-br from-primary-200 via-primary-100 to-accent-100 flex items-center justify-center overflow-hidden shadow-2xl shadow-primary-200/30">
                  <img
                    src={group1}
                    alt="Physio For Life Team"
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-transparent to-transparent pointer-events-none" />
                </div>
                {/* Floating cards */}
                <div className="absolute -left-15 top-80 glass rounded-2xl p-4 shadow-lg animate-float" style={{ animationDelay: '0.5s' }}>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">
                      <Sparkles size={20} className="text-green-600" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-neutral-700">Recovery Rate</p>
                      <p className="text-lg font-bold text-green-600">95%</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -right-8 bottom-24 glass rounded-2xl p-4 shadow-lg animate-float" style={{ animationDelay: '1s' }}>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center">
                      <Users size={20} className="text-primary-600" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-neutral-700">Happy Patients</p>
                      <p className="text-lg font-bold text-primary-600">{testimonialsCount}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
              </div>
            </div>

      </section>

      {/* ───── STATS ───── */}
      <section id="stats" className="relative py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div
                  key={i}
                  className="group flex items-center gap-4 p-6 rounded-2xl bg-gradient-to-br from-neutral-50 to-white border border-neutral-100 hover:border-primary-200 hover:shadow-lg hover:shadow-primary-50 transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-100 to-primary-50 flex items-center justify-center group-hover:from-primary-500 group-hover:to-primary-600 transition-all duration-500">
                    <Icon
                      size={24}
                      className="text-primary-600 group-hover:text-white transition-colors duration-500"
                    />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-2xl text-neutral-900">
                      {stat.value}
                    </p>
                    <p className="text-sm text-neutral-500">{stat.label}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───── SERVICES PREVIEW ───── */}
      <section id="services-preview" className="py-20 bg-neutral-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-primary-600 uppercase tracking-wider mb-2">
              What We Offer
            </p>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-neutral-900 mb-4">
              Our Specialized Services
            </h2>
            <p className="text-neutral-500 max-w-2xl mx-auto">
              From sports injuries to chronic pain — we provide expert care
              tailored to your unique needs.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
            {servicesData.slice(0, 6).map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary-200 text-primary-700 font-semibold rounded-xl hover:bg-primary-50 hover:border-primary-300 transition-all duration-300 text-sm"
            >
              View All Services
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ───── HOW IT WORKS ───── */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-accent-600 uppercase tracking-wider mb-2">
              Simple Process
            </p>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-neutral-900 mb-4">
              How It Works
            </h2>
            <p className="text-neutral-500 max-w-2xl mx-auto">
              Getting started is simple. Three easy steps to begin your recovery journey.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-8 relative">
            {/* Connector line (desktop) */}
            <div className="hidden sm:block absolute top-[20%] left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-primary-200 via-accent-200 to-primary-200" />

            {steps.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.step} className="relative text-center group">
                  {/* Step number circle */}
                  <div className="relative mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center mb-6 shadow-lg shadow-primary-200/40 group-hover:shadow-primary-300/60 transition-shadow duration-300 group-hover:scale-105 transition-transform z-10">
                    <Icon size={28} className="text-white" />
                    <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-white border-2 border-primary-200 flex items-center justify-center text-xs font-bold text-primary-600 shadow-sm">
                      {item.step}
                    </div>
                  </div>
                  <h3 className="font-heading font-bold text-lg text-neutral-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-neutral-500 leading-relaxed max-w-xs mx-auto">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───── TESTIMONIALS CAROUSEL ───── */}
      <section id="testimonials-preview" className="py-20 bg-neutral-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-sm font-semibold text-primary-600 uppercase tracking-wider mb-2">
                Real Stories
              </p>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-neutral-900">
                What Our Patients Say (Google Reviews)
              </h2>
            </div>
          </div>

          {/* Mobile: 2 x 1 (rows x cols) */}
          <div className="grid grid-cols-1 gap-4 sm:hidden">
            {testimonialsPreview.slice(0, 2).map((t) => (
              <TestimonialCard key={t.id} testimonial={t} variant="compact" />
            ))}
          </div>

          {/* Tablet + Desktop: 50/50 split (left reviews 2x2, right video placeholder) */}
          <div className="hidden sm:grid sm:grid-cols-2 gap-6 lg:gap-10 items-start">
            <div className="grid grid-cols-2 gap-4 lg:gap-6">
              {testimonialsPreview.slice(0, 4).map((t) => (
                <TestimonialCard key={t.id} testimonial={t} />
              ))}
            </div>

            <div
              id="video-testimonials"
              className="rounded-2xl border border-neutral-200 bg-white p-5 sm:p-6 shadow-sm"
            >
              <div className="flex items-start justify-between gap-4 mb-5">
                <div>
                  <p className="text-sm font-semibold text-primary-600 uppercase tracking-wider">
                    Video Reviews
                  </p>
                  <h3 className="font-heading font-bold text-xl text-neutral-900">
                    Testimonials
                  </h3>
                </div>
                <span className="text-xs font-medium text-neutral-400">
                  Placeholder
                </span>
              </div>

              <div className="grid grid-cols-1 gap-4">
                <div className="aspect-video rounded-xl bg-neutral-100 border border-neutral-200 flex items-center justify-center text-sm text-neutral-500">
                  Video slot 1
                </div>
                <div className="aspect-video rounded-xl bg-neutral-100 border border-neutral-200 flex items-center justify-center text-sm text-neutral-500">
                  Video slot 2
                </div>
              </div>

              <p className="mt-4 text-xs text-neutral-400">
                Replace these boxes with embeds/links when you have videos.
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link
              to="/testimonials"
              className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors text-sm"
            >
              Read all testimonials
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ───── DOCTOR SECTION ───── */}
      {drAnsil && (
        <section id="doctor-section" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Visual */}
              <div className="flex justify-center">
                <div className="relative">
                  <div className="relative w-80 h-96 rounded-3xl bg-gradient-to-br from-primary-100 via-primary-50 to-accent-50 flex items-end justify-center shadow-xl shadow-primary-100/30 overflow-hidden">
                    {drAnsil.image && drAnsil.image !== failedDoctorSrc && (
                      <>
                        <img
                          src={drAnsil.image}
                          alt={drAnsil.name}
                          className="absolute inset-0 w-full h-full object-cover"
                          loading="lazy"
                          onError={() => setFailedDoctorSrc(drAnsil.image)}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-white/85 via-white/15 to-transparent" />
                      </>
                    )}

                    <div className="relative text-center pb-6 px-6">
                      {(!drAnsil.image || drAnsil.image === failedDoctorSrc) && (
                        <div className="w-28 h-28 mx-auto rounded-full bg-gradient-to-br from-primary-400 to-accent-400 flex items-center justify-center text-white text-4xl font-heading font-bold shadow-lg shadow-primary-300/40 animate-float">
                          {(drAnsil?.name || '?').split(' ').pop().charAt(0)}
                        </div>
                      )}
                      <p className="mt-4 font-heading font-bold text-lg text-neutral-700">
                        {drAnsil.name}
                      </p>
                      <p className="text-sm text-neutral-500">{drAnsil.role}</p>
                    </div>
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-2xl bg-gradient-to-br from-accent-400 to-accent-500 flex items-center justify-center text-white shadow-lg animate-pulse-soft">
                    <Award size={32} />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div>
                <p className="text-sm font-semibold text-primary-600 uppercase tracking-wider mb-2">
                  Meet Your Doctor
                </p>
                <h2 className="font-heading font-bold text-3xl sm:text-4xl text-neutral-900 mb-4">
                  {drAnsil.name}
                </h2>
                <p className="text-primary-600 font-medium mb-4">{drAnsil.role}</p>
                <p className="text-neutral-500 leading-relaxed mb-6">{drAnsil.bio}</p>

                {/* Certifications */}
                <div className="mb-6">
                  <h4 className="text-sm font-bold text-neutral-700 uppercase tracking-wider mb-3 flex items-center gap-2">
                    <Award size={16} className="text-primary-500" />
                    Certifications
                  </h4>
                  <div className="space-y-2">
                    {drAnsil.certifications.map((cert, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 text-sm text-neutral-600"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary-500" />
                        {cert}
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-xl hover:from-primary-700 hover:to-primary-800 transition-all duration-300 shadow-lg shadow-primary-600/20 hover:-translate-y-0.5 text-sm"
                >
                  Book with {drAnsil.name}
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ───── CTA ───── */}
      <CTASection />
    </main>
  );
}
