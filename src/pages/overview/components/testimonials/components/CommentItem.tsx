import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

interface Props {
  imageSrc: string;
  text: string;
  fullNAme: string;
  position: string;
}
export default function CommentItem({
  imageSrc,
  text,
  fullNAme,
  position,
}: Props) {
  return (
    <div className="flex h-[430px] w-[292px] flex-col justify-between rounded-[32px] bg-color-quaternary p-6 antialiased duration-200 hover:scale-105 hover:duration-200 sm:h-[506px] sm:w-[336px] sm:p-8 sm:shadow-2xl 2xl:h-[580px]  2xl:w-[435px] 2xl:p-12">
      <div className="flex flex-col gap-9 2xl:gap-12">
        <LazyLoadImage
          src={imageSrc}
          alt="person avatar"
          effect="blur"
          className=" h-14 max-h-14 w-14 rounded-full object-cover"
        />
        <p className=" text-[21px] font-medium leading-tight text-color-secondary sm:text-[25px] 2xl:text-[28px]">
          {text}
        </p>
      </div>

      <div className="flex flex-col">
        <p className=" text-[22px] font-bold text-color-secondary sm:text-[26px] 2xl:text-[29px]">
          {fullNAme}
        </p>
        <p className=" text-[22px] font-bold leading-none text-color-tertiary sm:text-[26px] 2xl:text-[29px]">
          {position}
        </p>
      </div>
    </div>
  );
}
