
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeaturedRooms from '@/components/FeaturedRooms';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Set up intersection observer for animations
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target;
          const animation = target.getAttribute('data-animation') || 'fade-in';
          target.classList.add(animation);
        }
      });
    }, observerOptions);

    // Target all elements with the 'appear' class
    const elements = document.querySelectorAll('.appear');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection />
        
        {/* Experience Section */}
        <section id="experiences" className="section bg-ultima-900 text-white overflow-hidden">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="appear fade-in inline-block text-ultima-300 uppercase text-sm tracking-widest mb-3">Experiences</span>
                <h2 className="appear fade-in reveal-delay-100 text-4xl md:text-5xl mb-6">Unforgettable Moments</h2>
                <p className="appear fade-in reveal-delay-200 text-white/80 mb-8">
                  From private yacht excursions to personalized culinary journeys, our curated experiences are designed to create memories that last a lifetime.
                </p>
                
                <div className="appear fade-in reveal-delay-300 space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 mt-1 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-ultima-300">
                        <path d="M15 11h.01" />
                        <path d="M11 15h.01" />
                        <path d="M16 16h.01" />
                        <path d="M13 3H8a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-5" />
                        <path d="M18 3a2 2 0 1 1 4 0v4a2 2 0 1 1-4 0V3Z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-playfair mb-2">Private Yacht Tours</h3>
                      <p className="text-white/70">Explore the stunning coastline aboard our luxury yacht with a personal crew at your service.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 mt-1 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-ultima-300">
                        <path d="M6.5 17h11" />
                        <path d="M6 10h12a4 4 0 0 1 4 4v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1h-12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3a4 4 0 0 1 4-4z" />
                        <path d="M12.501 5.5c1.004-1.333 2.4-2 3.999-2 2.7 0 6 2.5 6 4 0 3.5-5.999 6.5-5.999 11H12.5" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-playfair mb-2">Culinary Masterclass</h3>
                      <p className="text-white/70">Learn the secrets of Italian cuisine from our renowned chef in a private cooking session.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 mt-1 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-ultima-300">
                        <path d="M19 11V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4.5" />
                        <path d="M9 9h6" />
                        <path d="M9 12h3" />
                        <path d="M13 15h1" />
                        <path d="M17 15V7" />
                        <path d="M21 11h-4" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-playfair mb-2">Wine Tasting Journey</h3>
                      <p className="text-white/70">A curated exploration of Italy's finest vineyards with our sommelier as your guide.</p>
                    </div>
                  </div>
                </div>
                
                <div className="appear fade-in reveal-delay-400 mt-10">
                  <a href="#" className="btn bg-white text-ultima-900 hover:bg-white/90">
                    Explore Experiences
                  </a>
                </div>
              </div>
              
              <div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="appear fade-in reveal-delay-200 space-y-4">
                    <div className="aspect-w-3 aspect-h-4 overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1561629624-faa0f0ce4e2d?q=80&w=1000&auto=format&fit=crop" 
                        alt="Yacht Experience" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="aspect-w-1 aspect-h-1 overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1532542879244-8c8203d77f67?q=80&w=1000&auto=format&fit=crop" 
                        alt="Wine Tasting" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="appear fade-in reveal-delay-300 space-y-4 pt-8">
                    <div className="aspect-w-1 aspect-h-1 overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1545579133-99bb5ab189bd?q=80&w=1000&auto=format&fit=crop" 
                        alt="Cooking Class" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="aspect-w-3 aspect-h-4 overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1602270595477-67663c5c6a1a?q=80&w=1000&auto=format&fit=crop" 
                        alt="Coastal Experience" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Dining Section */}
        <section id="dining" className="section bg-white overflow-hidden">
          <div className="container-custom">
            <div className="text-center mb-16">
              <span className="appear fade-in inline-block text-ultima-500 uppercase text-sm tracking-widest mb-3">Culinary Excellence</span>
              <h2 className="appear fade-in reveal-delay-100 text-4xl md:text-5xl mb-6">Exceptional Dining</h2>
              <p className="appear fade-in reveal-delay-200 text-ultima-600 max-w-2xl mx-auto">
                Our restaurants offer more than meals; they provide unforgettable gastronomic journeys crafted by world-class chefs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="appear zoom-in">
                <div className="relative">
                  <div className="aspect-w-4 aspect-h-3 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1600&auto=format&fit=crop" 
                      alt="Ultima Restaurant" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 bg-white p-4 shadow-lg">
                    <span className="text-ultima-800 font-playfair text-xl">La Terrazza</span>
                  </div>
                </div>
              </div>
              
              <div>
                <span className="appear fade-in inline-block text-ultima-500 uppercase text-sm tracking-widest mb-3">Signature Restaurant</span>
                <h3 className="appear fade-in reveal-delay-100 text-3xl md:text-4xl font-playfair mb-6">La Terrazza</h3>
                <p className="appear fade-in reveal-delay-200 text-ultima-600 mb-6">
                  Perched high above the Mediterranean, La Terrazza offers breathtaking views paired with equally impressive cuisine. Our executive chef crafts seasonal menus featuring the finest local ingredients and innovative techniques.
                </p>
                <p className="appear fade-in reveal-delay-300 text-ultima-600 mb-8">
                  From hand-made pasta to the freshest seafood caught daily, each dish tells a story of tradition and excellence. Our sommelier can recommend the perfect wine from our extensive cellar to complement your meal.
                </p>
                
                <div className="appear fade-in reveal-delay-400 space-y-4">
                  <div className="flex items-center space-x-2 text-ultima-800">
                    <span className="font-medium">Breakfast</span>
                    <span className="h-px w-6 bg-ultima-300"></span>
                    <span>7:00 - 10:30</span>
                  </div>
                  <div className="flex items-center space-x-2 text-ultima-800">
                    <span className="font-medium">Lunch</span>
                    <span className="h-px w-6 bg-ultima-300"></span>
                    <span>12:30 - 14:30</span>
                  </div>
                  <div className="flex items-center space-x-2 text-ultima-800">
                    <span className="font-medium">Dinner</span>
                    <span className="h-px w-6 bg-ultima-300"></span>
                    <span>19:00 - 22:30</span>
                  </div>
                </div>
                
                <div className="appear fade-in reveal-delay-500 mt-8">
                  <a href="#" className="btn btn-outline border-ultima-300 text-ultima-800 hover:bg-ultima-800 hover:text-white">
                    Reserve a Table
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <FeaturedRooms />
        <AboutSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
