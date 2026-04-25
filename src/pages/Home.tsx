import { ArrowRight, Star, CheckCircle, CalendarDays, GlassWater, Sparkles, Home as HomeIcon, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { ImageWithFallback } from "../components/ui/ImageWithFallback";

export function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden border-b border-white/5">
        <div className="absolute inset-0">
          <ImageWithFallback 
            src="/images/home-hero.jpg" 
            alt="Elegant event setup" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-neutral-900/40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-transparent to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-12">
          <span className="text-gold-400 font-medium tracking-widest uppercase text-sm mb-4 block">
            Harare's Premier Event Designers
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white font-light italic leading-tight mb-6 max-w-4xl mx-auto">
            Crafting <br className="hidden md:block" />
            <span className="not-italic font-bold text-white">Iconic</span> Occasions.
          </h1>
          <p className="text-lg md:text-xl text-neutral-200 mb-10 max-w-2xl mx-auto font-light">
            From luxury weddings to high-profile corporate gatherings. We transform your vision into a breathtaking reality across Zimbabwe.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="https://wa.me/263774126656?text=Hi,%20I'd%20like%20to%20discuss%20planning%20an%20event."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-gold-400 hover:bg-gold-500 text-black px-8 py-5 font-bold uppercase tracking-widest text-xs transition-colors flex items-center justify-center rounded-md"
            >
              Book via WhatsApp
            </a>
            <Link 
              to="/contact"
              className="w-full sm:w-auto border border-white/20 hover:bg-white/5 text-white px-8 py-5 font-medium uppercase tracking-widest text-xs transition-colors flex items-center justify-center rounded-md"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Social Proof Strip */}
      <section className="bg-[#0f0f0f] text-white py-8 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-6">
            <div className="flex flex-col">
              <span className="text-2xl font-serif font-bold text-gold-400">150+</span>
              <span className="text-sm text-white/50 tracking-wider uppercase">Premium Events</span>
            </div>
            <div className="h-px w-full md:h-12 md:w-px bg-white/10"></div>
            <div className="flex flex-col items-center">
              <div className="flex text-gold-400 mb-1">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <span className="text-sm text-white/70 font-medium">5.0 Client Rating</span>
            </div>
            <div className="h-px w-full md:h-12 md:w-px bg-white/10"></div>
            <div className="flex flex-col">
              <span className="text-2xl font-serif font-bold text-gold-400">Featured</span>
              <span className="text-sm text-white/50 tracking-wider uppercase">Top Vendors Harare</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-[#0a0a0a]" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-light italic text-white mb-6">Our <span className="font-bold not-italic">Expertise</span></h2>
            <p className="text-white/60 text-lg leading-relaxed">
              We specialize in curating sophisticated environments that leave lasting impressions. Every detail is meticulously planned and executed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Weddings",
                desc: "Stress-free elegance. From luxurious staging to bespoke floral arrangements, we craft the perfect day.",
                icon: <Sparkles className="w-6 h-6 text-gold-400" />,
                image: "/images/home-portfolio-wedding.jpg"
              },
              {
                title: "Corporate Events",
                desc: "Professional setups for galas, conferences, and end-of-year parties that elevate your brand.",
                icon: <CalendarDays className="w-6 h-6 text-gold-400" />,
                image: "/images/home-portfolio-corporate.jpg"
              },
              {
                title: "Private Parties",
                desc: "Milestone birthdays, exclusive dinners, and intimate celebrations designed with unparalleled style.",
                icon: <GlassWater className="w-6 h-6 text-gold-400" />,
                image: "/images/service-private.jpg"
              },
              {
                title: "Décor & Styling",
                desc: "Transform any venue. We provide premium furniture, drapery, and atmospheric lighting.",
                icon: <Star className="w-6 h-6 text-gold-400" />,
                image: "/images/home-portfolio-decor.jpg"
              },
              {
                title: "Accommodation",
                desc: "Comfortable, fully-equipped accommodation blocks with all essential amenities for your guests.",
                icon: <HomeIcon className="w-6 h-6 text-gold-400" />,
                image: "/images/service-accommodation-1.jpg"
              },
              {
                title: "Staffing & Nurse Aides",
                desc: "Professional waiters, waitresses, and qualified nurse aides to ensure your event runs smoothly.",
                icon: <Users className="w-6 h-6 text-gold-400" />,
                image: "/images/service-staff-1.jpg"
              }
            ].map((service, idx) => (
              <div key={idx} className="relative border border-white/5 hover:border-gold-400/50 transition-colors group rounded-md overflow-hidden min-h-[320px] flex flex-col justify-end p-8">
                <div className="absolute inset-0 z-0">
                  <ImageWithFallback
                    src={service.image} 
                    fallbackSrc={service.image.includes('wedding') ? 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop' : 
                                 service.image.includes('corporate') ? 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2069&auto=format&fit=crop' :
                                 service.image.includes('decor') ? 'https://images.unsplash.com/photo-1522413452208-9969062f148b?q=80&w=2070&auto=format&fit=crop' : 'https://images.unsplash.com/photo-1530103862676-de809de59d9b?q=80&w=2070&auto=format&fit=crop'}
                    alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors duration-500"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                </div>
                <div className="relative z-10 mt-auto">
                  <div className="w-12 h-12 bg-black/40 backdrop-blur-sm border border-white/10 flex items-center justify-center rounded-full mb-6 group-hover:bg-gold-400/20 group-hover:border-gold-400/50 transition-colors">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-white/80 text-sm leading-relaxed mb-6 font-light">{service.desc}</p>
                  <Link to="/services" className="text-gold-400 hover:text-gold-300 text-sm font-medium flex items-center transition-colors">
                    Learn more <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-24 bg-[#0f0f0f] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-serif font-light italic text-white mb-4">A Glimpse of <span className="font-bold not-italic">Magic</span></h2>
              <p className="text-white/60 text-lg">Browse our recent events and discover the level of detail we bring to every occasion.</p>
            </div>
            <Link to="/portfolio" className="hidden md:flex border border-white/20 hover:bg-white/5 text-white px-6 py-3 items-center transition-colors font-medium rounded-md uppercase tracking-widest text-xs">
              View Full Gallery <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="group relative h-[400px] overflow-hidden rounded-sm">
              <ImageWithFallback 
                src="/images/home-portfolio-wedding.jpg" 
                alt="Wedding reception tables" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-neutral-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                <span className="text-gold-400 text-xs font-semibold uppercase tracking-wider">Wedding</span>
                <h3 className="text-white text-xl font-serif mt-1">Luxury Outdoor Reception</h3>
              </div>
            </div>
            <div className="group relative h-[400px] overflow-hidden">
              <ImageWithFallback 
                src="/images/home-portfolio-corporate.jpg" 
                alt="Corporate event hall" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-neutral-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                <span className="text-gold-400 text-xs font-semibold uppercase tracking-wider">Corporate</span>
                <h3 className="text-white text-xl font-serif mt-1">Gala Dinner Setup</h3>
              </div>
            </div>
            <div className="group relative h-[400px] overflow-hidden">
              <ImageWithFallback 
                src="/images/home-portfolio-decor.jpg" 
                alt="Decor details" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-neutral-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                <span className="text-gold-400 text-xs font-semibold uppercase tracking-wider">Décor</span>
                <h3 className="text-white text-xl font-serif mt-1">Bespoke Table Styling</h3>
              </div>
            </div>
          </div>
          
          <Link to="/portfolio" className="md:hidden w-full flex justify-center border border-white/20 hover:bg-white/5 text-white px-6 py-4 items-center transition-colors font-medium rounded-md uppercase tracking-widest text-xs">
            View Full Gallery <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-[#0a0a0a] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-gold-400 font-medium tracking-widest uppercase text-sm mb-4 block">The Real Company standard</span>
              <h2 className="text-3xl md:text-5xl font-serif font-light italic text-white mb-8">Why the best events <span className="font-bold not-italic">choose us.</span></h2>
              <div className="space-y-6">
                {[
                  { title: "Flawless Reliability", desc: "We deliver exactly what we promise, on time, every time. No last-minute surprises." },
                  { title: "Exceptional Creativity", desc: "Bespoke designs tailored to your unique taste, moving away from cookie-cutter templates." },
                  { title: "Premium Execution", desc: "High-quality materials, pristine equipment, and a highly trained crew." },
                  { title: "Stress-Free Planning", desc: "You celebrate, we work. End-to-end management so you can actually enjoy your event." }
                ].map((item, i) => (
                  <div key={i} className="flex">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle className="w-5 h-5 text-gold-400" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-white">{item.title}</h4>
                      <p className="mt-1 text-white/60 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden rounded-md border border-white/5">
                <ImageWithFallback 
                  src="/images/home-why-us.jpg" 
                  alt="Event planning details" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-[#0f0f0f] border border-white/10 p-8 hidden md:block max-w-xs shadow-2xl rounded-md">
                <p className="text-white/90 font-serif text-xl italic font-light leading-snug">
                  "The attention to detail was beyond anything we imagined. Our wedding was truly a masterpiece."
                </p>
                <p className="mt-4 text-[10px] uppercase tracking-widest text-white/40">— Mrs. T. Moyo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-[#0f0f0f] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-gold-400 font-medium tracking-widest uppercase text-sm mb-4 block">Client Stories</span>
          <h2 className="text-3xl md:text-5xl font-serif font-light italic text-white mb-16">What They <span className="font-bold not-italic">Say</span></h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                text: "The Real Company took all the stress out of our wedding. The décor was exactly as I envisioned, maybe even better. Highly recommended!",
                name: "Tariro M.",
                event: "Luxury Wedding",
              },
              {
                text: "We hired them for our corporate year-end gala. The professionalism and the quality of their setups are unmatched in Harare.",
                name: "Farai Z.",
                event: "Corporate Gala",
              },
              {
                text: "My 40th birthday was spectacular because of their team. The attention to detail from the table settings to the lighting was incredible.",
                name: "Chido S.",
                event: "Private Milestone Celebration",
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white/5 p-8 md:p-10 border border-white/5 flex flex-col items-center text-center rounded-md">
                <div className="flex text-gold-400 mb-6 gap-1">
                  {[...Array(5)].map((_, i) => <span key={i}>★</span>)}
                </div>
                <p className="text-white/80 italic font-serif leading-relaxed mb-8 flex-grow">"{testimonial.text}"</p>
                <div>
                  <h4 className="font-bold text-white uppercase text-xs tracking-widest">{testimonial.name}</h4>
                  <span className="text-[10px] text-white/40 uppercase tracking-widest mt-1 block">{testimonial.event}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-[#0a0a0a] border-t border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-gold-400/5 blur-[100px] rounded-full translate-y-1/2"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light italic text-white mb-6">Ready to create something <span className="font-bold not-italic">iconic?</span></h2>
          <p className="text-xl text-white/60 mb-12 font-light">
            Contact us today to discuss your vision and secure your date. Our calendar fills up quickly for premium events.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="https://wa.me/263774126656?text=Hi,%20I'd%20like%20to%20discuss%20planning%20an%20event."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold-400 hover:bg-gold-500 text-black px-8 py-4 font-bold uppercase tracking-widest text-sm transition-colors flex items-center justify-center rounded-md"
            >
              Contact on WhatsApp
            </a>
            <Link 
              to="/contact"
              className="bg-transparent hover:bg-white/5 text-white border border-white/20 px-8 py-4 font-medium uppercase tracking-widest text-sm transition-colors flex items-center justify-center rounded-md"
            >
              Use Contact Form
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
