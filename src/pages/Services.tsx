import { Check, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { useInspiration } from "../contexts/InspirationContext";
import { ImageWithFallback } from "../components/ui/ImageWithFallback";

export function Services() {
  const { toggleItem, isInBoard } = useInspiration();
  const services = [
    {
      id: "weddings",
      title: "Luxury Weddings",
      image: "/images/home-portfolio-wedding.jpg",
      description: "Your wedding should be a masterpiece, completely free of logistical stress. We design breathtaking environments that reflect your unique love story.",
      includes: [
        "Full aesthetic conceptualization",
        "Premium floral arrangements & centrepieces",
        "Ceremony & reception styling",
        "Luxury furniture & tableware provision",
        "Ambient lighting design",
        "On-the-day styling & coordination"
      ],
      outcome: "A flawlessly beautiful, stress-free wedding experience you and your guests will never forget."
    },
    {
      id: "corporate",
      title: "Corporate Events & Galas",
      image: "/images/home-portfolio-corporate.jpg",
      description: "Elevate your corporate identity. We design professional, high-impact settings for conferences, product launches, year-end galas, and VIP dinners.",
      includes: [
        "Brand-aligned thematic styling",
        "Professional stage & podium design",
        "Gala dinner table scaping",
        "Lounge areas for networking",
        "High-fidelity AV & lighting coordination",
        "Strict adherence to timelines"
      ],
      outcome: "A sophisticated, highly professional environment that commands respect and impresses stakeholders."
    },
    {
      id: "private",
      title: "Private Celebrations",
      image: "/images/service-private.jpg",
      description: "From milestone birthdays and intimate engagements to exclusive dinner parties. We turn private gatherings into spectacular visual experiences.",
      includes: [
        "Custom theme development",
        "Intimate dining setups",
        "Bespoke balloon & floral installations",
        "Dance floor & entertainment space styling",
        "Custom signage & details"
      ],
      outcome: "An exclusive, meticulously styled celebration that makes the guest of honor feel truly special."
    },
    {
      id: "decor",
      title: "Event Décor & Equipment Hire",
      image: "/images/home-portfolio-decor.jpg",
      description: "Access our exclusive inventory of high-end event infrastructure. Perfect for planners or clients who have logistics covered but need premium aesthetic elements.",
      includes: [
        "Luxury seating (Tiffany, Dior, Phoenix chairs)",
        "Premium tables (Glass, Mirror, Banquet)",
        "High-end cutlery & crystal glassware",
        "Drapery & structural decor elements",
        "Delivery, setup & breakdown services"
      ],
      outcome: "Elevated event aesthetics using clean, modern, and pristine equipment."
    },
    {
      id: "accommodation",
      title: "Luxury Accommodation",
      images: [
        "/images/service-accommodation-1.jpg",
        "/images/service-accommodation-2.jpg",
        "/images/service-accommodation-3.jpg"
      ],
      description: "Comfortable and fully-equipped accommodation for your guests. We provide premium lodging options ensuring everyone stays comfortable before, during, and after your event.",
      includes: [
        "Fully furnished guest rooms",
        "All essential amenities included",
        "Comfortable bedding & linens",
        "Clean, modern facilities"
      ],
      outcome: "A restful and premium stay for your guests with absolute convenience."
    },
    {
      id: "staffing",
      title: "Event Staffing & Nurse Aides",
      images: [
        "/images/service-staff-1.jpg",
        "/images/service-staff-2.jpg"
      ],
      description: "Professional, reliable, and highly-trained personnel to ensure your event runs smoothly. We handle everything from food service to guest wellness and assistance.",
      includes: [
        "Professional waiters & waitresses",
        "Qualified nurse aides for health and mobility assistance",
        "Event coordinators & hosts",
        "Setup and breakdown crews"
      ],
      outcome: "A seamlessly executed event with exceptional hospitality and guest care."
    }
  ];

  return (
    <div className="flex flex-col bg-[#0a0a0a] min-h-screen">
      {/* Header */}
      <section className="bg-[#0f0f0f] py-20 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-light italic text-white mb-6">Our <span className="font-bold not-italic">Services</span></h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto font-light">
            Comprehensive, high-end event solutions tailored to your absolute perfection.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {services.map((service, index) => (
              <div key={service.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={`relative ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
                  {service.images ? (
                    <div className="grid grid-cols-2 gap-4">
                      {service.images.map((img, i) => (
                        <div key={i} className={`overflow-hidden bg-[#0f0f0f] border border-white/5 rounded-md ${service.images && service.images.length === 3 && i === 2 ? 'col-span-2 aspect-[21/9]' : 'aspect-[3/4]'}`}>
                          <ImageWithFallback 
                            src={img} 
                            fallbackSrc="https://images.unsplash.com/photo-1542665952614-51e9e6f3aa57?q=80&w=2070&auto=format&fit=crop"
                            alt={`${service.title} - Image ${i + 1}`} className="w-full h-full object-cover" />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="aspect-[4/3] overflow-hidden bg-[#0f0f0f] border border-white/5 rounded-md">
                      <ImageWithFallback 
                        src={service.image} 
                        fallbackSrc={service.image?.includes('wedding') ? 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop' : 
                                     service.image?.includes('corporate') ? 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2069&auto=format&fit=crop' :
                                     service.image?.includes('decor') ? 'https://images.unsplash.com/photo-1522413452208-9969062f148b?q=80&w=2070&auto=format&fit=crop' : 'https://images.unsplash.com/photo-1530103862676-de809de59d9b?q=80&w=2070&auto=format&fit=crop'}
                        alt={service.title} className="w-full h-full object-cover" />
                    </div>
                  )}
                </div>
                
                <div className={`${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">{service.title}</h2>
                  <p className="text-lg text-white/70 mb-8 leading-relaxed font-light">
                    {service.description}
                  </p>
                  
                  <div className="bg-[#0f0f0f] p-8 border border-white/5 mb-8 rounded-md">
                    <h4 className="font-semibold text-gold-400 uppercase tracking-widest text-xs mb-6">What's Included</h4>
                    <ul className="space-y-4">
                      {service.includes.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <Check className="w-5 h-5 text-gold-400 mr-3 shrink-0" />
                          <span className="text-white/80 text-sm font-light">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-8 p-6 border border-white/5 bg-white/[0.02] rounded-md">
                    <h4 className="font-semibold text-white/40 uppercase tracking-widest text-[10px] mb-3">The Outcome</h4>
                    <p className="text-white/90 italic font-serif text-lg leading-snug">
                      "{service.outcome}"
                    </p>
                  </div>

                  <div className="flex gap-4">
                    <Link 
                      to="/packages"
                      className="inline-block border border-white/20 hover:bg-white/5 text-white px-8 py-4 font-bold tracking-widest text-xs uppercase rounded-md transition-colors"
                    >
                      View Pricing & Packages
                    </Link>
                    <button
                      onClick={() => toggleItem({
                        id: `service-${service.id}`,
                        title: service.title,
                        type: 'service',
                        image: service.image || (service.images && service.images[0]) || ''
                      })}
                      className={`inline-flex items-center justify-center border px-6 py-4 rounded-md transition-colors uppercase tracking-widest text-xs font-bold ${
                        isInBoard(`service-${service.id}`) 
                        ? "bg-gold-400/10 border-gold-400/50 text-gold-400 hover:bg-gold-400/20" 
                        : "border-white/20 text-white hover:bg-white/5"
                      }`}
                    >
                      <Heart className={`w-4 h-4 mr-2 ${isInBoard(`service-${service.id}`) ? "fill-gold-400" : ""}`} />
                      {isInBoard(`service-${service.id}`) ? "Saved" : "Save Style"}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="bg-[#0f0f0f] py-32 text-white text-center border-t border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-gold-400/5 blur-[100px] rounded-full translate-y-1/2"></div>
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <h3 className="text-4xl font-serif font-light italic mb-4">Don't see exactly what you <span className="font-bold not-italic">need?</span></h3>
          <p className="text-white/60 mb-10 max-w-xl mx-auto font-light text-lg">We offer fully bespoke solutions depending on your venue and requirements. Let's discuss your vision.</p>
          <a 
            href="https://wa.me/263774126656?text=Hi,%20I'd%20like%20to%20discuss%20a%20custom%20event%20setup."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gold-400 text-black px-8 py-4 font-bold uppercase tracking-widest text-sm hover:bg-gold-500 transition-colors rounded-md"
          >
            Chat with our Planners
          </a>
        </div>
      </section>
    </div>
  );
}
