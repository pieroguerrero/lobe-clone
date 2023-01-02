import { lazy, Suspense } from "react";
//import Features from "./components/features/Features";
const Features = lazy(() => import("./components/features/Features"));
import Hero from "./components/hero/Hero";
import HowToUse from "./components/HowToUse/HowToUse";

export default function Overview() {
  return (
    <main className="flex w-full flex-col ">
      <Hero />
      <Suspense>
        <Features />
      </Suspense>
      <HowToUse />
      <section>Testimonials</section>
    </main>
  );
}
