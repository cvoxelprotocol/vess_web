import Button from "@/components/common/Button";
import MemberCard from "@/components/company/MemberCard";
import { NextPage } from "next";
import Image from "next/image";
import { useEffect, useState, useCallback, useRef } from "react";
import { useSpring, config, animated } from "react-spring";
import { Link as Scroll } from "react-scroll";
import BurgerMenu from "@/components/company/BurgerMenu";
import Members from "@/contents/members.json";
import { MembersType } from "@/types";
import Link from "next/link";

const Company: NextPage = () => {
  const membersDiv = useRef<HTMLDivElement>(null);
  const [preScrollPos, setPreScrollPos] = useState(0);
  const [isScrollDown, setIsScrollDown] = useState(true);
  const headerStyle = useRef(
    "z-40 w-[1024px] py-3 fixed grid grid-cols-2 bg-white backdrop-blur-lg"
  );
  const burgerStyle = useRef("");

  useEffect(() => {
    membersDiv.current!.scrollTo(200, 0);
    //console.log(Members.members);
  }, []);

  const { opacity, y } = useSpring({
    from: { opacity: 0, y: 100 },
    to: { opacity: 1, y: 0 },
    config: config.molasses,
  });

  const scrollEvent = useCallback(() => {
    if (typeof window !== "undefined") {
      const curScrollPos = window.scrollY;
      if (window.scrollY > preScrollPos) {
        setIsScrollDown(true);
      } else {
        setIsScrollDown(false);
      }
      setPreScrollPos(curScrollPos);
    } else {
      return;
    }
  }, [preScrollPos]);

  useEffect(() => {
    if (isScrollDown) {
      headerStyle.current =
        "z-40 max-w-[1024px] w-full py-3  pl-0 pr-0 lg:px-0 fixed grid grid-cols-2 bg-white/80 backdrop-blur-lg transition md:-translate-y-20 duration-500 delay-300";
      burgerStyle.current = "z-50 md:hidden";
    } else {
      headerStyle.current =
        "z-40 max-w-[1024px] w-full py-3  pl-0 pr-0 lg:px-0 fixed grid grid-cols-2 bg-white/80 backdrop-blur-lg transition duration-300 ";
      burgerStyle.current = "z-50 md:hidden";
    }
  }, [isScrollDown]);

  useEffect(() => {
    window.addEventListener("scroll", scrollEvent);
    return () => window.removeEventListener("scroll", scrollEvent);
  }, [scrollEvent]);

  return (
    <div className="flex justify-center" id="outer-container">
      <div className="max-w-[1024px] w-full  bg-on-primary">
        {/* Header */}
        <div className={burgerStyle.current}>
          <BurgerMenu
            right
            pageWrapId="page-wrap"
            outerContainerId="outer-container"
            width={280}
          />
        </div>

        <header className={headerStyle.current}>
          <div className="flex items-center content-center mx-5">
            <Image
              src="/vesslabs_logo_full@2x.png"
              alt="logo of VESS Labs"
              width="148px"
              height="30px"
            />
          </div>
          <nav className="hidden md:flex justify-end content-center lg:pr-0 pr-5 font-normal text-xl text-on-primary-container">
            <Button variant="text">
              <a> About </a>
            </Button>
            <Button variant="text">
              <Scroll to="product" smooth={true} duration={400} offset={-100}>
                {" "}
                Product{" "}
              </Scroll>
            </Button>
            <Button variant="text">
              <Scroll to="members" smooth={true} duration={400} offset={-100}>
                {" "}
                Members{" "}
              </Scroll>
            </Button>
            <Button variant="text">
              <a> Contact </a>
            </Button>
          </nav>
        </header>

        <main className="lg:px-0 px-5 " id="page-wrap">
          {/* Top Image */}
          <div className="flex md:flex-row flex-col items-center justify-center md:justify-between mb-0 md:my-24 h-screen md:h-[720px]">
            <div className="relative pt-20 md:pt-0 z-30 md:w-[576px]">
              <div className="mr-10 md:mr-5">
                <Image
                  src="/vesslabs_topImage@2x.png"
                  alt="Vess labs"
                  width="466px"
                  height="186px"
                />
              </div>
              <div className="mr-5 mt-4 py-2 px-4 border-t border-on-background font-normal text-lg md:text-xl text-on-primary-container ">
                VESS Labs is a company that is developing identity protocols and
                services. Let’s take our identities back.
              </div>
            </div>
            <div className="absolute md:relative flex-none w-20 md:w-[290px] h-screen md:h-full bg-gradient-to-b from-skyblue/10 via-oceanblue/50 to-waterpurple opacity-40 md:opacity-100"></div>
          </div>

          {/* Products */}
          <div
            className="flex mt-32 mb-14 md:mb-20 w-full items-center"
            id="product"
          >
            <div className="relative w-20 h-7 md:w-40 md:h-14">
              <Image
                src="/sline.svg"
                alt="line"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="mx-3 md:mx-4">
              <h4 className="text-primary md:text-3xl text-2xl"> Product </h4>
            </div>
          </div>

          <div className="flex flex-col-reverse md:flex-row items-center">
            <div className="mockup-window shrink md:w-[560px] h-fit border bg-skyblue/10">
              <div className=" h-fit bg-white">
                <Image
                  src="/vess_mock_window.png"
                  width="560px"
                  height="400px"
                />
              </div>
            </div>
            <div className="flex flex-col items-center md:items-start mb-10 self-center md:ml-10 py-2 grow">
              <div className="flex justify-center md:justify-start items-center mb-2">
                <Image
                  src="/vess_logo_full@2x.png"
                  width="165px"
                  height="42px"
                />
                <div className="py-1 px-3 mx-3 w-fit h-fit rounded-full text-sm font-medium text-on-primary bg-green-600">
                  Live{" "}
                </div>
              </div>
              <h4 className="lg:text-xl text-lg md:text-left text-center font-medium text-primary/50">
                {" "}
                Self-Sovereign Work Credentials Protocol{" "}
              </h4>
              <div className="relative my-4 w-full h-1">
                <Image
                  src="/sline.svg"
                  alt="line"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="mb-4 max-w-sm font-normal lg:text-lg md:text-left text-center text-base text-on-primary-container">
                VESS is a self-sovereign work credentials protocol. You can
                attach your transfer transactions your work details such as work
                title, description, deliverable and so on. Then, your works are
                visualized as colorful voxels. You can easily share your
                colorful voxels as your CV.
              </div>
              <Button variant="contained">
                <Link href="/">Go to App</Link>
              </Button>
            </div>
          </div>

          {/* Members */}
          <div
            className="flex mt-32 mb-14 md:mt-32 md:mb-20 w-full items-center justify-end"
            id="members"
          >
            <div className="mx-3 md:mx-4">
              <h4 className="text-primary text-2xl md:text-3xl"> Members </h4>
            </div>
            <div className="relative w-20 h-7 md:w-40 md:h-14">
              <Image
                src="/sline.svg"
                alt="line"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>

          <div className="flex overflow-scroll" ref={membersDiv}>
            {Members.members.map((member) => (
              <MemberCard {...member} />
            ))}
          </div>

          {/* Contact */}
          <div
            className="flex mt-32 mb-14 md:mb-20 w-full items-center"
            id="contact"
          >
            <div className="relative w-20 h-7 md:w-40 md:h-14">
              <Image
                src="/sline.svg"
                alt="line"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="mx-3 md:mx-4">
              <h4 className="text-primary md:text-3xl text-2xl"> Contact </h4>
            </div>
          </div>

          {/* Footer */}
          <footer className="flex px-10 h-28 bg-primary/5 items-center">
            <Image
              src="/vesslabs_logo_full@2x.png"
              width="148px"
              height="30px"
            />
          </footer>
        </main>
      </div>
    </div>
  );
};

export default Company;
