import { useState } from "react";
import Image from "../../public/deluxe.jpg"; // Replace with actual images

const images = [
    Image, Image, Image, Image, Image, Image, Image, Image, Image, Image, Image, Image, Image, Image, Image, Image,
];

const ImageGallery = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [showAll, setShowAll] = useState(false);
    const visibleImages = showAll ? images : images.slice(0, 8); // Show 8 images initially

    return (
        <div className="w-full max-w-6xl mx-auto mt-5 mb-6 px-4 text-center">
            {/* Headings */}
            <span className="appear mt-24 fade-in-left inline-block text-ultima-500 uppercase text-sm tracking-widest mb-3">
                Gallery
            </span>
            <h2 className="appear fade-in-left font-cinzel reveal-delay-100 text-4xl md:text-5xl mb-6">
                A Glimpse into Elegance
            </h2>

            {/* Masonry Grid - Pinterest Style */}
            <div className="relative mt-24">
                <div className="columns-2 md:columns-3 lg:columns-4 gap-1 space-y-1">
                    {visibleImages.map((img, index) => (
                        <div
                            key={index}
                            className="relative cursor-pointer overflow-hidden break-inside-avoid"
                            onClick={() => setSelectedImage(img)}
                        >
                            <img
                                src={img}
                                alt={`Gallery Image ${index + 1}`}
                                className="w-full h-auto object-cover hover:scale-105 transition duration-300 ease-in-out"
                            />
                        </div>
                    ))}
                </div>

                {/* Blurred Overlay & "See More" Button */}
                {!showAll && (
                    <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white via-white/80 to-transparent flex items-end justify-center">
                        <button
                            onClick={() => setShowAll(true)}
                            className="appear fade-in-left reveal-delay-500 inline-block text-ultima-800 uppercase text-sm tracking-wider after:content-[''] after:block after:w-full after:h-px after:bg-ultima-300 after:transition-transform after:duration-300 hover:after:scale-x-50"
   >
                            See More
                        </button>
                    </div>
                )}
            </div>

            {/* Toggle "See Less" Button */}
            {showAll && (
                <div className="flex justify-center mt-6">
                    <button
                        onClick={() => setShowAll(false)}
                        className="appear fade-in-left reveal-delay-500 inline-block text-ultima-800 uppercase text-sm tracking-wider after:content-[''] after:block after:w-full after:h-px after:bg-ultima-300 after:transition-transform after:duration-300 hover:after:scale-x-50"
 >
                        See Less
                    </button>
                </div>
            )}

            {/* Image Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 transition-opacity duration-300"
                    onClick={() => setSelectedImage(null)}
                >
                    <div className="relative max-w-3xl w-full p-4">
                        <button
                            className="absolute top-4 right-4 text-white text-3xl"
                            onClick={() => setSelectedImage(null)}
                        >
                            &times;
                        </button>
                        <img
                            src={selectedImage}
                            alt="Selected"
                            className="w-full h-auto rounded-lg shadow-lg transform scale-95 transition-all duration-300 ease-in-out"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default ImageGallery;
