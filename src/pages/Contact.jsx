import { useState } from 'react';
import {
  MapPin,
  Phone,
  Clock,
  Mail,
  MessageCircle,
  Send,
  CheckCircle,
} from 'lucide-react';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Visit Us',
    lines: ['Physio For Life', 'Paharia Varanasi, Uttar Pradesh 221007','Branch: Ground Floor, Kuber Complex, Rathyatra-Sigra, Varanasi Uttar Pradesh 221010'],
  },
  {
    icon: Phone,
    title: 'Call Us',
    lines: ['+91 8004500646'],
    href: 'tel:+918004500646',
  },
  {
    icon: Mail,
    title: 'Email Us',
    lines: ['info@physioforlife.in'],
    href: 'mailto:info@physioforlife.in',
  },
  {
    icon: Clock,
    title: 'Clinic Timings',
    lines: ['Mon – Sat: 9:00 AM – 7:00 PM', 'Sunday: Closed'],
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', problem: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In production, this would send to a backend
    console.log('Form submitted:', form);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: '', phone: '', problem: '' });
    }, 4000);
  };

  return (
    <main>
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-50" />
        <div className="absolute top-20 right-0 w-96 h-96 rounded-full bg-primary-100/30 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold text-primary-600 uppercase tracking-wider mb-3">
            Get In Touch
          </p>
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-neutral-900 mb-4">
            We'd Love to <span className="gradient-text">Hear From You</span>
          </h1>
          <p className="text-lg text-neutral-500 max-w-2xl mx-auto">
            Have a question or ready to book your appointment? Reach out to us
            and we'll get back to you as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl border border-neutral-100 shadow-xl shadow-neutral-100/50 p-8 sm:p-10">
                <h2 className="font-heading font-bold text-2xl text-neutral-900 mb-2">
                  Send Us a Message
                </h2>
                <p className="text-sm text-neutral-500 mb-8">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>

                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-16 animate-fade-in">
                    <div className="w-16 h-16 rounded-full bg-accent-100 flex items-center justify-center mb-4">
                      <CheckCircle size={32} className="text-accent-600" />
                    </div>
                    <h3 className="font-heading font-bold text-xl text-neutral-900 mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-sm text-neutral-500 text-center">
                      Thank you for reaching out. We'll get back to you shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-sm font-semibold text-neutral-700 mb-2"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="contact-name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Enter your full name"
                        className="w-full px-4 py-3 rounded-xl border border-neutral-200 text-sm text-neutral-800 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-400 transition-all duration-200"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-phone"
                        className="block text-sm font-semibold text-neutral-700 mb-2"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="contact-phone"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        required
                        placeholder="+91 XXXXXXXXXX"
                        className="w-full px-4 py-3 rounded-xl border border-neutral-200 text-sm text-neutral-800 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-400 transition-all duration-200"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-problem"
                        className="block text-sm font-semibold text-neutral-700 mb-2"
                      >
                        Describe Your Problem
                      </label>
                      <textarea
                        id="contact-problem"
                        name="problem"
                        value={form.problem}
                        onChange={handleChange}
                        required
                        rows={5}
                        placeholder="Tell us about your condition, pain area, or any specific concerns..."
                        className="w-full px-4 py-3 rounded-xl border border-neutral-200 text-sm text-neutral-800 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-400 transition-all duration-200 resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      id="contact-submit"
                      className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-bold rounded-xl hover:from-primary-700 hover:to-primary-800 transition-all duration-300 shadow-lg shadow-primary-600/20 hover:shadow-primary-600/30 hover:-translate-y-0.5 active:translate-y-0"
                    >
                      Send Message
                      <Send size={18} />
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Contact Details Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              {/* Contact Cards */}
              {contactInfo.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className="group bg-white rounded-2xl border border-neutral-100 p-6 hover:border-primary-200 hover:shadow-lg hover:shadow-primary-50 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="shrink-0 w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center group-hover:bg-primary-500 transition-colors duration-300">
                        <Icon
                          size={20}
                          className="text-primary-600 group-hover:text-white transition-colors duration-300"
                        />
                      </div>
                      <div>
                        <h3 className="font-heading font-semibold text-neutral-900 mb-1">
                          {item.title}
                        </h3>
                        {item.lines.map((line, j) =>
                          item.href ? (
                            <a
                              key={j}
                              href={item.href}
                              className="block text-sm text-neutral-500 hover:text-primary-600 transition-colors"
                            >
                              {line}
                            </a>
                          ) : (
                            <p key={j} className="text-sm text-neutral-500">
                              {line}
                            </p>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/918004500646?text=Hi%20I%20want%20to%20book%20a%20consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <div className="bg-green-50 rounded-2xl border border-green-100 p-6 hover:bg-green-100 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-green-500 flex items-center justify-center shadow-lg shadow-green-500/20">
                      <MessageCircle size={22} className="text-white" />
                    </div>
                    <div>
                      <p className="font-heading font-semibold text-neutral-900">
                        Chat on WhatsApp
                      </p>
                      <p className="text-sm text-neutral-500">
                        Quick replies, easy booking
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-12 bg-neutral-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl overflow-hidden border border-neutral-200 shadow-sm">
            <div className="w-full h-80 bg-neutral-100 flex items-center justify-center">
              <div className="text-center">
                <MapPin size={48} className="text-neutral-300 mx-auto mb-3" />
                <p className="text-neutral-400 font-medium">Map placeholder</p>
                <p className="text-sm text-neutral-300">
                  Replace with Google Maps iframe or embed
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
