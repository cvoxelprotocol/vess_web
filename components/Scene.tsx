import { FC, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Plane,
  ScrollControls,
  GradientTexture,
  softShadows,
  useScroll,
  Html,
} from "@react-three/drei";
import { deg2rad } from "lib/utility";
import Voxel from "./model/voxel";
import { Texture } from "three";
import Sea from "./model/Sea";

softShadows();
const Scene: FC = () => {
  const camera = useRef<THREE.PerspectiveCamera>(null);
  const scroll = useScroll();
  useFrame(() => {
    const p1 = scroll.range(0 / 5, 1 / 5);
    camera.current!.position.z = -10 + -15 * (1 - p1);
    camera.current!.position.x = -7 * p1;
    camera.current!.rotation.y = deg2rad(30) * p1;
  });

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
        <Sea />
        <Voxel />
        <mesh>
          <Html position={[0, 7, 0]} center>
            <div className="flex items-center justify-center w-screen ">
              <h1 className="text-[56px] text-on-primary-container font-sans-alt font-light">
                Record your Soulbound <span className="ml-4 px-4 font-bold text-on-primary rounded-lg bg-primary">Work Credentials. </span>
              </h1>
            </div>
          </Html>
        </mesh>
      </perspectiveCamera>
    </>
  );
};

export default Scene;
