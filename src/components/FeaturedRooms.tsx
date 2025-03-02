
import { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

const FeaturedRooms = () => {
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

  const rooms = [
    {
      id: 1,
      name: "Panoramic Suite",
      description: "Immerse yourself in uninterrupted views of the Mediterranean Sea from our signature panoramic suites.",
      price: "€1,250",
      imageUrl: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1600&auto=format&fit=crop",
      animationDelay: "100",
    },
    {
      id: 2,
      name: "Garden Villa",
      description: "A private sanctuary with direct access to lush gardens and a dedicated infinity pool.",
      price: "€2,400",
      imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1600&auto=format&fit=crop",
      animationDelay: "200",
    },
    {
      id: 3,
      name: "Presidential Residence",
      description: "The epitome of luxury with multiple bedrooms, private staff, and exceptional amenities.",
      price: "€5,800",
      imageUrl: "https://images.unsplash.com/photo-1518733057094-95b53143d2a7?q=80&w=1600&auto=format&fit=crop",
      animationDelay: "300",
    },
  ];

  return (
    <section id="rooms" className="section bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="appear fade-in inline-block text-ultima-500 uppercase text-sm tracking-widest mb-3">Accommodations</span>
          <h2 className="appear fade-in reveal-delay-100 text-4xl md:text-5xl mb-6">Exceptional Stays</h2>
          <p className="appear fade-in reveal-delay-200 text-ultima-600 max-w-2xl mx-auto">
            Each room at Ultima Collection is thoughtfully designed to provide an unparalleled experience of comfort and luxury.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <div 
              key={room.id} 
              className={`appear fade-in reveal-delay-${room.animationDelay} group`}
            >
              <div className="relative overflow-hidden">
                <div className="aspect-w-4 aspect-h-3 overflow-hidden">
                  <img 
                    src={room.imageUrl} 
                    alt={room.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-2xl font-playfair">{room.name}</h3>
                  <span className="text-ultima-500 font-medium">{room.price}<span className="text-sm font-normal"> / night</span></span>
                </div>
                <p className="text-ultima-600 mb-4">{room.description}</p>
                <a href="#" className="inline-block text-ultima-800 uppercase text-sm tracking-wider after:content-[''] after:block after:w-full after:h-px after:bg-ultima-300 after:transition-transform after:duration-300 hover:after:scale-x-50">
                  Discover More
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="appear fade-in btn btn-outline border-ultima-300 text-ultima-800 hover:bg-ultima-800 hover:text-white">
            View All Accommodations
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedRooms;
