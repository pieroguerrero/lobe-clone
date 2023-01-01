import imgAnywhere from "../../../../../assets/images/features/Anywhere.jpg";
import imgEasy from "../../../../../assets/images/features/Easy.jpg";
import imgPrivate from "../../../../../assets/images/features/Private.jpg";
import HighlightItem from "./HighlightItem";

export default function Highlights() {
  return (
    <div className="mx-8 mt-5 flex w-full flex-col gap-7  sm:mx-0 sm:-mt-10 sm:flex-row sm:justify-center sm:gap-10">
      <HighlightItem
        src={imgEasy}
        alt={"Easy"}
        title="Easy to Use"
        description="Designed to be easy enough for anyone to use. No code or experience
            required."
        toltip="Animated lightbulb icon indicating how easy it is to start training machine learning models with Lobe."
      />
      <HighlightItem
        src={imgPrivate}
        alt={"Private"}
        title="Free and Private"
        description="Train for free on your own computer without uploading your data to
            the cloud."
        toltip="Animated lock icon indicating that Lobe is a safe, secure, and private way to train machine learning models."
      />
      <HighlightItem
        src={imgAnywhere}
        alt={"Anywhere"}
        title="Export Anywhere"
        description="Available for Mac and Windows. Export your model and ship it on any
            platform you choose."
        toltip="Animated ship icon indicating that machine learning models created with Lobe can be exported and shipped on any platform."
      />
    </div>
  );
}
