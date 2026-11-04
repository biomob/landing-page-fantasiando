import { Dispatch, SetStateAction } from "react";

export const fontSize = {
  increase: (setHtmlFontSize: Dispatch<SetStateAction<number>>) => {
    const htmlElement = document.querySelector("html");

    if (htmlElement) {
      const currentSize = parseFloat(window.getComputedStyle(htmlElement).fontSize);

      if (currentSize >= 23) {
        return;
      }

      const newSize = currentSize + 1;

      htmlElement.style.fontSize = `${newSize}px`;
      setHtmlFontSize(Number(newSize));
    }
  },
  decrease: (setHtmlFontSize: Dispatch<SetStateAction<number>>) => {
    const htmlElement = document.querySelector("html");

    if (htmlElement) {
      const currentSize = parseFloat(window.getComputedStyle(htmlElement).fontSize);
      const newSize = currentSize - 1;

      htmlElement.style.fontSize = `${newSize}px`;
      setHtmlFontSize(Number(newSize));
    }
  },
  normalize: (setHtmlFontSize: Dispatch<SetStateAction<number>>) => {
    const htmlElement = document.querySelector("html");

    if (htmlElement) {
      const newSize = 16;

      htmlElement.style.fontSize = `${newSize}px`;
      setHtmlFontSize(Number(newSize));
    }
  },
};
