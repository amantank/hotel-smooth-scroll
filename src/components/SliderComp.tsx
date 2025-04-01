import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    image:
      "https://i.pinimg.com/736x/2e/1d/57/2e1d574bea1687509b45a5b5e86615b7.jpg",
    title: "Professional Conference Facilities",
    description:
      "Host business meetings, academic conferences, or trade events in our well-equipped conference halls. Our venue blends elegance with modern technology, ensuring a seamless experience.",
    buttonText: "Book a Conference Room",
    buttonLink:
      "https://wa.me/+919509928792?text=Hello!%20I'm%20interested%20in%20booking%20a%20conference%20room%20at%20your%20venue.%20Could%20you%20please%20provide%20details%20on%20availability,%20pricing,%20and%20amenities%3F",
    showButton: true,
  },
  {
    image:
      "https://i.pinimg.com/736x/81/11/ce/8111ce431fd86633e67d8fb236c7d7a2.jpg",
    title: "Luxury Poolside Experience",
    description:
      "Enjoy our luxurious outdoor pool with breathtaking views. Perfect for relaxation and recreation, our pool area offers a serene environment to unwind with family and friends.",
    buttonText: "Reserve Poolside Spot",
    buttonLink:
      "https://wa.me/+919509928792?text=Hello!%20I'm%20interested%20in%20booking%20a%20poolside%20spot.%20Could%20you%20please%20provide%20details%20on%20availability,%20pricing,%20and%20amenities%3F",
    showButton: true,
  },
  {
    image:
      "https://i.pinimg.com/736x/a5/1f/3d/a51f3dd5eba5d6e39e4adefcad1c61c5.jpg",
    title: "Beautiful Garden Views",
    description:
      "Our lush, well-maintained garden offers a tranquil escape from the hustle and bustle. It's the perfect space for outdoor gatherings, relaxation, or a peaceful stroll.",
    buttonText: "Reserve Garden Area",
    buttonLink:
      "https://wa.me/+919509928792?text=Hello!%20I'm%20interested%20in%20booking%20the%20garden%20area.%20Could%20you%20please%20provide%20details%20on%20availability,%20pricing,%20and%20amenities%3F",
    showButton: true,
  },
  {
    image:
      "https://i.pinimg.com/736x/f5/44/4e/f5444ee35891de539b19821d309cdd20.jpg",
    title: "Ample Parking Space",
    description:
      "We offer convenient parking facilities for all our guests. Secure, easy-to-access parking spots are available for visitors, ensuring a stress-free experience.",
    buttonText: "Check Parking Availability",
    buttonLink: "",
    showButton: false,
  },
];

export default function Slideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-16 items-center mt-24">
      <div className="relative">
        <div className="aspect-w-4 aspect-h-3 overflow-hidden relative md:min-h-[600px] min-h-[400px]">
          <motion.img
            src={slides[currentSlide].image}
            className="absolute inset-0 w-full h-full object-cover z-0"
            alt={slides[currentSlide].title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeIn" }}
          />
        </div>

        <motion.div
          className="absolute -bottom-6 -right-6 bg-white p-4 shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <span className="text-ultima-800 font-playfair text-xl">
            {slides[currentSlide].title}
          </span>
        </motion.div>
      </div>

      <div>
        <AnimatePresence>
          <motion.h3
            className="text-3xl md:text-4xl font-playfair mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            {slides[currentSlide].title}
          </motion.h3>

          <motion.p
            className="text-ultima-600 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
          >
            {slides[currentSlide].description}
          </motion.p>

          <motion.p
            className="text-ultima-600 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeInOut" }}
          >
            {currentSlide === 0 && (
              <>
                Featuring projectors, advanced sound systems, and elegant
                interiors, our conference rooms offer the perfect setting for
                productive discussions and networking opportunities.
              </>
            )}
            {currentSlide === 1 && (
              <>
                The pool is an ideal retreat for relaxation and enjoyment with
                your loved ones. Enjoy refreshing swims and poolside lounging
                with luxurious amenities.
              </>
            )}
            {currentSlide === 2 && (
              <>
                The garden offers serene spaces for outdoor activities, yoga, or
                simply enjoying nature's beauty in a peaceful environment.
              </>
            )}
          </motion.p>
        </AnimatePresence>

        {slides[currentSlide].showButton && (
          <motion.div
            className="mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <a
              href={slides[currentSlide].buttonLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline border-ultima-300 text-ultima-800 hover:bg-ultima-800 hover:text-white"
            >
              {slides[currentSlide].buttonText}
            </a>
          </motion.div>
        )}
      </div>

      <div className="flex overflow-x-auto gap-3 p-2 mt-4">
        {slides.map((slide, index) => (
          <motion.div
            key={index}
            className="w-20 h-16 relative cursor-pointer rounded-md overflow-hidden"
            onClick={() => setCurrentSlide(index)}
            initial={{ opacity: 0.7 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0.7 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={slide.image}
              className="w-full h-full object-cover rounded-md"
              alt={slide.title}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
