import { useEffect, useState } from "react";
import { LoadContent } from "../utils/LoadContent";
import { Maximize2, X } from "lucide-react";

const ITEMS_PER_LOAD = 10;

export default function Gallery() {
  const [images, setImages] = useState([]);
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_LOAD);
  const [activeImage, setActiveImage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    LoadContent("events")
      .then((events) => {
        const allImages = events
          .flatMap((event) => event.images || [])
          .map((img) => img?.image?.url || img?.image || img?.url || img)
          .filter((src) => typeof src === "string")
          .reverse();
        setImages(allImages);
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
  }, []);

  const visibleImages = images.slice(0, visibleCount);

  return (
    <div className="bg-white min-h-screen">
      {/* --- HERO --- */}
      <section className="bg-[#1C3F82] pt-32 pb-20 px-6 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-tight">
          Inside the <span className="text-[#FF6B34]">SHEBS</span>
        </h1>
        <p className="mt-4 opacity-80 max-w-xl mx-auto">
          Capturing the vibrant moments of our student life.
        </p>
      </section>

      {/* --- BENTO GRID SECTION --- */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[250px] gap-4">
          {visibleImages.map((src, index) => {
            // Logic to create Bento effect: Every 5th image is tall, every 3rd is wide
            const isWide = index % 5 === 0;
            const isTall = index % 3 === 0 && !isWide;

            return (
              <div
                key={index}
                onClick={() => setActiveImage(src)}
                className={`
                  relative group cursor-pointer overflow-hidden rounded-3xl bg-gray-100 shadow-sm
                  transition-all duration-500 hover:shadow-xl
                  ${isWide ? "lg:col-span-2" : ""} 
                  ${isTall ? "lg:row-span-2" : ""}
                `}
              >
                <img
                  src={src}
                  alt="School Event"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Maximize2 className="text-white w-8 h-8 transform scale-50 group-hover:scale-100 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* --- LOAD MORE --- */}
        {!isLoading && visibleCount < images.length && (
          <div className="text-center mt-16">
            <button
              onClick={() => setVisibleCount((prev) => prev + ITEMS_PER_LOAD)}
              className="px-10 py-4 border-2 border-[#1C3F82] text-[#1C3F82] rounded-full font-bold hover:bg-[#1C3F82] hover:text-white transition-all"
            >
              Load More Moments
            </button>
          </div>
        )}
      </div>

      {/* --- LIGHTBOX (FIXED FOR OVER-NAVBAR) --- */}
      {activeImage && (
        <div
          className="fixed inset-0 w-full h-full flex items-center justify-center bg-black/95 z-[9999] p-4 md:p-10 animate-in fade-in duration-200"
          onClick={() => setActiveImage(null)}
        >
          {/* Close Button */}
          <button
            className="absolute top-8 right-8 text-white z-[10000] hover:text-[#FF6B34] transition-colors"
            onClick={() => setActiveImage(null)}
          >
            <X size={48} strokeWidth={1.5} />
          </button>

          <img
            src={activeImage}
            alt="Preview"
            className="max-w-[95vw] max-h-[95vh] object-contain rounded-lg shadow-2xl animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          />

          <p className="absolute bottom-6 text-white/40 text-xs tracking-widest uppercase pointer-events-none">
            Click anywhere to exit
          </p>
        </div>
      )}
    </div>
  );
}
