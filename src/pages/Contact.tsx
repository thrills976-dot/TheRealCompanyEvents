import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { useState, FormEvent } from "react";

export function Contact() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    // Simulate form submission
    setTimeout(() => {
      setFormStatus("success");
    }, 1500);
  };

  return (
    <div className="flex flex-col bg-[#0a0a0a] min-h-screen text-white">
      {/* Header */}
      <section className="bg-[#0f0f0f] py-20 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <span className="text-gold-400 font-medium tracking-widest uppercase text-sm mb-4 block">Get In Touch</span>
          <h1 className="text-4xl md:text-5xl font-serif font-light italic mb-6">Let's Plan Your <span className="font-bold not-italic">Perfect Event</span></h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto font-light">
            Reach out via WhatsApp for the fastest response, or fill out the form below with your event details to request a detailed quote.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-serif font-bold text-white mb-8 block font-light italic">Direct <span className="not-italic">Contact</span></h2>
              
              <div className="bg-[#0f0f0f] border border-white/5 text-white p-8 mb-10 shadow-lg relative overflow-hidden rounded-md">
                <div className="absolute top-0 right-0 opacity-[0.03]">
                  <MessageCircle className="w-48 h-48 -mr-10 -mt-10" />
                </div>
                <h3 className="text-xl font-serif font-semibold mb-4 text-gold-400">Fastest Way to Book</h3>
                <p className="text-white/60 mb-8 font-light">We operate a WhatsApp-first booking system for quick, reliable communication.</p>
                <a 
                  href="https://wa.me/263774126656?text=Hi,%20I'd%20like%20to%20request%20a%20quote."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-[#25D366] hover:bg-[#20bd5a] text-black px-6 py-4 font-bold uppercase tracking-widest text-xs transition-colors rounded-sm"
                >
                  <MessageCircle className="w-5 h-5 mr-3" />
                  Chat on WhatsApp
                </a>
              </div>

              <div className="space-y-8">
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-gold-400 mr-4 shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white">Phone & WhatsApp</h4>
                    <p className="text-white/60 mt-1 font-light">+263 774 126 656</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-gold-400 mr-4 shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white">Email</h4>
                    <p className="text-white/60 mt-1 font-light">hello@therealcompanyevents.co.zw</p>
                    <p className="text-white/40 text-xs mt-1 font-light">We respond within 24 hours.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-gold-400 mr-4 shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white">Location</h4>
                    <p className="text-white/60 mt-1 font-light">Harare, Zimbabwe</p>
                    <p className="text-white/40 text-xs mt-1 font-light">Available for setups exactly where you need us.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="w-6 h-6 text-gold-400 mr-4 shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white">Business Hours</h4>
                    <p className="text-white/60 mt-1 font-light">Mon - Fri: 8:00 AM - 5:00 PM</p>
                    <p className="text-white/60 font-light">Sat: 9:00 AM - 1:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-[#0f0f0f] border border-white/5 p-8 md:p-10 rounded-md">
              <h2 className="text-2xl font-serif font-light italic text-white mb-6">Request a Detailed <span className="font-bold not-italic">Quote</span></h2>
              
              {formStatus === "success" ? (
                <div className="bg-gold-400/10 border border-gold-400/30 p-6 text-center text-gold-400 rounded-md">
                  <h3 className="font-semibold mb-2">Inquiry Received</h3>
                  <p className="font-light">Thank you for reaching out. A member of our team will review your details and get back to you shortly.</p>
                  <button 
                    onClick={() => setFormStatus("idle")}
                    className="mt-6 text-sm underline font-medium text-white hover:text-gold-400"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-xs uppercase tracking-widest text-white/60 mb-2">Full Name *</label>
                      <input type="text" id="name" required className="w-full border border-white/10 px-4 py-3 focus:outline-none focus:ring-1 focus:ring-gold-400 focus:border-gold-400 bg-white/5 text-white placeholder-white/20 rounded-sm font-light disabled:opacity-50" placeholder="Jane Doe" />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-xs uppercase tracking-widest text-white/60 mb-2">Phone Number *</label>
                      <input type="tel" id="phone" required className="w-full border border-white/10 px-4 py-3 focus:outline-none focus:ring-1 focus:ring-gold-400 focus:border-gold-400 bg-white/5 text-white placeholder-white/20 rounded-sm font-light disabled:opacity-50" placeholder="+263 77..." />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="eventType" className="block text-xs uppercase tracking-widest text-white/60 mb-2">Event Type *</label>
                      <select id="eventType" required className="w-full border border-white/10 px-4 py-3 focus:outline-none focus:ring-1 focus:ring-gold-400 focus:border-gold-400 bg-neutral-900 text-white rounded-sm font-light disabled:opacity-50">
                        <option value="">Select one...</option>
                        <option value="wedding">Wedding</option>
                        <option value="corporate">Corporate Event</option>
                        <option value="private">Private Party</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="date" className="block text-xs uppercase tracking-widest text-white/60 mb-2">Event Date (if known)</label>
                      <input type="date" id="date" className="w-full border border-white/10 px-4 py-3 focus:outline-none focus:ring-1 focus:ring-gold-400 focus:border-gold-400 bg-white/5 text-white placeholder-white/20 rounded-sm font-light disabled:opacity-50 [color-scheme:dark]" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="budget" className="block text-xs uppercase tracking-widest text-white/60 mb-2">Estimated Budget Range</label>
                    <select id="budget" className="w-full border border-white/10 px-4 py-3 focus:outline-none focus:ring-1 focus:ring-gold-400 focus:border-gold-400 bg-neutral-900 text-white rounded-sm font-light disabled:opacity-50">
                      <option value="">Select range...</option>
                      <option value="entry">Standard / Essential</option>
                      <option value="mid">Premium / Signature</option>
                      <option value="high">Luxury / Majestic</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs uppercase tracking-widest text-white/60 mb-2">Additional Details *</label>
                    <textarea id="message" required rows={4} className="w-full border border-white/10 px-4 py-3 focus:outline-none focus:ring-1 focus:ring-gold-400 focus:border-gold-400 bg-white/5 text-white placeholder-white/20 rounded-sm font-light resize-none disabled:opacity-50" placeholder="Tell us about your vision, venue location, estimated guest count, etc."></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={formStatus === "submitting"}
                    className="w-full bg-gold-400 text-black px-6 py-4 font-bold uppercase tracking-widest text-xs hover:bg-gold-500 transition-colors disabled:opacity-70 rounded-sm"
                  >
                    {formStatus === "submitting" ? "Sending Request..." : "Submit Inquiry"}
                  </button>
                  <p className="text-xs text-white/40 text-center mt-4 tracking-wide font-light">
                    Professional privacy guaranteed. Your details are secure.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
