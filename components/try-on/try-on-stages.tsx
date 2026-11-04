/* eslint-disable @next/next/no-img-element -- direct static assets preserve storefront image crops. */
import { Button } from "@/components/ui/button";
import { ButtonRow } from "@/components/ui/button-row";
import { Icon } from "@/components/ui/icon";
import { Lede } from "@/components/ui/typography";
import { tryOnContent } from "@/content/pages";
import type { ProductSummary } from "@/lib/catalog/types";
import { productMessage, whatsappLink } from "@/lib/whatsapp";
import styles from "./try-on.module.css";

export function PhotoStage({ onChoose }: { onChoose: () => void }) {
  return (
    <>
      <div className={styles.uploadIcon}><Icon name="camera" size={34} /></div>
      <h2 className={styles.stageTitle}>Escolha uma foto</h2>
      <Lede className={styles.stageText}>Prefira uma foto de corpo inteiro, com boa luz e fundo simples.</Lede>
      <Button className={styles.stageAction} onClick={onChoose}>Usar foto de exemplo</Button>
      <small className={styles.disclaimer}>Demonstração: nenhuma foto é enviada. A prova virtual com IA chega em breve.</small>
    </>
  );
}

type DressStageProps = { product: ProductSummary; products: ProductSummary[]; onSelect: (slug: string) => void; onGenerate: () => void };

export function DressStage({ product, products, onSelect, onGenerate }: DressStageProps) {
  return (
    <>
      <img src={product.image.url} alt={product.image.alt} />
      <label className={styles.dressSelect}>
        Peça escolhida
        <select value={product.slug} onChange={(event) => onSelect(event.target.value)}>
          {products.map((item) => <option key={item.slug} value={item.slug}>{item.name}</option>)}
        </select>
      </label>
      <Button onClick={onGenerate}>Gerar prévia <Icon name="sparkle" size={17} /></Button>
    </>
  );
}

export function ResultStage({ product, onRestart }: { product: ProductSummary; onRestart: () => void }) {
  return (
    <>
      <img src={tryOnContent.previewImage} alt="Prévia da prova virtual" />
      <h2 className={styles.stageTitle}>Prévia pronta para você</h2>
      <Lede className={styles.stageText}>Esta é uma simulação visual. Cores e caimento podem variar.</Lede>
      <ButtonRow align="center">
        <Button href={whatsappLink(productMessage(product))} external><Icon name="whatsapp" size={18} /> Falar sobre esta peça</Button>
        <Button variant="soft" onClick={onRestart}>Recomeçar</Button>
      </ButtonRow>
    </>
  );
}
