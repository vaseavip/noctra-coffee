import { lazy, Suspense, useState } from "react";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { VesselFallback } from "./VesselFallback";
import styles from "./Vessel.module.css";

// three.js + @react-three/fiber + drei are a heavy payload — split them into
// their own chunk so the rest of the site never waits on it, and users who
// get the static poster (reduced motion / no WebGL) never fetch it at all.
const VesselScene = lazy(() =>
  import("./VesselScene").then((mod) => ({ default: mod.VesselScene })),
);

function supportsWebGL(): boolean {
  try {
    const canvas = document.createElement("canvas");
    return Boolean(
      window.WebGLRenderingContext &&
        (canvas.getContext("webgl") || canvas.getContext("experimental-webgl")),
    );
  } catch {
    return false;
  }
}

export function Hero3D() {
  const reducedMotion = usePrefersReducedMotion();
  const isCompact = useMediaQuery("(max-width: 46rem)");
  const isCoarsePointer = useMediaQuery("(pointer: coarse)");
  const [webglOk] = useState(supportsWebGL);

  const useStaticPoster = reducedMotion || !webglOk;

  return (
    <div className={styles.stage}>
      {useStaticPoster ? (
        <VesselFallback />
      ) : (
        <Suspense fallback={<VesselFallback />}>
          <VesselScene
            segments={isCompact ? 36 : 72}
            interactive={!isCoarsePointer}
            dpr={isCompact ? [1, 1] : [1, 1.6]}
          />
        </Suspense>
      )}
    </div>
  );
}
