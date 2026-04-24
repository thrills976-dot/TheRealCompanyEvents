import { CheckCircle2, ChevronRight, Calculator, Plus, Check } from "lucide-react";
import { useState } from "react";

interface Addon {
  id: string;
  name: string;
  price: number;
}

export function Packages() {
  const addons: Addon[] = [
    { id: "floral", name: "Premium Floral Arrangements", price: 500 },
    { id: "entertainment", name: "Live Entertainment Booking", price: 800 },
    { id: "lighting", name: "Custom Lighting Design", price: 400 },
    { id: "photography", name: "Event Photography Coverage", price: 600 }
  ];

  type SelectedAddonsRecord = Record<number, string[]>;
  const [selectedAddons, setSelectedAddons] = useState<SelectedAddonsRecord>({});

  const toggleAddon = (packageIndex: number, addonId: string) => {
    setSelectedAddons(prev => {
      const pkgAddons = prev[packageIndex] || [];
      const isSelected = pkgAddons.includes(addonId);
      
      return {
        ...prev,
        [packageIndex]: isSelected 
          ? pkgAddons.filter(id => id !== addonId)
          : [...pkgAddons, addonId]
      };
    });
  };

  const calculateTotal = (basePrice: number, packageIndex: number) => {
    const pkgAddons = selectedAddons[packageIndex] || [];
    const addonsTotal = pkgAddons.reduce((sum, addonId) => {
      const addonDef = addons.find(a => a.id === addonId);
      return sum + (addonDef ? addonDef.price : 0);
    }, 0);
    return basePrice + addonsTotal;
  };

  const generateQuoteLink = (pkgName: string, packageIndex: number, basePrice: number) => {
    const pkgAddons = selectedAddons[packageIndex] || [];
    const selectedAddonNames = pkgAddons.map(id => addons.find(a => a.id === id)?.name).filter(Boolean);
    const total = calculateTotal(basePrice, packageIndex);
    
    let message = `Hi! I'm interested in a quote for the *${pkgName}* package.`;
    if (selectedAddonNames.length > 0) {
      message += `\n\nI've also selected these add-ons:\n${selectedAddonNames.map(n => `- ${n}`).join('\n')}`;
    }
    message += `\n\nEstimated Total: $${total}`;
    message += `\n\nCould we discuss the details?`;
    
    return `https://wa.me/263774126656?text=${encodeURIComponent(message)}`;
  };

  const packages = [
    {
      name: "The Essential",
      target: "For intimate celebrations and entry-level corporate setups.",
      basePrice: 1200,
      description: "A beautifully styled, high-quality foundational setup that transforms your space without overwhelming your budget.",
      includes: [
        "Core furniture provision (Chairs & Tables)",
        "Standard high-quality linens",
        "Basic floral arrangements or centerpieces",
        "Standard cutlery and glassware",
        "Delivery and setup within Harare bounds"
      ],
      color: "bg-[#0f0f0f]",
      border: "border-white/5",
      buttonStyle: "border border-white/20 text-white hover:bg-white/5"
    },
    {
      name: "The Signature",
      target: "For elegant weddings and premium corporate events.",
      basePrice: 3500,
      description: "Our most popular offering. A fully cohesive, premium aesthetic experience with elevated details and rich styling.",
      includes: [
        "Everything in Essential, plus:",
        "Premium luxury seating (e.g. Phoenix, Dior)",
        "Bespoke floral design matching your exact palette",
        "Elevated table scaping with charger plates",
        "Atmospheric room lighting (uplights, fairy lights)",
        "Custom signage (welcome boards, seating plans)",
        "Dedicated event styling coordinator"
      ],
      color: "bg-gold-400",
      textColor: "text-black",
      subtitleColor: "text-black/70",
      border: "border-gold-400",
      badge: "Most Popular",
      buttonStyle: "bg-black text-white hover:bg-neutral-900 border-none"
    },
    {
      name: "The Majestic",
      target: "For luxury, high-budget weddings and exclusive VIP gala dinners.",
      basePrice: 8000,
      description: "A breathtaking, no-compromise visual spectacle. Completely custom structures, opulent florals, and the highest grade inventory available in Zimbabwe.",
      includes: [
        "Everything in Signature, plus:",
        "Custom stage builds and luxury backdrops",
        "Extravagant hanging floral installations",
        "Premium mirror or glass VIP tables",
        "Luxury lounge-area staging for VIP guests",
        "Crystal candelabras and high-end accents",
        "Full venue draping and transformation",
        "Priority end-to-end management"
      ],
      color: "bg-[#0f0f0f]",
      border: "border-white/5",
      buttonStyle: "border border-white/20 text-white hover:bg-white/5"
    }
  ];

  return (
    <div className="flex flex-col bg-[#0a0a0a] min-h-screen text-white">
      {/* Header */}
      <section className="bg-[#0f0f0f] py-20 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <span className="text-gold-400 font-medium tracking-widest uppercase text-sm mb-4 block">Transparent Excellence</span>
          <h1 className="text-4xl md:text-5xl font-serif font-light italic mb-6">Pricing & <span className="font-bold not-italic">Packages</span></h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto font-light">
            We don't do "cheap". We do incomparable value. Choose a tier that aligns with your vision and let us build you a custom quote.
          </p>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {packages.map((pkg, idx) => (
              <div 
                key={idx} 
                className={`relative flex flex-col p-8 md:p-10 border ${pkg.border} ${pkg.color} ${pkg.textColor || 'text-neutral-900'} shadow-sm rounded-sm transition-transform duration-300 hover:-translate-y-1`}
              >
                {pkg.badge && (
                  <div className="absolute top-0 right-0 bg-black text-white text-[10px] font-bold uppercase tracking-widest py-2 px-4 shadow-sm">
                    {pkg.badge}
                  </div>
                )}
                
                <h3 className="text-3xl font-serif font-bold mb-1">{pkg.name}</h3>
                <div className="mb-4">
                  <span className="text-2xl font-bold text-gold-400">${calculateTotal(pkg.basePrice, idx).toLocaleString()}</span>
                  <span className="text-xs uppercase tracking-widest ml-2 opacity-50">Starting</span>
                </div>
                <p className={`text-sm ${pkg.subtitleColor || 'text-white/60'} mb-6 h-10 font-light`}>{pkg.target}</p>
                
                <div className="mb-8 pb-8 border-b border-opacity-10 border-current">
                  <p className={`text-sm leading-relaxed font-light ${pkg.subtitleColor || 'text-white/70'}`}>{pkg.description}</p>
                </div>
                
                <div className="flex-grow">
                  <h4 className="font-semibold uppercase tracking-widest text-[10px] mb-6 text-current opacity-60">What's Included</h4>
                  <ul className="space-y-4 mb-10">
                    {pkg.includes.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle2 className={`w-5 h-5 shrink-0 mt-0.5 mr-3 ${pkg.textColor ? 'text-black' : 'text-gold-400'}`} />
                        <span className={`text-sm font-light ${pkg.subtitleColor || 'text-white/80'}`}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-8 pt-8 border-t border-opacity-10 border-current bg-black/20 -mx-8 -mb-8 p-8 md:-mx-10 md:-mb-10 md:p-10 rounded-b-sm">
                  <h4 className="font-semibold uppercase tracking-widest text-[10px] mb-4 flex items-center text-current opacity-70">
                    <Calculator className="w-3 h-3 mr-2" /> Custom Add-ons
                  </h4>
                  <div className="space-y-2 mb-8">
                    {addons.map((addon) => {
                      const isSelected = (selectedAddons[idx] || []).includes(addon.id);
                      return (
                        <button
                          key={addon.id}
                          onClick={() => toggleAddon(idx, addon.id)}
                          className={`w-full flex items-center justify-between p-3 rounded-md text-left transition-colors border ${
                            isSelected 
                              ? "border-gold-400 bg-gold-400/10 text-gold-400" 
                              : `border-white/5 bg-transparent ${pkg.subtitleColor ? 'hover:bg-black/10' : 'hover:bg-white/5'} text-current opacity-80`
                          }`}
                        >
                          <span className="text-xs font-medium pr-2">{addon.name}</span>
                          <span className="flex items-center shrink-0">
                            <span className="text-[10px] tracking-wider mr-2">+${addon.price}</span>
                            {isSelected ? <Check className="w-3 h-3" /> : <Plus className="w-3 h-3" />}
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  <a 
                    href={generateQuoteLink(pkg.name, idx, pkg.basePrice)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-4 px-6 flex items-center justify-center font-bold tracking-widest uppercase text-xs transition-colors rounded-md ${pkg.buttonStyle}`}
                  >
                    Request Custom Quote <ChevronRight className="w-5 h-5 ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Important Notice */}
          <div className="mt-20 bg-[#0f0f0f] border border-white/5 p-8 text-center max-w-3xl mx-auto rounded-md">
            <h4 className="text-lg font-serif font-semibold text-white mb-2">Note on Pricing</h4>
            <p className="text-white/60 text-sm leading-relaxed font-light">
              Every event is unique based on guest count, venue constraints, and specific floral choices. 
              The packages above define the <em className="text-white/90">level of complexity and luxury</em> of the setup. 
              Contact us via WhatsApp with your date and estimated guest count, and we will provide an accurate, transparent quote.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
