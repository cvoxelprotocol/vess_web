import { LinksType } from "@/types";
import { FC, useEffect } from "react";
import { useState } from "react";
import Button from "./Button";

type Props = {
  width?: string;
} & LinksType;

const WrapMenu: FC<Props> = ({ width, links }) => {
  const [isOpen, setOpen] = useState(false);
  const [menuStyle, setMenuStyle] = useState(
    "fixed z-[2000] h-screen bg-primary/surface1 top-0 right-0 transition duration-300 translate-x-[100%]"
  );
  const [bgStyle, setBgStyle] = useState(
    "fixed z-[1000] w-screen h-screen top-0 left-0 bg-on-primary-container/70 transition duration-300 opacity-0 invisible"
  );

  const burgerClicked = () => {
    setOpen(true);
  };

  const crossClicked = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (isOpen == true) {
      setMenuStyle(
        "fixed pt-20 px-7 z-[2000] h-screen w-3/5 min-w-[300px] bg-primary/surface1 top-0 right-0 transition duration-300"
      );
      setBgStyle(
        "fixed z-[1000] w-screen h-screen top-0 left-0 bg-on-primary-container/70 transition duration-300 opacity-1 visible"
      );
    } else if (isOpen == false) {
      setMenuStyle(
        "fixed pt-20 px-7 z-[2000] h-screen bg-primary/surface1 top-0 right-0 transition duration-300 translate-x-[100%]"
      );
      setBgStyle(
        "fixed z-[1000] w-screen h-screen top-0 left-0 bg-on-primary-container/70 transition duration-300 opacity-0 pointer-events-none"
      );
    }
  }, [isOpen]);

  return (
    <div>
      <div className={bgStyle} onClick={crossClicked} />
      <div className={menuStyle}>
        <button
          className={"batsu top-5 right-5"}
          onClick={crossClicked}
        ></button>
        {links.map((link) => (
          <div className="mb-6">
            <h6 className="pb-2 font-medium text-sm text-outline border-b border-outline">
              {link.title.toUpperCase()}
            </h6>
            <ul className="mt-1 text-lg text-on-primary-container">
              {link.listItems.map((item) =>
                item.href == "" ? (
                  <li className="py-1 text-on-primary-container/50">
                    <a href={item.href}>{item.label}</a>
                  </li>
                ) : (
                  <li className="py-1">
                    <a href={item.href}>{item.label}</a>
                  </li>
                )
              )}
            </ul>
          </div>
        ))}
        <a href="https://app.vess.id">
          <Button size="full">Go to App</Button>
        </a>
      </div>
      <button
        className=" flex flex-col justify-between items-center w-8 h-8"
        onClick={burgerClicked}
      >
        <div className="w-full h-[2px] bg-on-primary-container"></div>
        <div className="w-full h-[2px] bg-on-primary-container"></div>
        <div className="w-full h-[2px] bg-on-primary-container"></div>
      </button>
    </div>
  );
};

WrapMenu.defaultProps = {
  width: "300px",
};

export default WrapMenu;
