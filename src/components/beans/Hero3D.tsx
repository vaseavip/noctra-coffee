import { lazy, Suspense, useState } from "react";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { BeansFallback } from "./BeansFallback";
import styles from "./Beans.module.css";

// three.js + @react-three/fiber are a heavy payload — split them into their
// own chunk so the rest of the site never waits on it, and users who get the
// static poster (reduced motion / no WebGL) never fetch it at all.
const BeansScene = lazy(() =>
  import("./BeansScene").then((mod) => ({ default: mod.BeansScene })),
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
        <BeansFallback />
      ) : (
        <Suspense fallback={<BeansFallback />}>
          <BeansScene
            count={isCompact ? 9 : 17}
            interactive={!isCoarsePointer}
            dpr={isCompact ? [1, 1] : [1, 1.6]}
            spreadX={isCompact ? 0.75 : 2.2}
            spreadZ={isCompact ? 0.5 : 0.9}
          />
        </Suspense>
      )}
    </div>
  );
}
