import Link from "next/link";

export default function Page() {
  return (
    <main>
      <div className="flex flex-col justify-center items-center gap-y-[25%] h-screen w-full">
        <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl text-black relative z-1">
          HUUNNCHOO
        </h1>
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="/VAC_drone.mp4"
          autoPlay
          loop
          muted
          playsInline // important for mobile Safari
        >
          Votre navigateur ne supporte pas cette vidéo.
        </video>
        <Link className="text-black! relative border p-[15px]!" href="/gallery">PORTFOLIO</Link>
      </div>
    </main>
  );
}
