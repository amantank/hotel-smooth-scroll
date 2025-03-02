
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import EnquireButton from './EnquireButton';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out",
        isScrolled 
          ? "bg-white/90 backdrop-blur-md py-4 shadow-sm" 
          : "bg-transparent py-6"
      )}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Menu Button (Mobile) */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden text-foreground"
          aria-label="Toggle menu"
        >
          <div className="flex flex-col space-y-1.5 w-6">
            <span className={cn(
              "block h-px w-full bg-current transition-all duration-300 ease-in-out",
              isMobileMenuOpen && "translate-y-2.5 rotate-45"
            )}></span>
            <span className={cn(
              "block h-px w-full bg-current transition-all duration-300 ease-in-out",
              isMobileMenuOpen && "opacity-0"
            )}></span>
            <span className={cn(
              "block h-px w-full bg-current transition-all duration-300 ease-in-out",
              isMobileMenuOpen && "-translate-y-2.5 -rotate-45"
            )}></span>
          </div>
          <span className="sr-only">Menu</span>
        </button>

        {/* Logo */}
        <div className={cn(
          "absolute left-1/2 transform -translate-x-1/2 transition-all duration-500 ease-in-out",
          isScrolled ? "scale-90" : "scale-100"
        )}>
          <a href="#" className="text-center">
            <div className="flex flex-col items-center">
              <h1 className="text-2xl font-playfair tracking-wider">ULTIMA</h1>
              <div className="text-[10px] tracking-[0.3em] uppercase">Collection</div>
            </div>
          </a>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-10">
          <a href="#rooms" className="nav-link">Rooms</a>
          <a href="#experiences" className="nav-link">Experiences</a>
          <a href="#dining" className="nav-link">Dining</a>
          <a href="#about" className="nav-link">About</a>
        </nav>

        {/* Enquire Button */}
        <div className={cn(
          "transition-all duration-500 ease-in-out",
          isScrolled ? "opacity-100" : "opacity-100"
        )}>
          <EnquireButton />
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md transition-all duration-500 ease-in-out overflow-hidden lg:hidden",
        isMobileMenuOpen ? "max-h-[400px] border-b border-ultima-100" : "max-h-0"
      )}>
        <nav className="container-custom flex flex-col space-y-6 py-8">
          <a 
            href="#rooms" 
            className="nav-link text-center text-base"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Rooms
          </a>
          <a 
            href="#experiences" 
            className="nav-link text-center text-base"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Experiences
          </a>
          <a 
            href="#dining" 
            className="nav-link text-center text-base"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Dining
          </a>
          <a 
            href="#about" 
            className="nav-link text-center text-base"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
