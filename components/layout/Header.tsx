import { FC } from "react";
import Image from "next/image";

const Header: FC = () => {
  return (
    <div className="lg:grid lg:grid-cols-2 mx-16">
      <div>
        <Image
          src="/vess_logo_full@2x.png"
          alt="logo of VESS"
          width="156px"
          height="40px"
        />
      </div>
      <div>
        <div>Discord</div>
        <div>Github</div>
        <div>Docs</div>
      </div>
    </div>
  );
};

export default Header;
