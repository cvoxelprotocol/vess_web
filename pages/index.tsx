import { ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Scene from "components/Scene";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/layout/Header";

const Home: NextPage = () => {
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
      <main className="h-[10000px]">
        <div className="h-screen w-full fixed">
          <Canvas shadows>
            <ScrollControls pages={5}>
              <Scene />
            </ScrollControls>
          </Canvas>
        </div>
      </main>
    </div>
  );
};

export default Home;
