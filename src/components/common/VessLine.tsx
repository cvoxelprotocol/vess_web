import { FC } from "react";
import Image from "next/image";

type Props = {
  color?: string;
  className?: string;
};

const VessLine: FC<Props> = ({ color, className }) => {
  let imageSrc: string = "/sline.svg";

  switch (color) {
    case undefined:
      imageSrc = "/sline.svg";
      break;
    case "dark":
      imageSrc = "/sline_dark.svg";
      break;
    default:
      imageSrc = "/sline.svg";
  }

  return (
    <div className={"relative " + className}>
      <Image src={imageSrc} alt="line" layout="fill" objectFit="cover" />
    </div>
  );
};

export default VessLine;
