import Profil from "./profil";

export default function Page() {
  return (
    <section className="pt-10! min-h-[calc(100dvh-100px)] flex items-center justify-center px-5! sm:px-8! md:px-10! lg:px-12!" id="aboutme">
      <div className="w-full max-w-6xl mx-auto pb-20!">
        <Profil />
      </div>
    </section>
  );
}