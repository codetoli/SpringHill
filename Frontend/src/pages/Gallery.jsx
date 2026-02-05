import { useEffect, useState } from "react";
import { LoadContent } from "../utils/LoadContent";

const ITEMS_PER_LOAD = 5;

export default function Gallery() {
  const [images, setImages] = useState([]);
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_LOAD);
  const [activeImage, setActiveImage] = useState(null);

  useEffect(() => {
    LoadContent("events")
      .then((events) => {
        const allImages = events
          .flatMap((event) => event.images || [])
          .map((img) => {
            if (typeof img === "string") return img;
            if (img?.image?.url) return img.image.url;
            if (img?.image) return img.image;
            if (img?.url) return img.url;
            return null;
          })
          .filter(Boolean)
          .reverse(); // latest first

        setImages(allImages);
      })
      .catch((err) => console.error("Gallery error:", err));
  }, []);

  const visibleImages = images.slice(0, visibleCount);

  return (
    <>
      {/* ================== HERO ================== */}
      <section className="mb-12">
        <div className="bg-[#1C3F82] h-32 sm:h-56 md:h-64 flex items-center justify-center text-white px-4">
          <div className="text-center mt-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-wide">
              INSIDE THE SHEBS
            </h1>

            <p className="mt-3 text-sm opacity-90">
              <span className="underline cursor-pointer">Home</span>
              <span className="mx-2">›</span>
              <span className="font-medium">Gallery</span>
            </p>
          </div>
        </div>

        <p className="text-center text-gray-600 max-w-2xl mx-auto mt-10 mb-12 px-4">
          A glimpse into our classrooms, events, celebrations, and student life.
        </p>

        {/* ================== IMAGE SECTION ================== */}
        <div className="px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
          {/* Empty State */}
          {images.length === 0 && (
            <div className="text-center py-24 text-gray-500">
              <p className="text-xl font-semibold mb-2">
                Gallery coming soon 📸
              </p>
              <p>We’re capturing beautiful moments at SHEBS.</p>
            </div>
          )}

          {/* ================== GRID ================== */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {visibleImages.map((src, index) => (
              <div
                key={index}
                onClick={() => setActiveImage(src)}
                className="
                  relative group cursor-pointer
                  overflow-hidden
                  rounded-2xl md:rounded-3xl
                  bg-gray-100
                  aspect-[4/3]
                "
              >
                <img
                  src={src}
                  alt="School Event"
                  loading="lazy"
                  className="
                    w-full h-full object-cover
                    transition-transform duration-500
                    group-hover:scale-110
                  "
                />

                <div
                  className="
                    absolute inset-0
                    bg-black/0
                    group-hover:bg-black/20
                    transition
                  "
                />
              </div>
            ))}
          </div>

          {/* ================== LOAD MORE ================== */}
          {visibleCount < images.length && (
            <div className="text-center mt-14">
              <button
                onClick={() =>
                  setVisibleCount((prev) => prev + ITEMS_PER_LOAD)
                }
                className="
                  px-10 py-3
                  border-2 border-[#1C3F82]
                  text-[#1C3F82]
                  rounded-full
                  font-semibold
                  hover:bg-[#1C3F82]
                  hover:text-white
                  transition
                "
              >
                Load More Moments
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ================== LIGHTBOX ================== */}
      {activeImage && (
        <div
          className="
            fixed inset-0 z-50
            bg-black/90
            flex items-center justify-center
            p-4
          "
          onClick={() => setActiveImage(null)}
        >
          <img
            src={activeImage}
            alt="Preview"
            className="
              max-w-[90vw]
              max-h-[90vh]
              rounded-2xl
              shadow-2xl
            "
            onClick={(e) => e.stopPropagation()}
          />

          <span className="absolute top-6 right-6 text-white text-sm opacity-70">
            Click anywhere to close
          </span>
        </div>
      )}
    </>
  );
}
