import { FC } from "react";
import Image from "next/image";

const Footer: FC = () => {
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
        <div className="mb-3 lg:mb-0 mx-8 ">
          Ecosystem
          <ul className=" my-1 ml-2 px-2 pb-1 border-l border-on-primary font-light text-base">
            <li className="my-1">Being Developed</li>
          </ul>
        </div>
        <div className="my-3 lg:my-0 mx-8 ">
          Community
          <ul className=" my-1 ml-2 px-2 pb-1 border-l border-on-primary font-light text-base">
            <li className="my-1">Twitter</li>
            <li>Discord</li>
          </ul>
        </div>
        <div className="my-3 lg:my-0 mx-8 ">
          Resources
          <ul className=" my-1 ml-2 px-2 pb-1 border-l border-on-primary font-light text-base">
            <li className="my-1">Whitepaper</li>
            <li className="my-1">Github</li>
            <li> Company </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
