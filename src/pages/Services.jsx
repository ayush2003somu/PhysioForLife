import { servicesData } from '../data/servicesData';
import ServiceCard from '../components/ServiceCard';
import CTASection from '../components/CTASection';
import { ArrowRight, Shield, Clock, Heart } from 'lucide-react';

const benefits = [
  {
    icon: Shield,
    title: 'Evidence-Based Treatment',
    desc: 'All our treatment protocols are backed by the latest research in physiotherapy and rehabilitation science.',
  },
  {
    icon: Clock,
    title: 'Flexible Scheduling',
    desc: 'Book sessions that fit your schedule — available both in-clinic and via online TeleRehab sessions.',
  },
  {
    icon: Heart,
    title: 'Patient-First Approach',
    desc: 'Every treatment plan is personalized to your unique condition, goals, and lifestyle needs.',
  },
];

export default function Services() {
  return (
    <main>
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-50" />
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary-100/40 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold text-primary-600 uppercase tracking-wider mb-3">
            Our Services
          </p>
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-neutral-900 mb-4">
            Comprehensive <span className="gradient-text">Physiotherapy</span> Services
          </h1>
          <p className="text-lg text-neutral-500 max-w-2xl mx-auto">
            From acute injuries to chronic conditions — we offer a full spectrum of expert physiotherapy
            services designed to help you recover, rebuild, and return to your best.
          </p>
        </div>
      </section>

      {/* Benefits Row */}
      <section className="py-12 bg-white border-y border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-8">
            {benefits.map((b, i) => {
              const Icon = b.icon;
              return (
                <div key={i} className="flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center">
                    <Icon size={22} className="text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-neutral-900 mb-1">
                      {b.title}
                    </h3>
                    <p className="text-sm text-neutral-500 leading-relaxed">{b.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Listing */}
      <section id="services-list" className="py-20 bg-neutral-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {servicesData.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} detailed />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to start your recovery?"
        subtitle="Book a consultation today and take the first step toward a pain-free life."
      />
    </main>
  );
}
