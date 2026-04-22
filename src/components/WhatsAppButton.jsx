import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/91XXXXXXXXXX?text=Hi%20I%20want%20to%20book%20a%20consultation"
      target="_blank"
      rel="noopener noreferrer"
      id="whatsapp-float"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Chat on WhatsApp"
    >
      <div className="relative">
        {/* Pulse ring */}
        <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20" />
        {/* Button */}
        <div className="relative w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 flex items-center justify-center shadow-lg shadow-green-600/30 hover:shadow-green-600/50 transition-all duration-300 hover:scale-110">
          <MessageCircle size={26} className="text-white" />
        </div>
        {/* Tooltip */}
        <div className="absolute right-16 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="bg-neutral-900 text-white text-xs font-medium px-3 py-2 rounded-lg whitespace-nowrap shadow-lg">
            Chat with us
            <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-0 h-0 border-l-[6px] border-l-neutral-900 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent" />
          </div>
        </div>
      </div>
    </a>
  );
}
