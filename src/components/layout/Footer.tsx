import { FC } from "react";
import Image from "next/image";
import { LinksType } from "@/types";
import { mapLinear } from "three/src/math/MathUtils";

const Footer: FC<LinksType> = ({ links }) => {
  return (
    <footer className="flex flex-col items-center lg:grid lg:grid-cols-2 px-16 pt-5 pb-4 content-center w-full mt-0 h-fit bg-primary">
      <div className="flex items-center my-4 lg:my-0">
        <Image
          src="/vess_logo_white@2x.png"
          alt="logo of VESS"
          width="125px"
          height="32px"
        />
      </div>
      <div className="flex justify-start flex-wrap lg:justify-end my-4 lg:my-0 font-normal text-lg text-on-primary">
        {links.map((link) => (
          <div className="mb-3 lg:mb-0 mx-8 ">
            {link["title"]}
            <ul className=" my-1 ml-2 px-2 pb-1 border-l border-on-primary font-light text-base">
              {link["listItems"].map((item) => (
                <li className="my-1">
                  <a href={item["href"]} target="_blank"> {item["label"]} </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
