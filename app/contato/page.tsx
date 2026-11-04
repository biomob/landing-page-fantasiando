import type { Metadata } from "next";
import { ContactSection } from "@/components/contact/contact-section";

export const metadata: Metadata = { title: "Contato" };

export default function ContactPage() {
  return <ContactSection />;
}
