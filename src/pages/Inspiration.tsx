import { useInspiration } from "../contexts/InspirationContext";
import { Trash2, MessageCircle, HeartCrack } from "lucide-react";
import { Link } from "react-router-dom";
import { ImageWithFallback } from "../components/ui/ImageWithFallback";

export function Inspiration() {
  const { items, toggleItem, clearBoard } = useInspiration();

  const handleWhatsAppShare = () => {
    const lines = items.map(item => `- ${item.title} (${item.type})`);
    const message = `Hi! I've been looking at The Real Company Events and put together an inspiration board for my event. I'm interested in these styles:\n\n${lines.join('\n')}\n\nCould we discuss a quote to create something similar?`;
    window.open(`https://wa.me/263774126656?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="flex flex-col bg-[#0a0a0a] min-h-[calc(100vh-200px)] text-white">
      {/* Header */}
      <section className="bg-[#0f0f0f] py-20 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-gold-400 font-medium tracking-widest uppercase text-sm mb-4 block">Your Vision</span>
          <h1 className="text-4xl md:text-5xl font-serif font-light italic mb-6">Inspiration <span className="font-bold not-italic">Board</span></h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto font-light">
            Collect your favorite setups, styles, and services. Share them with us to start crafting your bespoke event.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {items.length === 0 ? (
            <div className="text-center py-20 border border-white/5 rounded-md bg-[#0f0f0f]/50">
              <HeartCrack className="w-12 h-12 text-white/20 mx-auto mb-6" />
              <h2 className="text-2xl font-serif text-white mb-4">Your board is empty</h2>
              <p className="text-white/60 mb-8 font-light max-w-md mx-auto">
                Browse our portfolio and services to discover styles you love. Click the heart icon to add items to your personal board.
              </p>
              <div className="flex justify-center gap-4">
                <Link to="/portfolio" className="border border-white/20 hover:bg-white/5 text-white px-6 py-3 font-medium uppercase tracking-widest text-xs transition-colors rounded-md">
                  Explore Portfolio
                </Link>
                <Link to="/services" className="bg-gold-400 hover:bg-gold-500 text-black px-6 py-3 font-bold uppercase tracking-widest text-xs transition-colors rounded-md">
                  View Services
                </Link>
              </div>
            </div>
          ) : (
            <div>
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-xl font-serif font-light"><span className="font-bold">{items.length}</span> Items Saved</h3>
                <button 
                  onClick={clearBoard}
                  className="text-white/40 hover:text-white/80 text-sm font-medium tracking-wider uppercase transition-colors"
                >
                  Clear Board
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16">
                {items.map(item => (
                  <div key={item.id} className="group relative aspect-square overflow-hidden bg-white/5 rounded-md border border-white/10">
                    {item.image && (
                      <ImageWithFallback 
                        src={item.image} 
                        fallbackSrc="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop"
                        alt={item.title} 
                        className="w-full h-full object-cover opacity-80" 
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/20"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <span className="text-gold-400 text-[10px] font-bold uppercase tracking-wider block mb-1">
                        {item.type}
                      </span>
                      <h4 className="text-white text-lg font-serif mb-2 line-clamp-2">{item.title}</h4>
                    </div>
                    <button 
                      onClick={() => toggleItem(item)}
                      className="absolute top-4 right-4 bg-black/50 hover:bg-red-500/80 text-white p-2 rounded-full backdrop-blur-sm transition-colors opacity-0 group-hover:opacity-100"
                      aria-label="Remove item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>

              <div className="bg-[#0f0f0f] border border-white/5 rounded-md p-8 md:p-12 text-center max-w-3xl mx-auto">
                <h3 className="text-2xl font-serif font-light italic mb-4">Ready to bring this <span className="font-bold not-italic">vision to life?</span></h3>
                <p className="text-white/60 mb-8 font-light">
                  Send this board directly to our team via WhatsApp. We will review your selections and prepare a personalized consultation and quote.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <button 
                    onClick={handleWhatsAppShare}
                    className="bg-[#25D366] hover:bg-[#20bd5a] text-black px-8 py-4 font-bold uppercase tracking-widest text-xs transition-colors flex items-center justify-center rounded-md"
                  >
                    <MessageCircle className="w-5 h-5 mr-3" />
                    Share via WhatsApp
                  </button>
                  <Link 
                    to="/contact"
                    className="border border-white/20 hover:bg-white/5 text-white px-8 py-4 font-medium uppercase tracking-widest text-xs transition-colors flex items-center justify-center rounded-md"
                  >
                    Use Contact Form
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
