import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";




const FeaturedRooms = () => {
  const [showAllRooms, setShowAllRooms] = useState(false);
  const [expandedRoom, setExpandedRoom] = useState(null);
  const navigate = useNavigate();

  const handleRoomClick = (room) => {
    navigate(`/rooms/${room.id}`, { state: { room } });
  };

  useEffect(() => {
    const observerOptions = { root: null, rootMargin: "0px", threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target;
          const animation = target.getAttribute("data-animation");
          if (animation) target.classList.add(animation);
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll(".appear");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const allRooms = [
    {
      id: 1,
      name: "Super Deluxe Room",
      description:
        "A spacious room with the comfort of a King-size bed for you to relax. It truly redefines luxury. The interiors and furnishings will surely make your stay comfortable and elegant, offering a perfect blend of style and convenience.",
      price: "",
      imageUrl: "https://i.pinimg.com/736x/48/ab/ed/48abede9267b413b68181848b723dcc3.jpg",
      animationDelay: "100",
    },
    {
      id: 2,
      name: "Family Room",
      description:
        "A spacious family room featuring two King-size beds for ultimate relaxation. It truly redefines luxury. The interiors and furnishings create a warm and cozy atmosphere, making it the perfect choice for families to unwind and enjoy their stay.",
      price: "",
      imageUrl: 'https://i.pinimg.com/736x/c1/3f/4c/c13f4cef4e4c10b0c6c94c63c6715965.jpg',
      animationDelay: "200",
    },
    {
      id: 3,
      name: "Twin Bed Room",
      description:
        "A modern and stylish room equipped with two comfortable twin beds, perfect for friends or colleagues traveling together. The room is designed to provide a relaxing ambiance with premium furnishings and elegant decor.",
      price: "",
      imageUrl:
      "https://i.pinimg.com/736x/6e/82/8b/6e828beb2c5d984d433338500a6e71ca.jpg",
      animationDelay: "300",
    },
    {
      id: 4,
      name: "Deluxe Room",
      description:
        "A well-appointed room with stylish decor, featuring a plush Queen-size bed and modern amenities. The room offers a serene atmosphere, making it perfect for both business and leisure travelers looking for comfort and convenience.",
      price: "",
      imageUrl:
      "https://i.pinimg.com/736x/2d/ed/16/2ded16e37c677c3ce8d517338f5b5b67.jpg",
      animationDelay: "100",
    },
  ];

  const roomsToDisplay = showAllRooms ? allRooms : allRooms.slice(0, 3);

  const handleInquiry = (room) => {
    const message = `I'm inquiring about the ${room.name}. Please provide more details.`;
    window.open(
      `https://wa.me/917733096666?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <section id="rooms" className="section bg-white">
      <div className="mx-auto px-4 lg:px-12">
        <div className="text-center mb-16">
          <span className="appear fade-in inline-block text-ultima-500 uppercase text-sm tracking-widest mb-3">
            Accommodations
          </span>
          <h2 className="appear fade-in reveal-delay-100 text-4xl font-cinzel md:text-5xl mb-6">
            Exceptional Stays
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {roomsToDisplay.map((room) => (
            <div
              key={room.id}
              className={`appear fade-in reveal-delay-${room.animationDelay} group`}
            >
              <div onClick={() => handleRoomClick(room)} className="relative overflow-hidden  ">
                <img
                  src={room.imageUrl}
                  alt={room.name}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6 bg-white rounded-b-lg ">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-2xl font-playfair">{room.name}</h3>
                </div>
                <p
                  className="text-ultima-600 mb-4 transition-all duration-300 ease-in-out"
                  style={{
                    maxHeight: expandedRoom === room.id ? "500px" : "60px",
                    overflow: "hidden",
                  }}
                >
                  {room.description}
                </p>
               
                <button
                  onClick={() =>
                    setExpandedRoom(expandedRoom === room.id ? null : room.id)
                  }
                  className="text-ultima-800 uppercase text-sm tracking-wider underline"
                >
                  {expandedRoom === room.id ? "Show Less" : "Discover More"}
                </button>
                {
                  expandedRoom == room.id && (
                    <button
                      onClick={() => handleRoomClick(room)}
                      className="block mt-4 btn btn-outline border-ultima-300 text-ultima-800 hover:bg-ultima-800 hover:text-white"
                    >
                      see details
                    </button>
                  )
                }
                <button
                  onClick={() => handleInquiry(room)}
                  className="block mt-4 btn btn-outline border-ultima-300 text-ultima-800 hover:bg-ultima-800 hover:text-white"
                >
                  Reserve This Room
                </button>
              </div>
            </div>
          ))}
        </div>
        {allRooms.length > 3 && (
          <div className="text-center mt-16">
            <button
              onClick={() => setShowAllRooms(!showAllRooms)}
              className="btn btn-outline border-ultima-300 text-ultima-800 hover:bg-ultima-800 hover:text-white"
            >
              {showAllRooms ? "Show Less" : "View All Accommodations"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedRooms;
