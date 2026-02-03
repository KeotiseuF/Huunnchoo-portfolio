"use client";

import { useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Lightbox from "./lightbox";

interface MediaItem {
  src: string;
  alt: string;
}

interface CarouselProps {
  items: MediaItem[];
}

export default function Carousel({ items }: CarouselProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    dragFree: false,
    containScroll: "trimSnaps",
    slidesToScroll: 1,
  });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const isVideo = (src: string) => src.toLowerCase().endsWith(".mp4");

  return (
    <>
      <div className={`${selectedIndex !== null ? "hidden" : "block"} relative w-full overflow-hidden`}>
        <button
          onClick={scrollPrev}
          className="absolute left-2 sm:left-6 top-1/2 z-20 -translate-y-1/2 flex items-center justify-center"
          aria-label="Précédent"
        >
          <Image src="/photos/left_arrow.png" alt="Précédent" width={50} height={50} className="drop-shadow-lg" />
        </button>

        <button
          onClick={scrollNext}
          className="absolute right-2 sm:right-6 top-1/2 z-20 -translate-y-1/2 flex items-center justify-center"
          aria-label="Suivant"
        >
          <Image src="/photos/right_arrow.png" alt="Suivant" width={50} height={50} className="drop-shadow-lg" />
        </button>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-4 sm:gap-6 pb-6 px-4 sm:px-12 md:px-16 lg:px-20 touch-pan-y">
            {items.map((item, index) => {
              const video = isVideo(item.src);

              return (
                <div
                  key={index}
                  className={`group relative flex-shrink-0 w-64 sm:w-72 md:w-80 lg:w-[22rem] xl:w-[26rem] aspect-[3/4] sm:aspect-[4/5] overflow-hidden rounded-2xl shadow-lg cursor-pointer snap-start ${index === items.length - 1 ? 'mr-4! sm:mr-6!' : ''}`}
                  onClick={() => setSelectedIndex(index)}
                >
                  <motion.div
                    className="relative h-full w-full"
                    whileHover={{ scale: 1.06 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    {video ? (
                      <video
                        src={item.src}
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        className="h-full w-full object-cover transition-all duration-500 group-hover:brightness-[0.8]"
                      />
                    ) : (
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        className="object-cover transition-all duration-500 group-hover:brightness-[0.8]"
                        loading="lazy"
                        sizes="(max-width: 640px) 260px, (max-width: 768px) 288px, (max-width: 1024px) 320px, 400px"
                      />
                    )}

                    <motion.div
                      className="absolute inset-0 pointer-events-none"
                      whileHover={{
                        background: "linear-gradient(to bottom, rgba(20,30,60,0.25) 0%, rgba(0,0,0,0.55) 100%)",
                      }}
                      transition={{ duration: 0.45, ease: "easeOut" }}
                    />
                    {/* Play icon */}
                    {video && (
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                        <div className="relative w-20 h-20">
                          <Image
                            src="/photos/play-icon.svg"
                            alt="Play"
                            fill
                            className="object-contain drop-shadow-2xl"
                          />
                        </div>
                      </div>
                    )}
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedIndex !== null && 
          <Lightbox
            items={items}
            selectedIndex={selectedIndex}
            setSelectedIndex={setSelectedIndex}
          />
        }
      </AnimatePresence>
    </>
  );
}