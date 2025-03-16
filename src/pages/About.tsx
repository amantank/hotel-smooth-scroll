import { useEffect } from "react";
import { cn } from "@/lib/utils";
import Navbar from "@/components/AboutSectionNav";
import Footer from "@/components/Footer";
import BhawarLalJi from "../../public/BhanwarLalji.jpg"
import SureshJi from "../../public/suresh-sharmaji.jpg"
import Lalitji from "../../public/lalit-sharmaji.jpg"


const AboutPage = () => {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2, // Trigger animations earlier
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          const animation = target.getAttribute("data-animation");

          if (animation && !target.classList.contains("observed")) {
            target.classList.add(animation, "observed");

            // Staggered animation for smoother effect
            setTimeout(() => {
              target.style.opacity = "1";
              target.style.transform = "translateY(0) translateX(0)";
            }, parseInt(target.dataset.delay || "0"));
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
    <>
      <Navbar />
      <main className="section bg-ultima-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <span
                className="appear inline-block text-ultima-500 uppercase text-sm tracking-widest mb-3"
                data-animation="fade-in-left"
                data-delay="100"
              >
                Welcome to Hotel Riddhi Inn
              </span>
              <h2
                className="appear text-4xl md:text-5xl mb-6 font-bold text-gray-900"
                data-animation="fade-in-left"
                data-delay="200"
              >
                Where Tradition Meets Elegance
              </h2>
              <p
                className="appear text-ultima-600 mb-6"
                data-animation="fade-in-left"
                data-delay="300"
              >
                Nestled in the heart of Udaipur, Hotel Riddhi Inn is an oasis of
                luxury, offering a perfect blend of modern comfort and the
                city's rich heritage.
              </p>
              <p
                className="appear text-ultima-600 mb-6"
                data-animation="fade-in-left"
                data-delay="400"
              >
                Each room is a sanctuary of comfort, featuring high-speed WiFi,
                plush seating, a tea/coffee maker, an executive workspace, and a
                state-of-the-art entertainment system.
              </p>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Our Visionary Leaders
              </h3>
              <ul className="mb-6">
                {[
                  { name: "Bhanwar Lal Sharma", role: "Chairman", img: BhawarLalJi},
                  { name: "Suresh Sharma", role: "Founder", img: SureshJi },
                  { name: "Lalit Sharma", role: "Founder", img: Lalitji },
                ].map((leader, index) => (
                  <li
                    key={leader.name}
                    className="appear flex items-center gap-4 mb-4"
                    data-animation="fade-in-left"
                    data-delay={`${index * 150 + 500}`}
                  >
                    <img src={leader.img} alt={leader.name} className="w-24 h-24 rounded-full shadow-lg" />
                    <div>
                      <strong className="text-lg text-gray-900">{leader.name}</strong>
                      <p className="text-sm text-gray-600">{leader.role}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative">
                <div
                  className="appear aspect-w-4 aspect-h-5 overflow-hidden rounded-lg shadow-lg"
                  data-animation="fade-in-right"
                  data-delay="600"
                >
                  <img
                    src={"../../public/raw.JPG"}
                    alt="Hotel Riddhi Inn Interior"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div
                  className="appear absolute -bottom-8 -left-8 w-64 p-6 bg-white shadow-lg rounded-lg"
                  data-animation="fade-in-right"
                  data-delay="800"
                >
                  <div className="appear flex items-center justify-between mb-4" data-animation="fade-in-right" data-delay="900">
                    <span className="text-xl font-playfair text-gray-800">A Legacy of Hospitality</span>
                  </div>
                  <div className="h-px w-full bg-ultima-200 mb-4"></div>
                  <p className="appear text-ultima-600 text-sm" data-animation="fade-in-right" data-delay="1000">
                    Experience world-class service with a touch of warmth and
                    tradition. At Hotel Riddhi Inn, we strive to create memories
                    that last a lifetime.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default AboutPage;
