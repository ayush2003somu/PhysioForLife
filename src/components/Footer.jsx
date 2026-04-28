import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Heart } from 'lucide-react';

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'About Us', path: '/about' },
  { name: 'Testimonials', path: '/testimonials' },
  { name: 'Contact', path: '/contact' },
];

const services = [
  'Back Pain Rehabilitation',
  'Sports Injury Recovery',
  'Post-Surgery Rehab',
  'Online Rehab Sessions',
  'Knee & Joint Care',
];

export default function Footer() {
  return (
    <footer id="site-footer" className="bg-neutral-900 text-neutral-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                <span className="text-white font-heading font-bold text-lg">P</span>
              </div>
              <div>
                <span className="font-heading font-bold text-lg text-white">
                  Physio<span className="text-primary-400">ForLife</span>
                </span>
              </div>
            </div>
            <p className="text-sm text-neutral-400 leading-relaxed mb-6">
              Expert physiotherapy and rehabilitation services — both in-clinic and online. Helping you recover from pain and return to performance.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-xl bg-neutral-800 hover:bg-primary-600 flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-xl bg-neutral-800 hover:bg-primary-600 flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-xl bg-neutral-800 hover:bg-primary-600 flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
                aria-label="YouTube"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-neutral-400 hover:text-primary-400 transition-colors duration-200 flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-primary-500" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-4">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-sm text-neutral-400 hover:text-primary-400 transition-colors duration-200 flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-accent-500" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary-400 shrink-0 mt-1" />
                <div className="flex flex-col gap-4 w-full">
                  <div className="group">
                    <span className="text-sm font-semibold text-white block mb-1 ">Physio For Life </span>
                    <a 
                      href="https://maps.app.goo.gl/gKqMRiimzaEvaBeP9" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-neutral-400 hover:text-primary-300 transition-colors leading-relaxed block"
                    >
                      Paharia, Varanasi, 221007
                    </a>
                  </div>
                  <div className="group">
                    <span className="text-sm font-semibold text-white block mb-1">PhysioForLife Rehabilitation</span>
                    <a 
                      href="https://maps.app.goo.gl/QwiEiwgPC1UoJh9f6" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-neutral-400 hover:text-primary-300 transition-colors leading-relaxed block"
                    >
                      Ground Floor Shop No 2, <br/>Kuber Complex<br/>
                      Rathyatra, Varanasi 221001
                    </a>
                  </div>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary-400 shrink-0" />
                <a href="tel:+918004500646" className="text-sm text-neutral-400 hover:text-primary-400 transition-colors">
                  +91 8004500646
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary-400 shrink-0" />
                <a href="mailto:info@physioforlife.in" className="text-sm text-neutral-400 hover:text-primary-400 transition-colors">
                  info@physioforlife.in
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={18} className="text-primary-400 shrink-0 mt-0.5" />
                <span className="text-sm text-neutral-400">
                  Mon – Sat: 10:00 AM – 9:00 PM<br />
                  Sunday: 10:00 AM - 4:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-neutral-500">
            © {new Date().getFullYear()} Physio For Life. All rights reserved.
          </p>
          <p className="text-sm text-neutral-500 flex items-center gap-1">
            Made with <Heart size={14} className="text-red-500" /> for better health
          </p>
        </div>
      </div>
    </footer>
  );
}
