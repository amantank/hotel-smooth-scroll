import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturedRooms from "@/components/FeaturedRooms";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import Dining from "../../public/reservation-title.jpg";
import ConferenceHall from "../../public/conference-hall.jpeg";
import ReelsCarousel from "@/components/carousal";
import Wedding from "../../public/wedding.jpg"
import InstagramFeed from "@/components/instagramFeed";

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
        <div className="setion container-custom bg-white">
          <FeaturedRooms />
        </div>
        {/* Dining Section */}
        <section id="dining" className="section bg-white overflow-hidden">
          <div className="container-custom">
            <div className="text-center mb-16">
              <span className="appear fade-in inline-block text-ultima-500 uppercase text-sm tracking-widest mb-3">
                Culinary Excellence
              </span>
              <h2 className="appear fade-in font-cinzel reveal-delay-100 text-4xl md:text-5xl mb-6">
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
                      src={Dining}
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
                    href="https://wa.me/+919509928792?text=Hello!%20I'm%20interested%20in%20reserving%20a%20table%20at%20your%20restaurant.%20Could%20you%20please%20provide%20more%20details%20on%20availability%20and%20menu%3F"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline border-ultima-300 text-ultima-800 hover:bg-ultima-800 hover:text-white"
                  >
                    Reserve a Table
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Events Section */}
        <section id="events" className="section bg-white overflow-hidden">
          <div className="container-custom">
            <div className="text-center mb-16">
              <span className="appear fade-in inline-block text-ultima-500 uppercase text-sm tracking-widest mb-3">
                Memorable Gatherings
              </span>
              <h2 className="appear font-cinzel fade-in reveal-delay-100 text-4xl md:text-5xl mb-6">
                Weddings & Conferences
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-16 items-center mt-24">
              <div className="appear zoom-in">
                <div className="relative">
                  <div className="aspect-w-4 aspect-h-3 overflow-hidden">
                    <img
                      src={Wedding}
                      alt="Wedding at Hotel Riddhi Inn"
                      className="w-full max-h-[30rem] object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 bg-white p-4 shadow-lg">
                    <span className="text-ultima-800 font-playfair text-xl">
                      Weddings
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="appear fade-in reveal-delay-100 text-3xl md:text-4xl font-playfair mb-6">
                  A Dream Wedding Destination
                </h3>
                <p className="appear fade-in reveal-delay-200 text-ultima-600 mb-6">
                  Udaipur is one of the best wedding destinations in India. Away
                  from the city's hustle, Hotel Riddhi Inn blends heritage
                  architecture with modern amenities, offering a perfect venue
                  for your dream wedding.
                </p>
                <p className="appear fade-in reveal-delay-300 text-ultima-600 mb-8">
                  We provide elegant gardens, banquet halls, and luxurious
                  rooms. Our dedicated team ensures seamless event planning,
                  from venue setup to catering, music, and decor, creating
                  unforgettable celebrations.
                </p>
                <div className="appear fade-in reveal-delay-500 mt-8">
                  <a
                    href="https://wa.me/+919509928792?text=Hello!%20I'm%20interested%20in%20planning%20a%20wedding%20at%20your%20venue.%20Could%20you%20please%20provide%20more%20details%20on%20availability,%20pricing,%20and%20services%3F"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline border-ultima-300 text-ultima-800 hover:bg-ultima-800 hover:text-white"
                  >
                    Plan Your Wedding
                  </a>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-16 items-center mt-24">
              <div className="appear zoom-in">
                <div className="relative">
                  <div className="aspect-w-4 aspect-h-3 overflow-hidden">
                    <img
                      src={ConferenceHall}
                      alt="Conference at Hotel Riddhi Inn"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 bg-white p-4 shadow-lg">
                    <span className="text-ultima-800 font-playfair text-xl">
                      Conferences
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="appear fade-in reveal-delay-100 text-3xl md:text-4xl font-playfair mb-6">
                  Professional Conference Facilities
                </h3>
                <p className="appear fade-in reveal-delay-200 text-ultima-600 mb-6">
                  Host business meetings, academic conferences, or trade events
                  in our well-equipped conference halls. Our venue blends
                  elegance with modern technology, ensuring a seamless
                  experience.
                </p>
                <p className="appear fade-in reveal-delay-300 text-ultima-600 mb-8">
                  Featuring projectors, advanced sound systems, and elegant
                  interiors, our conference rooms offer the perfect setting for
                  productive discussions and networking opportunities.
                </p>
                <div className="appear fade-in reveal-delay-500 mt-8">
                  <a
                    href="https://wa.me/+919509928792?text=Hello!%20I'm%20interested%20in%20booking%20a%20conference%20room%20at%20your%20venue.%20Could%20you%20please%20provide%20details%20on%20availability,%20pricing,%20and%20amenities%3F"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline border-ultima-300 text-ultima-800 hover:bg-ultima-800 hover:text-white"
                  >
                    Book a Conference Room
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <AboutSection />
        <div>
          <ReelsCarousel />
          {/* <InstagramFeed /> */}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
