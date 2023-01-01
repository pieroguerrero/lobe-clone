import imgClassification from "../../../../../assets/images/features/Classification.jpg";
import imgDetection from "../../../../../assets/images/features/Detection.jpg";
import imgTabular from "../../../../../assets/images/features/Tabular.jpg";
import vidClassification from "../../../../../assets/videos/features/Classification.mp4";
import vidDetection from "../../../../../assets/videos/features/Detection.mp4";
import vidTabular from "../../../../../assets/videos/features/Tabular.mp4";
import ProjectInfoCard from "./ProjectInfoCard";

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
      <div className="flex sm:mt-16 sm:justify-between">
        <ProjectInfoCard
          src={vidClassification}
          srcFallback={imgClassification}
          title="Image Classification"
          tooltip="Animated icon depicting image classification with Lobe using deep learning."
          description="Label an image based on its content."
          isAvailable={true}
        />
        <ProjectInfoCard
          src={vidDetection}
          srcFallback={imgDetection}
          title="Object Detection"
          tooltip="Animated icon depicting object detection in images using deep learning with Lobe."
          description="Locate an object inside of an image."
          isAvailable={false}
        />
        <ProjectInfoCard
          src={vidTabular}
          srcFallback={imgTabular}
          title="Data Classification"
          tooltip="Animated icon depicting tabular problem types, where Lobe uses deep learning to understand data in tables and spreadsheets."
          description="Label data in a table based on its content."
          isAvailable={false}
        />
      </div>
    </div>
  );
}
