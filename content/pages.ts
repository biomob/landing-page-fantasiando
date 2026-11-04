import type { IconName } from "@/components/ui/icon";

export const homeContent = {
  hero: {
    eyebrow: "Feito para viver histórias",
    title: "Fantasiar é o começo de toda aventura.",
    description: "Vestidos e fantasias infantis criados com carinho no nosso ateliê. Escolha sua peça e fale com a gente pelo WhatsApp.",
    image: "/assets/banner-atelie.png",
  },
  tryOnTeaser: {
    eyebrow: "Prova virtual",
    title: "Veja a fantasia antes de escolher.",
    description: "Envie uma foto, escolha a peça e receba uma prévia para tornar a decisão ainda mais especial.",
    image: "/assets/mascote-prova-virtual.png",
  },
  steps: [
    { icon: "heart", title: "Escolha a peça", description: "Navegue pela coleção e separe as favoritas." },
    { icon: "whatsapp", title: "Chame no WhatsApp", description: "Tiramos dúvidas de tamanho, prazo e personalização." },
    { icon: "truck", title: "Receba em casa", description: "Produzimos com carinho e enviamos para todo o Brasil." },
  ] satisfies { icon: IconName; title: string; description: string }[],
};

export const collectionContent = {
  eyebrow: "Coleção Annapê",
  title: "Vestidos que fazem a imaginação florescer",
  description: "Peças pensadas para celebrar festas, brincadeiras e os dias que viram memória.",
  empty: "Nenhuma peça nesta coleção por enquanto.",
};

export const aboutContent = {
  eyebrow: "Nosso ateliê",
  title: "Cada vestido começa com uma história.",
  paragraphs: [
    "A Annapê nasceu em Petrópolis, entre retalhos, rendas e muita imaginação. Desenhamos e costuramos cada peça à mão, pensando no conforto de quem brinca e no encanto de quem assiste.",
    "Trabalhamos com tiragens pequenas, tecidos macios e acabamento cuidadoso — e adoramos personalizar detalhes para que cada festa tenha a cara de quem veste.",
  ],
  image: { src: "/assets/atelie-maos-costurando.png", alt: "Mãos costurando um vestido no ateliê" },
  values: [
    { image: "/assets/detalhe-tecido-renda.png", alt: "Detalhe de renda", title: "Feito à mão", description: "Corte, costura e bordado acontecem no nosso ateliê, peça por peça." },
    { image: "/assets/mascote-estrela.png", alt: "", title: "Pensado para brincar", description: "Forros macios e modelagem que acompanha cada movimento." },
    { image: "/assets/mascote-sucesso.png", alt: "", title: "Perto de você", description: "Atendimento próximo pelo WhatsApp, do tamanho ao prazo de entrega." },
  ],
};

export const contactContent = {
  eyebrow: "Estamos por perto",
  title: "Vamos conversar?",
  description: "Quer ajuda para escolher tamanho, peça ou tirar uma dúvida? Fale direto com o ateliê pelo WhatsApp.",
  hours: "Segunda a sexta, 9h às 18h",
  location: "Petrópolis · RJ",
  card: {
    title: "Atendimento pelo WhatsApp",
    description: "Respondemos em horário comercial. Conte qual peça você viu e a idade da criança para agilizar.",
    image: "/assets/mascote-icone.png",
  },
};

export const tryOnContent = {
  eyebrow: "Prova virtual · demonstração",
  title: "Sua prova virtual",
  description: "Uma prévia carinhosa para ajudar a escolher a fantasia que mais combina com esse momento.",
  steps: { photo: "Escolha uma foto", dress: "Confira a peça", result: "Veja a prévia" },
  previewImage: "/assets/foto-exemplo-crianca-vestido-rosa.png",
};

export const notFoundContent = {
  image: "/assets/mascote-vazio.png",
  eyebrow: "Página não encontrada",
  title: "Essa peça saiu para brincar.",
  description: "Não encontramos o que você procurava, mas a coleção tem muitas outras histórias.",
  action: { href: "/colecao", label: "Ver coleção" },
};
