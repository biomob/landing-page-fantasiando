import React, { useEffect, useState } from "react";

const BASE_FONT_SIZE = 16;
const MAX_LEVELS = 3;

const FontSizeSlider: React.FC = () => {
  const [htmlFontSize, setHtmlFontSize] = useState<number>(BASE_FONT_SIZE);
  const [tempFontSize, setTempFontSize] = useState<number>(BASE_FONT_SIZE);

  useEffect(() => {
    document.querySelector("html")!.style.fontSize = `${htmlFontSize}px`;
  }, [htmlFontSize]);

  const getCurrentLevel = (currentSize: number): number => {
    return Math.round((currentSize - BASE_FONT_SIZE) / 1);
  };

  const increaseFontSize = () => {
    const currentLevel = getCurrentLevel(htmlFontSize);
    if (currentLevel < MAX_LEVELS) {
      setHtmlFontSize((prevSize) => {
        const newSize = prevSize + 1;
        setTempFontSize(newSize); // Sincroniza o valor temporário do controle deslizante
        return newSize;
      });
    }
  };

  const decreaseFontSize = () => {
    const currentLevel = getCurrentLevel(htmlFontSize);
    if (currentLevel > -MAX_LEVELS) {
      setHtmlFontSize((prevSize) => {
        const newSize = prevSize - 1;
        setTempFontSize(newSize); // Sincroniza o valor temporário do controle deslizante
        return newSize;
      });
    }
  };

  // Função para lidar com a mudança do controle deslizante
  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTempFontSize(parseInt(e.target.value, 10));
  };

  // Função para aplicar o tamanho da fonte ao soltar o mouse
  const applyFontSize = () => {
    setHtmlFontSize(tempFontSize);
  };

  return (
    <div className="flex gap-2 items-center justify-center">
      <button onClick={decreaseFontSize} aria-label="Diminuir tamanho da fonte" className="font-bold text-xs">
        A
      </button>
      <div className="relative w-full max-w-md flex items-start">
        <input
          type="range"
          min={BASE_FONT_SIZE - MAX_LEVELS}
          max={BASE_FONT_SIZE + MAX_LEVELS}
          step="1"
          value={tempFontSize} // Usa tempFontSize para refletir o valor atual na barra
          onChange={handleSliderChange} // Apenas atualiza o valor temporário
          onMouseUp={applyFontSize} // Aplica o tamanho da fonte ao soltar o mouse
          className="w-full h-[.0625rem] bg-cinza-800 rounded-full appearance-none cursor-pointer"
          style={{ outline: "none" }}
        />
        <div className="absolute left-1/2 transform -translate-x-1/2 h-1 w-1 bg-cinza-800 rounded-full" />
      </div>
      <button onClick={increaseFontSize} aria-label="Aumentar tamanho da fonte" className="font-bold text-lg">
        A
      </button>
    </div>
  );
};

export default FontSizeSlider;
