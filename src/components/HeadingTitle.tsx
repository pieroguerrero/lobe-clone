interface IHeadingTitle {
  title: { left: string; right: string };
  description: string;
}
export default function HeadingTitle({ title, description }: IHeadingTitle) {
  return (
    <section className="flex flex-col items-center pt-9 sm:pt-14">
      <h1 className=" h1-style">
        <span className="text-color-secondary">{title.left}</span>{" "}
        <span className="text-color-primary">{title.right}</span>
      </h1>
      <p className="mt-3 max-w-[317px] text-center text-[22px] font-medium leading-[1.15] text-color-secondary antialiased sm:mt-5 sm:w-full sm:max-w-[610px] sm:text-[32px] 2xl:max-w-[710px] 2xl:text-[39px]">
        {description}
      </p>
    </section>
  );
}
