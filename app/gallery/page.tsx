import Home from "./home";
import Gallery from "./gallery";
import { Suspense } from "react";

export default function Page() {
  return (
    <main>
      <Suspense>
        <Home />
        <Gallery />
      </Suspense>
    </main>
  )
}