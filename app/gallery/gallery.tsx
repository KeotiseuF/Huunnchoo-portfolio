"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { photos, videos } from "../services/medias";
import Lightbox from "./lightbox";

export default function Gallery() {
  const searchParams = useSearchParams();
  const user_choice = searchParams.get("value");
  const items = user_choice === "photos" ? 
                photos : user_choice === "videos" ?
                videos : null;
  const [selectedIndex, setSelectedIndex] = useState(null);

  if (!user_choice) return;

  return (
    <>
      <div
        id="gallery"
        className="
          w-full mx-auto! px-4! sm:px-6! lg:px-8! py-12! gap-2
          grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4
          auto-rows-fr
          sm:mb-[40px]!
          mb-[70px]!
        "
        style={{ display: selectedIndex !== null ? "none" : "grid" }}
      >
        {items.map((item, index) => (
          <motion.div
            key={index}
            className="
              group relative overflow-hidden cursor-pointer 
              shadow-lg bg-gradient-to-br from-gray-900/10 to-black/5
              aspect-square
              rounded-3xl
              will-change-transform
            "
            whileHover={{ scale: 1.04, transition: { duration: 0.35 } }}
            onClick={() => setSelectedIndex(index)}
          >
            {user_choice === "videos" ? (
              <video
                src={item.src}
                muted
                loop
                playsInline
                preload="metadata"
                className="h-full w-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-[0.8]"
              />
            ) : (
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:brightness-[0.8]"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                quality={85}
              />
            )}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              whileHover={{
                background:
                  "linear-gradient(to bottom, rgba(20,30,60,0.25) 0%, rgba(0,0,0,0.55) 100%)",
              }}
              transition={{ duration: 0.45, ease: "easeOut" }}
            />
            {/* Play icon */}
            {user_choice === "videos" && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28">
                  <Image
                    src="/photos/play-logo.png"
                    alt="Play"
                    fill
                    className="object-contain drop-shadow-2xl"
                  />
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedIndex !== null && (
          <Lightbox
            items={items}
            selectedIndex={selectedIndex}
            setSelectedIndex={setSelectedIndex}
          />
        )}
      </AnimatePresence>
    </>
  );
}
