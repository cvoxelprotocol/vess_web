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
      </Head>

      <div className="bg-slate-100">aaaa</div>
      <Header />
    </div>
  );
};

export default Home;
