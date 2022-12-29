import Hero from "./components/hero/Hero";

export default function Overview() {
  return (
    <main className="flex flex-col">
      <Hero />
      <section>Features</section>
      <section>How to use</section>
      <section>Testimonials</section>
    </main>
  );
}
