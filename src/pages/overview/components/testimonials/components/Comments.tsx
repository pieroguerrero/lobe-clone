import imgAvatar1 from "../../../../../assets/images/testimonials/avatar1@2x.jpg";
import imgAvatar2 from "../../../../../assets/images/testimonials/avatar2@2x.jpg";
import imgAvatar3 from "../../../../../assets/images/testimonials/avatar3@2x.jpg";
import CommentItem from "./CommentItem";
export default function Comments() {
  return (
    <div className="w-full pl-7 sm:px-[10%] 2xl:px-[14%]">
      <div className="flex w-full justify-between gap-6 max-sm:carousel-end max-sm:carousel sm:gap-0 2xl:h-[780]">
        <div className=" max-sm:carousel-item">
          <CommentItem
            imageSrc={imgAvatar1}
            text="As soon as I used Lobe I was completely blown away. I don’t have to spend days trying to learn machine learning. Simply label some images and boom, it really just works."
            fullNAme="Chris Cachor"
            position="Software Engineer"
          />
        </div>
        <div className=" max-sm:carousel-item  sm:mt-14">
          <CommentItem
            imageSrc={imgAvatar2}
            text="We’ve been using Lobe to quickly process previously untapped sources of data so that we can improve our models of nature-dependent tourism to promote better decision-making in our oceans."
            fullNAme="Kate Longley-Wood"
            position="Ocean Mapper"
          />
        </div>
        <div className=" max-sm:carousel-item sm:mt-28">
          <CommentItem
            imageSrc={imgAvatar3}
            text="Lobe is so easy and takes so much of the complicated stuff out of machine learning. Even my kid was begging me to sit in front of the computer and categorize my bees for me."
            fullNAme="Sean Cusack"
            position="Beekeeper"
          />
        </div>
      </div>
    </div>
  );
}
