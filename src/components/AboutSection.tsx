import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import Moon from "../../public/moon.jpg"

const AboutSection = () => {
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target;
          const animation = target.getAttribute("data-animation");
          if (animation) {
            target.classList.add(animation);
          }
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll(".appear");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="about" className="section bg-ultima-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <span className="appear fade-in-left inline-block text-ultima-500 uppercase text-sm tracking-widest mb-3">
              About Hotel Riddhi Inn
            </span>
            <h2 className="appear fade-in-left font-cinzel reveal-delay-100 text-4xl md:text-5xl mb-6">
              Prestige Through Generations
            </h2>
            <p className="appear fade-in-left reveal-delay-200 text-ultima-600 mb-6">
              A brand-new hotel with elegant rooms offering you an affordable
              stay in the heart of Udaipur. Embracing the city's vibrant
              ambiance, Hotel Riddhi Inn is a well-decorated and comfortable
              retreat that reflects the grace of Udaipur. It stands as one of
              the most luxurious hotels in the city.
            </p>
            <p className="appear fade-in-left reveal-delay-300 text-ultima-600 mb-6">
              Each room is equipped with WiFi, a sofa, a tea/coffee maker, a
              chair, an almirah, an EPABX phone, an attached bathroom with a
              shower, and running hot & cold water, along with an LCD TV. Guests
              can look forward to elegant accommodations, exceptional service,
              and traditional, delicious food.
            </p>
            {expanded && (
              <div className="appear fade-in-left reveal-delay-400 text-ultima-600 mb-8">
                <p className="mb-6">
                  Our hotel offers personalized services, ensuring an
                  unparalleled experience for our guests. From the moment they
                  arrive, they are greeted with warmth and hospitality. Our
                  reception staff is known for their politeness and
                  professionalism, making every guest feel at home.
                </p>
                <h3 className="text-xl font-semibold mb-4">Our Founders</h3>
                <ul className="mb-6">
                  <li>
                    <strong>Bhanwar Lal Sharma</strong> - Chairman
                  </li>
                  <li>
                    <strong>Suresh Sharma</strong> - Founder
                  </li>
                  <li>
                    <strong>Lalit Sharma</strong> - Founder
                  </li>
                </ul>
              </div>
            )}
            <button
              onClick={() => setExpanded(!expanded)}
              className="appear fade-in-left reveal-delay-500 inline-block text-ultima-800 uppercase text-sm tracking-wider after:content-[''] after:block after:w-full after:h-px after:bg-ultima-300 after:transition-transform after:duration-300 hover:after:scale-x-50"
            >
              {expanded ? "Show Less" : "Discover More"}
            </button>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="appear fade-in-right aspect-w-4 aspect-h-5 overflow-hidden">
                <img
                  src={"https://i.pinimg.com/736x/f8/08/74/f808745b44d9c4b0afcde356dabd2eff.jpg"}
                  alt="Hotel Riddhi Inn Interior"
                  className="w-full max-h-[45rem] object-cover"
                />
              </div>
              <div className="appear fade-in-right reveal-delay-200 absolute -bottom-8 -left-8 w-64 p-6 bg-white shadow-lg">
                <div className="appear fade-in-right reveal-delay-300 flex items-center justify-between mb-4">
                  <span className="text-xl font-playfair">
                    A Tradition of Excellence
                  </span>
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                      stroke="#7c735f"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 6V12L16 14"
                      stroke="#7c735f"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="h-px w-full bg-ultima-200 mb-4"></div>
                <p className="appear fade-in-right reveal-delay-400 text-ultima-600 text-sm">
                  Offering warm hospitality and world-class service, we ensure
                  every guest enjoys a truly memorable stay.
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
