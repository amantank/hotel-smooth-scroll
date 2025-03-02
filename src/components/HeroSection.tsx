
import { useEffect, useRef } from 'react';
import EnquireButton from './EnquireButton';

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Intersection Observer for animation triggering
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
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 bg-ultima-950/40 z-10"></div>
      <div className="absolute inset-0">
        <img 
          src="/lovable-uploads/cb03cb25-bba9-4a10-9df0-9c906e06ed73.png"
          alt="Ultima Collection - Luxury Hotel with sea view" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 h-full flex items-center justify-center text-white container-custom">
        <div className="text-center max-w-4xl mx-auto pt-20">
          <h1 className="appear fade-in text-5xl md:text-7xl lg:text-8xl font-light mb-6">
            Ultima Collection
          </h1>
          <p className="appear fade-in reveal-delay-200 text-lg md:text-xl tracking-wide max-w-2xl mx-auto mb-8 font-light">
            Experience unparalleled luxury in our exclusive coastal sanctuary. Where timeless elegance meets modern comfort.
          </p>
          <div className="appear fade-in reveal-delay-300 flex justify-center space-x-4 mt-8">
            <a href="#explore" className="btn btn-outline text-white border-white hover:bg-white hover:text-ultima-800">
              Explore
            </a>
            <EnquireButton variant="white" />
          </div>
        </div>
      </div>

      {/* Video Controls */}
      <div className="absolute bottom-12 right-12 z-20 flex space-x-4">
        <button 
          className="w-12 h-12 rounded-full border border-white/25 bg-black/20 backdrop-blur-sm flex items-center justify-center text-white transition-all hover:bg-black/30"
          aria-label="Pause"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="6" y="4" width="4" height="16" />
            <rect x="14" y="4" width="4" height="16" />
          </svg>
        </button>
        <button 
          className="w-12 h-12 rounded-full border border-white/25 bg-black/20 backdrop-blur-sm flex items-center justify-center text-white transition-all hover:bg-black/30"
          aria-label="Mute"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
            <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
