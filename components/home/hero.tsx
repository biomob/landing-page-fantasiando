/* eslint-disable @next/next/no-img-element -- direct static assets preserve storefront image crops. */
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import textures from "@/components/ui/textures.module.css";
import { homeContent } from "@/content/pages";
import { site } from "@/content/site";
import type { ProductSummary } from "@/lib/catalog/types";
import { cx } from "@/lib/cx";
import styles from "./hero.module.css";

const { hero } = homeContent;

const perkIcons = {
  scissors: "M6 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm0 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM20 4 8.1 15.9M14.5 14.5 20 20M8.1 8.1 12 12",
};

type Props = { cover: ProductSummary; polaroid?: ProductSummary; startingPrice: number };

export function Hero({ cover, polaroid, startingPrice }: Props) {
  return (
    <section className={cx(styles.hero, textures.dots)}>
      <div className={styles.inner}>
        <div className={styles.copy}>
          <span className={styles.pill}>{hero.eyebrow}<span className={styles.desktopOnly}>{hero.eyebrowSuffix}</span></span>
          <h1 className={styles.title}>{hero.titleStart} <span className={styles.highlight}>{hero.titleHighlight}</span>.</h1>
          <p className={styles.text}>{hero.description}</p>
          <div className={styles.actions}>
            <Button variant="dark" lifted href="/colecao">Ver a coleção <span className={styles.desktopOnly}><Icon name="arrow" size={18} /></span><span className={styles.mobileOnly} aria-hidden="true">→</span></Button>
            <Button className={styles.secondary} variant="outline" href="/prova-virtual">Experimentar com IA ✦</Button>
          </div>
          <ul className={styles.perks}>
            <li className={styles.perk}>
              <span className={styles.perkIcon}><svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d={perkIcons.scissors} /></svg></span>
              Ajuste sob medida
            </li>
            <li className={styles.perk}><span className={styles.perkIcon} aria-hidden="true">✦</span>Tecidos macios</li>
            <li className={styles.perk}><span className={styles.perkIcon} aria-hidden="true">♥</span>Atendimento próximo</li>
          </ul>
        </div>

        <div className={styles.media}>
          <div className={cx(styles.frame, textures.gingham)} aria-hidden="true" />
          <div className={styles.photo}><img src={cover.image.url} alt={cover.image.alt} /></div>
          {polaroid ? (
            <figure className={styles.polaroid}>
              <img src={polaroid.image.url} alt={polaroid.image.alt} />
              <p>{polaroid.name.replace(/^Vestido /, "")}</p>
            </figure>
          ) : null}
          <div className={styles.sticker}>
            <span><span className={styles.stickerLabel}>a partir de</span><span className={styles.stickerPrice}>R$ {startingPrice}</span></span>
          </div>
          {site.productionDays ? (
            <div className={styles.ready}><span className={styles.readyDot} />Peça pronta em até {site.productionDays} dias</div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
