import { GradientTexture, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { FC, useRef, useState } from "react";
import * as THREE from "three";
import {
  AdditiveBlending,
  Blending,
  MultiplyBlending,
  SubtractiveBlending,
} from "three";

const Sea: FC = () => {
  const [frameNum, setFrameNum] = useState(0);
  const gradPoint = useRef<THREE.Texture>(null);
  const textureProps = useTexture({
    map: "/textures/wave.png",
    alphaMap: "/textures/wave_alpha.png",
  });
  useFrame(() => {
    setFrameNum((n) => n + 1);
  });

  return (
    <mesh>
      <mesh
        scale={[20, 20, 1]}
        position={[0, 0.1, 10]}
        rotation={[-0.46 * Math.PI, 0, 0]}
      >
        <planeBufferGeometry />
        <meshStandardMaterial
          {...textureProps}
          alphaTest={0.2}
          opacity={0.6}
          emissive={"#ffffff"}
          emissiveIntensity={0.1}
          transparent
        ></meshStandardMaterial>
      </mesh>
      <mesh
        rotation={[-0.46 * Math.PI, 0, 0]}
        scale={[1000, 60, 10]}
        receiveShadow
      >
        <planeBufferGeometry />
        <meshPhongMaterial reflectivity={0}>
          <GradientTexture
            ref={gradPoint}
            stops={[0, 0.5 + 0.3 * Math.sin(0.007 * frameNum), 1]} // As many stops as you want
            colors={["#6FD2FD", "#8E92F3", "#CA8AFF"]} // Colors need to match the number of stops
            size={1024} // Size is optional, default = 1024
          />
        </meshPhongMaterial>
      </mesh>
    </mesh>
  );
};

export default Sea;
