import { Link } from "react-router-dom";

interface IFoorterColumnProps {
  title: string;
  links: Array<{ name: string; href: string; isHRefExternal?: boolean }>;
}
export default function FooterColumn({ title, links }: IFoorterColumnProps) {
  return (
    <div className="flex flex-col gap-5 max-sm:items-center">
      <div className="whitespace-nowrap text-[19px] font-bold leading-none sm:text-[20px] 2xl:text-[23px]">
        {title}
      </div>
      {links.map((link, index) => {
        return link.isHRefExternal ? (
          <a
            key={index}
            className="w-fit whitespace-nowrap text-[19px] leading-none transition-transform duration-500 ease-in-out hover:scale-105 hover:transform sm:text-[20px]  2xl:text-[23px] "
            href={link.href}
            target="_blank"
            rel="noreferrer"
          >
            {link.name}
          </a>
        ) : (
          <Link
            key={index}
            className=" w-fit whitespace-nowrap text-[19px] leading-none transition-transform duration-500 ease-in-out hover:scale-105 hover:transform sm:text-[20px]  2xl:text-[23px]"
            to={link.href}
          >
            {link.name}
          </Link>
        );
      })}
    </div>
  );
}
