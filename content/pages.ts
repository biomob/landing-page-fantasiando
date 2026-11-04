export const homeContent = {
  hero: {
    eyebrow: "Coleção Primavera",
    eyebrowSuffix: " · Feita à mão",
    titleStart: "Vestidos que viram",
    titleHighlight: "contos de fada",
    description: "Peças costuradas uma a uma no nosso ateliê em Petrópolis, com tule, renda e muito brilho. Escolha a sua e combine tudo pelo WhatsApp.",
  },
  categories: { eyebrow: "Compre por tema", title: "Um mundo para cada imaginação", action: "Ver todos os temas →" },
  featured: { eyebrow: "Mais amados do ateliê", title: "Peças que encantam" },
  tryOnTeaser: {
    eyebrow: "Prova virtual ✦",
    eyebrowSuffix: " em breve com IA",
    title: "Veja a fantasia antes de escolher.",
    description: "Envie uma foto, escolha a peça e receba uma prévia para decidir com o coração — e com o tamanho certo.",
    steps: ["Escolha uma foto de corpo inteiro", "Selecione o vestido", "Receba a prévia e chame no WhatsApp"],
    photo: { src: "/assets/foto-exemplo-crianca-vestido-rosa.png", alt: "Prévia de prova virtual com criança usando vestido rosa" },
    mascot: "/assets/mascote-prova-virtual.png",
  },
  atelier: {
    eyebrow: "Do nosso ateliê",
    title: "Cada ponto é dado à mão, pensando em quem vai brincar.",
    description: "Desenhamos, cortamos e costuramos em pequenas tiragens. Forros de algodão, tule que não pinica e acabamento que aguenta a festa inteira.",
    photo: { src: "/assets/atelie-maos-costurando.png", alt: "Mãos costurando um vestido no ateliê" },
    detail: { src: "/assets/detalhe-tecido-renda.png", alt: "Detalhe de renda" },
    facts: [
      { title: "Sob medida", description: "Ajuste de comprimento" },
      { title: "Tamanhos 2–10", description: "E outros sob consulta" },
      { title: "Brasil todo", description: "Envio pelos Correios" },
    ],
  },
};

export const collectionContent = {
  description: "Peças pensadas para celebrar festas, brincadeiras e os dias que viram memória.",
  empty: "Nenhuma peça com esses filtros por enquanto.",
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
