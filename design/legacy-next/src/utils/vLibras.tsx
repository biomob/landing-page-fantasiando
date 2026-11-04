import React, { useEffect } from "react";

type ExpectedReadyState = ReadonlyArray<DocumentReadyState> | DocumentReadyState | undefined;

const isReadyStateMatch = (expected?: ExpectedReadyState): boolean => {
  if (!expected) {
    return true;
  }
  if (typeof expected === "string" && document.readyState === expected) {
    return true;
  }
  return expected.indexOf(document.readyState) !== -1;
};

const useReadyStateEffect = (): void => {
  const iniciarVLibras = () => {
    const script = document.createElement("script");
    script.src = "https://vlibras.gov.br/app/vlibras-plugin.js";
    script.async = true;
    const widgetUrl = `https://vlibras.gov.br/app`;
    script.onload = () => {
      // @ts-ignore
      new window.VLibras.Widget(widgetUrl);
      // @ts-ignore
      window.onload();
    };
    document.head.appendChild(script);
  };

  useEffect(() => {
    const destructors: Array<() => void> = [() => document.removeEventListener("readystatechange", listener)];

    const listener = () => {
      if (!isReadyStateMatch("complete")) {
        return;
      }
      const destructor = iniciarVLibras();

      if (typeof destructor === "function") {
        destructors.push(destructor);
      }
    };

    listener();
    document.addEventListener("readystatechange", listener);

    return () => destructors.forEach((d) => d());
  }, []);
};

export function VLibras() {
  useReadyStateEffect();

  return (
    // @ts-ignore
    <div vw="true" className="enabled">
      <div style={{ display: "none" }} vw-access-button="true" />
      <div vw-plugin-wrapper="true">
        <div className="vw-plugin-top-wrapper" />
      </div>
    </div>
  );
}
