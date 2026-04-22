import { staffData } from '../data/staffData';
import DoctorCard from '../components/DoctorCard';
import CTASection from '../components/CTASection';
import { Heart, Target, Eye, Users, Award, Lightbulb } from 'lucide-react';

const values = [
  {
    icon: Heart,
    title: 'Compassionate Care',
    desc: 'We treat every patient with empathy, respect, and genuine concern for their wellbeing.',
  },
  {
    icon: Target,
    title: 'Results-Driven',
    desc: 'Our focus is on measurable outcomes — we track your progress and adapt plans to ensure success.',
  },
  {
    icon: Eye,
    title: 'Holistic Approach',
    desc: 'We look beyond the symptoms to address root causes and promote whole-body health.',
  },
  {
    icon: Lightbulb,
    title: 'Patient Education',
    desc: 'We empower patients with knowledge about their condition and self-management strategies.',
  },
];

const milestones = [
  { year: '2019', event: 'Dr. Prakriti begins practice with a vision to transform rehabilitation care.' },
  { year: '2020', event: 'Launched TeleRehab services to reach patients across India during the pandemic.' },
  { year: '2021', event: 'Crossed 100 successfully treated patients with specialization in sports rehab.' },
  { year: '2023', event: 'Expanded the team and introduced advanced treatment protocols.' },
  { year: '2024', event: 'Surpassed 200+ patients treated with a 95%+ satisfaction rate.' },
];

export default function About() {
  return (
    <main>
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-50" />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-accent-100/30 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-primary-600 uppercase tracking-wider mb-3">
              About Us
            </p>
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-neutral-900 mb-6">
              Your Recovery Is Our <span className="gradient-text">Mission</span>
            </h1>
            <p className="text-lg text-neutral-500 leading-relaxed">
              Physio For Life was founded with a simple belief: quality physiotherapy
              should be accessible, personalized, and results-driven. We combine clinical
              expertise with genuine care to help every patient achieve their recovery goals.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Visual */}
            <div className="relative">
              <div className="w-full aspect-[4/3] rounded-3xl bg-gradient-to-br from-primary-100 via-primary-50 to-accent-50 flex items-center justify-center overflow-hidden shadow-xl shadow-primary-100/20">
                <div className="text-center p-8">
                  <div className="inline-flex items-center gap-3 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white text-2xl font-heading font-bold shadow-lg">
                      P
                    </div>
                  </div>
                  <p className="font-heading font-bold text-2xl text-neutral-700 mb-2">
                    Physio For Life
                  </p>
                  <p className="text-neutral-500 text-sm">Since 2019</p>
                  <div className="mt-8 grid grid-cols-3 gap-4">
                    <div className="p-3 rounded-xl bg-white/80 shadow-sm">
                      <p className="font-heading font-bold text-xl text-primary-600">200+</p>
                      <p className="text-xs text-neutral-500">Patients</p>
                    </div>
                    <div className="p-3 rounded-xl bg-white/80 shadow-sm">
                      <p className="font-heading font-bold text-xl text-accent-600">5+</p>
                      <p className="text-xs text-neutral-500">Years</p>
                    </div>
                    <div className="p-3 rounded-xl bg-white/80 shadow-sm">
                      <p className="font-heading font-bold text-xl text-primary-600">95%</p>
                      <p className="text-xs text-neutral-500">Success</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <p className="text-sm font-semibold text-accent-600 uppercase tracking-wider mb-2">
                Our Story
              </p>
              <h2 className="font-heading font-bold text-3xl text-neutral-900 mb-6">
                Built on Passion, Driven by Results
              </h2>
              <div className="space-y-4 text-neutral-500 leading-relaxed">
                <p>
                  Physio For Life started with Dr. Prakriti's vision to create a physiotherapy
                  practice where patients receive the attention, expertise, and care they truly
                  deserve. Frustrated by rushed appointments and one-size-fits-all approaches,
                  she set out to build something different.
                </p>
                <p>
                  Today, we are proud to have helped over 200 patients recover from injuries,
                  manage chronic pain, and return to the activities they love. Our approach
                  combines evidence-based treatment with a deep personal commitment to each
                  patient's journey.
                </p>
                <p>
                  Whether you visit us in-clinic or connect through our TeleRehab program,
                  you will receive the same level of expert care, personalized attention,
                  and unwavering support throughout your recovery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-20 bg-neutral-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-primary-600 uppercase tracking-wider mb-2">
              Our Philosophy
            </p>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-neutral-900 mb-4">
              What Guides Us
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div
                  key={i}
                  className="group bg-white rounded-2xl p-6 border border-neutral-100 hover:border-primary-200 hover:shadow-lg hover:shadow-primary-50 transition-all duration-300 text-center"
                >
                  <div className="mx-auto w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-50 to-primary-100 flex items-center justify-center mb-4 group-hover:from-primary-500 group-hover:to-primary-600 transition-all duration-500">
                    <Icon
                      size={24}
                      className="text-primary-600 group-hover:text-white transition-colors duration-500"
                    />
                  </div>
                  <h3 className="font-heading font-semibold text-neutral-900 mb-2">
                    {v.title}
                  </h3>
                  <p className="text-sm text-neutral-500 leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-accent-600 uppercase tracking-wider mb-2">
              Our Journey
            </p>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-neutral-900">
              Milestones
            </h2>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[21px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-primary-200 via-accent-200 to-primary-200" />

            <div className="space-y-8">
              {milestones.map((m, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="relative shrink-0 w-11 h-11 rounded-xl bg-white border-2 border-primary-200 flex items-center justify-center group-hover:border-primary-400 group-hover:bg-primary-50 transition-all duration-300 z-10">
                    <span className="text-xs font-bold text-primary-600">{m.year.slice(2)}</span>
                  </div>
                  <div className="pb-2">
                    <p className="text-xs font-semibold text-primary-600 mb-1">{m.year}</p>
                    <p className="text-sm text-neutral-600 leading-relaxed">{m.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-neutral-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-primary-600 uppercase tracking-wider mb-2">
              Our Team
            </p>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-neutral-900 mb-4">
              Experts Who Care
            </h2>
            <p className="text-neutral-500 max-w-2xl mx-auto">
              Our team of dedicated physiotherapists brings years of expertise
              and a genuine passion for helping patients recover.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {staffData.map((doc, i) => (
              <DoctorCard key={doc.id} doctor={doc} featured={i === 0} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Want to learn more about us?"
        subtitle="Schedule a free consultation and experience our approach to physiotherapy first-hand."
      />
    </main>
  );
}
