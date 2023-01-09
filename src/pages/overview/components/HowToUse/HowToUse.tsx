import imgLabelMobile from "../../../../assets/images/howto/Label-mobile.jpg";
import imgLabel from "../../../../assets/images/howto/Label.jpg";
import imgTrainMobile from "../../../../assets/images/howto/Train-mobile.jpg";
import imgTrain from "../../../../assets/images/howto/Train.jpg";
import imgUseMobile from "../../../../assets/images/howto/Use-mobile.jpg";
import imgUse from "../../../../assets/images/howto/Use.jpg";
import MediaQueries from "../../../../utilities/MediaQueries";
import Step from "./components/Step";

export default function HowToUse() {
  const isMinWidth640px = MediaQueries.minWidth640px.matches;
  return (
    <section className=" flex flex-col">
      <div className="mt-12 mb-11 flex w-full flex-col px-7 sm:mb-14 sm:mt-24 sm:px-[12%]  2xl:px-[16%]">
        <h2 className=" text-[46px] font-extrabold leading-[0.8] text-color-secondary antialiased sm:w-full sm:text-[78px] 2xl:text-[100px]">
          Label, Train, <span className=" text-color-primary">Use</span>
        </h2>
        <p className="mt-4 max-w-[700px] text-[22px] font-medium leading-[1.15] antialiased sm:w-full sm:text-[32px] 2xl:text-[39px]">
          Lobe simplifies the process of machine learning into three easy steps.
          Collect and label your images. Train your model and understand your
          results. Then play, improve, and export your model.
        </p>
      </div>
      <div className="flex flex-col sm:gap-16">
        <Step
          src={isMinWidth640px ? imgLabel : imgLabelMobile}
          tooltip="Finally, you can add image to Lobe from your computer, or use your webcam to get predictions in real-time for images your model has never seen. Mark them correct or incorrect to add them to your dataset."
          titleL="Label"
          titleR="your images"
          description="Collect bursts using your webcam, or drag in a folder of images from your computer. Then quickly label your images to create a machine learning dataset."
          textSide={isMinWidth640px ? "left" : "none"}
        />
        <Step
          src={isMinWidth640px ? imgTrain : imgTrainMobile}
          tooltip="Once you've added and labeled images, Lobe will automatically start training and showing the predicted label for each image."
          titleL="Train"
          titleR="automatically"
          description="Automatically train on your own computer without any setup or configuration. Understand the strengths and weaknesses of your model with live visual results."
          textSide={isMinWidth640px ? "right" : "none"}
        />
        <Step
          src={isMinWidth640px ? imgUse : imgUseMobile}
          tooltip="Finally, you can add image to Lobe from your computer, or use your webcam to get predictions in real-time for images your model has never seen. Mark them correct or incorrect to add them to your dataset."
          titleL="Use"
          titleR="your model"
          description="Use your model with your webcam or images from your computer. Improve your results by giving your model feedback on its predictions, then finally export it to your app."
          textSide={isMinWidth640px ? "left" : "none"}
        />
        <br />
      </div>
    </section>
  );
}
