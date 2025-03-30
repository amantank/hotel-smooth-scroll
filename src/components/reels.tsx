import React, { useState } from "react";
import Reel from "../assets/reel.mp4";
import Reel2 from "../assets/reel2.mp4";
import Reel3 from "../assets/reel4.mp4";
import Reel4 from "../assets/reel3.mp4";
const reels = [
  { id: 1, src: Reel },
  { id: 2, src: Reel2 },
  { id: 3, src: Reel3 },
  { id: 4, src: Reel4 },
];

const ReelsExpandable: React.FC = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="w-full max-w-6xl mx-auto mt-5 mb-6 px-4">
      <div className="text-center mb-16">
        <span className="appear fade-in inline-block text-ultima-500 uppercase text-sm tracking-widest mb-3">
          Memorable Moments
        </span>
        <h2 className="appear fade-in font-cinzel reveal-delay-100 text-4xl md:text-5xl mb-6">
          Shorts
        </h2>
      </div>
    
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {reels.slice(0, expanded ? reels.length : 4).map((reel) => (
          <div
            key={reel.id}
            className="relative w-full h-[300px] md:h-[500px] rounded-2xl overflow-hidden shadow-lg"
          >
            <video
              src={reel.src}
              className="w-full h-full object-cover rounded-lg"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        ))}
      </div>

    
      {reels.length > 4 && (
        <div className="text-center mt-4">
          <button
            onClick={() => setExpanded(!expanded)}
            className="appear my-6 fade-in-left reveal-delay-500 inline-block text-ultima-800 uppercase text-sm tracking-wider after:content-[''] after:block after:w-full after:h-px after:bg-ultima-300 after:transition-transform after:duration-300 hover:after:scale-x-50"
          >
            {expanded ? "Show Less" : "Show More"}
          </button>
        </div>
      )}
    </div>
  );
};

export default ReelsExpandable;
