"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface MediaItem {
  src: string;
  alt: string;
}

interface CarouselProps {
  items: MediaItem[];
  selectedIndex: number,
  setSelectedIndex: (prev) => void
}

export default function Lightbox({ items, selectedIndex, setSelectedIndex }: CarouselProps) {
  const closeLightbox = () => setSelectedIndex(null);

  const goToPrev = () => {
    setSelectedIndex((prev: number | null) =>
      prev === null ? null : prev === 0 ? items.length - 1 : prev - 1
    );
  }

  const goToNext = () => {
    setSelectedIndex((prev) =>
      prev === null ? null : prev === items.length - 1 ? 0 : prev + 1
    );
  }

  const isVideo = (item: MediaItem): boolean => {
    const ext = item.src.toLowerCase();
    return ext.endsWith(".mp4");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
      onClick={closeLightbox}
    >
      <div className="relative max-w-[95vw] max-h-[95vh] cursor-pointer" onClick={(e) => e.stopPropagation()}>
        {isVideo(items[selectedIndex]) ? (
          <motion.video
            key={selectedIndex}
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.85, opacity: 0 }}
            src={items[selectedIndex].src}
            autoPlay
            muted
            loop
            playsInline
            controls
            className="max-w-full max-h-[90vh] rounded-xl shadow-2xl"
          />
        ) : (
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.85, opacity: 0 }}
          >
            <Image
              src={items[selectedIndex].src}
              alt={items[selectedIndex].alt}
              className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl"
              width={1600}
              height={2400}
              priority
            />
          </motion.div>
        )}

        <button
          onClick={closeLightbox}
          className="absolute top-4 right-4 text-white text-4xl p-3! hover:text-gray-500 transition"
        >
          ×
        </button>

        <button
          onClick={goToPrev}
          className="absolute left-4 sm:left-10 top-1/2 -translate-y-1/2 text-white text-5xl p-4! hover:text-gray-500"
        >
          ‹
        </button>

        <button
          onClick={goToNext}
          className="absolute right-4 sm:right-10 top-1/2 -translate-y-1/2 text-white text-5xl p-4! hover:text-gray-500"
        >
          ›
        </button>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-lg px-5! py-2! hover:text-gray-500">
          {selectedIndex + 1} / {items.length}
        </div>
      </div>
    </motion.div>
  );
}