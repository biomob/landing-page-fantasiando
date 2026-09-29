import Image from "next/image";
import { useEffect, useState } from "react";
import { FaStopCircle } from "react-icons/fa";
import { useTheme } from "next-themes";
import { useSpeechSynthesis } from "react-speech-kit";

const MouseSpeak: React.FC = () => {
  const [isListening, setIsListening] = useState(false);
  const { theme } = useTheme();
  const [isMobile, setIsMobile] = useState(false);
  const { speak, cancel } = useSpeechSynthesis();

  // Função para detectar dispositivos móveis
  const checkIfMobile = () => {
    setIsMobile(window.innerWidth <= 768); // Pode ajustar conforme sua necessidade
  };

  const handleMouseClick = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    const text = target.innerText;

    if (text) {
      if (isMobile) {
        // Utilizando a API SpeechSynthesis diretamente no mobile
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = 2;
        utterance.pitch = 1.1;
        speechSynthesis.speak(utterance);
      } else {
        // Usando react-speech-kit no desktop
        speak({
          text,
          rate: 2,
          pitch: 1.1,
        });
      }
    }
  };

  const handleButtonClick = () => {
    setIsListening(true);
  };

  const handleStopListening = () => {
    setIsListening(false);
    cancel();
  };

  useEffect(() => {
    // Verifica se é um dispositivo móvel
    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    // Adiciona o event listener ao clicar no texto
    if (isListening) {
      document.addEventListener("click", handleMouseClick);
    } else {
      document.removeEventListener("click", handleMouseClick);
    }

    return () => {
      window.removeEventListener("resize", checkIfMobile);
      document.removeEventListener("click", handleMouseClick);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isListening]);

  return (
    <div className="flex items-center">
      <button onClick={isListening ? handleStopListening : handleButtonClick}>
        {isListening ? (
          <FaStopCircle
            width={32}
            height={32}
            className="text-text-verde-medio p-1 rounded-full bg-white w-full h-full"
          />
        ) : (
          <Image
            src={theme == "light" ? "/ico/speakerDark.svg" : "/ico/speaker.svg"}
            alt="Ler textos"
            height={32}
            width={32}
            className="text-white"
          />
        )}
      </button>
      {isListening && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            cursor: "url(/microphone-cursor.png), auto", // Mude para o caminho do seu ícone de microfone
            pointerEvents: "none",
          }}
        />
      )}
    </div>
  );
};

export default MouseSpeak;
