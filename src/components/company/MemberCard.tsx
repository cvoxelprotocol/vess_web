import { FC, ReactNode } from "react";
import Image from "next/image";
import Members from "@/contents/members.json";
import { MemberType } from "@/types";

type Props = {
  roles: string[];
  src?: string;
  name: string;
  children?: ReactNode;
};

const MemberCard: FC<MemberType> = ({
  roles,
  src,
  name,
  description,
  twitterURL,
  githubURL,
  vessURL,
}) => {
  return (
    <div className="flex flex-none flex-col pt-8 pb-6 px-5 w-72 h-auto rounded-3xl border border-outline bg-primary/5 ">
      <div className="flex flex-col items-center  h-fit ">
        {src ? (
          <div className="relative w-16 h-16 rounded-full overflow-hidden">
            <Image src={src} layout="fill" objectFit="cover" />
          </div>
        ) : (
          <div className="w-16 h-16 rounded-full bg-slate-300"></div>
        )}
        <h4 className=" mt-2 font-normal text-2xl text-on-primary-container">
          {name}
        </h4>
        <div className="mt-1 flex">
          {roles.map((role) => (
            <div className="mx-1 px-2 py-[2px] border border-primary bg-primary-container rounded-full text-xs ">
              {" "}
              {role}{" "}
            </div>
          ))}
        </div>
        {/* <div className="w-full mt-4 px-1 py-3 border-t border-outline text-on-primary-container">
          {description}
        </div> */}
      </div>
      <div className="flex items-center justify-center mt-4">
        {twitterURL && (
          <div className="mx-2">
            <a href={twitterURL}>
              <Image src="/icons/twitter.svg" width="24px" height="29px" />
            </a>
          </div>
        )}
        {githubURL && (
          <div className="mx-2">
            <a href={githubURL}>
              <Image src="/icons/github.svg" width="24px" height="24px" />
            </a>
          </div>
        )}
        {vessURL && (
          <div className="mx-2">
            <a href={vessURL}>
              <Image src="/icons/vess.svg" width="24px" height="26px" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default MemberCard;
