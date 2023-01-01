import ProjectsTemplates from "./ProjectsTemplates";

export default function ProjectsInfo() {
  return (
    <div className="flex- flex-col sm:mb-32 sm:px-[12%] 2xl:px-[16%]">
      <div className="mx-8 mt-16 sm:mx-0 sm:mt-0">
        <h3 className=" text-4xl font-extrabold antialiased sm:mt-[7%] sm:text-[53px] 2xl:mt-[9%] 2xl:text-[64px]">
          <span className=" text-color-primary">Project</span>{" "}
          <span className=" text-color-secondary">Templates</span>
        </h3>
        <p className=" mt-2 text-[22px] font-medium leading-[1.15] antialiased sm:mt-6 sm:w-[650px] sm:text-[32px] 2xl:mt-8 2xl:w-[800px] 2xl:text-[39px]">
          Lobe will automatically select the right machine learning architecture
          for your project. Image classification is available now, with more
          templates coming soon.
        </p>
      </div>
      <ProjectsTemplates />
    </div>
  );
}
