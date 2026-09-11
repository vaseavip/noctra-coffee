import { SimplexNoise } from "three/examples/jsm/math/SimplexNoise.js";
import { SphereGeometry, Vector3 } from "three";

type BeanShape = {
  /** Overall ellipsoid proportions: [width, length, thickness]. */
  scale: [number, number, number];
  /** How deep the central crease cuts in. */
  grooveDepth: number;
  /** How wide the crease is across the bean's front face. */
  grooveWidth: number;
  /** Amplitude of the organic surface irregularity. */
  noiseAmplitude: number;
};

/**
 * Builds one coffee-bean-shaped geometry: an elongated, noise-roughened
 * ellipsoid with the characteristic center crease pinched into its front
 * face. Every call with a different seed produces a visibly distinct bean —
 * no two are identical, matching how real beans look scattered together.
 */
export function createBeanGeometry(seed: number, shape: BeanShape) {
  const geometry = new SphereGeometry(0.5, 20, 16);
  const noise = new SimplexNoise({
    random: mulberry32(seed),
  });

  const position = geometry.attributes.position;
  const [sx, sy, sz] = shape.scale;
  const v = new Vector3();

  for (let i = 0; i < position.count; i++) {
    v.fromBufferAttribute(position, i).normalize();
    const dir = v.clone();

    let x = dir.x * sx;
    const y = dir.y * sy;
    let z = dir.z * sz;

    // Pinch the front face inward along a Gaussian band around x=0,
    // tapering off near the top/bottom tips — the bean's center crease.
    if (z > 0) {
      const lengthFalloff = 1 - Math.min(1, (y / (sy * 0.95)) ** 2);
      const groove = Math.exp(-((x / shape.grooveWidth) ** 2)) * lengthFalloff;
      z -= shape.grooveDepth * groove;
      x *= 1 - 0.18 * groove;
    }

    const n =
      noise.noise3d(dir.x * 2.2 + seed, dir.y * 2.2 + seed, dir.z * 2.2 + seed) *
      shape.noiseAmplitude;

    position.setXYZ(i, x + dir.x * n, y + dir.y * n, z + dir.z * n);
  }

  geometry.computeVertexNormals();
  return geometry;
}

/** Deterministic tiny PRNG so each bean's noise field is stable across renders. */
function mulberry32(seed: number) {
  let a = seed;
  return function random() {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
