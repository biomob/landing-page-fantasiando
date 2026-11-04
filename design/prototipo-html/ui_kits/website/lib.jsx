// Shared helpers, icons & sample data for the Annapê Ateliê website UI kit.
const ASSETS = '../../assets/';

const ICON = {
  menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M5.5 21a7 7 0 0 1 13 0"/>',
  heart: '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>',
  cart: '<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/>',
  sparkle: '<path d="M12 3l1.7 5.2L19 10l-5.3 1.8L12 17l-1.7-5.2L5 10l5.3-1.8Z"/>',
  truck: '<path d="M14 18V6a1 1 0 0 0-1-1H2v13"/><path d="M14 9h5l3 3v6h-8"/><circle cx="6.5" cy="18.5" r="2"/><circle cx="17.5" cy="18.5" r="2"/>',
  shield: '<path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6Z"/><path d="m9 12 2 2 4-4"/>',
  ruler: '<path d="m16 2 6 6L8 22l-6-6Z"/><path d="m7 11 2 2M11 7l2 2M15 3l2 2"/>',
  trash: '<path d="M3 6h18M8 6V4h8v2M6 6l1 14h10l1-14"/>',
  refresh: '<path d="M21 12a9 9 0 1 1-3-6.7L21 8"/><path d="M21 3v5h-5"/>',
  chat: '<path d="M21 12a8 8 0 0 1-11.3 7.3L3 21l1.7-6.7A8 8 0 1 1 21 12Z"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  x: '<path d="M18 6 6 18M6 6l12 12"/>',
  star: '<path d="M12 2l2.9 6.6L22 9.3l-5 4.7 1.3 7L12 17.8 5.7 21l1.3-7-5-4.7 7.1-.7Z"/>',
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  back: '<path d="M19 12H5M11 6l-6 6 6 6"/>',
  enter: '<path d="M9 10 4 15l5 5"/><path d="M20 4v7a4 4 0 0 1-4 4H4"/>',
  lock: '<rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
  camera: '<path d="M4 8h3l2-3h6l2 3h3v11H4Z"/><circle cx="12" cy="13" r="3.5"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
  moon: '<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"/>',
  grid: '<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',
  compare: '<path d="M12 3v18"/><path d="m8 8-4 4 4 4M16 8l4 4-4 4"/>',
  download: '<path d="M12 3v12M7 10l5 5 5-5"/><path d="M5 21h14"/>',
  scissors: '<circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M20 4 8.1 15.9M14.5 14.5 20 20M8.1 8.1 12 12"/>',
};
function Icon({ d, size = 20, color = 'currentColor', stroke = 2, fill = 'none', style }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke={color} style={style}
      strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round"
      dangerouslySetInnerHTML={{ __html: ICON[d] || d }} />
  );
}

// Named image placeholder the team fills later (drag an image onto it).
function Slot({ id, label, src, shape = 'rounded', radius = 12, style }) {
  return React.createElement('image-slot', { id, placeholder: label, src, shape, radius: String(radius), style: { display: 'block', width: '100%', height: '100%', ...style } });
}

const PRODUCTS = [
  { id: 1, name: 'Vestido Princesa Aurora', theme: 'Princesas', price: 129.9, rating: 4.8, reviews: 32, sizes: ['2', '4', '6', '8'], image: ASSETS + 'vestido-princesa-rosa.png', tone: 'pink', badge: { label: 'Mais vendido', tone: 'violet' } },
  { id: 2, name: 'Vestido Floral Encantado', theme: 'Vestidos florais', price: 119.9, rating: 4.7, reviews: 21, sizes: ['2', '4', '6'], image: ASSETS + 'vestido-floral-rosa.png', tone: 'sky' },
  { id: 3, name: 'Festa Junina Doçura', theme: 'Festa junina', price: 99.9, rating: 4.6, reviews: 14, sizes: ['4', '6', '8'], image: ASSETS + 'vestido-festa-junina.png', tone: 'coral', badge: { label: 'Novidade', tone: 'pink' } },
  { id: 4, name: 'Fantasia Arco-Íris', theme: 'Fantasia temática', price: 139.9, original: 169.9, rating: 4.9, reviews: 41, sizes: ['4', '6', '8', '10'], image: ASSETS + 'vestido-arco-iris.png', tone: 'violet', badge: { label: '-18%', tone: 'yellow' } },
  { id: 5, name: 'Vestido Tule Lilás', theme: 'Princesas', price: 149.9, rating: 4.8, reviews: 27, sizes: ['2', '4', '6', '8'], image: ASSETS + 'vestido-fantasia-lilas.png', tone: 'violet' },
  { id: 6, name: 'Vestido Festa Vermelho', theme: 'Aniversário', price: 129.9, rating: 4.5, reviews: 9, sizes: ['4', '6'], image: ASSETS + 'vestido-festa-vermelho.png', tone: 'coral' },
  { id: 7, name: 'Vestido Estrela Dourada', theme: 'Aniversário', price: 109.9, rating: 4.7, reviews: 16, sizes: ['2', '4', '6', '8'], image: ASSETS + 'vestido-estrela-dourada.png', tone: 'yellow' },
  { id: 8, name: 'Fantasia Coral Encantado', theme: 'Fantasia temática', price: 119.9, rating: 4.6, reviews: 12, sizes: ['4', '6', '8'], image: ASSETS + 'vestido-coral.png', tone: 'coral' },
];

const CATEGORIES = [
  { label: 'Princesas', count: 24, image: ASSETS + 'vestido-princesa-rosa.png', tone: 'pink' },
  { label: 'Festa junina', count: 12, image: ASSETS + 'vestido-festa-junina.png', tone: 'coral' },
  { label: 'Fantasia temática', count: 18, image: ASSETS + 'vestido-fantasia-lilas.png', tone: 'violet' },
  { label: 'Aniversário', count: 31, image: ASSETS + 'vestido-floral-rosa.png', tone: 'sky' },
  { label: 'Vestidos florais', count: 15, image: ASSETS + 'vestido-floral-rosa.png', tone: 'mint' },
  { label: 'Promoções', count: 9, image: ASSETS + 'vestido-festa-vermelho.png', tone: 'yellow' },
];

const TICKER = [
  'Feito à mão no ateliê', 'Vestidos de princesa', 'Festa junina', 'Fantasias temáticas',
  'Prova virtual com IA', 'Envio para todo o Brasil', 'Escolha com mais segurança',
];

const fmtBRL = (n) => 'R$ ' + n.toFixed(2).replace('.', ',');

Object.assign(window, { ASSETS, Icon, ICON, Slot, PRODUCTS, CATEGORIES, TICKER, fmtBRL });
