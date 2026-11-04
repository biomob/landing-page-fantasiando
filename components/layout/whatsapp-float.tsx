import { Icon } from "@/components/ui/icon";
import { generalWhatsappLink } from "@/lib/whatsapp";
import styles from "./whatsapp-float.module.css";

export function WhatsappFloat() {
  return (
    <a className={styles.float} href={generalWhatsappLink} target="_blank" rel="noopener noreferrer" aria-label="Falar com o ateliê no WhatsApp">
      <Icon name="whatsapp" size={28} />
    </a>
  );
}
