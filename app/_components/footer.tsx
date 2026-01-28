"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer style={{"display": pathname === "/" ? "none" : "flex"}} className="bg-[#bea993] text-white justify-between px-8">
      <p>FOOTER</p>
      <p>Created By</p>
      <ul>
        <li>
          <Link href="/galerie">INSTAGRAM</Link>
        </li>
        <li>
          <Link href="/galerie">TIKTOK</Link>
        </li>
      </ul>         
    </footer>
  );
}