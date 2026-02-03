// profil.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Profil() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="
          relative mx-auto! lg:mx-0!
          max-w-[360px] xs:max-w-[400px]
          md:max-w-[440px] lg:max-w-[480px]
          w-full aspect-[4/5] rounded-3xl
          overflow-hidden shadow-2xl
          rotate-1 sm:rotate-2 lg:rotate-6
          hover:rotate-0 transition-transform
          duration-700 order-1 lg:order-2"
      >
        <Image
          src="/photos/IMG_1096.jpg"
          alt="Portrait"
          fill
          className="object-cover"
          priority
          sizes="(max-width: 640px) 92vw, (max-width: 1024px) 48vw, 480px"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
        className="space-y-8 text-center lg:text-left order-2 lg:order-1 pb-24! lg:pb-12! xl:pb-16!"
      >
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-10!">
          QUI SUIS-JE ?
        </h2>

        <div className="space-y-6 text-lg md:text-xl leading-relaxed">
          <p>Vidéaste et photographe basé à Paris.</p>
          <p>
            Depuis plus de 4 ans, je raconte des histoires visuelles pour des
            artistes, marques et événements.
          </p>
          <p>
            En constante évolution, je repousse les limites pour transformer les
            idées en expériences visuelles fortes.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
