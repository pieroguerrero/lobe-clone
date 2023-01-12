export default function ComingSoon() {
  return (
    <main className="flex  w-full flex-col  pt-9 ">
      <section className="h-[calc(100vh_/_3_*_2)]">
        <div className="flex h-full flex-col  items-center justify-center">
          <h1 className=" h1-style">
            <span className=" text-color-secondary">Coming</span>{" "}
            <span className=" text-color-primary">soon...</span>
          </h1>
          <p className="mt-3 max-w-[317px] text-center text-[22px] font-medium leading-[1.15] text-color-secondary antialiased sm:mt-5 sm:w-full sm:max-w-[610px] sm:text-[32px] 2xl:max-w-[710px] 2xl:text-[39px]">
            We are working on this.
          </p>
        </div>
      </section>
    </main>
  );
}
