import { Canvas } from "@react-three/fiber";
import { ContactShadows, Environment } from "@react-three/drei";
import { Suspense } from "react";
import { VesselMesh } from "./VesselMesh";

type VesselSceneProps = {
  segments: number;
  interactive: boolean;
  dpr: [number, number];
};

export function VesselScene({ segments, interactive, dpr }: VesselSceneProps) {
  return (
    <Canvas
      dpr={dpr}
      gl={{ antialias: true, alpha: true }}
      camera={{ position: [0, 0.4, 4.4], fov: 32 }}
    >
      <ambientLight intensity={0.35} />
      <directionalLight position={[2.4, 3, 2]} intensity={1.4} color="#e7b783" />
      <directionalLight position={[-3, 1.2, -2]} intensity={0.6} color="#b8733a" />

      <Suspense fallback={null}>
        <VesselMesh segments={segments} interactive={interactive} />
        <Environment preset="apartment" environmentIntensity={0.4} />
        <ContactShadows
          position={[0, -1.05, 0]}
          opacity={0.45}
          scale={6}
          blur={2.6}
          far={2}
          color="#0f0c09"
        />
      </Suspense>
    </Canvas>
  );
}
