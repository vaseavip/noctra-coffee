import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { LatheGeometry, type Group } from "three";
import { vesselProfile } from "./profile";

type VesselMeshProps = {
  segments: number;
  interactive: boolean;
};

export function VesselMesh({ segments, interactive }: VesselMeshProps) {
  const group = useRef<Group>(null);
  const pointer = useRef({ x: 0, y: 0 });
  const eased = useRef({ x: 0, y: 0 });

  const geometry = useMemo(
    () => new LatheGeometry(vesselProfile(), segments),
    [segments],
  );

  useFrame((state, delta) => {
    if (!group.current) return;

    if (interactive) {
      pointer.current.x = state.pointer.x;
      pointer.current.y = state.pointer.y;
    }

    // Heavy damping — the vessel drifts toward the pointer slowly, never snaps.
    eased.current.x += (pointer.current.x - eased.current.x) * 0.02;
    eased.current.y += (pointer.current.y - eased.current.y) * 0.02;

    group.current.rotation.y += delta * 0.06 + eased.current.x * 0.006;
    group.current.rotation.x = eased.current.y * 0.12;
  });

  return (
    <group ref={group} position={[0, -0.65, 0]}>
      <mesh geometry={geometry} castShadow receiveShadow>
        <meshPhysicalMaterial
          color="#e7d3ad"
          roughness={0.55}
          metalness={0.04}
          clearcoat={0.35}
          clearcoatRoughness={0.35}
        />
      </mesh>

      {/* Espresso surface — a dark disc set just inside the rim */}
      <mesh position={[0, 1.34, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[0.62, 48]} />
        <meshPhysicalMaterial
          color="#1c130a"
          roughness={0.18}
          metalness={0.1}
          clearcoat={0.6}
        />
      </mesh>
    </group>
  );
}
