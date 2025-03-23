import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import EnquireButton from "./EnquireButton";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out",
        isScrolled
          ? "bg-white/90 backdrop-blur-md py-3 shadow-sm"
          : "bg-transparent py-5"
      )}
    >
      <div className="container-custom flex items-center justify-between px-4 md:px-6 lg:px-8">
        {/* Menu Button (Mobile) */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden text-foreground mt-2 focus:outline-none"
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
        <div
          className={cn(
            "absolute left-1/2 transform -translate-x-1/2 mt-2 transition-all duration-500 ease-in-out",
            isScrolled ? "scale-90 text-black" : "scale-100 text-white"
          )}
        >
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
        <nav
          className={cn(
            "hidden lg:flex items-center space-x-6 ",
            isScrolled ? "text-black" : " text-white"
          )}
        >
          <a href="#rooms" className="nav-link">
            Rooms
          </a>
          <a href="#dining" className="nav-link">
            Dining
          </a>
          <a href="#events" className="nav-link">
            Events
          </a>
          <a href="/about" className="nav-link">
            About
          </a>
        </nav>

        {/* Enquire Button */}
        <div className="hidden  lg:block">
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
          {[
            { label: "Rooms", href: "#rooms" },
            { label: "Dining", href: "#dining" },
            { label: "Events", href: "#events" },
            { label: "About", href: "/about" },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-base font-medium text-gray-800 hover:text-gray-600 transition"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
