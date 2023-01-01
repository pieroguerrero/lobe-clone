import Highlights from "./components/Highlights";
import Intro from "./components/Intro";
import ProjectsInfo from "./components/ProjectsInfo";

export default function Features() {
  return (
    <section className="flex flex-col bg-color-tertiary-bg">
      <Intro />
      <Highlights />
      <ProjectsInfo />
    </section>
  );
}
