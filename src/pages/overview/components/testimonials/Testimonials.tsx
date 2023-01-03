import Comments from "./components/Comments";
import ExamplesCorusel from "./components/ExamplesCorusel";
import Export from "./components/Export";

export default function Testimonials() {
  return (
    <section className="flex w-full flex-col bg-color-tertiary-bg">
      <Export />
      <Comments />
      <ExamplesCorusel />
    </section>
  );
}
