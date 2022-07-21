import { FC } from "react";
import Image from "next/image";
import Button from "@/components/common/Button";

const Header: FC = () => {
  return (
    <header>
      <div className=" fixed h-20 right-0 left-0 z-50 lg:grid lg:grid-cols-2 px-16 pt-5 pb-4 content-center bg-white/50 ">
        <div className="flex items-center">
          <Image
            src="/vess_logo_full@2x.png"
            alt="logo of VESS"
            width="125px"
            height="32px"
          />
        </div>
        <div className="flex justify-self-end items-center">
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
