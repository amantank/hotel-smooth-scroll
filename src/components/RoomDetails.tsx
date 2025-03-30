import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import ReelsCarousel from "@/components/carousal";
import { cn } from "@/lib/utils";
import Navbar from "./AboutSectionNav";

import rooms from "@/assets/Rooms/rooms";  
import ImageGallery from "./imageGallery";


const getRoomImages = (roomName: string) => {
  const roomCategory = rooms.find((room) =>
    room.category.toLowerCase().includes(roomName.toLowerCase())
  );
  return roomCategory ? roomCategory.images.map((img) => img.src) : [];
};


const allRooms = [
    {
      id: 1,
      name: "Super Deluxe Room",
      description:
        "The Super Deluxe Room is a masterpiece of comfort and elegance, offering an expansive space designed for absolute relaxation. The room is adorned with modern interiors and luxurious furnishings that create an inviting and stylish ambiance. At the heart of this exquisite space lies a plush King-size bed, ensuring a restful sleep experience like no other. Large windows allow natural light to flood the room, enhancing its airy and serene atmosphere. The decor is carefully curated to blend contemporary aesthetics with timeless sophistication, making your stay both visually pleasing and deeply comfortable. The room is equipped with premium amenities, including a high-definition flat-screen TV, a spacious work desk, high-speed Wi-Fi, and a mini-bar stocked with refreshments. The en-suite bathroom is a sanctuary of indulgence, featuring a large bathtub, a rainfall shower, and complimentary luxury toiletries. Whether you're visiting for business or leisure, the Super Deluxe Room promises an unforgettable experience with a perfect fusion of style, convenience, and warmth.",
      price: "",
      images: getRoomImages("Super Deluxe"),
      animationDelay: "100",
    },
    {
      id: 2,
      name: "Family Room",
      description:
        "The Family Room is the ultimate retreat for families or larger groups seeking both comfort and togetherness. Designed with ample space and thoughtful details, this room features two luxurious King-size beds, providing exceptional comfort for every guest. The interiors are warm and inviting, with soft lighting, plush carpeting, and elegantly designed furniture to create a homely yet upscale atmosphere. The large seating area allows families to gather, unwind, and share precious moments together. The room is equipped with modern amenities such as a smart TV, a minibar, high-speed Wi-Fi, and a spacious wardrobe to store all your travel essentials. The en-suite bathroom is a luxurious haven, fitted with a rain shower, a deep soaking tub, and high-quality bath products. With its perfect blend of convenience and indulgence, the Family Room ensures an enjoyable stay for parents and children alike, making your holiday experience truly memorable.",
      price: "",
      images:  getRoomImages("Family"),
      animationDelay: "200",
    },
    {
      id: 3,
      name: "Twin Bed Room",
      description:
        "The Twin Bed Room is an excellent choice for friends, colleagues, or travel partners seeking a stylish yet comfortable stay. This thoughtfully designed room features two premium twin beds with ultra-soft mattresses and high-thread-count linens to ensure a restful sleep. The modern decor is complemented by sleek furnishings and warm lighting, creating a relaxing and sophisticated ambiance. The room comes with all essential amenities, including a flat-screen TV, high-speed Wi-Fi, a mini refrigerator, and a spacious wardrobe. The workspace is designed to accommodate business travelers, offering a well-lit desk with charging ports for laptops and mobile devices. The en-suite bathroom is designed for ultimate convenience, featuring a glass-enclosed shower, premium toiletries, and soft towels. Whether you’re traveling for work or leisure, the Twin Bed Room provides an ideal space to relax, recharge, and enjoy a hassle-free stay.",
      price: "",
      images: getRoomImages("Twin"),
      animationDelay: "300",
    },
    {
      id: 4,
      name: "Deluxe Room",
      description:
        "The Deluxe Room is a beautifully designed sanctuary that seamlessly blends modern luxury with timeless charm. Featuring a plush Queen-size bed, the room is tailored for guests who seek both comfort and sophistication. The interiors are adorned with stylish decor, including rich wooden accents, soft lighting, and elegant furnishings that create a cozy and inviting atmosphere. This room is equipped with a range of top-tier amenities such as a smart LED TV, a fully stocked minibar, complimentary high-speed Wi-Fi, and an ergonomic work desk for business travelers. Large windows offer stunning city or garden views, bringing a sense of tranquility to your stay. The en-suite bathroom is a spa-like retreat, boasting a spacious walk-in shower, luxurious toiletries, and fluffy towels for a refreshing experience. Whether you’re on a romantic getaway or a business trip, the Deluxe Room offers the perfect balance of elegance, relaxation, and convenience, making every moment of your stay a delightful experience.",
      price: "",
      images: getRoomImages("Deluxe"),
      animationDelay: "100",
    },
  ];

const RoomDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentImage, setCurrentImage] = useState(0);
  const [room, setRoom] = useState<any>(null);
  const maxLength = 200;
  const [isExpanded, setIsExpanded] = useState(false);


  const toggleExpanded = () => setIsExpanded(!isExpanded);

  useEffect(() => {
    const matchedRoom = allRooms.find((r) => r.id === Number(id));
    if (!matchedRoom) {
      navigate("/404");
      return;
    }
    setRoom(matchedRoom);
  }, [id, navigate]);

  if (!room) return null;

  return (
    <>
      <Navbar />
      <section className="section bg-ultima-50 lg:mt-16 flex items-center justify-center">
        <div className="max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="order-2 p-4 lg:order-1 flex flex-col h-full">
              <span className="appear fade-in-left inline-block text-ultima-500 uppercase text-sm tracking-widest mb-3">
                Room Details
              </span>
              <h2 className="appear fade-in-left font-cinzel reveal-delay-100 text-4xl md:text-5xl mb-6">
                {room.name}
              </h2>
              <div>
                <p className="appear fade-in-left reveal-delay-200 text-ultima-600 mb-6 text-lg leading-relaxed">
                  {isExpanded || room.description.length <= maxLength
                    ? room.description
                    : `${room.description.slice(0, maxLength)}...`}
                </p>
                {room.description.length > maxLength && (
                  <button
                    onClick={toggleExpanded}
                    className="appear fade-in-left reveal-delay-500 inline-block text-ultima-800 uppercase text-sm tracking-wider after:content-[''] after:block after:w-full after:h-px after:bg-ultima-300 after:transition-transform after:duration-300 hover:after:scale-x-50"
                  >
                    {isExpanded ? "See Less" : "See More"}
                  </button>
                )}
              </div>

              <div className="flex-grow"></div>

              <button
                onClick={() =>
                  window.open(
                    `https://wa.me/+919509928792?text=${encodeURIComponent(
                      `I'm inquiring about the ${room.name}.`
                    )}`,
                    "_blank"
                  )
                }
                className="block mt-4 btn btn-outline border-ultima-300 text-ultima-800 hover:bg-ultima-800 hover:text-white"
              >
                Reserve This Room
              </button>
            </div>

            <div className="order-1 p-4 lg:order-2 relative w-full">
              <div className="w-full h-96 overflow-hidden relative mb-4">
                {room.images.map((img: string, index: number) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Slide ${index}`}
                    className={cn(
                      "absolute inset-0 w-full h-full object-cover transition-opacity duration-500",
                      index === currentImage ? "opacity-100" : "opacity-0"
                    )}
                  />
                ))}
              </div>

              <div className="flex overflow-x-auto gap-3 p-2">
                {room.images.map((img: string, index: number) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Thumbnail ${index}`}
                    className={cn(
                      "w-20 h-16 object-cover cursor-pointer rounded-md transition-all",
                      index === currentImage
                        ? "border-2 border-ultima-500 scale-110"
                        : "opacity-70 hover:opacity-100"
                    )}
                    onClick={() => setCurrentImage(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <ReelsCarousel />
      <ImageGallery />
      <Footer />
    </>
  );
};

export default RoomDetails;
