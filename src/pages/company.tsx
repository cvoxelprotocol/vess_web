import Button from "@/components/common/Button";
import MemberCard from "@/components/company/MemberCard";
import { NextPage } from "next";
import Image from "next/image";
import { useEffect, useState, useCallback, useRef } from "react";
import { useSpring, config, animated } from "react-spring";
import { Link as Scroll } from "react-scroll";
import BurgerMenu from "@/components/company/BurgerMenu";
import Members from "@/contents/members.json";
import Link from "next/link";
import VessLine from "@/components/common/VessLine";
import Head from "next/head";

const Company: NextPage = () => {
  const membersDiv = useRef<HTMLDivElement>(null);
  const [preScrollPos, setPreScrollPos] = useState(0);
  const [isScrollDown, setIsScrollDown] = useState(true);
  const headerStyle = useRef(
    "text-center w-full py-3 fixed bg-white backdrop-blur-lg"
  );
  const burgerStyle = useRef("z-50 md:hidden");

  const title = "VESS Labs";
  const description =
    "VESS is a decentralized self-sovereign work credentials protocol that everyone can stack their work credentials and shape their work identities.";
  const url = "";
  const imgUrl = "https://vess.id/ogp.png";
  const imgWidth = 1200;
  const imgHeight = 630;

  useEffect(() => {
    // membersDiv.current!.scrollTo(200, 0);
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
        "z-40 text-center w-full py-3 px-0 fixed bg-white/80 backdrop-blur-lg transition md:-translate-y-20 duration-500 delay-300";
      burgerStyle.current = "z-50 md:hidden";
    } else {
      headerStyle.current =
        "z-40 text-center w-full py-3 px-0 fixed bg-white/80 backdrop-blur-lg transition duration-300 ";
      burgerStyle.current = "z-50 md:hidden";
    }
  }, [isScrollDown]);

  useEffect(() => {
    window.addEventListener("scroll", scrollEvent);
    return () => window.removeEventListener("scroll", scrollEvent);
  }, [scrollEvent]);

  return (
    <div className="flex justify-center w-full" id="outer-container">
      <Head>
        <title>VESS Labs</title>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1.0"
          key="viewport"
        />
        <link
          rel="icon"
          href="/icons/VESSLabs_favicon.svg"
          type="image/svg+xml"
        />
        <meta name="description" content="VESS Labs Company Page" />
        <meta property="og:url" content={url} key="ogurl" />
        <meta property="og:title" content={title} key="ogtitle" />
        <meta property="og:site_name" content={title} key="ogsite_name" />
        <meta
          property="og:description"
          content={description}
          key="ogdescription"
        />
        <meta property="og:type" content="website" key="ogtype" />
        <meta property="og:image" content={imgUrl} key="ogimage" />
        <meta
          property="og:image:width"
          content={String(imgWidth)}
          key="ogimagewidth"
        />
        <meta
          property="og:image:height"
          content={String(imgHeight)}
          key="ogimageheight"
        />
        <link rel="canonical" href={url} key="canonical" />
        <meta
          name="twitter:card"
          content="summary_large_image"
          key="twittercard"
        />
      </Head>

      <div className="w-full mx-auto bg-on-primary">
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
          <div className="w-full max-w-[1024px] grid grid-cols-2 mx-auto">
            <div className="flex items-center content-center mx-5">
              <Link href={"/"}>
                <Image
                  className="cursor-pointer"
                  src="/vesslabs_logo_full@2x.png"
                  alt="logo of VESS Labs"
                  width="148px"
                  height="30px"
                />
              </Link>
            </div>
            <nav className="hidden md:flex justify-end content-center lg:pr-0 pr-5 font-normal text-xl text-on-primary-container">
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
                <Scroll to="contact" smooth={true} duration={400} offset={-100}>
                  {" "}
                  Contact{" "}
                </Scroll>
              </Button>
            </nav>
          </div>
        </header>

        <main className="lg:px-0 px-5 max-w-[1024px] mx-auto" id="page-wrap">
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

              <div className="mr-5 mt-4 font-normal text-lg md:text-xl text-on-primary-container ">
                <VessLine className="w-full h-[6px]" />
                <div className="py-2 px-4">
                  VESS Labs is a company that is developing identity protocols
                  and services. Let’s take our identities back.
                </div>
              </div>
            </div>
            <div className="absolute md:relative flex-none w-20 md:w-[290px] h-screen md:h-full bg-gradient-to-b from-skyblue/10 via-oceanblue/50 to-waterpurple opacity-40 md:opacity-100"></div>
          </div>

          {/* MVV */}
          <div className="flex flex-col items-center mt-40 mb-20">
            <div className=" text-primary text-lg"> VISION </div>
            <div className=" text-on-primary-container font-sans-alt text-2xl md:text-4xl text-center">
              {" "}
              To portray every particles of our <strong>
                identities.
              </strong>{" "}
            </div>
            <div className="flex flex-col justify-center relative w-full h-40 -translate-y-4">
              <Image src="/bg-searoad.png" layout="fill" objectFit="cover" />
            </div>
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
                <a href="https://app.vess.id">Go to App</a>
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

          <div className="flex justify-center">
            <div
              className="grid md:grid-cols-2 gap-10 justify-items-center max-w-[720px]"
              ref={membersDiv}
            >
              {Members.members.map((member) => (
                <MemberCard {...member} />
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center mt-32 mb-8 " id="contact">
            <div className="mx-3">
              <h4 className="mb-2 text-primary md:text-3xl text-2xl">
                {" "}
                Company{" "}
              </h4>
            </div>
            <div className="relative w-[300px] h-2">
              <Image
                src="/sline.svg"
                alt="line"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <table className="mb-8 text-on-primary-container max-w-[720px] text-sm md:text-base">
              <thead className="hidden md:table-header-group">
                <tr className="border-b border-outline bg-primary-container/50">
                  <th className="px-4"></th>
                  <th className="py-2 "> Japanese </th>
                  <th className="py-2">English</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-outline">
                  <td className="pb-1 pt-4 px-4 md:px-8 font-bold">Name</td>
                  <td className="pb-1 pt-4 px-4 md:px-8">株式会社 VESS Labs</td>
                  <td className="hidden md:table-cell pb-1 pt-4 px-4 md:px-8">
                    VESS Labs Inc.
                  </td>
                </tr>
                <tr className="border-b border-outline">
                  <td className="pb-1 pt-4 px-4 md:px-8  font-bold">
                    Representative
                  </td>
                  <td className="pb-1 pt-4 px-4 md:px-8">
                    代表取締役社長
                    <br /> 藤森 侃太郎
                  </td>
                  <td className="hidden md:table-cell pb-1 pt-4 px-4 md:px-8">
                    CEO Kantaro Fujimori
                  </td>
                </tr>
                <tr className="border-b border-outline">
                  <td className="pb-1 pt-4 px-4 md:px-8 font-bold">
                    {" "}
                    Address{" "}
                  </td>
                  <td className="pb-1 pt-4 px-4 md:px-8">
                    東京都渋谷区神宮前六丁目23-4 桑野ビル2階
                  </td>
                  <td className="hidden md:table-cell pb-1 pt-4 px-4 md:px-8">
                    Kuwano Building 2F, 6-23-4, Jingumae, Shibuya, Tokyo, Japan
                  </td>
                </tr>
                <tr className="border-b border-outline">
                  <td className="pb-1 pt-4 px-4 md:px-8 font-bold">
                    {" "}
                    Established in{" "}
                  </td>
                  <td className="pb-1 pt-4 px-4 md:px-8">2021年10月</td>
                  <td className="hidden md:table-cell pb-1 pt-4 px-4 md:px-8">
                    October 2021
                  </td>
                </tr>
                <tr className="border-b border-outline">
                  <td className="pb-1 pt-4 px-4 md:px-8 font-bold">
                    {" "}
                    Capital{" "}
                  </td>
                  <td className="pb-1 pt-4 px-4 md:px-8">12,000,000円</td>
                  <td className="hidden md:table-cell pb-1 pt-4 px-4 md:px-8">
                    12 million yen
                  </td>
                </tr>
                <tr className="border-b border-outline">
                  <td className="pb-1 pt-4 px-4 md:px-8 font-bold"> E-mail </td>
                  <td
                    className="pb-1 pt-4 px-4 md:pl-0 md:text-center"
                    colSpan={2}
                  >
                    info@vess.id
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="mb-12">
              <Button>
                <a
                  href="mailto:info@vess.id"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contact us
                </a>{" "}
              </Button>
            </div>
          </div>
        </main>
        {/* Footer */}
        <footer className="flex px-10 h-14 md:h-28 bg-primary/5 items-center justify-between text-on-primary-container">
          <div className="hidden md:block">
            <Image
              src="/vesslabs_logo_full@2x.png"
              width="148px"
              height="30px"
            />
          </div>
          <div className="md:hidden block">
            <Image
              src="/vesslabs_logo_full@2x.png"
              width="74px"
              height="15px"
            />
          </div>
          <div className="text-xs md:text-sm">©️2022 VESS Labs Inc.</div>
        </footer>
      </div>
    </div>
  );
};

export default Company;
