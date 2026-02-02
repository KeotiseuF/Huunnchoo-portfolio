"use client"

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Carousel from "./carousel";
import { photos, videos } from "../services/medias";

export default function Home() {
  const searchParams = useSearchParams();
  const userChoice = searchParams.get('value');

  if(userChoice) return null

  const cssClass = {
    title: "text-2xl tracking-[20px]",
    parentContainer: "block",
    childContainer: "flex justify-between px-5! pt-8! pb-3!",
    link: "underline! underline-offset-7 decoration-2! hover:text-white",
  }

  return (
    <>
      <div className={`${cssClass.parentContainer} mb-5!`}>
        <div className={cssClass.childContainer}>
          <p className={cssClass.title}>PHOTOS</p>
          <Link className={cssClass.link} href={{ pathname: "/gallery", query: { value: 'photos' }}}>
            Tout afficher
          </Link>
        </div>
        <Carousel items={photos} />
      </div>
      <div className={`${cssClass.parentContainer} mb-[100px]!`}>
        <div className={cssClass.childContainer}>
          <p className={cssClass.title}>VIDÉOS</p>
          <Link className={cssClass.link} href={{ pathname: "/gallery", query: { value: 'videos' }}}>
            Tout afficher
          </Link>
        </div>
        <Carousel items={videos} />
      </div>
    </>
  )
}