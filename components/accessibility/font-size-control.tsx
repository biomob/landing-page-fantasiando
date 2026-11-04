"use client";
import { useFontSize } from "@/hooks/use-font-size";
import styles from "./accessibility-bar.module.css";

/** Controle A– / slider / A+ que ajusta o tamanho base da fonte. */
export function FontSizeControl() {
  const { size, min, max, setSize, increase, decrease } = useFontSize();

  return (
    <div className={styles.fontSize}>
      <button type="button" className={styles.fontSmall} onClick={decrease} disabled={size <= min} aria-label="Diminuir tamanho da fonte">A</button>
      <input
        type="range"
        className={styles.slider}
        min={min}
        max={max}
        step={1}
        value={size}
        onChange={(event) => setSize(Number(event.target.value))}
        aria-label="Controle de tamanho da fonte"
        aria-valuetext={`${size} pixels`}
      />
      <button type="button" className={styles.fontLarge} onClick={increase} disabled={size >= max} aria-label="Aumentar tamanho da fonte">A</button>
    </div>
  );
}
