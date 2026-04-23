import { useState } from 'react';
import { Award, BookOpen } from 'lucide-react';

export default function DoctorCard({ doctor, featured = false }) {
  const [failedSrc, setFailedSrc] = useState(null);
  const showImage = Boolean(doctor?.image) && doctor.image !== failedSrc;
  return (
    <div
      className={`group relative bg-white rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-primary-100/50 ${
        featured
          ? 'border-2 border-primary-100 shadow-lg'
          : 'border border-neutral-100'
      }`}
    >
      {/* Image Area */}
      <div className="relative h-64 bg-gradient-to-br from-primary-100 via-primary-50 to-accent-50 flex items-center justify-center overflow-hidden">
        {showImage ? (
          <img
            src={doctor.image}
            alt={doctor.name}
            className="w-full h-full object-cover"
            loading="lazy"
            onError={() => setFailedSrc(doctor.image)}
          />
        ) : (
          <div className="text-center">
            <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-primary-400 to-accent-400 flex items-center justify-center text-white text-3xl font-heading font-bold shadow-xl shadow-primary-200/50 animate-float">
              {doctor.name.split(' ').pop().charAt(0)}
            </div>
            <p className="mt-3 text-xs text-primary-400 font-medium">{doctor.role}</p>
          </div>
        )}
        {featured && (
          <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-primary-500 to-accent-500 text-white text-xs font-semibold rounded-full shadow-lg">
            Lead Doctor
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-heading font-bold text-xl text-neutral-900 mb-1">
          {doctor.name}
        </h3>
        <p className="text-sm text-primary-600 font-medium mb-3">{doctor.role}</p>
        <p className="text-sm text-neutral-500 leading-relaxed mb-4">
          {doctor.bio.length > 180 ? doctor.bio.substring(0, 180) + '...' : doctor.bio}
        </p>

        {/* Certifications */}
        {doctor.certifications && doctor.certifications.length > 0 && (
          <div className="mb-4">
            <p className="flex items-center gap-1.5 text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-2">
              <Award size={14} className="text-primary-500" />
              Certifications
            </p>
            <div className="flex flex-wrap gap-1.5">
              {doctor.certifications.slice(0, 3).map((cert, i) => (
                <span
                  key={i}
                  className="text-xs px-2.5 py-1 bg-primary-50 text-primary-700 rounded-lg border border-primary-100"
                >
                  {cert}
                </span>
              ))}
              {doctor.certifications.length > 3 && (
                <span className="text-xs px-2.5 py-1 bg-neutral-50 text-neutral-500 rounded-lg">
                  +{doctor.certifications.length - 3} more
                </span>
              )}
            </div>
          </div>
        )}
        {/* Experience */}
        {doctor.Experience && (
          <div className="mb-4">
            <p className="flex items-center gap-1.5 text-xs font-semibold text-neutral-700 uppercase tracking-wider">
              Experience:
              <span className="ml-1 text-primary-600 font-bold">
          {doctor.Experience}
              </span>
            </p>
          </div>
        )}
        {/* Specializations */}
        {doctor.specializations && doctor.specializations.length > 0 && (
          <div>
            <p className="flex items-center gap-1.5 text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-2">
              <BookOpen size={14} className="text-accent-500" />
              Specializations
            </p>
            <div className="flex flex-wrap gap-1.5">
              {doctor.specializations.map((spec, i) => (
                <span
                  key={i}
                  className="text-xs px-2.5 py-1 bg-accent-50 text-accent-700 rounded-lg border border-accent-100"
                >
                  {spec}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
