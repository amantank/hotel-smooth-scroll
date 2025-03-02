import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturedRooms from "@/components/FeaturedRooms";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.15,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target;
          const animation = target.getAttribute("data-animation") || "fade-in";
          target.classList.add(animation);
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll(".appear");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        <HeroSection />
        <FeaturedRooms />
        {/* Dining Section */}
        <section id="dining" className="section bg-white overflow-hidden">
          <div className="container-custom">
            <div className="text-center mb-16">
              <span className="appear fade-in inline-block text-ultima-500 uppercase text-sm tracking-widest mb-3">
                Culinary Excellence
              </span>
              <h2 className="appear fade-in reveal-delay-100 text-4xl md:text-5xl mb-6">
                Exceptional Dining
              </h2>
              <p className="appear fade-in reveal-delay-200 text-ultima-600 max-w-2xl mx-auto">
                Our restaurants offer more than meals; they provide
                unforgettable gastronomic journeys crafted by A-class chefs.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-16 items-center mt-24">
              <div className="appear zoom-in">
                <div className="relative">
                  <div className="aspect-w-4 aspect-h-3 overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop"
                      alt="Hotel Ridhhin Udaipur Restaurant"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 bg-white p-4 shadow-lg">
                    <span className="text-ultima-800 font-playfair text-xl">
                      Restaurant
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <span className="appear fade-in inline-block text-ultima-500 uppercase text-sm tracking-widest mb-3"></span>
                <h3 className="appear fade-in reveal-delay-100 text-3xl md:text-4xl font-playfair mb-6">
                  Authentic Indian, Chinese and Continental cuisines.
                </h3>
                <p className="appear fade-in reveal-delay-200 text-ultima-600 mb-6">
                  Nestled in the heart of Udaipur, our restaurant brings you an
                  authentic Rajasthani dining experience. Enjoy a carefully
                  curated menu featuring traditional flavors, royal thalis, and
                  contemporary dishes crafted with locally sourced ingredients.
                </p>
                <p className="appear fade-in reveal-delay-300 text-ultima-600 mb-8">
                  From Dal Baati Churma to Paneer Tikka, and Malai Kofta, every
                  dish is prepared with the utmost attention to authenticity and
                  taste. Enjoy a ambiance with live music, creating an
                  unforgettable culinary journey.
                </p>

                <div className="appear fade-in reveal-delay-400 space-y-4">
                  <div className="flex items-center space-x-2 text-ultima-800">
                    <span className="font-medium">Breakfast</span>
                    <span className="h-px w-6 bg-ultima-300"></span>
                    <span>7:30 - 10:30</span>
                  </div>
                  <div className="flex items-center space-x-2 text-ultima-800">
                    <span className="font-medium">Lunch</span>
                    <span className="h-px w-6 bg-ultima-300"></span>
                    <span>12:00 - 15:00</span>
                  </div>
                  <div className="flex items-center space-x-2 text-ultima-800">
                    <span className="font-medium">Dinner</span>
                    <span className="h-px w-6 bg-ultima-300"></span>
                    <span>19:30 - 23:00</span>
                  </div>
                </div>

                <div className="appear fade-in reveal-delay-500 mt-8">
                  <a
                    href="#"
                    className="btn btn-outline border-ultima-300 text-ultima-800 hover:bg-ultima-800 hover:text-white"
                  >
                    Reserve a Table
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <AboutSection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
