import { FC } from "react";
import { useState } from "react";

type Props = { open: boolean };

const WrapMenu: FC<Props> = ({ open }) => {
  return (
    <>
      {open && (
        <div className="fixed z-[1000] w-screen h-screen top-0 left-0 bg-on-primary-container/70"></div>
      )}
    </>
  );
};

export default WrapMenu;
