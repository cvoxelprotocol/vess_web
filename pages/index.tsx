import { ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Scene from "components/Scene";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/layout/Header";
import { isScrollFin } from "recoilState/scene";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { RecoilRoot, useRecoilValue } from "recoil";
import { Suspense, useState } from "react";

const Home: NextPage = () => {
  const [isScrollEnd, setIsScrollEnd] = useState(false);
  return (
    <div>
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
          {/* <Suspense fallback="now loading">
            <Canvas shadows>
              <ScrollControls pages={0}>
                <Scene setter={setIsScrollEnd} />
              </ScrollControls>
            </Canvas>
          </Suspense> */}
        </div>
        {true && (
          <div className="flex flex-col items-center justify-center w-full px-14 bg-background">
            <div className="">
              <h2 className=" mt-28 text-on-primary-container font-normal text-4xl">
                Benefits for ...
              </h2>
            </div>
            <h5 className=" w-full max-w-4xl mx-[240px] mt-6 mb-16 font-normal text-2xl text-primary/depth1 text-center">
              Although there are many usecases of VESS protocol. Here, we
              introduce some main benefits and usecases such for DAO, personal,
              job marketplace and in general.
            </h5>
            {/* Benefits for... */}
            <div className="mx-20 max-w-4xl w-full grid gap-10 grid-cols-2 grid-rows-2 h-[800px]">
              <div className=" col-span-2 raw-span-1 border border-outline bg-primary/surface1/5 rounded-[32px] ">
                <h3 className=""></h3>
              </div>
              <div className="col-span-1 raw-span-1 border border-outline bg-primary/surface1/5 rounded-[32px]"></div>
              <div className="col-span-1 raw-span-1 border border-outline bg-primary/surface1/5 rounded-[32px]"></div>
            </div>
          </div>
        )}
      </main>
      <footer className="w-full mt-16 h-36 bg-primary"></footer>
    </div>
  );
};

export default Home;
