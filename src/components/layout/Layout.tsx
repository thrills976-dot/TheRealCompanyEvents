import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Instagram, Facebook, MapPin, Mail, Heart } from "lucide-react";
import { useState, useEffect } from "react";
import { FloatingWhatsApp } from "./FloatingWhatsApp";
import { useInspiration } from "../../contexts/InspirationContext";

export function Layout({ children }: { children: ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { items } = useInspiration();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Packages", path: "/packages" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      {/* Top Banner */}
      <div className="bg-black text-gold-400 py-2 text-xs md:text-sm hidden md:block border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center"><Phone className="w-3 h-3 mr-2" /> +263 774 126 656</span>
            <span className="flex items-center"><MapPin className="w-3 h-3 mr-2" /> Harare, Zimbabwe</span>
          </div>
          <div className="flex items-center space-x-4">
            <a href="https://instagram.com" className="hover:text-white transition-colors" aria-label="Instagram">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="https://facebook.com" className="hover:text-white transition-colors" aria-label="Facebook">
              <Facebook className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled ? "bg-[#0a0a0a] shadow-sm border-b border-white/10 py-4" : "bg-[#0a0a0a]/90 backdrop-blur-sm py-6 border-b border-white/5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center gap-3 z-50 mr-4">
              <div className="w-8 h-8 shrink-0 bg-gold-400 rounded-sm flex items-center justify-center font-serif text-black font-bold">R</div>
              <span className="text-[13px] sm:text-xl tracking-widest font-light uppercase text-white leading-tight">
                The Real Company <span className="text-gold-400 font-semibold block sm:inline">Events</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-xs uppercase tracking-[0.2em] font-medium transition-colors ${
                    location.pathname === link.path
                      ? "text-gold-400 border-b border-gold-400 pb-1"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="hidden lg:block text-xs text-gold-400 border border-gold-400 px-4 py-2 rounded-full font-semibold uppercase tracking-wider">
              Harare, Zimbabwe
            </div>

            <div className="flex items-center gap-4">
              {/* Inspiration Board Badge */}
              <Link to="/inspiration" className="relative text-white hover:text-gold-400 transition-colors hidden md:block">
                <Heart className={`w-6 h-6 ${items.length > 0 ? "fill-gold-400 text-gold-400" : ""}`} />
                {items.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-black text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full border border-gold-400">
                    {items.length}
                  </span>
                )}
              </Link>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden z-50 text-white p-2 -mr-2 relative"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {items.length > 0 && !mobileMenuOpen && (
                  <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-gold-400 rounded-full"></span>
                )}
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav Overlay */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 bg-[#0a0a0a] z-40 flex flex-col justify-center items-center h-screen px-4">
            <nav className="flex flex-col items-center space-y-8 text-center w-full max-w-sm">
              <Link
                to="/inspiration"
                className="text-gold-400 flex items-center gap-2 mb-4"
              >
                <Heart className="w-5 h-5 fill-current" />
                <span className="uppercase tracking-[0.2em] text-sm font-bold">Inspiration ({items.length})</span>
              </Link>
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-xl uppercase tracking-[0.2em] font-light ${
                    location.pathname === link.path ? "text-gold-400" : "text-white"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-8 w-full">
                <a
                  href="https://wa.me/263774126656?text=Hi,%20I%E2%80%99d%20like%20a%20quote%20for%20an%20event."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-gold-400 text-neutral-900 px-6 py-4 text-center font-bold tracking-widest uppercase hover:bg-gold-500 transition-colors rounded-sm"
                >
                  Book via WhatsApp
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>

      <main className="flex-grow">{children}</main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-[#0f0f0f] border-t border-white/5 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-gold-400 rounded-sm flex items-center justify-center font-serif text-black font-bold">R</div>
              <span className="text-xl tracking-widest font-light uppercase text-white">
                The Real Company <span className="text-gold-400 font-semibold block text-sm">Events</span>
              </span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6 font-light">
              Creating unforgettable, premium events in Harare and beyond. From luxury weddings to seamless corporate gatherings.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" className="text-white/40 hover:text-gold-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://facebook.com" className="text-white/40 hover:text-gold-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3 font-light">
              <li><Link to="/about" className="text-white/60 hover:text-white transition-colors text-sm">About Us</Link></li>
              <li><Link to="/services" className="text-white/60 hover:text-white transition-colors text-sm">Our Services</Link></li>
              <li><Link to="/portfolio" className="text-white/60 hover:text-white transition-colors text-sm">Portfolio</Link></li>
              <li><Link to="/packages" className="text-white/60 hover:text-white transition-colors text-sm">Packages & Pricing</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3 font-light">
              <li className="text-white/60 text-sm">Luxury Weddings</li>
              <li className="text-white/60 text-sm">Corporate Events</li>
              <li className="text-white/60 text-sm">Private Parties</li>
              <li className="text-white/60 text-sm">Bespoke Décor Setup</li>
              <li className="text-white/60 text-sm">Equipment Hire</li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Contact</h4>
            <ul className="space-y-4 font-light">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-gold-400 mr-3 shrink-0 mt-0.5" />
                <span className="text-white/60 text-sm">Harare, Zimbabwe</span>
              </li>
              <li className="flex items-start">
                <Phone className="w-5 h-5 text-gold-400 mr-3 shrink-0" />
                <span className="text-white/60 text-sm">+263 774 126 656</span>
              </li>
              <li className="flex items-start">
                <Mail className="w-5 h-5 text-gold-400 mr-3 shrink-0" />
                <span className="text-white/60 text-sm">hello@therealcompanyevents.co.zw</span>
              </li>
            </ul>
            <div className="mt-6">
              <a 
                href="https://wa.me/263774126656" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-gold-400 text-black px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-gold-500 transition-colors rounded-sm"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/40 text-xs mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} The Real Company Events (Zw). All rights reserved.
          </p>
          <div className="flex space-x-6 text-xs text-white/40">
            <Link to="/contact" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
