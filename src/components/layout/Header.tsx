import { FC } from "react";
import Image from "next/image";
import Button from "@/components/common/Button";
import Link from "next/link";

const Header: FC = () => {
  return (
    <header>
      <div className=" fixed h-20 right-0 left-0 z-50 lg:grid lg:grid-cols-3 px-5 lg:px-16 pt-5 pb-4 content-center bg-white/50 backdrop-blur-md">
        <div className="flex items-center">
          <Image
            src="/vess_logo_full@2x.png"
            alt="logo of VESS"
            width="125px"
            height="32px"
          />
        </div>
        <div className="hidden lg:flex justify-self-end items-center col-span-2">
          <div className=" dropdown dropdown-hover">
            <Button variant="text">Ecosystem ▼</Button>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Being developed</a>
              </li>
            </ul>
          </div>
          <div className=" dropdown dropdown-hover">
            <Button variant="text">Community ▼</Button>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Discord</a>
              </li>
              <li>
                <a>Twitter</a>
              </li>
            </ul>
          </div>
          <div className=" dropdown dropdown-hover">
            <Button variant="text">Resources ▼</Button>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Whitepaper</a>
                <a>Github</a>
                <Link href="/company"> Company </Link>
              </li>
            </ul>
          </div>
          <div className="w-4"></div>
          <Button> Go to App </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
