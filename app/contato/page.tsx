/* eslint-disable @next/next/no-img-element -- direct static assets preserve storefront image crops. */
import type { Metadata } from "next";
import { Icon } from "@/components/storefront/icon";
import { whatsappNumber } from "@/lib/env";
import { generalMessage, whatsappLink } from "@/lib/whatsapp";

export const metadata: Metadata = { title: "Contato" };

const formatPhone = (digits: string) => {
  const local = digits.startsWith("55") ? digits.slice(2) : digits;
  return local.length === 11 ? `(${local.slice(0, 2)}) ${local.slice(2, 7)}-${local.slice(7)}` : digits;
};

export default function ContactPage() {
  return (
    <section className="section contact">
      <div>
        <p className="eyebrow">Estamos por perto</p>
        <h1>Vamos conversar?</h1>
        <p>Quer ajuda para escolher tamanho, peça ou tirar uma dúvida? Fale direto com o ateliê pelo WhatsApp.</p>
        <div className="contact-details">
          <p><Icon name="whatsapp" size={18} /> <span><strong>WhatsApp</strong><br />{formatPhone(whatsappNumber)}</span></p>
          <p><Icon name="clock" size={18} /> <span><strong>Atendimento</strong><br />Segunda a sexta, 9h às 18h</span></p>
          <p><Icon name="pin" size={18} /> <span><strong>Ateliê</strong><br />Petrópolis · RJ</span></p>
        </div>
      </div>
      <div className="contact-card">
        <img src="/assets/mascote-icone.png" alt="Mascote Annapê" />
        <h2>Atendimento pelo WhatsApp</h2>
        <p>Respondemos em horário comercial. Conte qual peça você viu e a idade da criança para agilizar.</p>
        <a className="button primary wide" href={whatsappLink(generalMessage)} target="_blank" rel="noopener noreferrer"><Icon name="whatsapp" size={18} /> Iniciar conversa</a>
      </div>
    </section>
  );
}
