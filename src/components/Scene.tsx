import { Dispatch, FC, SetStateAction, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { softShadows, useScroll, Html } from "@react-three/drei";
import { deg2rad } from "@/lib/utility";
import Voxel from "./model/voxel";
import Sea from "./model/Sea";
import { useSpring, animated } from "react-spring";
import TextTransition from "./model/TextTransition";
import Sky from "./model/Sky";
import { useRecoilState } from "recoil";

type Props = {
  setter: Dispatch<SetStateAction<boolean>>;
};

softShadows();
const Scene: FC<Props> = ({ setter }) => {
  const camera = useRef<THREE.PerspectiveCamera>(null);
  const [v1, setV1] = useState(true);
  const [v2, setV2] = useState(true);
  const [show, setShow] = useState(true);
  //const [_, setIsScrollEnd] = useRecoilState(isScrollFin);

  /* For Three-Fiber */
  const scroll = useScroll();
  useFrame(() => {
    const p1 = scroll.range(0 / 5, 1 / 5);
    const p5 = scroll.range(3 / 5, 4 / 5);
    setV1(scroll.visible(0 / 5, 0 / 5, 0.02));
    setV2(scroll.visible(0 / 5, 1 / 5));
    if (p5 > 0.18) {
      setter(true);
    } else {
      setter(false);
    }
    camera.current!.position.z = -10 + -15 * (1 - p1);
    camera.current!.position.x = -7 * p1;
    camera.current!.position.y = -2 * p1 - 5;
    camera.current!.rotation.y = deg2rad(30) * p1;
  });

  const p1Styles = useSpring({ opacity: v1 ? 1 : 0 });

  return (
    <>
      <fog attach="fog" args={["#ffffff", 0, 80]} />
      <perspectiveCamera
        ref={camera}
        position={[0, -5, -25]}
        rotation={[deg2rad(0), deg2rad(0.16), deg2rad(0)]}
      >
        <ambientLight intensity={0.8} />
        <directionalLight
          position={[0, 10, -10]}
          rotation={[deg2rad(180), deg2rad(180), 0]}
          intensity={10}
          castShadow
        />
        <pointLight position={[20, 30, 30]} intensity={1} />
        <Sky />
        <Sea />
        <Voxel />
        <group>
          <Html position={[0, 7, 0]} center>
            <div className="flex items-center justify-center w-screen ">
              <animated.div style={p1Styles}>
                <TextTransition>
                  <h1 className="mx-4 text-left text-[36px] lg:text-[56px] text-on-primary-container font-sans-alt font-light">
                    Record your Soulbound <br className="md:hidden" />
                    <span className="md:ml-2 px-4 font-bold text-on-primary rounded-lg bg-primary leading-loose">
                      Work Credentials{" "}
                    </span>
                  </h1>
                  <h1 className="mx-4 text-[36px] lg:text-[56px] text-on-primary-container font-sans-alt font-light">
                    Share your Voxels. They're <br className="md:hidden" />
                    <span className="md:ml-2 px-4 font-bold text-on-primary rounded-lg bg-primary leading-loose">
                      Your web3 CV{" "}
                    </span>
                  </h1>
                  <h1 className="mx-4 text-[36px] lg:text-[56px] text-on-primary-container font-sans-alt font-light">
                    Visualize your work as <br className="md:hidden" />
                    <span className="md:ml-2 px-4 font-bold text-on-primary rounded-lg bg-primary leading-loose">
                      Colorful Voxels{" "}
                    </span>
                  </h1>
                </TextTransition>
              </animated.div>
            </div>
          </Html>
          {!v2 && (
            <Html position={[-0, 10, 0]} center>
              <div className="flex items-center justify-end w-screen ">
                <TextTransition>
                  <h1 className="text-[48px] text-on-primary-container font-sans-alt font-light">
                    Transactions have only{" "}
                    <span className="ml-2 px-4 font-bold text-on-primary rounded-lg bg-primary">
                      {" "}
                      financial data
                    </span>
                  </h1>
                </TextTransition>
              </div>
            </Html>
          )}
        </group>
      </perspectiveCamera>
    </>
  );
};

export default Scene;
