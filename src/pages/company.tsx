import Button from "@/components/common/Button";
import { NextPage } from "next";
import Image from "next/image";

const Company: NextPage = () => {
  return (
    <div className="flex justify-center">
      <div className="w-[1024px]  bg-on-primary">
        {/* Header */}
        <header className="z-40 w-[1024px] py-3 fixed grid grid-cols-2 bg-white backdrop-blur-lg">
          <div className="flex items-center content-center">
            <Image
              src="/vesslabs_logo_full@2x.png"
              alt="logo of VESS Labs"
              width="148px"
              height="30px"
            />
          </div>
          <nav className="flex justify-end content-center font-normal text-xl text-on-primary-container">
            <Button variant="text">
              <a> About </a>
            </Button>
            <Button variant="text">
              <a> Products </a>
            </Button>
            <Button variant="text">
              <a> Members </a>
            </Button>
            <Button variant="text">
              <a> Contact </a>
            </Button>
          </nav>
        </header>

        {/* Top Image */}
        <div className=" my-24 h-[560px] flex items-center justify-between">
          <div className=" w-[576px] ">
            <Image
              src="/vesslabs_topImage@2x.png"
              alt="Vess labs"
              width="466px"
              height="186px"
            />
            <div className="mt-4 py-2 px-4 border-t border-on-background font-normal text-xl text-on-primary-container">
              VESS Labs is a company that is developing identity protocols and
              services. Let’s take our identities back.
            </div>
          </div>
          <div className=" w-[290px] h-full bg-gradient-to-b from-skyblue/10 via-oceanblue/50 to-waterpurple"></div>
        </div>

        {/* Products */}
        <div className="flex mt-32 mb-20 w-full items-center">
          <div className="relative w-40 h-14">
            <Image
              src="/sline.svg"
              alt="line"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="mx-4">
            <h4 className="text-primary text-3xl"> Product </h4>
          </div>
        </div>
        <div className="flex">
          <div className="mockup-window grow-0 w-[560px] border bg-skyblue/10">
            <div className="relative h-[400px] bg-white">
              <Image
                src="/vess_mock_window.png"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
          <div className="ml-10 py-2 grow">
            <div className="flex items-center mb-2">
              <Image src="/vess_logo_full@2x.png" width="165px" height="42px" />
              <div className="py-1 px-3 mx-3 w-fit h-fit rounded-full text-sm font-medium text-on-primary bg-green-600">
                Live{" "}
              </div>
            </div>
            <h4 className="text-xl font-medium text-primary/50">
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
            <div className="my-4 max-w-sm font-normal text-lg text-on-primary-container">
              VESS is a self-sovereign work credentials protocol. You can attach
              your transfer transactions your work details such as work title,
              description, deliverable and so on. Then, your works are
              visualized as colorful voxels. You can easily share your colorful
              voxels as your CV.
            </div>
            <Button variant="contained">Go to App</Button>
          </div>
        </div>
        {/* Members */}
        <div className="flex mt-32 mb-20 w-full items-center justify-end">
          <div className="mx-4">
            <h4 className="text-primary text-3xl"> Members </h4>
          </div>
          <div className="relative w-40 h-14">
            <Image
              src="/sline.svg"
              alt="line"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Company;
