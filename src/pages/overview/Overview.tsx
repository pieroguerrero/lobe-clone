import { lazy, Suspense, useEffect } from "react";
import CallToAction from "../../components/CallToAction";
import { showOveralWarning } from "../../utilities/UtilFunctions";
import Hero from "./components/hero/Hero";
const Features = lazy(() => import("./components/features/Features"));
const HowToUse = lazy(() => import("./components/howToUse/HowToUse"));
const Testimonials = lazy(
  () => import("./components/testimonials/Testimonials")
);
const ToastContainer = lazy(() =>
  import("react-toastify").then((module) => ({
    default: module.ToastContainer,
  }))
);

export default function Overview() {
  useEffect(() => {
    showOveralWarning();
  }, []);
  return (
    <main className="flex w-full flex-col">
      <Hero />
      <Suspense>
        <Features />
        <HowToUse />
        <Testimonials />
        <CallToAction />
        <ToastContainer />
      </Suspense>
    </main>
  );
}
