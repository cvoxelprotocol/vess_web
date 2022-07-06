import { FC } from "react";
import Image from "next/image";
import Button from "components/common/Button";

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
          <Button variant="text">Discord</Button>
          <Button variant="text">Github</Button>
          <Button variant="text">Docs</Button>
          <div className="w-4"></div>
          <Button> Go to App </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
