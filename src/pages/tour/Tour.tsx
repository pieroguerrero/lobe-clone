import CallToAction from "../../components/CallToAction";
import HeadingTitle from "../../components/HeadingTitle";
import TourVideoContainer from "./components/TourVideoContainer";

console.log("Tour file");
export default function Tour() {
  return (
    <main className="flex w-full flex-col pt-20 ">
      <HeadingTitle
        title={{ left: "Lobe", right: "Tour" }}
        description="Build your first machine learning model in ten minutes. No code or experience required."
      />
      <TourVideoContainer />
      <CallToAction />
    </main>
  );
}
