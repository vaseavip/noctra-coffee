import { Canvas } from "@react-three/fiber";
import { BeanField } from "./BeanField";

type BeansSceneProps = {
  count: number;
  interactive: boolean;
  dpr: [number, number];
  spreadX: number;
  spreadZ: number;
};

export function BeansScene({ count, interactive, dpr, spreadX, spreadZ }: BeansSceneProps) {
  return (
    <Canvas
      dpr={dpr}
      gl={{ antialias: true, alpha: true }}
      camera={{ position: [0, 0, 5.2], fov: 32 }}
    >
      <ambientLight intensity={0.7} />
      <directionalLight position={[2.6, 2.4, 2]} intensity={1.8} color="#e7b783" />
      <directionalLight position={[-2.4, -1, -1.5]} intensity={0.6} color="#d9a066" />
      <BeanField count={count} interactive={interactive} spreadX={spreadX} spreadZ={spreadZ} />
    </Canvas>
  );
}
