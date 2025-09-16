import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ImageCarousel({ images, altText }) {
  const [currentImage, setCurrentImage] = useState(0);

  const prevImage = () => {
    setCurrentImage((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const nextImage = () => {
    setCurrentImage((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  if (!images || images.length === 0) return null;

  return (
    <div className="relative h-64 overflow-hidden rounded-t-xl">
      <img
        src={images[currentImage]}
        alt={altText || `Carousel image ${currentImage + 1}`}
        className="w-full h-full object-cover transition-transform duration-300"
      />
      {images.length > 1 && (
        <>
          <button
            onClick={prevImage}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 p-1 rounded-full hover:bg-white transition"
          >
            <ChevronLeft className="w-5 h-5 text-gray-700" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 p-1 rounded-full hover:bg-white transition"
          >
            <ChevronRight className="w-5 h-5 text-gray-700" />
          </button>
        </>
      )}
    </div>
  );
}
