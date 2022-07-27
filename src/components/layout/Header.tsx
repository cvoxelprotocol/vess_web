import { FC } from "react";
import Image from "next/image";
import Button from "@/components/common/Button";
import Link from "next/link";
import WrapMenu from "../common/WrapMenu";
import { LinksType } from "@/types";

const Header: FC<LinksType> = ({ links }) => {
  return (
    <header>
      <div className=" fixed h-20 right-0 left-0 z-50 grid grid-cols-2 lg:grid-cols-3 px-5 lg:px-16 pt-5 pb-4 content-center bg-white/50 backdrop-blur-md">
        <div className="flex items-center">
          <Image
            src="/vess_logo_full@2x.png"
            alt="logo of VESS"
            width="125px"
            height="32px"
          />
        </div>
        <div className="lg:hidden flex justify-end">
          <WrapMenu links={links} />
        </div>
        <div className="hidden lg:flex justify-self-end items-center col-span-2">
          {links.map((link) => (
            <div className=" dropdown dropdown-hover">
              <Button variant="text">{link.title} ▼</Button>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 bg-primary/surface1 rounded-box w-52 text-on-primary-container"
                style={{ boxShadow: "0 2px 1px 0 rgb(175 169 173 / 1)" }}
              >
                {link.listItems.map((item) => (
                  <li className="rounded-none mx-2 my-1 hover:border-b-[1.5px] hover:bg-transparent border-primary/50">
                    {item.href == "" ? (
                      <a className="hover:bg-transparent py-2 text-on-primary-container/50">
                        {item.label}
                      </a>
                    ) : (
                      <a className="hover:bg-transparent py-2">
                        {" "}
                        {item.label}{" "}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="w-4"></div>
          <Button> Go to App </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
