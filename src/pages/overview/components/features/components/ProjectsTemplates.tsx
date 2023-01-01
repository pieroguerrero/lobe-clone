import imgClassification from "../../../../../assets/images/features/Classification.jpg";
import imgDetection from "../../../../../assets/images/features/Detection.jpg";
import imgTabular from "../../../../../assets/images/features/Tabular.jpg";
import vidClassification from "../../../../../assets/videos/features/Classification.mp4";
import vidDetection from "../../../../../assets/videos/features/Detection.mp4";
import vidTabular from "../../../../../assets/videos/features/Tabular.mp4";
import MediaQueries from "../../../../../utilities/MediaQueries";
import ProjectInfoCard from "./ProjectInfoCard";

export default function ProjectsTemplates() {
  return (
    <>
      {MediaQueries.minWidth640px.matches ? (
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
      ) : (
        <div className="carousel-end carousel rounded-box mt-7 ml-4 mb-14">
          <div className="carousel-item">
            <ProjectInfoCard
              src={vidClassification}
              srcFallback={imgClassification}
              title="Image Classification"
              tooltip="Animated icon depicting image classification with Lobe using deep learning."
              description="Label an image based on its content."
              isAvailable={true}
            />
          </div>
          <div className="carousel-item">
            <ProjectInfoCard
              src={vidDetection}
              srcFallback={imgDetection}
              title="Object Detection"
              tooltip="Animated icon depicting object detection in images using deep learning with Lobe."
              description="Locate an object inside of an image."
              isAvailable={false}
            />
          </div>
          <div className="carousel-item">
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
      )}
    </>
  );
}
