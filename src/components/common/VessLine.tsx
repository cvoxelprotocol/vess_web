import { FC } from "react";
import Image from "next/image";

type Props = {
  className?: string;
};

const VessLine: FC<Props> = ({ className }) => {
  return (
    <div className={"relative " + className}>
      <Image src="/sline.svg" alt="line" layout="fill" objectFit="cover" />
    </div>
  );
};

export default VessLine;
