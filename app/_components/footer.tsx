"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Footer() {
  const pathname = usePathname();
  if (pathname === "/") return null;

  const cssClass = {
    networkLink: "flex items-center gap-2 hover:text-black transition-colors",
    sizeImg: 25,
    spanLink: "hidden sm:inline",
  }

  return (
    <footer className="fixed bottom-0 w-full bg-[#bea993] text-white px-5! py-2!">
      <div className="flex flex-col-reverse items-center justify-between gap-3 text-sm sm:flex-row sm:gap-0 md:text-base">
        <p className="text-black/80 font-medium">
          © Site créé par{" "}
          <Link
            href="https://curtis-dev.eu"
            target="_blank"
            className="text-white underline-offset-4! hover:underline! transition-all hover:text-black"
          >
            KeotiseuF
          </Link>
        </p>

        <div className="flex items-center gap-6">
          <Link
            href="https://www.instagram.com/huunnchoo"
            target="_blank"
            className={cssClass.networkLink}
          >
            <Image
              src="/photos/instagram-logo.png"
              alt="Instagram"
              width={cssClass.sizeImg}
              height={cssClass.sizeImg}
            />
            <span className={cssClass.spanLink}>Instagram</span>
          </Link>

          <Link
            href="https://www.tiktok.com/@huunnchoo"
            target="_blank"
            className={cssClass.networkLink}
          >
            <Image
              src="/photos/tiktok-logo.png"
              alt="TikTok"
              width={cssClass.sizeImg}
              height={cssClass.sizeImg}
            />
            <span className={cssClass.spanLink}>TikTok</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}