import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import EnquireButton from "./EnquireButton";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to the target section after navigating
  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100); // Delay to ensure navigation happens first
      }
    }
  }, [location]);

  const handleNavClick = (sectionId: string) => {
    if (location.pathname !== "/") {
      navigate("/", { replace: false }); // Navigate to home first
      setTimeout(() => {
        window.location.hash = sectionId; // Then update the hash
      }, 100);
    } else {
      window.location.hash = sectionId; // If already on home, just update hash
    }
    setIsMobileMenuOpen(false); // Close mobile menu after click
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out bg-white/90 backdrop-blur-md py-3 shadow-sm"
      )}
    >
      <div className="container-custom flex items-center justify-between px-4 md:px-6 lg:px-8">
        {/* Menu Button (Mobile) */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden text-black mt-2 focus:outline-none"
          aria-label="Toggle menu"
        >
          <div className="flex flex-col space-y-1 w-5">
            <span
              className={cn(
                "block h-[2px] w-full bg-current transition-all duration-300 ease-in-out",
                isMobileMenuOpen && "translate-y-2 rotate-45"
              )}
            ></span>
            <span
              className={cn(
                "block h-[2px] w-full bg-current transition-all duration-300 ease-in-out",
                isMobileMenuOpen && "opacity-0"
              )}
            ></span>
            <span
              className={cn(
                "block h-[2px] w-full bg-current transition-all duration-300 ease-in-out",
                isMobileMenuOpen && "-translate-y-2 -rotate-45"
              )}
            ></span>
          </div>
        </button>

        {/* Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 transition-all duration-500 ease-in-out text-black">
          <a href="#" className="text-center">
            <div className="flex flex-col items-center">
              <h1 className="text-xl md:text-2xl font-playfair tracking-wider">
                Riddhi Inn
              </h1>
              <div className="text-[10px] tracking-[0.3em] uppercase">
                Udaipur
              </div>
            </div>
          </a>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-6 text-black">
          <button onClick={() => handleNavClick("#rooms")} className="nav-link">
            Rooms
          </button>
          <button onClick={() => handleNavClick("#dining")} className="nav-link">
            Dining
          </button>
          <button onClick={() => handleNavClick("#events")} className="nav-link">
            Events
          </button>
          <a href="/about" className="nav-link">
            About
          </a>
        </nav>

        {/* Enquire Button */}
        <div className="hidden lg:block">
          <EnquireButton isScrolled={isScrolled} />
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md transition-all duration-500 ease-in-out overflow-hidden lg:hidden",
          isMobileMenuOpen
            ? "max-h-[400px] py-6 border-b border-gray-200"
            : "max-h-0 py-0"
        )}
      >
        <nav className="flex flex-col items-center space-y-5">
          <button
            onClick={() => handleNavClick("#rooms")}
            className="text-base font-medium text-black hover:text-gray-600 transition"
          >
            Rooms
          </button>
          <button
            onClick={() => handleNavClick("#dining")}
            className="text-base font-medium text-black hover:text-gray-600 transition"
          >
            Dining
          </button>
          <button
            onClick={() => handleNavClick("#events")}
            className="text-base font-medium text-black hover:text-gray-600 transition"
          >
            Events
          </button>
          <a
            href="/about"
            className="text-base font-medium text-black hover:text-gray-600 transition"
          >
            About
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
