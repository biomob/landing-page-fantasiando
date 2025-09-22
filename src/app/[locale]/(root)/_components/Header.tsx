"Use Client";

import Image from "next/image";
import { ItemMenu } from "./ItemMenu";

export function Header() {
  return (
    <header className="fixed top-0 flex items-center w-full h-32 z-50 bg-white">
      <div className="w-full max-w-[1440px] px-[15px] mx-auto">
        <div>
          <div className="flex items-center justify-between gap-8">
            <ul className="flex items-center gap-8">
              <li>
                <ItemMenu name="Simulador" />
              </li>
              <li>
                <ItemMenu name="Início" />
              </li>
              <li>
                <ItemMenu name="Sobre a loja" />
              </li>
              <li>
                <ItemMenu name="Contato" />
              </li>
            </ul>
            <Image src="/img/logo_unicorn.png" alt="logo" width={116} height={116} />
          </div>
        </div>
      </div>
    </header>
  );
}
