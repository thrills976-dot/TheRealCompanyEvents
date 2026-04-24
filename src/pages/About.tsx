import { CheckCircle } from "lucide-react";

export function About() {
  return (
    <div className="flex flex-col bg-[#0a0a0a] min-h-screen">
      {/* Hero Header */}
      <section className="bg-[#0f0f0f] text-white py-24 md:py-32 relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="/images/about-hero.jpg" 
            alt="Event details" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black mix-blend-multiply"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-gold-400 font-medium tracking-widest uppercase text-sm mb-4 block">Our Story</span>
          <h1 className="text-4xl md:text-6xl font-serif font-light italic text-white mb-6">
            Designing Experiences <span className="font-bold not-italic">That Matter.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto font-light">
            We are The Real Company Events (Zw). Based in Harare, we bring a global standard of elegance and execution to your most important days.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="aspect-[3/4] overflow-hidden bg-[#0f0f0f] border border-white/5 rounded-md">
                <img 
                  src="/images/about-main.jpg" 
                  alt="Elegant event setup" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 border-8 border-[#0a0a0a] overflow-hidden hidden md:block shadow-2xl rounded-md">
                <img 
                  src="/images/about-detail.jpg" 
                  alt="Floral detail" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-serif font-light italic text-white mb-6">
                Redefining the Event Standard <span className="font-bold not-italic">in Harare</span>
              </h2>
              <div className="space-y-6 text-white/70 leading-relaxed text-lg mb-10">
                <p>
                  At The Real Company Events, we believe an event is more than a gathering; it’s an extension of your brand, your relationship, or your legacy. We saw a gap in the Harare market for a truly premium, reliable, and aesthetically driven events company. And so, we built it.
                </p>
                <p>
                  We are not just decorators. We are experience architects. From conceptualization to the final teardown, our team brings an obsessive level of attention to detail to ensure your event feels effortless and visually stunning.
                </p>
                <p>
                  Whether it’s a high-stakes corporate gala or the most important day of your life, our mission remains the same: Flawless execution, zero stress, and breathtaking aesthetics.
                </p>
              </div>

              <div className="bg-[#0f0f0f] p-8 border border-white/5 rounded-md shadow-sm">
                <h3 className="font-serif text-xl font-semibold mb-6 flex items-center">
                  <span className="text-gold-400 mr-3">Our Core Values</span>
                </h3>
                <ul className="space-y-4">
                  {[
                    { title: "Uncompromising Quality", desc: "Premium materials and pristine decor." },
                    { title: "Reliability First", desc: "Time is luxury. We never keep you waiting." },
                    { title: "Creative Integrity", desc: "No copy-paste designs. Everything is bespoke." }
                  ].map((val, i) => (
                    <li key={i} className="flex">
                      <CheckCircle className="w-5 h-5 text-gold-400 shrink-0 mt-0.5 mr-3" />
                      <div>
                        <span className="font-semibold text-white block">{val.title}</span>
                        <span className="text-sm text-white/50">{val.desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="bg-gold-400 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-black">
          <h2 className="text-2xl md:text-3xl font-serif font-light italic mb-4">You Celebrate, <span className="font-bold not-italic">We Work</span></h2>
          <p className="text-lg max-w-2xl mx-auto font-medium text-black/80">
            Partner with us to transform your vision into an unforgettable reality. We handle the intricacies, so you can focus on making memories.
          </p>
        </div>
      </section>
    </div>
  );
}
