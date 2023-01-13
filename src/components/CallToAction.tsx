import { showOveralWarning } from "../utilities/UtilFunctions";

export default function CallToAction() {
  return (
    <div className=" flex flex-col items-center gap-11  bg-color-quaternary px-[10%] py-[11%] sm:py-[6%] sm:px-[32%] 2xl:px-[30%] ">
      <h2 className=" h1-style text-center text-color-secondary sm:w-[500px]  sm:items-start 2xl:w-[600px]">
        {"Train your app with Lobe"}
      </h2>
      <button
        onClick={() => {
          showOveralWarning();
        }}
        className="h-[42px] w-[148px] rounded-[50px] bg-color-primary bg-opacity-100 text-[23px] font-extrabold leading-none text-color-quaternary transition-transform duration-500 ease-in-out hover:scale-105 hover:transform sm:h-[50px] sm:w-[168px] sm:text-[25px] 2xl:h-[64px] 2xl:w-[200px] 2xl:text-[30px]"
      >
        Download
      </button>
    </div>
  );
}
