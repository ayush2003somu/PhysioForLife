import { useMemo, useState } from 'react';
import { Image as ImageIcon, Video as VideoIcon, ExternalLink } from 'lucide-react';
import { manualGalleryItems } from '../data/galleryData';

const FILTERS = [
  { key: 'all', label: 'All' },
  { key: 'image', label: 'Photos', icon: ImageIcon },
  { key: 'video', label: 'Videos', icon: VideoIcon },
];

function MediaCard({ item }) {
  const isVideo = item.type === 'video';
  const hasEmbed = Boolean(item.embedUrl);
  const openUrl = item.src || item.embedUrl;

  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-neutral-100 hover:shadow-xl hover:shadow-primary-100/40 transition-all duration-300">
      <div className="relative aspect-[4/3] bg-neutral-50 overflow-hidden">
        {isVideo ? (
          hasEmbed ? (
            <iframe
              className="absolute inset-0 w-full h-full"
              src={item.embedUrl}
              title={item.title}
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          ) : (
            <video
              className="absolute inset-0 w-full h-full object-cover"
              src={item.src}
              controls
              preload="metadata"
            />
          )
        ) : (
          <img
            src={item.src}
            alt={item.title}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
            loading="lazy"
          />
        )}

        <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur border border-neutral-200 text-[11px] font-semibold text-neutral-700">
          {isVideo ? <VideoIcon size={14} /> : <ImageIcon size={14} />}
          {isVideo ? 'Video' : 'Photo'}
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="font-heading font-bold text-neutral-900 truncate">{item.title}</p>
            <p className="text-xs text-neutral-500 mt-0.5">
              {item.src ? 'Direct link' : 'Embedded preview'}
            </p>
          </div>
          {openUrl && (
            <a
              href={openUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-1.5 text-xs font-semibold text-primary-700 hover:text-primary-800"
              aria-label={`Open ${item.title} in new tab`}
            >
              Open <ExternalLink size={14} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Gallery() {
  const [filter, setFilter] = useState('all');
  const items = manualGalleryItems;

  const filtered = useMemo(() => {
    if (filter === 'all') return items;
    return items.filter((x) => x.type === filter);
  }, [filter, items]);

  return (
    <main>
      {/* Hero */}
      <section className="relative pt-32 pb-14 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-50" />
        <div className="absolute top-24 right-0 w-[520px] h-[520px] rounded-full bg-primary-100/40 blur-3xl" />
        <div className="absolute -bottom-10 left-0 w-[420px] h-[420px] rounded-full bg-accent-100/30 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-primary-600 uppercase tracking-wider mb-3">
              Gallery
            </p>
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-neutral-900 mb-6">
              Photos & <span className="gradient-text">Videos</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Controls */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="inline-flex items-center gap-2 p-1 rounded-2xl bg-neutral-50 border border-neutral-100 w-fit">
              {FILTERS.map((f) => {
                const Icon = f.icon;
                const active = filter === f.key;
                return (
                  <button
                    key={f.key}
                    onClick={() => setFilter(f.key)}
                    className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 inline-flex items-center gap-2 ${
                      active
                        ? 'bg-white text-primary-700 shadow-sm border border-primary-100'
                        : 'text-neutral-600 hover:text-primary-700'
                    }`}
                    type="button"
                  >
                    {Icon ? <Icon size={16} /> : null}
                    {f.label}
                  </button>
                );
              })}
            </div>

            <div className="text-sm text-neutral-500">
              Showing <span className="font-semibold text-neutral-700">{filtered.length}</span> items
            </div>
          </div>

          {/* Grid */}
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item) => (
              <MediaCard key={item.id} item={item} />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="mt-10 text-center p-10 rounded-3xl bg-neutral-50 border border-neutral-100">
              <p className="font-heading font-bold text-lg text-neutral-900">No items</p>
              <p className="text-sm text-neutral-500 mt-2">
                Add files to Drive (via the JSON endpoint) or update `src/data/galleryData.js`.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
