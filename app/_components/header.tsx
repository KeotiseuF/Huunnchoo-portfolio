"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <header style={{"display": pathname === "/" ? "none" : "flex"}} className="bg-[#bea993] text-white justify-between">
      <Link href="/" className="text-2xl">HUUNNCHOO</Link>
      <ul className="flex gap-10">
        <li>
          <Link href="/aboutme">A MON SUJET</Link>
        </li>
        <li>
          <Link href="/gallery">GALERIE</Link>
        </li>
        <li>
          <Link href="/contact">CONTACT</Link>
        </li>
      </ul>         
    </header>
  );
}