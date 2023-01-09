import { lazy, Suspense } from "react";
import CallToAction from "../../components/CallToAction";
import Hero from "./components/hero/Hero";
const Features = lazy(() => import("./components/features/Features"));
const HowToUse = lazy(() => import("./components/howToUse/HowToUse"));
const Testimonials = lazy(
  () => import("./components/testimonials/Testimonials")
);

export default function Overview() {
  return (
    <main className="flex w-full flex-col">
      <Hero />
      <Suspense>
        <Features />
        <HowToUse />
        <Testimonials />
        <CallToAction />
      </Suspense>
    </main>
  );
}
