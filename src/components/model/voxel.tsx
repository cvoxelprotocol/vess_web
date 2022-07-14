import { useFrame } from "@react-three/fiber";
import { FC, useRef } from "react";

const Voxel: FC = () => {
  const sphere = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    sphere!.current!.position.y +=
      0.02 * Math.sin(1.5 * clock.getElapsedTime());
  });
  return (
    <mesh
      position={[0, 7.2, 0]}
      scale={[2, 2, 2]}
      ref={sphere}
      castShadow
      receiveShadow
    >
      <sphereBufferGeometry />
      <meshStandardMaterial color={"#EAACFF"} fog={false} />
    </mesh>
  );
};

export default Voxel;
