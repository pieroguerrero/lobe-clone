export default function CallToAction() {
  return (
    <div className=" flex flex-col items-center gap-12  bg-color-quaternary px-[10%] py-[11%] sm:py-[6%] sm:px-[32%] 2xl:px-[30%] ">
      <h2 className="   text-center text-5xl font-black text-color-secondary sm:items-start sm:text-[78px] 2xl:text-[100px]">
        Train your app with Lobe
      </h2>
      <button className="h-[42px] w-[148px] rounded-[50px] bg-color-primary bg-opacity-100 text-[23px] font-extrabold leading-none text-color-quaternary transition-transform duration-500 ease-in-out hover:scale-105 hover:transform sm:h-[50px] sm:w-[168px] sm:text-[25px] 2xl:h-[64px] 2xl:w-[200px] 2xl:text-[30px]">
        Download
      </button>
    </div>
  );
}
