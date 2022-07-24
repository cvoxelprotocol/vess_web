import { deg2rad } from "@/lib/utility";
import { useFrame } from "@react-three/fiber";
import { FC, useRef } from "react";

const Voxel: FC = () => {
  const voxel = useRef<THREE.Group>(null);
  useFrame(({ clock }) => {
    voxel!.current!.position.y += 0.02 * Math.sin(1.5 * clock.getElapsedTime());
  });
  return (
    <group ref={voxel}>
      <mesh
        position={[0, 7.2, 0]}
        scale={[2, 2, 2]}
        rotation={[deg2rad(12), deg2rad(45), 0]}
        castShadow
        receiveShadow
      >
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial
          color={"#E169FF"}
          fog={false}
          transparent
          opacity={0.4}
        />
      </mesh>
      <mesh
        position={[0, 7.2, 0]}
        scale={[2, 2, 2]}
        rotation={[deg2rad(12), deg2rad(45), 0]}
        castShadow
        receiveShadow
      >
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={"#FF75C8"} fog={false} />
      </mesh>
    </group>
  );
};

export default Voxel;
