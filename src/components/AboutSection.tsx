
import { useEffect } from 'react';
import { cn } from '@/lib/utils';

const AboutSection = () => {
  useEffect(() => {
    // Intersection Observer for animations
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target;
          const animation = target.getAttribute('data-animation');
          if (animation) {
            target.classList.add(animation);
          }
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.appear');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="about" className="section bg-ultima-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <span className="appear fade-in-left inline-block text-ultima-500 uppercase text-sm tracking-widest mb-3">About Ultima</span>
            <h2 className="appear fade-in-left reveal-delay-100 text-4xl md:text-5xl mb-6">A Legacy of Luxury</h2>
            <p className="appear fade-in-left reveal-delay-200 text-ultima-600 mb-6">
              Perched on the cliffs overlooking the azure waters of the Mediterranean, Ultima Collection is more than just a hotel – it's a sanctuary of refined elegance and personalized service.
            </p>
            <p className="appear fade-in-left reveal-delay-300 text-ultima-600 mb-6">
              For decades, we have welcomed discerning travelers seeking an escape from the ordinary. Our properties blend seamlessly with their natural surroundings, offering a harmonious experience that respects both tradition and modernity.
            </p>
            <p className="appear fade-in-left reveal-delay-400 text-ultima-600 mb-8">
              Each detail, from the hand-selected furnishings to the locally-sourced ingredients in our kitchens, is chosen with purpose and care to create an unforgettable stay.
            </p>
            <a href="#" className="appear fade-in-left reveal-delay-500 inline-block text-ultima-800 uppercase text-sm tracking-wider after:content-[''] after:block after:w-full after:h-px after:bg-ultima-300 after:transition-transform after:duration-300 hover:after:scale-x-50">
              Discover Our Story
            </a>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="appear fade-in-right aspect-w-4 aspect-h-5 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=1600&auto=format&fit=crop" 
                  alt="Ultima Collection Interior" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="appear fade-in-right reveal-delay-200 absolute -bottom-8 -left-8 w-64 p-6 bg-white shadow-lg">
                <div className="appear fade-in-right reveal-delay-300 flex items-center justify-between mb-4">
                  <span className="text-xl font-playfair">Since 1976</span>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#7c735f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 6V12L16 14" stroke="#7c735f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="h-px w-full bg-ultima-200 mb-4"></div>
                <p className="appear fade-in-right reveal-delay-400 text-ultima-600 text-sm">
                  Decades of exceptional hospitality and unforgettable experiences for our distinguished guests.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
