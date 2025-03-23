import { useEffect, useRef, useState } from "react";
import EnquireButton from "./EnquireButton";
import Video from "../assets/Main video.mp4"

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(entry.target.getAttribute("data-animation") || "");
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll(".appear");
    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      isPlaying ? videoRef.current.pause() : videoRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute lg:hidden inset-0 w-full h-full">
        <iframe
          src="https://player.vimeo.com/video/1068531739?h=7d688f03ae&autoplay=1&loop=1&background=1"
          className="absolute inset-0 w-full h-full"
          style={{
            objectFit: "cover",
            pointerEvents: "none", // Prevents clicks on the video
            zIndex: "-1",
          }}
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
        ></iframe>
      </div>
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src={Video}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      />



      <div className="absolute inset-0 bg-ultima-950/40 z-10"></div>

      {/* Content */}
      <div className="relative z-20 h-full flex items-center justify-center text-white container-custom">
        <div className="text-center max-w-4xl mx-auto pt-20">
          <h1 className="appear fade-in text-5xl md:text-7xl lg:text-8xl font-light mb-6">Riddhi Inn</h1>
          <p className="appear fade-in reveal-delay-200 text-lg md:text-xl tracking-wide max-w-2xl mx-auto mb-8 font-light">
            A regal retreat where timeless elegance and unmatched comfort come together, offering a sanctuary where royalty truly rests
          </p>
          <div className="appear fade-in reveal-delay-300 flex justify-center space-x-4 mt-8">
            <EnquireButton variant="white" isScrolled={isScrolled} />
          </div>
        </div>
      </div>

      {/* Video Controls */}
      <div className="absolute bottom-12 right-12 z-20 flex space-x-4">
        {[
          { onClick: togglePlay, label: isPlaying ? "Pause" : "Play", icon: isPlaying ? "pause" : "play" },
          { onClick: toggleMute, label: isMuted ? "Unmute" : "Mute", icon: isMuted ? "mute" : "volume" },
        ].map(({ onClick, label, icon }, index) => (
          <button
            key={index}
            onClick={onClick}
            className="w-8 h-8 rounded-full border border-white/25 bg-black/20 backdrop-blur-sm flex items-center justify-center text-white transition-all hover:bg-black/30"
            aria-label={label}
          >
            {icon === "pause" ? (
              <rect x="6" y="4" width="4" height="16" />
            ) : icon === "play" ? (
              <polygon points="5 3 19 12 5 21 5 3" />
            ) : icon === "mute" ? (
              <>
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                <line x1="22" y1="9" x2="16" y2="15" />
                <line x1="16" y1="9" x2="22" y2="15" />
              </>
            ) : (
              <>
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
              </>
            )}
          </button>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
