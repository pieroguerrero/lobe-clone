import logoSVG from "../../assets/images/logo.svg";
import NavPaths from "../../utilities/NavPaths";
import FooterColumn from "./components/FooterColumn";
import RoundedLink from "./components/RoundedLink";
import svgReddit from "../../assets/images/footer/reddit.svg";
import svgYoutube from "../../assets/images/footer/youtube.svg";
import svgTwitter from "../../assets/images/footer/twitter.svg";
import Credits from "../../components/Credits";
export default function Footer() {
  return (
    <footer className="w-full">
      <hr className="  mx-6 border-color-tertiary border-opacity-40 sm:mx-[8%] 2xl:mx-[12%]" />
      <div className=" mt-[15%] mb-[20%] grid w-full grid-cols-2 grid-rows-3 justify-items-center gap-y-14 px-7 sm:mb-[10%]  sm:mt-[4%] sm:grid-cols-5 sm:grid-rows-1  sm:gap-y-0  sm:px-[12%] 2xl:px-[16%]">
        <div className="col-start-1 col-end-3 row-start-3 flex flex-col gap-5 max-sm:items-center sm:col-start-1 sm:col-end-2 sm:row-start-1">
          <div className="h-[22px]">
            <img
              loading="lazy"
              className="h-[18px] w-auto"
              alt="Logo"
              src={logoSVG}
            />
          </div>
          <div className=" whitespace-nowrap text-[19px] leading-none sm:text-[20px] 2xl:text-[23px]">
            A product by Microsoft.
          </div>
          <div className=" whitespace-nowrap text-[19px] leading-none sm:text-[20px] 2xl:text-[23px]">
            All rights reserved.
          </div>
          <div className=" whitespace-nowrap text-[19px] leading-none sm:text-[20px] 2xl:text-[23px]">
            © Microsoft 2021
          </div>
        </div>
        <div className=" col-start-1 row-start-1 sm:col-start-2 sm:row-start-1">
          <FooterColumn
            title="About"
            links={[
              { name: "Download", href: NavPaths.Examples.path },
              { name: "Overview", href: NavPaths.Base.path },
              { name: "Examples", href: NavPaths.Examples.path },
              { name: "Blog", href: NavPaths.Blog.path },
            ]}
          />
        </div>
        <div className=" col-start-2 row-start-1 sm:col-start-3 sm:row-start-1">
          <FooterColumn
            title="General"
            links={[
              { name: "Notice", href: NavPaths.Soon.path },
              { name: "License", href: NavPaths.Soon.path },
              { name: "Press Inquiry", href: NavPaths.Soon.path },
              { name: "Press Images", href: NavPaths.Soon.path },
            ]}
          />
        </div>
        <div className=" col-start-1 row-start-2 sm:col-start-4 sm:row-start-1">
          <FooterColumn
            title="Resources"
            links={[
              { name: "Help", href: NavPaths.Help.path },
              { name: "Tour", href: NavPaths.Tour.path },
              { name: "Contact", href: NavPaths.Soon.path },
              { name: "Privacy", href: NavPaths.Soon.path },
            ]}
          />
        </div>
        <div className=" col-start-2 row-start-2  flex flex-col items-center justify-center gap-4  sm:col-start-5 sm:row-start-1 sm:flex-row sm:items-start  sm:justify-start">
          <RoundedLink
            tooltip="Lobe Reddit"
            imgSrc={svgReddit}
            href="https://reddit.com/r/lobe"
          />
          <RoundedLink
            tooltip="Lobe Twitter"
            imgSrc={svgTwitter}
            href="https://twitter.com/lobe_ai"
          />
          <RoundedLink
            tooltip="Lobe Youtube"
            imgSrc={svgYoutube}
            href="https://www.youtube.com/channel/UCYryctkBIcCszPAFg79rwAw"
          />
        </div>
      </div>
      <Credits
        textColorClass="text-white font-bold"
        backgroundColorClass="bg-color-primary"
        url="https://github.com/pieroguerrero"
      />
    </footer>
  );
}
