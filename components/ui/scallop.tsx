import { cx } from "@/lib/cx";
import textures from "./textures.module.css";

const variants = {
  "blush-down": textures.scallopBlushDown,
  "berry-up": textures.scallopBerryUp,
  "berry-down": textures.scallopBerryDown,
};

/** Borda recortada (scallop) decorativa entre seções. */
export function Scallop({ variant, className }: { variant: keyof typeof variants; className?: string }) {
  return <div className={cx(textures.scallop, variants[variant], className)} aria-hidden="true" />;
}
