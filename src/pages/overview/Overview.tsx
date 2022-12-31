import { lazy, Suspense } from "react";
//import Features from "./components/features/Features";
const Features = lazy(() => import("./components/features/Features"));
import Hero from "./components/hero/Hero";

export default function Overview() {
  return (
    <main className="flex w-full flex-col ">
      <Hero />
      <Suspense>
        <Features />
      </Suspense>
      <section>How to use</section>
      <section>Testimonials</section>
    </main>
  );
}
