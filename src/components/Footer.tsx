import { useEffect } from "react";

const Footer = () => {
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
    <footer id="enquire" className="bg-ultima-950 text-white pt-20 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          <div className="appear fade-in">
            <div className="mb-6">
              <div className="text-center md:text-left">
                <h1 className="text-2xl font-cinzel tracking-wider mb-1">
                  Hotel Riddhi Inn
                </h1>
                <div className="text-[10px] tracking-[0.3em] uppercase">
                  Udaipur
                </div>
              </div>
            </div>
            <p className="text-white/70 mb-6 text-center md:text-left">
              A regal retreat where timeless elegance and unmatched comfort come
              together, offering a sanctuary where royalty truly rests.
            </p>
          </div>

          <div className="appear fade-in reveal-delay-100">
            <h4 className="text-lg font-playfair mb-6 text-center md:text-left">
              Contact Us
            </h4>
            <ul className="space-y-4 text-white/70 text-center md:text-left">
              <li>Plot No 1, Bhuwana By-pass Road, Udaipur (Raj.)</li>
              <li>
                <a
                  href="mailto:hotelriddhiinn@gmail.com"
                  onClick={(e) => {
                    window.location.href = "mailto:hotelriddhiinn@gmail.com";
                  }}
                  className="hover:text-white transition-colors"
                >
                  hotelriddhiinn@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+917733026666"
                  className="hover:text-white transition-colors"
                >
                  +91 7733026666
                </a>
              </li>
              <li>
                <a
                  href="tel:+917733026666"
                  className="hover:text-white transition-colors"
                >
                  +91 7733096666
                </a>
              </li>
            </ul>
          </div>

          <div className="appear fade-in reveal-delay-200">
            <h4 className="text-lg font-playfair mb-6 text-center md:text-left">
              Explore
            </h4>
            <ul className="space-y-4 text-white/70 text-center md:text-left">
              <li>
                <a href="#rooms" className="transition-colors hover:text-white">
                  Rooms
                </a>
              </li>
              <li>
                <a
                  href="#dining"
                  className="transition-colors hover:text-white"
                >
                  Dining
                </a>
              </li>

              <li>
                <a
                  href="#events"
                  className="transition-colors hover:text-white"
                >
                  Events
                </a>
              </li>
              <li>
                <a href="#about" className="transition-colors hover:text-white">
                  About
                </a>
              </li>
            </ul>
          </div>

          <div className="appear fade-in reveal-delay-300">
            <h4 className="text-lg font-playfair mb-6 text-center md:text-left">
              Location
            </h4>
            <div className="w-full h-56">
              <iframe
                title="Hotel Riddhi Inn Location"
                className="w-full h-full border-0"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.330778546081!2d73.71140811098337!3d24.626055654505706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967e44de692e233%3A0xac15622399a68059!2sHotel%20Riddhi%20Inn!5e1!3m2!1sen!2sin!4v1740907064624!5m2!1sen!2sin"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1   items-start pt-8 border-t border-white/10">
          <div className="text-white/50 text-sm text-center md:text-right">
            © {new Date().getFullYear()} Hotel Riddhi Inn pvt ltd. All rights
            reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
