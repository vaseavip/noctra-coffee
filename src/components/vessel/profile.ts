import { Vector2 } from "three";

/**
 * Profile curve for the lathe-revolved vessel — a deliberately asymmetric
 * silhouette between a pour-over carafe and a wide ceramic cup, not a
 * literal mug. Points run bottom → top, in local model units.
 */
export function vesselProfile(): Vector2[] {
  return [
    new Vector2(0, 0),
    new Vector2(0.42, 0),
    new Vector2(0.5, 0.05),
    new Vector2(0.46, 0.16),
    new Vector2(0.34, 0.32),
    new Vector2(0.3, 0.55),
    new Vector2(0.36, 0.82),
    new Vector2(0.52, 1.05),
    new Vector2(0.66, 1.2),
    new Vector2(0.72, 1.32),
    new Vector2(0.7, 1.4),
    new Vector2(0.6, 1.42),
  ];
}
