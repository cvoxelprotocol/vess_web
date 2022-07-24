import { ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Scene from "@/components/Scene";
import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/layout/Header";
import { isScrollFin } from "recoilState/scene";
import { RecoilRoot, useRecoilValue } from "recoil";
import { Suspense, useState } from "react";
import Button from "@/components/common/Button";
import Image from "next/image";
import BenefitCard from "@/components/common/BenefitCard";
import { useInView } from "react-intersection-observer";
import VessLine from "@/components/common/VessLine";
import Footer from "@/components/layout/Footer";
import { url } from "inspector";
import WrapMenu from "@/components/common/WrapMenu";

const Home: NextPage = () => {
  const [isScrollEnd, setIsScrollEnd] = useState(false);
  const [benefitRef, benefitInView] = useInView({
    rootMargin: "-50px",
    triggerOnce: true,
  });

  return (
    <body className="bg-background ">
      {/* <WrapMenu open /> */}
      <Head>
        <title>VESS</title>
        <meta name="description" content="VESS Landing Page" />
        <style>
          {
            "@import url('https://fonts.googleapis.com/css2?family=Commissioner:wght@100;200;300;400;500;600;700;800;900&family=Noto+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Zen+Kaku+Gothic+New:wght@300;500;700&display=swap');"
          }
        </style>
      </Head>
      <Header />

      <main>
        <div className="h-screen w-full">
          <Canvas shadows>
            <ScrollControls pages={0}>
              <Scene setter={setIsScrollEnd} />
            </ScrollControls>
          </Canvas>
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
                      Your VESS voxels are your own work history on Web. <br />
                      You can easily share your voxels to your friends,
                      colleagues etc... as <strong>your CV</strong>.
                    </h6>
                    <a className="block mt-2 py-2 px-2 text-base lg:text-lg text-primary ">
                      {" "}
                      ▶︎ Learn More{" "}
                    </a>
                  </div>
                  <div className="relative mt-5 h-40 md:h-auto w-full md:translate-x-20">
                    <Image
                      src="/illust_working.png"
                      layout="fill"
                      objectFit="contain"
                    ></Image>
                  </div>
                </BenefitCard>
                <BenefitCard className="md:h-full md:my-0 my-6 py-10 px-8 col-span-1 raw-span-1">
                  <h3 className="mb-2 px-2 font-medium text-xl lg:text-2xl text-on-primary-container">
                    for DAO Managers
                  </h3>
                  <VessLine className="w-full h-1" />
                  <h6 className=" mt-2 px-2 text-base lg:text-xl text-primary/depth1 leading-relaxed">
                    Have you ever wondered what kind of background a
                    contributors have? <br />
                    With VESS, you can list the backgrounds of your community
                    members to help you recruit them.
                  </h6>
                  <a className="block mt-2 py-2 px-2 text-base lg:text-lg text-primary ">
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
                  <a className="block mt-2 py-2 px-2 text-base lg:text-lg text-primary ">
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
            <a className="block mx-6 md:mx-12 w-20 h-24">
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
            <a className="block mx-2 md:mx-12 w-20 h-24">
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
            <a className="block mx-6 md:mx-12 w-20 h-24">
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
      <Footer />
    </body>
  );
};

export default Home;
