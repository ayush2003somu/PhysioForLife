import * as LucideIcons from 'lucide-react';

export default function ServiceCard({ service, index = 0, detailed = false }) {
  const IconComponent = LucideIcons[service.icon] || LucideIcons.Activity;

  return (
    <div
      className={`group relative bg-white rounded-2xl border border-neutral-100 hover:border-primary-200 transition-all duration-500 hover:shadow-xl hover:shadow-primary-100/50 hover:-translate-y-1 overflow-hidden ${
        detailed ? 'p-0' : 'p-6'
      }`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Gradient accent on hover */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-accent-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

      {detailed ? (
        /* Detailed layout for Services page */
        <div className="p-8">
          <div className="flex items-start gap-5 mb-6">
            <div className="shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-50 to-primary-100 flex items-center justify-center group-hover:from-primary-500 group-hover:to-primary-600 transition-all duration-500">
              <IconComponent
                size={26}
                className="text-primary-600 group-hover:text-white transition-colors duration-500"
              />
            </div>
            <div>
              <h3 className="font-heading font-bold text-xl text-neutral-900 mb-1">
                {service.title}
              </h3>
              <p className="text-neutral-500 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            <div className="bg-neutral-50 rounded-xl p-4 border border-neutral-100">
              <p className="text-xs font-semibold text-primary-600 uppercase tracking-wider mb-2">
                Who it's for
              </p>
              <p className="text-sm text-neutral-600 leading-relaxed">{service.target}</p>
            </div>
            <div className="bg-neutral-50 rounded-xl p-4 border border-neutral-100">
              <p className="text-xs font-semibold text-accent-600 uppercase tracking-wider mb-2">
                What happens in session
              </p>
              <p className="text-sm text-neutral-600 leading-relaxed">{service.session}</p>
            </div>
            <div className="bg-neutral-50 rounded-xl p-4 border border-neutral-100">
              <p className="text-xs font-semibold text-primary-700 uppercase tracking-wider mb-2">
                Expected outcome
              </p>
              <p className="text-sm text-neutral-600 leading-relaxed">{service.outcome}</p>
            </div>
          </div>
        </div>
      ) : (
        /* Compact card for Home page */
        <>
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-50 to-primary-100 flex items-center justify-center mb-4 group-hover:from-primary-500 group-hover:to-primary-600 transition-all duration-500">
            <IconComponent
              size={22}
              className="text-primary-600 group-hover:text-white transition-colors duration-500"
            />
          </div>
          <h3 className="font-heading font-semibold text-lg text-neutral-900 mb-2">
            {service.title}
          </h3>
          <p className="text-sm text-neutral-500 leading-relaxed">
            {service.description}
          </p>
        </>
      )}
    </div>
  );
}
