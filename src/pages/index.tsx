import { GA_TRACKING_ID } from "@/lib/gtag";
import { ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Scene from "@/components/Scene";
import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/layout/Header";
import { Suspense, useState } from "react";
import Image from "next/image";
import BenefitCard from "@/components/common/BenefitCard";
import { useInView } from "react-intersection-observer";
import VessLine from "@/components/common/VessLine";
import Footer from "@/components/layout/Footer";
import MenuLinks from "@/contents/lpLinks.json";

const Home: NextPage = () => {
  const [isScrollEnd, setIsScrollEnd] = useState(false);
  const [benefitRef, benefitInView] = useInView({
    rootMargin: "-50px",
    triggerOnce: true,
  });
  const title = "VESS | Shape Your Work Identity";
  const description =
    "VESS is a decentralized self-sovereign work credentials protocol that everyone can stack their work credentials and shape their work identities.";
  const url = "";
  const imgUrl = "https://vess.id/ogp.png";
  const imgWidth = 1200;
  const imgHeight = 630;

  return (
    <div className="bg-background ">
      <Head>
        <title>VESS</title>
        <link rel="icon" href="/icons/VESS_favicon.ico" />
        <meta name="description" content="VESS Landing Page" />
        <style>
          {
            "@import url('https://fonts.googleapis.com/css2?family=Commissioner:wght@100;200;300;400;500;600;700;800;900&family=Noto+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Zen+Kaku+Gothic+New:wght@300;500;700&display=swap');"
          }
        </style>
        <meta name="description" content="VESS Landing Page" />
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
        {GA_TRACKING_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
        `,
              }}
            />
          </>
        )}
      </Head>
      <Header links={MenuLinks.links} />

      <main>
        <div className="h-screen w-full">
          <Canvas shadows>
            <ScrollControls pages={0}>
              <Scene setter={setIsScrollEnd} />
            </ScrollControls>
          </Canvas>
        </div>

        {/* UI Image */}
        <div className="relative flex items-center py-20 lg:py-32 pr-4 md:pr-16 h-[800px] md:h-[1100px] lg:h-screen w-full bg-black">
          <div
            className="absolute z-10 w-full h-[520px] top-0 right-0 opacity-50"
            style={{ backgroundImage: "url(/vess_gradient.png)" }}
          ></div>
          <div className="relative z-20 flex flex-col lg:flex-row items-center h-full w-full">
            <div
              className="flex-initial self-start lg:self-center mr-16 h-[300px] md:h-full w-[350px] md:w-[600px] md:max-h-[520px] lg:max-h-[640px] xl:max-h-[720px] 2xl:max-h-[808px] lg:w-[1143px] 2xl:min-w-[800px] bg-cover bg-right shrink"
              style={{ backgroundImage: "url(/ui_image.png)" }}
            ></div>
            <div className="py-12 lg:self-center self-end flex flex-col justify-center shrink-0 grow text-right lg:text-left">
              <div className="mb-8 font-bold text-[2rem] md:text-[3rem] lg:text-[4rem] xl:text-[4rem] 2xl:text-[7rem]  font-sans-alt text-on-primary-container/dark leading-[1.1]">
                {" "}
                Record{" "}
                <span className="font-light md:text-3xl 2xl:text-[3rem]">
                  and
                </span>{" "}
                <br />
                Visualize
                <br />
                Your Works{" "}
              </div>
              <VessLine
                className="w-[300px] md:w-full h-2 self-end"
                color="dark"
              />
              <div className="mt-4 px-2 w-[300px] md:w-[280px] lg:w-[320px] xl:w-[400px] 2xl:w-[600px] md:self-end lg:self-start text-base md:text-xl font-normal text-on-primary-container/dark">
                {" "}
                You can record your works as colorful voxel corresponding to
                your job genre, paid value, deliverables etc...
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="grid grid-rows-3 lg:grid-rows-1 lg:grid-cols-3 gap-0 lg:gap-6 h-[1500px] lg:h-[640px]">
          <div className="flex flex-col justify-center items-center bg-gradient-to-r lg:bg-gradient-to-t from-sunset via-yamabuki/30 to-lightgreen/0 h-full">
            <div className="translate-x-4">
              <Image src="/gas_free.png" width="203px" height="240px" />
            </div>
            <div className="mt-5 px-2 font-bold text-2xl text-on-primary-container border-b-4 border-orange-500">
              No Gas Fee
            </div>
          </div>
          <div className="flex flex-col justify-center items-center bg-gradient-to-l lg:bg-gradient-to-b from-yamabuki/70 via-lightgreen/30 to-emerald/0 h-full">
            <Image src="/create.png" width="243px" height="226px" />

            <div className="mt-5 px-2 font-bold text-2xl text-on-primary-container border-b-4 border-green-400">
              Simple Steps
            </div>
          </div>
          <div className="flex flex-col justify-center items-center bg-gradient-to-r lg:bg-gradient-to-t from-oceanblue/80 via-primary/10 to-sunset/0 h-full">
            <div className="translate-x-6">
              <Image src="/share.png" width="225px" height="215px" />
            </div>
            <div className="mt-5 px-2 font-bold text-2xl text-on-primary-container border-b-4 border-oceanblue">
              Easy to Share
            </div>
          </div>
        </div>

        {/* Benefits for... */}
        <div className="flex flex-col items-center justify-center w-full px-5 lg:px-14 bg-background">
          <div className="">
            <h2 className=" mt-28 text-on-primary-container font-normal text-3xl lg:text-4xl">
              Benefits of VESS
            </h2>
          </div>
          <h5 className=" w-full max-w-4xl mx-[240px] mt-6 mb-16 font-normal text-lg lg:text-xl text-primary/depth1 text-center">
            Although there are many usecases of VESS protocol. Here, we
            introduce some main benefits and usecases such for DAO, personal,
            job marketplace and in general.
          </h5>

          <div
            className="lg:mx-20 max-w-[1024px] w-full flex-col md:grid md:gap-10 md:grid-cols-2 md:grid-rows-2"
            ref={benefitRef}
          >
            {benefitInView && (
              <>
                <BenefitCard className=" flex flex-col md:flex-row md:mb-0 mb-6 py-9 px-8 md:px-12 col-span-2 raw-span-1">
                  <div className="w-full lg:w-80 self-center shrink lg:shrink-0">
                    <h3 className="mb-2 px-2 font-medium text-xl lg:text-3xl text-on-primary-container">
                      for Personal
                    </h3>
                    <VessLine className="w-full h-1" />
                    <h6 className=" mt-2 px-2 text-base lg:text-xl text-primary/depth1 leading-relaxed">
                      Your VESS VOXELs are your own work history on Web. <br />
                      You can easily share your VOXELs to your friends,
                      colleagues etc... as <strong>your CV</strong>.
                    </h6>
                    <a className="block mt-2 py-2 px-2 text-base lg:text-lg text-primary " href="https://app.vess.id/" target={"_blank"}>
                      {" "}
                      ▶︎ Go To App{" "}
                    </a>
                  </div>
                  <div className="hidden lg:block relative mt-5 h-40 md:h-auto w-full scale-[1.8] translate-x-20 md:translate-x-10 md:-translate-y-5">
                    <Image
                      src="/resume_image.png"
                      layout="fill"
                      objectFit="contain"
                    ></Image>
                  </div>
                </BenefitCard>
                <BenefitCard className="md:h-full md:my-0 my-6 py-10 px-8 col-span-1 raw-span-1">
                  <h3 className="mb-2 px-2 font-medium text-xl lg:text-2xl text-on-primary-container">
                    for Web3 Projects / DAOs
                  </h3>
                  <VessLine className="w-full h-1" />
                  <h6 className=" mt-2 px-2 text-base lg:text-xl text-primary/depth1 leading-relaxed">
                    Have you ever wondered what kind of background a
                    contributors have? <br />
                    With VESS, you can list the backgrounds of your community
                    members to help you recruit them.
                  </h6>
                  <a className="block mt-2 py-2 px-2 text-base lg:text-lg text-primary "  href="https://lp.vess.id/en/synapss/org/apply" target={"_blank"}>
                    {" "}
                    ▶︎ Learn More{" "}
                  </a>
                </BenefitCard>
                <BenefitCard className="py-10 px-8 col-span-1 raw-span-1">
                  <h3 className="mb-2 px-2 font-medium text-xl lg:text-2xl text-on-primary-container">
                    for Job Marketplace
                  </h3>
                  <VessLine className="w-full h-1" />
                  <h6 className=" mt-2 px-2 text-base lg:text-xl text-primary/depth1 leading-relaxed">
                    If you are running a job marketplace, you can evolve it into
                    greater by incorporating VESS. <br />
                    VESS is working on an SDK and API development for that.
                  </h6>
                  <a className="block mt-2 py-2 px-2 text-base lg:text-lg text-primary "  href="https://lp.vess.id/en/synapss/org/apply" target={"_blank"}>
                    {" "}
                    ▶︎ Learn More{" "}
                  </a>
                </BenefitCard>
              </>
            )}
          </div>
        </div>

        {/* Join us */}
        <div
          className="flex flex-col items-center mt-16 py-8 w-screen h-[320px] bg-center bg-cover"
          style={{ backgroundImage: "url(/bg-searoad.png)" }}
        >
          <h4 className="block text-4xl text-on-primary-container font-medium">
            Join us
          </h4>
          <div className="flex justify-center md:justify-between items-center mt-12 w-full max-w-5xl">
            <a
              className="block mx-6 md:mx-12 w-20 h-24"
              href="https://github.com/cvoxelprotocol"
              target={"_blank"}
            >
              <div className="hidden md:block">
                <Image src="/icons/github.svg" width="80px" height="80px" />
                <h6 className="mx-2 font-medium text-lg text-on-primary-container text-center ">
                  Github
                </h6>
              </div>
              <div className="md:hidden flex flex-col items-center ">
                <Image src="/icons/github.svg" width="48px" height="48px" />
                <h6 className="mx-2 mt-2 font-medium text-lg text-on-primary-container text-center ">
                  Github
                </h6>
              </div>
            </a>
            <a
              className="block mx-2 md:mx-12 w-20 h-24"
              href="https://discord.gg/gvkDnTNHJQ"
              target={"_blank"}
            >
              <div className="hidden md:block">
                <Image src="/icons/discord.svg" width="80px" height="80px" />
                <h6 className="mx-2 font-medium text-lg text-on-primary-container text-center ">
                  Discord
                </h6>
              </div>
              <div className="md:hidden flex flex-col items-center">
                <Image src="/icons/discord.svg" width="48px" height="48px" />
                <h6 className="mx-2 mt-2 font-medium text-lg text-on-primary-container text-center ">
                  Discord
                </h6>
              </div>
            </a>
            <a
              className="block mx-6 md:mx-12 w-20 h-24"
              href="https://twitter.com/vess_id"
              target={"_blank"}
            >
              <div className="hidden md:block">
                <Image src="/icons/twitter.svg" width="80px" height="80px" />
                <h6 className="mx-2 font-medium text-lg text-on-primary-container text-center ">
                  Twitter
                </h6>
              </div>
              <div className="md:hidden flex flex-col items-center">
                <Image src="/icons/twitter.svg" width="48px" height="48px" />
                <h6 className="mx-2 mt-2 font-medium text-lg text-on-primary-container text-center ">
                  Twitter
                </h6>
              </div>
            </a>
          </div>
        </div>
      </main>
      {/* Footer */}
      <Footer links={MenuLinks.links} />
    </div>
  );
};

export default Home;
