// Ícones de traço (24×24, stroke 2), desenhados para a vitrine. Sempre decorativos (aria-hidden):
// o texto ou o aria-label do controle é que dá o nome acessível.
const paths = {
  menu: "M4 6h16M4 12h16M4 18h16",
  x: "M18 6 6 18M6 6l12 12",
  sparkle: "M12 3l1.7 5.2L19 10l-5.3 1.8L12 17l-1.7-5.2L5 10l5.3-1.8Z",
  arrow: "M5 12h14M13 6l6 6-6 6",
  back: "M19 12H5M11 6l-6 6 6 6",
  check: "M20 6 9 17l-5-5",
  camera: "M4 8h3l2-3h6l2 3h3v11H4Z M12 9.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7",
  whatsapp: "M20.5 11.6a8.5 8.5 0 0 1-12.6 7.4L3.5 20.5l1.5-4.3a8.5 8.5 0 1 1 15.5-4.6Z M9 8.5c0 3.3 3.2 6.5 6.5 6.5l1-1.6-2-1-1 .8a4.6 4.6 0 0 1-2.2-2.2l.8-1-1-2Z",
  clock: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z M12 7v5l3 2",
  pin: "M12 21s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z M12 11.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5",
  truck: "M3 6h11v10H3Z M14 9h4l3 3v4h-7 M7 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4 M17 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4",
  heart: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
  crown: "M3 8l4.5 4L12 5l4.5 7L21 8l-2 11H5Z M5 19h14",
  bunting: "M2 5c3.3 2 6.7 3 10 3s6.7-1 10-3 M4.5 6.6 6 12l2.4-4.4 M10.5 8 12 13.5 13.5 8 M15.6 7.6 18 12l1.5-5.4",
  wand: "M4 20 14 10 M15 3l.8 2.2L18 6l-2.2.8L15 9l-.8-2.2L12 6l2.2-.8Z M19 11l.4 1.1 1.1.4-1.1.4-.4 1.1-.4-1.1-1.1-.4 1.1-.4Z",
  cake: "M4 21h16 M5 21v-8h14v8 M5 16.5c2.3 1.3 4.7 1.3 7 0s4.7-1.3 7 0 M12 13V9 M12 4c1.1 1.3 1.1 2.7 0 3.4-1.1-.7-1.1-2.1 0-3.4Z",
  scissors: "M6 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm0 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM20 4 8.1 15.9M14.5 14.5 20 20M8.1 8.1 12 12",
  ruler: "M3 16.5 16.5 3l4.5 4.5L7.5 21Z M7.5 12l2 2 M10.5 9l2 2 M13.5 6l2 2",
  grid: "M4 4h7v7H4ZM13 4h7v7h-7ZM4 13h7v7H4ZM13 13h7v7h-7Z",
  home: "M3 11 12 4l9 7 M5 9.5V20h5v-6h4v6h5V9.5",
  sort: "M7 4v16 M3 16l4 4 4-4 M17 20V4 M13 8l4-4 4 4",
  info: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z M12 11v6 M12 7.5v.01",
  refresh: "M20 11a8 8 0 0 0-14.3-4.9L4 8 M4 3v5h5 M4 13a8 8 0 0 0 14.3 4.9L20 16 M20 21v-5h-5",
  tag: "M3 12V4h8l10 10-8 8Z M7.5 7.5v.01",
  chat: "M4 5h16v11H9l-5 4Z M8 10h8 M8 13h5",
  search: "M21 21l-4.3-4.3 M11 18a7 7 0 1 1 0-14 7 7 0 0 1 0 14",
  accessibility: "M12 5.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3 M5 8l7 1.5L19 8 M12 9.5V14 M9 21l3-7 3 7",
  pause: "M8 5v14 M16 5v14",
  play: "M7 4.5 19.5 12 7 19.5Z",
  sun: "M12 3v1.5M12 19.5V21M4.6 4.6l1.1 1.1M18.3 18.3l1.1 1.1M3 12h1.5M19.5 12H21M4.6 19.4l1.1-1.1M18.3 5.7l1.1-1.1M12 16.5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Z",
  moon: "M20.5 13.3A8.5 8.5 0 1 1 10.7 3.5a6.6 6.6 0 0 0 9.8 9.8Z",
} as const;

export type IconName = keyof typeof paths;

export function Icon({ name, size = 20, className }: { name: IconName; size?: number; className?: string }) {
  return (
    <svg className={className} aria-hidden="true" focusable="false" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flex: "none" }}>
      <path d={paths[name]} />
    </svg>
  );
}
