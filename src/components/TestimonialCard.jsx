import { Star, Play, Quote } from 'lucide-react';

export default function TestimonialCard({ testimonial, variant = 'default' }) {
  const quote = (testimonial?.result || '').trim();
  const isCarousel = variant === 'carousel';
  const isCompact = variant === 'compact';
  return (
    <div
      data-testimonial-card
      className={`group relative h-full flex flex-col bg-white border border-neutral-100 transition-all duration-300 hover:shadow-lg hover:shadow-primary-50 hover:border-primary-100 ${
        isCompact ? 'rounded-xl p-4' : 'rounded-2xl p-5 sm:p-6'
      } ${isCarousel ? 'w-[85vw] max-w-[360px] sm:w-[420px] sm:max-w-none snap-start shrink-0' : ''}`}
    >
      {/* Quote icon */}
      <div className="absolute -top-3 -right-2 w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <Quote size={16} className="text-primary-400" />
      </div>

      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={isCompact ? 14 : 16}
            className={
              i < (testimonial.rating || 5)
                ? 'fill-amber-400 text-amber-400'
                : 'text-neutral-200'
            }
          />
        ))}
      </div>

      {/* Result / Quote */}
      {quote ? (
        <p
          className={`text-neutral-600 italic flex-1 ${
            isCompact
              ? 'text-xs leading-relaxed mb-4 max-h-24 overflow-hidden'
              : 'text-sm leading-relaxed mb-5'
          }`}
        >
          "{quote}"
        </p>
      ) : (
        <p
          className={`text-neutral-500 flex-1 ${
            isCompact ? 'text-xs leading-relaxed mb-4' : 'text-sm leading-relaxed mb-5'
          }`}
        >
          Review coming soon.
        </p>
      )}

      {/* Video link */}
      {testimonial.videoUrl && (
        <a
          href={testimonial.videoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs font-medium text-primary-600 hover:text-primary-700 transition-colors mb-4 bg-primary-50 px-3 py-1.5 rounded-lg"
        >
          <Play size={14} />
          Watch Video Testimonial
        </a>
      )}

      {/* Patient Info */}
      <div className="flex items-center gap-3 pt-4 border-t border-neutral-100">
        <div
          className={`rounded-full bg-gradient-to-br from-primary-400 to-accent-400 flex items-center justify-center text-white font-semibold ${
            isCompact ? 'w-9 h-9 text-xs' : 'w-10 h-10 text-sm'
          }`}
        >
          {(testimonial?.name || '?').charAt(0)}
        </div>
        <div>
          <p className={`font-semibold text-neutral-900 ${isCompact ? 'text-xs' : 'text-sm'}`}>
            {testimonial.name}
          </p>
          <p className="text-xs text-neutral-400">{testimonial.condition}</p>
        </div>
      </div>
    </div>
  );
}
