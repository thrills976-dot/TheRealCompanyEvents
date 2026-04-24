import { useState } from "react";
import { Heart } from "lucide-react";
import { useInspiration } from "../contexts/InspirationContext";

export function Portfolio() {
  const [filter, setFilter] = useState("all");
  const { toggleItem, isInBoard } = useInspiration();

  const categories = [
    { id: "all", name: "All Events" },
    { id: "wedding", name: "Luxury Weddings" },
    { id: "corporate", name: "Corporate Galas" },
    { id: "private", name: "Private Parties" },
    { id: "decor", name: "Décor Focus" }
  ];

  const portfolioItems = [
    {
      id: 1,
      category: "wedding",
      title: "Elegant Garden Wedding",
      image: "/images/portfolio-1.jpg"
    },
    {
      id: 2,
      category: "corporate",
      title: "Tech Summit Gala Dinner",
      image: "/images/portfolio-2.jpg"
    },
    {
      id: 3,
      category: "decor",
      title: "Bespoke Table Styling",
      image: "/images/portfolio-3.jpg"
    },
    {
      id: 4,
      category: "wedding",
      title: "Classic White Indoor Wedding",
      image: "/images/portfolio-4.jpg"
    },
    {
      id: 5,
      category: "private",
      title: "Milestone 40th Birthday",
      image: "/images/portfolio-5.jpg"
    },
    {
      id: 6,
      category: "decor",
      title: "Floral Ceiling Installation",
      image: "/images/portfolio-6.jpg"
    },
    {
      id: 7,
      category: "corporate",
      title: "Year-End Executive Banqeut",
      image: "/images/portfolio-7.jpg"
    },
    {
      id: 8,
      category: "wedding",
      title: "Sunset Vineyard Wedding",
      image: "/images/portfolio-8.jpg"
    },
    {
      id: 9,
      category: "private",
      title: "Intimate Anniversary Dinner",
      image: "/images/portfolio-9.jpg"
    }
  ];

  const filteredItems = filter === "all" ? portfolioItems : portfolioItems.filter(item => item.category === filter);

  return (
    <div className="flex flex-col bg-[#0a0a0a] min-h-screen">
      {/* Header */}
      <section className="bg-[#0f0f0f] py-20 border-b border-white/5 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-gold-400 font-medium tracking-widest uppercase text-sm mb-4 block">Our Work</span>
          <h1 className="text-4xl md:text-5xl font-serif font-light italic mb-6">Visual Proof of <span className="font-bold not-italic">Quality</span></h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto font-light">
            Explore our curated gallery of past events. Every image represents our commitment to flawless execution and premium design.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-6 py-2 text-sm font-medium transition-colors border ${
                  filter === cat.id 
                  ? "bg-white text-black border-white" 
                  : "bg-transparent text-white/60 border-white/20 hover:border-white hover:text-white"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredItems.map((item) => (
              <div key={item.id} className="group relative aspect-square overflow-hidden bg-neutral-100 cursor-pointer">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/90 via-neutral-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="text-gold-400 text-xs font-bold uppercase tracking-wider block mb-1">
                    {categories.find(c => c.id === item.category)?.name}
                  </span>
                  <h3 className="text-white text-xl font-serif">{item.title}</h3>
                </div>
                
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleItem({
                      id: `portfolio-${item.id}`,
                      title: item.title,
                      type: 'portfolio',
                      image: item.image
                    });
                  }}
                  className="absolute top-4 right-4 p-3 bg-black/40 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/10"
                  aria-label={isInBoard(`portfolio-${item.id}`) ? "Remove from Board" : "Add to Board"}
                >
                  <Heart className={`w-5 h-5 transition-colors ${isInBoard(`portfolio-${item.id}`) ? "fill-gold-400 text-gold-400" : "text-white"}`} />
                </button>
              </div>
            ))}
          </div>
          
        </div>
      </section>
      
      {/* CTA Box */}
      <section className="bg-[#0f0f0f] py-32 border-t border-white/5 relative overflow-hidden text-center text-white">
        <div className="absolute inset-0 bg-gold-400/5 blur-[100px] rounded-full translate-y-1/2 -z-0"></div>
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <h3 className="text-3xl font-serif font-light italic mb-4">Inspired by what you <span className="font-bold not-italic">see?</span></h3>
          <p className="text-white/60 mb-8 font-light text-lg">Let's create something even more spectacular for your specific event.</p>
          <a 
            href="https://wa.me/263774126656"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-white/20 text-white px-8 py-4 font-bold uppercase tracking-widest text-xs hover:bg-white/5 transition-colors rounded-md"
          >
            Start Planning
          </a>
        </div>
      </section>
    </div>
  );
}
