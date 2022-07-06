import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { FC, useRef } from "react";
import * as THREE from "three";

const Sky: FC = () => {
  const cloud1Ref = useRef<THREE.Mesh>(null);
  const cloud2Ref = useRef<THREE.Mesh>(null);
  const cloud3Ref = useRef<THREE.Mesh>(null);

  const cloudTex1 = useTexture({
    map: "/textures/cloud1.png",
    alphaMap: "/textures/cloud1_alpha.png",
  });
  const cloudTex2 = useTexture({
    map: "/textures/cloud2.png",
    alphaMap: "/textures/cloud2_alpha.png",
  });
  const cloudTex3 = useTexture({
    map: "/textures/cloud3.png",
    alphaMap: "/textures/cloud3_alpha.png",
  });

  useFrame(({ clock }) => {
    const maxWidth = 30;
    cloud1Ref.current!.position.x = 15 + (clock.getElapsedTime() % maxWidth);
    cloud2Ref.current!.position.x = -19 + (clock.getElapsedTime() % maxWidth);
    cloud3Ref.current!.position.x = 5 + (clock.getElapsedTime() % maxWidth);
  });

  return (
    <group>
      <mesh position={[15, 15, 10]} scale={[15, 6, 1]} ref={cloud1Ref}>
        <planeBufferGeometry />
        <meshStandardMaterial
          {...cloudTex1}
          alphaTest={0.2}
          opacity={1}
        ></meshStandardMaterial>
      </mesh>
      <mesh position={[-19, 15, 0]} scale={[19, 7, 1]} ref={cloud2Ref}>
        <planeBufferGeometry />
        <meshStandardMaterial
          {...cloudTex2}
          alphaTest={0.2}
          opacity={1}
        ></meshStandardMaterial>
      </mesh>
      <mesh position={[5, 15, -10]} scale={[12, 5, 1]} ref={cloud3Ref}>
        <planeBufferGeometry />
        <meshStandardMaterial
          {...cloudTex3}
          alphaTest={0.2}
          opacity={1}
        ></meshStandardMaterial>
      </mesh>
    </group>
  );
};

export default Sky;
