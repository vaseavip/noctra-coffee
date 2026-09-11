import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import { Color, type Group, type Mesh } from "three";
import { createBeanGeometry } from "./beanGeometry";

type BeanData = {
  geometry: ReturnType<typeof createBeanGeometry>;
  color: Color;
  startX: number;
  startZ: number;
  y: number;
  fallSpeed: number;
  swayAmplitude: number;
  swayFrequency: number;
  swayPhase: number;
  rotationSpeed: [number, number, number];
  rotation: [number, number, number];
  scale: number;
};

const TOP_BOUND = 2.4;
const BOTTOM_BOUND = -2.4;
const ROAST_LIGHT = new Color("#7a4a2a");
const ROAST_DARK = new Color("#2a1810");

/** Deterministic tiny PRNG so a given bean's whole shape/motion is stable across renders. */
function mulberry(seed: number) {
  let a = seed;
  return function random() {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function createBean(index: number, spreadX: number, spreadZ: number): BeanData {
  const seed = index * 97 + 13;
  const rand = mulberry(seed);

  const ellipsoidScale: [number, number, number] = [
    0.46 + rand() * 0.08,
    0.62 + rand() * 0.1,
    0.36 + rand() * 0.07,
  ];

  const geometry = createBeanGeometry(seed, {
    scale: ellipsoidScale,
    grooveDepth: 0.1 + rand() * 0.05,
    grooveWidth: 0.14 + rand() * 0.05,
    noiseAmplitude: 0.018 + rand() * 0.014,
  });

  return {
    geometry,
    color: ROAST_LIGHT.clone().lerp(ROAST_DARK, rand()),
    startX: (rand() - 0.5) * 2 * spreadX,
    startZ: (rand() - 0.5) * 2 * spreadZ,
    y: TOP_BOUND - rand() * (TOP_BOUND - BOTTOM_BOUND),
    fallSpeed: 0.045 + rand() * 0.05,
    swayAmplitude: 0.12 + rand() * 0.16,
    swayFrequency: 0.15 + rand() * 0.2,
    swayPhase: rand() * Math.PI * 2,
    rotationSpeed: [(rand() - 0.5) * 0.12, (rand() - 0.5) * 0.12, (rand() - 0.5) * 0.12],
    rotation: [rand() * Math.PI, rand() * Math.PI, rand() * Math.PI],
    scale: 0.16 + rand() * 0.11,
  };
}

type BeanFieldProps = {
  count: number;
  interactive: boolean;
  spreadX?: number;
  spreadZ?: number;
};

export function BeanField({ count, interactive, spreadX = 2.2, spreadZ = 0.9 }: BeanFieldProps) {
  const beans = useMemo(
    () => Array.from({ length: count }, (_, i) => createBean(i, spreadX, spreadZ)),
    [count, spreadX, spreadZ],
  );

  const meshRefs = useRef<(Mesh | null)[]>([]);
  const group = useRef<Group>(null);
  const pointerTarget = useRef({ x: 0, y: 0 });
  const pointerEased = useRef({ x: 0, y: 0 });

  useFrame((state, rawDelta) => {
    // Cap delta so a stalled tab/tile switch can't produce one giant leap.
    const delta = Math.min(rawDelta, 1 / 30);
    const t = state.clock.elapsedTime;

    if (interactive) {
      // Pointer is already normalized to [-1, 1] by r3f; clamp again
      // defensively so nothing can amplify at the viewport edges.
      pointerTarget.current.x = clamp(state.pointer.x, -1, 1);
      pointerTarget.current.y = clamp(state.pointer.y, -1, 1);
    }

    pointerEased.current.x += (pointerTarget.current.x - pointerEased.current.x) * 0.03;
    pointerEased.current.y += (pointerTarget.current.y - pointerEased.current.y) * 0.03;

    if (group.current) {
      const maxOffset = 0.18;
      group.current.position.x = clamp(pointerEased.current.x * maxOffset, -maxOffset, maxOffset);
      group.current.position.y = clamp(-pointerEased.current.y * maxOffset, -maxOffset, maxOffset);
    }

    beans.forEach((bean, i) => {
      const mesh = meshRefs.current[i];
      if (!mesh) return;

      bean.y -= bean.fallSpeed * delta;
      if (bean.y < BOTTOM_BOUND) {
        bean.y = TOP_BOUND;
      }

      const sway = Math.sin(t * bean.swayFrequency + bean.swayPhase) * bean.swayAmplitude;
      mesh.position.set(bean.startX + sway, bean.y, bean.startZ);

      bean.rotation[0] += bean.rotationSpeed[0] * delta;
      bean.rotation[1] += bean.rotationSpeed[1] * delta;
      bean.rotation[2] += bean.rotationSpeed[2] * delta;
      mesh.rotation.set(bean.rotation[0], bean.rotation[1], bean.rotation[2]);
    });
  });

  return (
    <group ref={group}>
      {beans.map((bean, i) => (
        <mesh
          key={i}
          ref={(el) => {
            meshRefs.current[i] = el;
          }}
          geometry={bean.geometry}
          scale={bean.scale}
        >
          <meshPhysicalMaterial
            color={bean.color}
            roughness={0.62}
            metalness={0.05}
            clearcoat={0.15}
            clearcoatRoughness={0.4}
          />
        </mesh>
      ))}
    </group>
  );
}

function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(max, value));
}
