import HeadingTitle from "../../components/HeadingTitle";

console.log("Examples file");
export default function Examples() {
  return (
    <main className="flex w-full flex-col pt-20">
      <HeadingTitle
        title={{ left: "Lobe", right: "Examples" }}
        description="One tool, endless possibilities. Discover all the machine learning models you can train with Lobe."
      />
    </main>
  );
}
