/* @ds-bundle: {"format":4,"namespace":"FantasiandoDesignSystem_43d79f","components":[{"name":"CategoryCard","sourcePath":"components/commerce/CategoryCard.jsx"},{"name":"PriceTag","sourcePath":"components/commerce/PriceTag.jsx"},{"name":"ProductCard","sourcePath":"components/commerce/ProductCard.jsx"},{"name":"Rating","sourcePath":"components/commerce/Rating.jsx"},{"name":"StarField","sourcePath":"components/commerce/StarField.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"CreditCounter","sourcePath":"components/core/CreditCounter.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"MascotState","sourcePath":"components/feedback/MascotState.jsx"},{"name":"Modal","sourcePath":"components/feedback/Modal.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"PhotoUpload","sourcePath":"components/forms/PhotoUpload.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Header","sourcePath":"components/navigation/Header.jsx"},{"name":"TopBar","sourcePath":"components/navigation/TopBar.jsx"}],"sourceHashes":{"components/commerce/CategoryCard.jsx":"b26e675e5552","components/commerce/PriceTag.jsx":"035ba201d1cf","components/commerce/ProductCard.jsx":"bcec18e27700","components/commerce/Rating.jsx":"fe125646279f","components/commerce/StarField.jsx":"7bd9f1cdd097","components/core/Badge.jsx":"03334779bc48","components/core/Button.jsx":"7f371a333c25","components/core/CreditCounter.jsx":"d6305a42b04f","components/core/IconButton.jsx":"bdedf2c7a3c8","components/feedback/MascotState.jsx":"a171601c1763","components/feedback/Modal.jsx":"27fc93b54a2c","components/feedback/Toast.jsx":"9d359e423099","components/forms/Checkbox.jsx":"65ce64335154","components/forms/Input.jsx":"cdc6bcdf872f","components/forms/PhotoUpload.jsx":"535424ce1952","components/forms/Select.jsx":"18e94ae538f8","components/navigation/Header.jsx":"00d84a92e8ec","components/navigation/TopBar.jsx":"112ab7fa05dd","ui_kits/website/Account.jsx":"2280fe8cf0f1","ui_kits/website/App.jsx":"cce275a0dc15","ui_kits/website/Category.jsx":"d250f0328737","ui_kits/website/Contato.jsx":"cb2aa3b1352d","ui_kits/website/Home.jsx":"45ef72ff0691","ui_kits/website/Product.jsx":"138b856ecef0","ui_kits/website/ProvaVirtual.jsx":"f2c764f3a3d9","ui_kits/website/image-slot.js":"fff26d081c8d","ui_kits/website/lib.jsx":"91b3ad4770b5"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.FantasiandoDesignSystem_43d79f = window.FantasiandoDesignSystem_43d79f || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/commerce/CategoryCard.jsx
try { (() => {
/**
 * "Escolha por ocasião" category tile. Photo (or accent fill) with a soft
 * gradient base, label and product count.
 */
function CategoryCard({
  label,
  count,
  image,
  tone = 'violet',
  href = '#',
  onClick,
  style = {}
}) {
  const [hover, setHover] = React.useState(false);
  const tones = {
    violet: 'var(--violet-400)',
    pink: 'var(--pink-400)',
    yellow: 'var(--yellow-400)',
    sky: 'var(--sky-400)',
    coral: 'var(--coral-400)',
    mint: 'var(--mint-500)'
  };
  const accent = tones[tone] || tones.violet;
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: 'relative',
      display: 'block',
      overflow: 'hidden',
      textDecoration: 'none',
      borderRadius: 'var(--radius-md)',
      aspectRatio: '4 / 5',
      background: image ? 'var(--surface-sunken)' : accent,
      boxShadow: hover ? 'var(--shadow-card-hover)' : 'var(--shadow-card)',
      transform: hover ? 'translateY(-4px)' : 'none',
      transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base)',
      ...style
    }
  }, image && /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transform: hover ? 'scale(1.05)' : 'scale(1)',
      transition: 'transform var(--dur-slow) var(--ease-out)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to top, rgba(43,37,51,0.62) 0%, rgba(43,37,51,0.05) 52%, transparent 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      padding: 16,
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 19,
      lineHeight: 1.15
    }
  }, label), count != null && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      opacity: 0.9,
      marginTop: 2
    }
  }, count, " modelos")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 12,
      left: 12,
      width: 10,
      height: 10,
      borderRadius: 999,
      background: accent,
      boxShadow: '0 0 0 3px rgba(255,255,255,0.5)'
    }
  }));
}
Object.assign(__ds_scope, { CategoryCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/CategoryCard.jsx", error: String((e && e.message) || e) }); }

// components/commerce/PriceTag.jsx
try { (() => {
const fmt = n => 'R$ ' + n.toFixed(2).replace('.', ',');

/**
 * Price display in BRL. Optional strikethrough original (sale) and an
 * installment line ("ou 3x de R$ 43,30").
 */
function PriceTag({
  price,
  original,
  installments,
  size = 'md',
  style = {}
}) {
  const sizes = {
    sm: {
      main: 18,
      sub: 12
    },
    md: {
      main: 24,
      sub: 13
    },
    lg: {
      main: 32,
      sub: 14
    }
  }[size] || {
    main: 24,
    sub: 13
  };
  const onSale = original != null && original > price;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, onSale && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: sizes.sub,
      color: 'var(--text-subtle)',
      textDecoration: 'line-through'
    }
  }, fmt(original)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: sizes.main,
      lineHeight: 1,
      color: onSale ? 'var(--sale)' : 'var(--price)'
    }
  }, fmt(price))), installments && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: sizes.sub,
      color: 'var(--text-muted)',
      marginTop: 3
    }
  }, "ou ", installments, "x de ", fmt(price / installments), " sem juros"));
}
Object.assign(__ds_scope, { PriceTag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/PriceTag.jsx", error: String((e && e.message) || e) }); }

// components/commerce/Rating.jsx
try { (() => {
/** Star rating display (filled brand stars) with optional review count. */
function Rating({
  value = 5,
  count,
  size = 15,
  style = {}
}) {
  const full = Math.round(value);
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      gap: 1,
      color: 'var(--yellow-400)',
      fontSize: size,
      lineHeight: 1
    }
  }, [0, 1, 2, 3, 4].map(i => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      color: i < full ? 'var(--yellow-400)' : 'var(--line-200)'
    }
  }, "\u2605"))), count != null && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      color: 'var(--text-muted)',
      fontWeight: 600
    }
  }, "(", count, ")"));
}
Object.assign(__ds_scope, { Rating });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/Rating.jsx", error: String((e && e.message) || e) }); }

// components/commerce/StarField.jsx
try { (() => {
const PRESET = [{
  x: 6,
  y: 18,
  s: 18,
  c: 'var(--yellow-300)',
  d: 0
}, {
  x: 22,
  y: 70,
  s: 11,
  c: 'var(--pink-300)',
  d: 0.8
}, {
  x: 40,
  y: 10,
  s: 13,
  c: 'var(--violet-300)',
  d: 1.6
}, {
  x: 64,
  y: 64,
  s: 16,
  c: 'var(--sky-300)',
  d: 0.4
}, {
  x: 82,
  y: 22,
  s: 12,
  c: 'var(--yellow-300)',
  d: 1.2
}, {
  x: 92,
  y: 58,
  s: 15,
  c: 'var(--pink-200)',
  d: 2.0
}, {
  x: 52,
  y: 84,
  s: 10,
  c: 'var(--violet-200)',
  d: 0.6
}];

/**
 * Decorative scattered stars/sparkles for section & hero backdrops.
 * Purely ornamental (aria-hidden); sits behind content, never over CTAs.
 */
function StarField({
  density = 7,
  twinkle = true,
  style = {}
}) {
  const stars = PRESET.slice(0, Math.max(0, Math.min(density, PRESET.length)));
  return /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      overflow: 'hidden',
      pointerEvents: 'none',
      ...style
    }
  }, stars.map((st, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      position: 'absolute',
      left: st.x + '%',
      top: st.y + '%',
      color: st.c,
      fontSize: st.s,
      lineHeight: 1,
      animation: twinkle ? `fz-twinkle ${3 + i % 3}s var(--ease-soft) ${st.d}s infinite` : 'none'
    }
  }, "\u2605")));
}
Object.assign(__ds_scope, { StarField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/StarField.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Small status / promo label. Tones map to the support palette.
 * Use `dot` for a leading status dot, or `star` for a brand star.
 */
function Badge({
  children,
  tone = 'violet',
  dot = false,
  star = false,
  style = {},
  ...rest
}) {
  const tones = {
    violet: {
      bg: 'var(--violet-100)',
      fg: 'var(--violet-700)',
      d: 'var(--violet-500)'
    },
    pink: {
      bg: 'var(--pink-100)',
      fg: 'var(--pink-600)',
      d: 'var(--pink-400)'
    },
    yellow: {
      bg: 'var(--yellow-100)',
      fg: 'var(--yellow-500)',
      d: 'var(--yellow-400)'
    },
    sky: {
      bg: 'var(--sky-100)',
      fg: 'var(--sky-500)',
      d: 'var(--sky-400)'
    },
    coral: {
      bg: 'var(--coral-100)',
      fg: 'var(--coral-500)',
      d: 'var(--coral-400)'
    },
    success: {
      bg: 'var(--success-soft)',
      fg: 'var(--mint-500)',
      d: 'var(--success)'
    },
    neutral: {
      bg: 'var(--surface-sunken)',
      fg: 'var(--ink-600)',
      d: 'var(--ink-400)'
    },
    solid: {
      bg: 'var(--brand)',
      fg: 'var(--text-on-brand)',
      d: 'var(--text-on-brand)'
    }
  };
  const t = tones[tone] || tones.violet;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '4px 11px',
      borderRadius: 'var(--radius-pill)',
      background: t.bg,
      color: t.fg,
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: 12.5,
      lineHeight: 1.4,
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), star && /*#__PURE__*/React.createElement("span", {
    style: {
      color: t.d,
      fontSize: 13,
      lineHeight: 1
    }
  }, "\u2605"), dot && !star && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: 999,
      background: t.d
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Annapê Ateliê action button.
 * Variants: primary (rosa, dark text), accent (caramelo), secondary (outline), ghost, soft (rosa wash).
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  iconLeft = null,
  iconRight = null,
  onClick,
  type = 'button',
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const sizes = {
    sm: {
      padding: '8px 14px',
      fontSize: 13.5,
      height: 36,
      gap: 7
    },
    md: {
      padding: '11px 20px',
      fontSize: 15,
      height: 46,
      gap: 8
    },
    lg: {
      padding: '15px 28px',
      fontSize: 17,
      height: 56,
      gap: 10
    }
  };
  const s = sizes[size] || sizes.md;
  const palettes = {
    primary: {
      background: hover ? 'var(--brand-strong)' : 'var(--brand)',
      color: 'var(--text-on-brand)',
      border: '1px solid transparent',
      boxShadow: disabled ? 'none' : 'var(--shadow-brand)'
    },
    accent: {
      background: hover ? 'var(--accent-strong)' : 'var(--accent)',
      color: 'var(--text-on-accent)',
      border: '1px solid transparent',
      boxShadow: disabled ? 'none' : '0 8px 20px rgba(195,138,103,0.26)'
    },
    secondary: {
      background: hover ? 'var(--rosa-50)' : 'var(--surface-card)',
      color: 'var(--text-strong)',
      border: '1.5px solid var(--line-200)',
      boxShadow: 'var(--shadow-xs)'
    },
    soft: {
      background: hover ? 'var(--violet-200)' : 'var(--violet-100)',
      color: 'var(--violet-700)',
      border: '1px solid transparent',
      boxShadow: 'none'
    },
    ghost: {
      background: hover ? 'var(--rosa-50)' : 'transparent',
      color: 'var(--brand-ink)',
      border: '1px solid transparent',
      boxShadow: 'none'
    }
  };
  const p = palettes[variant] || palettes.primary;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: s.gap,
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: s.fontSize,
      lineHeight: 1,
      padding: s.padding,
      minHeight: s.height,
      width: fullWidth ? '100%' : 'auto',
      borderRadius: 'var(--radius-pill)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      transform: press && !disabled ? 'scale(0.97)' : 'scale(1)',
      transition: 'transform var(--dur-fast) var(--ease-out), background var(--dur-base), box-shadow var(--dur-base)',
      ...p,
      ...style
    }
  }, rest), iconLeft, /*#__PURE__*/React.createElement("span", null, children), iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/commerce/ProductCard.jsx
try { (() => {
const heartPath = 'M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z';
const sparklePath = 'M12 3l1.7 5.2L19 10l-5.3 1.8L12 17l-1.7-5.2L5 10l5.3-1.8Z';

/**
 * Product card — image, name, theme, sizes, rating, price, primary "Comprar"
 * and secondary "Experimentar com IA", plus a favorite heart. The commercial
 * workhorse of the storefront.
 */
function ProductCard({
  name,
  theme,
  price,
  original,
  installments,
  image,
  sizes = [],
  rating,
  reviews,
  badge,
  favorite = false,
  onFavorite,
  onBuy,
  onTryOn,
  style = {}
}) {
  const [hover, setHover] = React.useState(false);
  const [fav, setFav] = React.useState(favorite);
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--surface-card)',
      border: '1px solid var(--line-200)',
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      boxShadow: hover ? 'var(--shadow-card-hover)' : 'var(--shadow-card)',
      transform: hover ? 'translateY(-5px)' : 'none',
      transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base)',
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: '4 / 5',
      background: 'var(--surface-sunken)',
      overflow: 'hidden'
    }
  }, image && /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transform: hover ? 'scale(1.05)' : 'scale(1)',
      transition: 'transform var(--dur-slow) var(--ease-out)'
    }
  }), badge && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 12,
      left: 12
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: badge.tone || 'pink'
  }, badge.label)), /*#__PURE__*/React.createElement("button", {
    "aria-label": "Favoritar",
    onClick: () => {
      setFav(!fav);
      onFavorite && onFavorite(!fav);
    },
    style: {
      position: 'absolute',
      top: 10,
      right: 10,
      width: 38,
      height: 38,
      borderRadius: 999,
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'color-mix(in oklab, var(--surface-card) 88%, transparent)',
      backdropFilter: 'blur(4px)',
      boxShadow: 'var(--shadow-sm)',
      color: fav ? 'var(--rosa-500)' : 'var(--ink-400)',
      transition: 'color var(--dur-fast), transform var(--dur-fast)',
      transform: fav ? 'scale(1.08)' : 'scale(1)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: fav ? 'currentColor' : 'none',
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: heartPath
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      padding: 16
    }
  }, theme && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11.5,
      fontWeight: 800,
      letterSpacing: '0.05em',
      textTransform: 'uppercase',
      color: 'var(--accent-ink)'
    }
  }, theme), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 18,
      lineHeight: 1.2,
      color: 'var(--text-strong)'
    }
  }, name), rating != null && /*#__PURE__*/React.createElement(__ds_scope.Rating, {
    value: rating,
    count: reviews
  }), sizes.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 5,
      flexWrap: 'wrap'
    }
  }, sizes.map(s => /*#__PURE__*/React.createElement("span", {
    key: s,
    style: {
      minWidth: 26,
      padding: '2px 7px',
      textAlign: 'center',
      fontSize: 12,
      fontWeight: 700,
      color: 'var(--text-muted)',
      background: 'var(--surface-sunken)',
      border: '1px solid var(--line-200)',
      borderRadius: 'var(--radius-sm)'
    }
  }, s))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 2
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.PriceTag, {
    price: price,
    original: original,
    installments: installments,
    size: "sm"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    fullWidth: true,
    onClick: onBuy
  }, "Comprar"), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "secondary",
    fullWidth: true,
    onClick: onTryOn,
    iconLeft: /*#__PURE__*/React.createElement("svg", {
      width: "16",
      height: "16",
      viewBox: "0 0 24 24",
      fill: "currentColor"
    }, /*#__PURE__*/React.createElement("path", {
      d: sparklePath
    }))
  }, "Experimentar com IA"))));
}
Object.assign(__ds_scope, { ProductCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/ProductCard.jsx", error: String((e && e.message) || e) }); }

// components/core/CreditCounter.jsx
try { (() => {
/**
 * Virtual try-on credit counter. Shows "{used} de {total} provas disponíveis"
 * with a row of pips. Empty state turns coral.
 */
function CreditCounter({
  remaining = 3,
  total = 3,
  compact = false,
  style = {}
}) {
  const empty = remaining <= 0;
  const accent = empty ? 'var(--coral-400)' : 'var(--rosa-600)';
  const pips = Array.from({
    length: total
  }, (_, i) => i < remaining);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: compact ? 8 : 10,
      padding: compact ? '6px 12px' : '9px 14px',
      background: empty ? 'var(--coral-100)' : 'var(--violet-50)',
      border: `1px solid ${empty ? 'var(--coral-200)' : 'var(--violet-100)'}`,
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4
    }
  }, pips.map((on, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      width: compact ? 8 : 10,
      height: compact ? 8 : 10,
      borderRadius: 999,
      background: on ? accent : 'transparent',
      border: `1.5px solid ${on ? accent : 'var(--violet-200)'}`,
      transition: 'background var(--dur-base)'
    }
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 800,
      fontSize: compact ? 13 : 14,
      color: empty ? 'var(--coral-500)' : 'var(--violet-700)'
    }
  }, remaining, " de ", total), !compact && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, empty ? 'sem provas' : 'provas disponíveis'));
}
Object.assign(__ds_scope, { CreditCounter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/CreditCounter.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Round icon-only button — header actions (search, account, favorites, cart).
 * Pass a Lucide <svg> (or any node) as children. Optional count badge.
 */
function IconButton({
  children,
  label,
  badge = null,
  variant = 'plain',
  size = 'md',
  onClick,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const dims = {
    sm: 36,
    md: 44,
    lg: 48
  }[size] || 44;
  const palettes = {
    plain: {
      background: hover ? 'var(--violet-50)' : 'transparent',
      color: 'var(--text-body)'
    },
    soft: {
      background: hover ? 'var(--violet-200)' : 'var(--violet-100)',
      color: 'var(--violet-700)'
    },
    solid: {
      background: hover ? 'var(--brand-strong)' : 'var(--brand)',
      color: 'var(--text-on-brand)'
    }
  };
  const p = palettes[variant] || palettes.plain;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: 'relative',
      width: dims,
      height: dims,
      minWidth: dims,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'var(--radius-pill)',
      border: 'none',
      cursor: 'pointer',
      transition: 'background var(--dur-base)',
      ...p,
      ...style
    }
  }, rest), children, badge != null && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 2,
      right: 2,
      minWidth: 18,
      height: 18,
      padding: '0 5px',
      borderRadius: 999,
      background: 'var(--brand)',
      color: 'var(--text-on-brand)',
      fontFamily: 'var(--font-body)',
      fontWeight: 800,
      fontSize: 11,
      lineHeight: '18px',
      textAlign: 'center',
      boxShadow: '0 0 0 2px var(--surface-card)'
    }
  }, badge));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/feedback/MascotState.jsx
try { (() => {
const STATES = {
  empty: {
    asset: 'mascote-vazio.png',
    tone: 'var(--brand)',
    float: true,
    title: 'Ainda não tem nada por aqui',
    text: 'Envie uma foto ou adicione favoritos para começar.'
  },
  loading: {
    asset: 'mascote-loading.png',
    tone: 'var(--brand)',
    float: true,
    title: 'Gerando a prévia…',
    text: 'O mascote da Annapê está preparando a sua simulação. Leva só alguns instantes.'
  },
  success: {
    asset: 'mascote-sucesso.png',
    tone: 'var(--success)',
    float: false,
    title: 'Prévia pronta!',
    text: 'Veja como ficou. Lembre que é uma simulação visual.'
  },
  error: {
    asset: 'mascote-erro-foto.png',
    tone: 'var(--coral-500)',
    float: false,
    title: 'Vamos tentar outra foto?',
    text: 'Use uma foto de corpo inteiro, com boa luz e a criança de frente.'
  },
  'no-credits': {
    asset: 'mascote-vazio.png',
    tone: 'var(--coral-500)',
    float: true,
    title: 'Suas provas acabaram',
    text: 'Você usou as 3 provas da sua conta. Fale com a gente no WhatsApp para continuar.'
  },
  cart: {
    asset: 'mascote-sucesso.png',
    tone: 'var(--success)',
    float: false,
    title: 'Adicionado ao carrinho',
    text: 'Continue escolhendo ou finalize quando quiser.'
  }
};

/**
 * Mascot-led UI state block (empty / loading / success / error / no-credits /
 * cart). Each maps to the right heart-sun mascot pose and default copy you can override.
 * `assetsPath` is the relative prefix to /assets.
 */
function MascotState({
  state = 'empty',
  title,
  text,
  action = null,
  assetsPath = 'assets/',
  progress = null,
  size = 'md',
  style = {}
}) {
  const s = STATES[state] || STATES.empty;
  const dim = {
    sm: 96,
    md: 140,
    lg: 184
  }[size] || 140;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      gap: 14,
      padding: '8px 16px',
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: assetsPath + s.asset,
    alt: "",
    style: {
      width: dim,
      height: 'auto',
      animation: s.float ? 'fz-float var(--float-dur) var(--ease-soft) infinite' : 'fz-fade-up var(--dur-slow) var(--ease-out)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      maxWidth: 380
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 22,
      color: 'var(--text-strong)'
    }
  }, title || s.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 15,
      lineHeight: 1.5,
      color: 'var(--text-muted)'
    }
  }, text || s.text)), progress != null && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 220,
      height: 8,
      borderRadius: 999,
      background: 'var(--violet-100)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: `${Math.round(progress * 100)}%`,
      height: '100%',
      borderRadius: 999,
      background: 'var(--grad-candy)',
      transition: 'width var(--dur-base) var(--ease-out)'
    }
  })), action);
}
Object.assign(__ds_scope, { MascotState });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/MascotState.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Modal.jsx
try { (() => {
/** Centered modal dialog with scrim. Use for the try-on flow, size guide, login. */
function Modal({
  open = true,
  onClose,
  title,
  children,
  footer = null,
  width = 520,
  style = {}
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 1000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
      background: 'var(--overlay)',
      backdropFilter: 'blur(3px)',
      animation: 'fz-fade-up var(--dur-fast) var(--ease-out)',
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    role: "dialog",
    "aria-modal": "true",
    style: {
      width: '100%',
      maxWidth: width,
      maxHeight: '90vh',
      overflow: 'auto',
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-lg)',
      animation: 'fz-fade-up var(--dur-base) var(--ease-out)',
      ...style
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 12,
      padding: '18px 22px',
      borderBottom: '1px solid var(--line-200)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 21,
      color: 'var(--text-strong)'
    }
  }, title), onClose && /*#__PURE__*/React.createElement("button", {
    "aria-label": "Fechar",
    onClick: onClose,
    style: {
      border: 'none',
      background: 'var(--surface-sunken)',
      cursor: 'pointer',
      color: 'var(--ink-600)',
      width: 36,
      height: 36,
      borderRadius: 999,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18M6 6l12 12"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 22
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 22px',
      borderTop: '1px solid var(--line-200)',
      display: 'flex',
      gap: 10,
      justifyContent: 'flex-end'
    }
  }, footer)));
}
Object.assign(__ds_scope, { Modal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Modal.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
/** Lightweight toast notification. Optional mascot icon avatar. */
function Toast({
  title,
  text,
  tone = 'success',
  icon = null,
  onClose,
  assetsPath = 'assets/',
  showMascot = false,
  style = {}
}) {
  const tones = {
    success: {
      bar: 'var(--success)',
      bg: 'var(--surface-raised)'
    },
    info: {
      bar: 'var(--info)',
      bg: 'var(--surface-raised)'
    },
    warning: {
      bar: 'var(--warning)',
      bg: 'var(--surface-raised)'
    },
    error: {
      bar: 'var(--danger)',
      bg: 'var(--surface-raised)'
    }
  };
  const t = tones[tone] || tones.success;
  return /*#__PURE__*/React.createElement("div", {
    role: "status",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '12px 14px',
      minWidth: 280,
      maxWidth: 380,
      background: t.bg,
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-lg)',
      borderLeft: `4px solid ${t.bar}`,
      fontFamily: 'var(--font-body)',
      animation: 'fz-fade-up var(--dur-base) var(--ease-out)',
      ...style
    }
  }, showMascot ? /*#__PURE__*/React.createElement("img", {
    src: assetsPath + 'mascote-icone.png',
    alt: "",
    style: {
      width: 40,
      height: 40,
      flexShrink: 0
    }
  }) : icon ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: t.bar,
      display: 'flex',
      flexShrink: 0
    }
  }, icon) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 800,
      fontSize: 14.5,
      color: 'var(--text-strong)'
    }
  }, title), text && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)',
      marginTop: 1
    }
  }, text)), onClose && /*#__PURE__*/React.createElement("button", {
    "aria-label": "Fechar",
    onClick: onClose,
    style: {
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      color: 'var(--ink-400)',
      display: 'flex',
      padding: 4
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18M6 6l12 12"
  }))));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
/** Checkbox with brand-violet fill when checked. Use for filters & consent. */
function Checkbox({
  label,
  checked = false,
  onChange,
  disabled = false,
  id,
  style = {}
}) {
  const cbId = id || React.useId();
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: cbId,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      fontFamily: 'var(--font-body)',
      fontSize: 14.5,
      color: 'var(--text-body)',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", {
    id: cbId,
    type: "checkbox",
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 1,
      height: 1
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 22,
      height: 22,
      borderRadius: 'var(--radius-sm)',
      flexShrink: 0,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: checked ? 'var(--brand)' : 'var(--surface-card)',
      border: `1.5px solid ${checked ? 'var(--brand)' : 'var(--border-strong)'}`,
      transition: 'background var(--dur-fast), border-color var(--dur-fast)'
    }
  }, checked && /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--text-on-brand)",
    strokeWidth: "3.2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 6 9 17l-5-5"
  }))), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Labeled text field with optional leading icon, helper and error states. */
function Input({
  label,
  value,
  onChange,
  placeholder,
  type = 'text',
  helper,
  error,
  iconLeft = null,
  id,
  disabled = false,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || React.useId();
  const borderColor = error ? 'var(--coral-400)' : focus ? 'var(--violet-400)' : 'var(--line-200)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontWeight: 700,
      fontSize: 13.5,
      color: 'var(--text-strong)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 9,
      padding: '0 14px',
      height: 48,
      background: disabled ? 'var(--surface-sunken)' : 'var(--surface-card)',
      border: `1.5px solid ${borderColor}`,
      borderRadius: 'var(--radius-md)',
      boxShadow: focus ? 'var(--ring)' : 'none',
      transition: 'border-color var(--dur-base), box-shadow var(--dur-base)'
    }
  }, iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-subtle)',
      display: 'flex'
    }
  }, iconLeft), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    type: type,
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      color: 'var(--text-body)',
      minWidth: 0
    }
  }, rest))), (helper || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      color: error ? 'var(--coral-500)' : 'var(--text-muted)'
    }
  }, error || helper));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/PhotoUpload.jsx
try { (() => {
/**
 * Full-body photo dropzone for the virtual try-on. Dashed well with upload
 * affordance; shows the empty-state heart-sun mascot when no file is chosen.
 * `assetsPath` is the relative prefix to the /assets folder.
 */
function PhotoUpload({
  fileName = null,
  onPick,
  assetsPath = 'assets/',
  hint = 'Foto de corpo inteiro · boa luz · criança de frente',
  style = {}
}) {
  const [drag, setDrag] = React.useState(false);
  const inputRef = React.useRef(null);
  const has = !!fileName;
  return /*#__PURE__*/React.createElement("div", {
    onClick: () => inputRef.current && inputRef.current.click(),
    onDragOver: e => {
      e.preventDefault();
      setDrag(true);
    },
    onDragLeave: () => setDrag(false),
    onDrop: e => {
      e.preventDefault();
      setDrag(false);
      onPick && onPick(e.dataTransfer.files[0]);
    },
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 12,
      padding: '26px 22px',
      textAlign: 'center',
      cursor: 'pointer',
      background: drag ? 'var(--violet-50)' : 'var(--surface-sunken)',
      border: `2px dashed ${drag ? 'var(--violet-400)' : 'var(--violet-200)'}`,
      borderRadius: 'var(--radius-lg)',
      fontFamily: 'var(--font-body)',
      transition: 'background var(--dur-base), border-color var(--dur-base)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", {
    ref: inputRef,
    type: "file",
    accept: "image/*",
    style: {
      display: 'none'
    },
    onChange: e => onPick && onPick(e.target.files[0])
  }), !has && /*#__PURE__*/React.createElement("img", {
    src: assetsPath + 'mascote-vazio.png',
    alt: "",
    style: {
      width: 116,
      height: 'auto',
      animation: 'fz-float var(--float-dur) var(--ease-soft) infinite'
    }
  }), has ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 54,
      height: 54,
      borderRadius: 999,
      background: 'var(--success-soft)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--success)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "26",
    height: "26",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.4",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 6 9 17l-5-5"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 15,
      color: 'var(--text-strong)'
    }
  }, fileName), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--brand-ink)',
      fontWeight: 700
    }
  }, "Trocar foto")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 16,
      color: 'var(--text-strong)'
    }
  }, "Envie uma foto da crian\xE7a"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)',
      maxWidth: 280,
      lineHeight: 1.5
    }
  }, hint), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      marginTop: 2,
      padding: '9px 16px',
      borderRadius: 'var(--radius-pill)',
      background: 'var(--violet-100)',
      color: 'var(--violet-700)',
      fontWeight: 700,
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "17",
    height: "17",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m17 8-5-5-5 5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 3v12"
  })), "Escolher arquivo")));
}
Object.assign(__ds_scope, { PhotoUpload });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/PhotoUpload.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Native select styled to match Annapê inputs. */
function Select({
  label,
  value,
  onChange,
  options = [],
  id,
  helper,
  disabled = false,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const selId = id || React.useId();
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: selId,
    style: {
      fontWeight: 700,
      fontSize: 13.5,
      color: 'var(--text-strong)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 48,
      border: `1.5px solid ${focus ? 'var(--violet-400)' : 'var(--line-200)'}`,
      borderRadius: 'var(--radius-md)',
      background: disabled ? 'var(--surface-sunken)' : 'var(--surface-card)',
      color: 'var(--text-body)',
      boxShadow: focus ? 'var(--ring)' : 'none',
      transition: 'border-color var(--dur-base), box-shadow var(--dur-base)'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: selId,
    value: value,
    onChange: onChange,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: '100%',
      height: '100%',
      padding: '0 38px 0 14px',
      border: 'none',
      outline: 'none',
      background: 'transparent',
      appearance: 'none',
      WebkitAppearance: 'none',
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      color: 'var(--text-body)',
      cursor: 'pointer'
    }
  }, rest), options.map(o => {
    const val = typeof o === 'string' ? o : o.value;
    const lab = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: val,
      value: val
    }, lab);
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 14,
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none',
      color: 'var(--text-subtle)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "m6 9 6 6 6-6"
  })))), helper && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      color: 'var(--text-muted)'
    }
  }, helper));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Header.jsx
try { (() => {
const ICONS = {
  search: '<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M5.5 21a7 7 0 0 1 13 0"/>',
  heart: '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>',
  cart: '<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/>',
  sparkle: '<path d="M12 3l1.7 5.2L19 10l-5.3 1.8L12 17l-1.7-5.2L5 10l5.3-1.8Z"/>',
  menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
  moon: '<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"/>',
  dress: '<path d="M9 3h6l1 5-2 2 4 10H6l4-10-2-2 1-5Z"/><path d="M9 3h6"/>',
  chat: '<path d="M20 11.5a7.5 7.5 0 0 1-8 7.5 8.5 8.5 0 0 1-3.4-.7L4 20l1.7-3.5A7.1 7.1 0 0 1 4 11.5 7.5 7.5 0 0 1 12 4a7.5 7.5 0 0 1 8 7.5Z"/>'
};
const Icon = ({
  d,
  size = 21
}) => /*#__PURE__*/React.createElement("svg", {
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  dangerouslySetInnerHTML: {
    __html: d
  }
});
const NAV = ['Vestidos', 'Fantasias', 'Prova virtual', 'Sobre', 'Contato'];
const NAV_ICONS = { Vestidos: ICONS.dress, Fantasias: ICONS.sparkle, 'Prova virtual': ICONS.sparkle, Sobre: ICONS.heart, Contato: ICONS.chat };

/**
 * Main storefront header — Annapê Ateliê logo, nav, icons, theme toggle and
 * the "Experimentar com IA" CTA. Translucent over the page (backdrop blur).
 * `assetsPath` is the relative prefix to /assets.
 */
function Header({
  nav = NAV,
  active,
  cartCount = 0,
  favCount = 0,
  assetsPath = 'assets/',
  onNav,
  onAction,
  theme,
  onToggleTheme,
  compact = false,
  style = {}
}) {
  const [hovered, setHovered] = React.useState(null);
  const act = k => onAction && onAction(k);
  const bar = {
    background: 'color-mix(in oklab, var(--bg-base) 84%, transparent)',
    backdropFilter: 'saturate(1.4) blur(14px)',
    WebkitBackdropFilter: 'saturate(1.4) blur(14px)',
    borderBottom: '1px solid var(--line-200)',
    fontFamily: 'var(--font-body)',
    color: 'var(--text-body)',
    ...style
  };
  const themeBtn = onToggleTheme ? /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    label: theme === 'dark' ? 'Modo claro' : 'Modo escuro',
    onClick: onToggleTheme
  }, /*#__PURE__*/React.createElement(Icon, {
    d: theme === 'dark' ? ICONS.sun : ICONS.moon
  })) : null;
  if (compact) {
    return /*#__PURE__*/React.createElement("header", {
      style: bar
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        height: 64,
        padding: '0 14px'
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
      label: "Menu"
    }, /*#__PURE__*/React.createElement(Icon, {
      d: ICONS.menu
    })), /*#__PURE__*/React.createElement("img", {
      src: assetsPath + 'logo-cor.png',
      alt: "Annap\xEA Ateli\xEA",
      style: {
        height: 46,
        margin: '0 auto'
      }
    }), themeBtn, /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
      label: "Carrinho",
      badge: cartCount || undefined,
      onClick: () => act('cart')
    }, /*#__PURE__*/React.createElement(Icon, {
      d: ICONS.cart
    }))));
  }
  return /*#__PURE__*/React.createElement("header", {
    style: bar
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 20,
      height: 84,
      maxWidth: 'var(--container-wide)',
      margin: '0 auto',
      padding: '0 24px'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav && onNav('__home');
    },
    style: {
      display: 'flex',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: assetsPath + 'logo-cor.png',
    alt: "Annap\xEA Ateli\xEA",
    style: {
      height: 62
    }
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 2,
      flex: 1,
      justifyContent: 'center'
    }
  }, nav.map(item => {
    const isActive = active === item;
    const isHover = hovered === item;
    const isAI = item === 'Prova virtual';
    return /*#__PURE__*/React.createElement("a", {
      key: item,
      href: "#",
      onClick: e => {
        e.preventDefault();
        onNav && onNav(item);
      },
      onMouseEnter: () => setHovered(item),
      onMouseLeave: () => setHovered(null),
      style: {
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        padding: '8px 12px',
        borderRadius: 'var(--radius-pill)',
        fontSize: 15,
        fontWeight: isActive ? 800 : 600,
        textDecoration: 'none',
        color: isActive || isHover || isAI ? 'var(--brand-ink)' : 'var(--text-body)',
        background: isActive ? 'var(--rosa-100)' : isHover ? 'var(--rosa-50)' : 'transparent',
        whiteSpace: 'nowrap',
        transition: 'color var(--dur-fast), background var(--dur-fast)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      d: NAV_ICONS[item] || ICONS.sparkle,
      size: 14
    }), item);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 2,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    label: "Busca"
  }, /*#__PURE__*/React.createElement(Icon, {
    d: ICONS.search
  })), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    label: "Conta",
    onClick: () => act('account')
  }, /*#__PURE__*/React.createElement(Icon, {
    d: ICONS.user
  })), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    label: "Favoritos",
    badge: favCount || undefined
  }, /*#__PURE__*/React.createElement(Icon, {
    d: ICONS.heart
  })), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    label: "Carrinho",
    badge: cartCount || undefined,
    onClick: () => act('cart')
  }, /*#__PURE__*/React.createElement(Icon, {
    d: ICONS.cart
  })), themeBtn, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    size: "sm",
    style: {
      marginLeft: 8
    },
    onClick: () => act('tryon'),
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      d: ICONS.sparkle,
      size: 15
    })
  }, "Experimentar com IA"))));
}
Object.assign(__ds_scope, { Header });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Header.jsx", error: String((e && e.message) || e) }); }

// components/navigation/TopBar.jsx
try { (() => {
const DEFAULT = ['Envio para todo o Brasil', '3 provas virtuais grátis por conta', 'Atendimento pelo WhatsApp', 'Compra segura'];

/** Thin cocoa announcement bar. Rotates messages, or shows them spread on wide screens. */
function TopBar({
  messages = DEFAULT,
  rotate = true,
  interval = 3200,
  style = {}
}) {
  const [i, setI] = React.useState(0);
  React.useEffect(() => {
    if (!rotate) return;
    const id = setInterval(() => setI(p => (p + 1) % messages.length), interval);
    return () => clearInterval(id);
  }, [rotate, interval, messages.length]);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-inverse)',
      color: 'var(--text-on-inverse)',
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      fontWeight: 600,
      height: 'var(--topbar-h)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      ...style
    }
  }, rotate ? /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      animation: 'fz-fade-up var(--dur-base) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--rosa-400)'
    }
  }, "\u2665"), messages[i]) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 26,
      maxWidth: 'var(--container-wide)',
      padding: '0 24px',
      flexWrap: 'wrap',
      justifyContent: 'center'
    }
  }, messages.map((m, k) => /*#__PURE__*/React.createElement("span", {
    key: k,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--rosa-400)'
    }
  }, "\u2665"), m))));
}
Object.assign(__ds_scope, { TopBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/TopBar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Account.jsx
try { (() => {
// Account screen — user data, orders, credits, saved results, privacy.
function Account() {
  const shop = window.useShop();
  const C = window.FantasiandoDesignSystem_43d79f;
  const {
    Button,
    CreditCounter,
    Badge,
    MascotState,
    Input,
    Checkbox
  } = C;
  const {
    Section,
    Eyebrow,
    Title
  } = window;
  const [tab, setTab] = React.useState('Visão geral');
  const tabs = ['Visão geral', 'Pedidos', 'Provas virtuais', 'Privacidade'];
  if (!shop.user) return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(window.AuthPanel, null));
  const orders = [{
    id: '#AN-2041',
    date: '02 jun 2026',
    items: 'Vestido Princesa Aurora · Tam 6',
    status: 'A caminho',
    tone: 'sky',
    total: 129.9
  }, {
    id: '#AN-1987',
    date: '18 mai 2026',
    items: 'Fantasia Arco-Íris · Tam 8',
    status: 'Entregue',
    tone: 'success',
    total: 139.9
  }];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--grad-hero)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '40px 24px',
      display: 'flex',
      alignItems: 'center',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: window.ASSETS + 'mascote-icone.png',
    alt: "",
    style: {
      width: 72,
      height: 72,
      borderRadius: 999,
      background: 'var(--rosa-100)',
      boxShadow: 'var(--shadow-sm)',
      padding: 4
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Minha conta"), /*#__PURE__*/React.createElement(Title, {
    size: 28
  }, "Ol\xE1, ", shop.user.name, "!")), /*#__PURE__*/React.createElement(CreditCounter, {
    remaining: shop.credits,
    total: 3
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 24px',
      borderBottom: '1px solid var(--line-200)',
      display: 'flex',
      gap: 4
    }
  }, tabs.map(t => /*#__PURE__*/React.createElement("button", {
    key: t,
    onClick: () => setTab(t),
    style: {
      padding: '16px 16px',
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      fontFamily: 'var(--font-body)',
      fontWeight: tab === t ? 800 : 600,
      fontSize: 15,
      color: tab === t ? 'var(--brand-ink)' : 'var(--text-muted)',
      borderBottom: tab === t ? '3px solid var(--violet-500)' : '3px solid transparent',
      marginBottom: -1
    }
  }, t))), /*#__PURE__*/React.createElement(Section, null, tab === 'Visão geral' && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Card, {
    title: "Dados da conta"
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Nome",
    value: shop.user.name
  }), /*#__PURE__*/React.createElement(Field, {
    label: "E-mail",
    value: shop.user.email
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Cidade",
    value: "Petr\xF3polis, RJ"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    style: {
      marginTop: 6
    }
  }, "Editar dados")), /*#__PURE__*/React.createElement(Card, {
    title: "Provas virtuais"
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14.5,
      color: 'var(--text-muted)',
      lineHeight: 1.6,
      margin: '0 0 14px'
    }
  }, "Cada conta tem 3 provas virtuais. Use para simular o vestido antes de comprar."), /*#__PURE__*/React.createElement(CreditCounter, {
    remaining: shop.credits,
    total: 3
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    style: {
      marginTop: 16
    },
    onClick: () => shop.go('prova', 'Prova virtual'),
    iconLeft: /*#__PURE__*/React.createElement(window.Icon, {
      d: "sparkle",
      size: 16
    })
  }, "Fazer uma prova")), /*#__PURE__*/React.createElement(Card, {
    title: "\xDAltimos pedidos",
    wide: true
  }, orders.map(o => /*#__PURE__*/React.createElement(OrderRow, {
    key: o.id,
    o: o,
    C: C
  })))), tab === 'Pedidos' && /*#__PURE__*/React.createElement(Card, {
    title: "Seus pedidos"
  }, orders.map(o => /*#__PURE__*/React.createElement(OrderRow, {
    key: o.id,
    o: o,
    C: C
  }))), tab === 'Provas virtuais' && /*#__PURE__*/React.createElement(Card, {
    title: "Resultados salvos"
  }, /*#__PURE__*/React.createElement(MascotState, {
    state: "empty",
    size: "sm",
    assetsPath: window.ASSETS,
    title: "Nenhum resultado salvo",
    text: "Gere uma prova virtual e salve a pr\xE9via para ver aqui depois.",
    action: /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      onClick: () => shop.go('prova', 'Prova virtual')
    }, "Ir para a prova virtual")
  })), tab === 'Privacidade' && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.3fr 1fr',
      gap: 20,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    title: "Privacidade e imagens"
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14.5,
      color: 'var(--text-muted)',
      lineHeight: 1.65,
      margin: '0 0 16px'
    }
  }, "As fotos enviadas s\xE3o usadas apenas para gerar a pr\xE9via da prova virtual. N\xE3o exibimos fotos de crian\xE7as em \xE1reas p\xFAblicas. Voc\xEA pode excluir suas imagens e resultados quando quiser."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    label: "Quero receber novidades e reposi\xE7\xF5es por e-mail",
    checked: true,
    onChange: () => {}
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Autorizo o uso da foto apenas para a prova virtual",
    checked: true,
    onChange: () => {}
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    style: {
      marginTop: 18
    },
    iconLeft: /*#__PURE__*/React.createElement(window.Icon, {
      d: "trash",
      size: 16
    }),
    onClick: () => shop.showToast({
      tone: 'info',
      title: 'Imagens excluídas',
      text: 'Todas as suas fotos e prévias foram removidas.'
    })
  }, "Excluir minhas imagens")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--violet-50)',
      border: '1px solid var(--violet-100)',
      borderRadius: 'var(--radius-lg)',
      padding: 22,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: window.ASSETS + 'mascote-icone.png',
    alt: "",
    style: {
      width: 130
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: 'var(--violet-700)',
      fontWeight: 700,
      margin: '8px 0 0',
      lineHeight: 1.5
    }
  }, "A magia ajuda, mas a decis\xE3o \u2014 e a privacidade \u2014 s\xE3o sempre suas.")))));
}
function Card({
  title,
  children,
  wide
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: wide ? '1 / -1' : 'auto',
      background: 'var(--surface-card)',
      border: '1px solid var(--line-200)',
      borderRadius: 'var(--radius-lg)',
      padding: 22,
      boxShadow: 'var(--shadow-card)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 18,
      color: 'var(--text-strong)',
      marginBottom: 16
    }
  }, title), children);
}
function Field({
  label,
  value
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--text-subtle)',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '0.04em'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      color: 'var(--text-body)',
      marginTop: 2
    }
  }, value));
}
function OrderRow({
  o,
  C
}) {
  const {
    Badge,
    PriceTag
  } = C;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      padding: '14px 0',
      borderTop: '1px solid var(--line-100)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 800,
      fontSize: 14,
      color: 'var(--text-strong)'
    }
  }, o.id), /*#__PURE__*/React.createElement(Badge, {
    tone: o.tone,
    dot: true
  }, o.status)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      color: 'var(--text-muted)',
      marginTop: 3
    }
  }, o.items, " \xB7 ", o.date)), /*#__PURE__*/React.createElement(PriceTag, {
    price: o.total,
    size: "sm"
  }));
}
Object.assign(window, {
  Account
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Account.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/App.jsx
try { (() => {
// App shell: TopBar + Header + router + cart drawer + toast + theme (light/dark/system).
const {
  TopBar,
  Header,
  Button,
  IconButton,
  MascotState,
  Toast,
  PriceTag
} = window.FantasiandoDesignSystem_43d79f;
const ShopContext = React.createContext(null);
const useShop = () => React.useContext(ShopContext);
const NAV_MAP = {
  'Vestidos': 'category',
  'Fantasias': 'category',
  'Temas': 'category',
  'Prova virtual': 'prova',
  'Novidades': 'category',
  'Sobre': 'home',
  'Contato': 'contato',
  '__home': 'home'
};
const IMMERSIVE = ['prova', 'contato'];

// Theme: stored choice wins; otherwise follow the OS.
function useTheme() {
  const mq = window.matchMedia('(prefers-color-scheme: dark)');
  const [stored, setStored] = React.useState(() => localStorage.getItem('annape-theme'));
  const [sys, setSys] = React.useState(mq.matches ? 'dark' : 'light');
  React.useEffect(() => {
    const f = e => setSys(e.matches ? 'dark' : 'light');
    mq.addEventListener('change', f);
    return () => mq.removeEventListener('change', f);
  }, []);
  const theme = stored || sys;
  React.useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);
  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('annape-theme', next);
    setStored(next);
  };
  return [theme, toggle];
}
function Footer({
  go
}) {
  const cols = [{
    h: 'Comprar',
    items: ['Vestidos', 'Fantasias', 'Novidades', 'Promoções']
  }, {
    h: 'Ajuda',
    items: ['Tabela de medidas', 'Trocas', 'Envio', 'Pagamento']
  }, {
    h: 'Prova virtual',
    items: ['Como funciona', 'Créditos', 'Privacidade', 'Excluir imagens']
  }, {
    h: 'Ateliê',
    items: ['Sobre', 'Contato', 'Instagram', 'WhatsApp']
  }];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--bg-cream)',
      color: 'var(--text-body)',
      borderTop: '1px solid var(--line-200)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-wide)',
      margin: '0 auto',
      padding: '56px 24px 32px',
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1.4fr) repeat(4, minmax(0,1fr))',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: window.ASSETS + 'logo-cor.png',
    alt: "Annap\xEA Ateli\xEA",
    style: {
      height: 92
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14,
      lineHeight: 1.6,
      color: 'var(--text-muted)',
      maxWidth: 260
    }
  }, "Vestidos e fantasias infantis feitos com carinho, com prova virtual por IA. De Petr\xF3polis para todo o Brasil.")), cols.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.h
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 16,
      marginBottom: 14,
      color: 'var(--text-strong)'
    }
  }, c.h), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 9
    }
  }, c.items.map(it => /*#__PURE__*/React.createElement("li", {
    key: it
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      if (it === 'Contato') go('contato', 'Contato');
    },
    style: {
      color: 'var(--text-muted)',
      textDecoration: 'none',
      fontSize: 14
    }
  }, it))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--line-200)',
      padding: '16px 24px',
      textAlign: 'center',
      fontSize: 13,
      color: 'var(--text-subtle)'
    }
  }, "\xA9 2026 Annap\xEA Ateli\xEA \xB7 A pr\xE9via da prova virtual \xE9 uma simula\xE7\xE3o visual. Cores e caimento podem variar."));
}
function CartDrawer({
  open,
  items,
  onClose,
  onCheckout
}) {
  const total = items.reduce((s, i) => s + i.price * i.qty, 0);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 900,
      background: 'var(--overlay)',
      opacity: open ? 1 : 0,
      pointerEvents: open ? 'auto' : 'none',
      transition: 'opacity var(--dur-base)'
    }
  }), /*#__PURE__*/React.createElement("aside", {
    style: {
      position: 'fixed',
      top: 0,
      right: 0,
      bottom: 0,
      width: 420,
      maxWidth: '92vw',
      zIndex: 901,
      background: 'var(--bg-base)',
      boxShadow: 'var(--shadow-lg)',
      display: 'flex',
      flexDirection: 'column',
      transform: open ? 'translateX(0)' : 'translateX(100%)',
      transition: 'transform var(--dur-slow) var(--ease-out)',
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '18px 20px',
      borderBottom: '1px solid var(--line-200)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 20,
      color: 'var(--text-strong)'
    }
  }, "Sua sacola"), /*#__PURE__*/React.createElement(IconButton, {
    label: "Fechar",
    onClick: onClose
  }, /*#__PURE__*/React.createElement(window.Icon, {
    d: "x"
  }))), items.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(MascotState, {
    state: "empty",
    assetsPath: window.ASSETS,
    title: "Sua sacola est\xE1 vazia",
    text: "Escolha um vestido para come\xE7ar."
  })) : /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto',
      padding: 16,
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, items.map((it, idx) => /*#__PURE__*/React.createElement("div", {
    key: idx,
    style: {
      display: 'flex',
      gap: 12,
      background: 'var(--surface-card)',
      border: '1px solid var(--line-200)',
      borderRadius: 'var(--radius-lg)',
      padding: 10
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: it.image,
    alt: "",
    style: {
      width: 64,
      height: 80,
      objectFit: 'cover',
      borderRadius: 'var(--radius-md)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 14,
      color: 'var(--text-strong)'
    }
  }, it.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: 'var(--text-muted)',
      margin: '2px 0 6px'
    }
  }, "Tamanho ", it.size, " \xB7 Qtd ", it.qty), /*#__PURE__*/React.createElement(PriceTag, {
    price: it.price,
    size: "sm"
  }))))), items.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--line-200)',
      padding: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      color: 'var(--text-muted)'
    }
  }, "Subtotal"), /*#__PURE__*/React.createElement(PriceTag, {
    price: total
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    fullWidth: true,
    size: "lg",
    onClick: onCheckout
  }, "Finalizar compra"), /*#__PURE__*/React.createElement("p", {
    style: {
      textAlign: 'center',
      fontSize: 12.5,
      color: 'var(--text-subtle)',
      marginTop: 10
    }
  }, "Compra segura \xB7 Envio para todo o Brasil"))));
}
function App() {
  const [theme, toggleTheme] = useTheme();
  const [screen, setScreen] = React.useState(() => localStorage.getItem('annape-screen') || 'home');
  const [activeNav, setActiveNav] = React.useState('');
  const [cart, setCart] = React.useState([]);
  const [cartOpen, setCartOpen] = React.useState(false);
  const [favs, setFavs] = React.useState({});
  const [toast, setToast] = React.useState(null);
  const [credits, setCredits] = React.useState(3);
  const [user, setUser] = React.useState(null);
  const [gallery, setGallery] = React.useState([]);
  const [selected, setSelected] = React.useState(window.PRODUCTS[0]);
  const showToast = t => {
    setToast(t);
    clearTimeout(window.__tt);
    window.__tt = setTimeout(() => setToast(null), 3200);
  };
  const addToCart = (p, size = '6') => {
    setCart(c => [...c, {
      ...p,
      size,
      qty: 1
    }]);
    showToast({
      tone: 'success',
      title: 'Adicionado à sacola',
      text: `${p.name} · Tam ${size}`
    });
  };
  const go = (s, nav) => {
    setScreen(s);
    localStorage.setItem('annape-screen', s);
    setActiveNav(nav || '');
    window.scrollTo(0, 0);
  };
  const openTryOn = p => {
    if (p) setSelected(p);
    go('prova', 'Prova virtual');
  };
  const openProduct = p => {
    setSelected(p);
    go('product');
  };
  const toggleFav = id => setFavs(f => ({
    ...f,
    [id]: !f[id]
  }));
  const ctx = {
    go,
    addToCart,
    openTryOn,
    openProduct,
    favs,
    toggleFav,
    credits,
    setCredits,
    selected,
    setSelected,
    showToast,
    setCartOpen,
    user,
    setUser,
    gallery,
    setGallery,
    theme
  };
  const onNav = item => go(NAV_MAP[item] || 'home', item === '__home' ? '' : item);
  const onAction = k => {
    if (k === 'cart') setCartOpen(true);
    if (k === 'account') go('account');
    if (k === 'tryon') openTryOn();
  };
  const Screen = {
    home: window.Home,
    prova: window.ProvaVirtual,
    product: window.Product,
    category: window.Category,
    account: window.Account,
    contato: window.Contato
  }[screen] || window.Home;
  const immersive = IMMERSIVE.includes(screen);
  return /*#__PURE__*/React.createElement(ShopContext.Provider, {
    value: ctx
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--bg-base)',
      color: 'var(--text-body)',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      transition: 'background var(--dur-base)'
    }
  }, !immersive && /*#__PURE__*/React.createElement(TopBar, null), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 500
    }
  }, /*#__PURE__*/React.createElement(Header, {
    active: activeNav,
    cartCount: cart.length,
    favCount: Object.values(favs).filter(Boolean).length,
    assetsPath: window.ASSETS,
    onNav: onNav,
    onAction: onAction,
    theme: theme,
    onToggleTheme: toggleTheme
  })), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement(Screen, {
    key: screen
  })), !immersive && /*#__PURE__*/React.createElement(Footer, {
    go: go
  })), /*#__PURE__*/React.createElement(CartDrawer, {
    open: cartOpen,
    items: cart,
    onClose: () => setCartOpen(false),
    onCheckout: () => {
      setCartOpen(false);
      showToast({
        tone: 'success',
        title: 'Pedido recebido!',
        text: 'Vamos preparar tudo com carinho.'
      });
      setCart([]);
    }
  }), toast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      right: 20,
      bottom: 20,
      zIndex: 1200
    }
  }, /*#__PURE__*/React.createElement(Toast, {
    tone: toast.tone,
    showMascot: true,
    assetsPath: window.ASSETS,
    title: toast.title,
    text: toast.text,
    onClose: () => setToast(null)
  })));
}
Object.assign(window, {
  App,
  ShopContext,
  useShop,
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Category.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Category / listing screen — filters + product grid.
function Category() {
  const shop = window.useShop();
  const C = window.FantasiandoDesignSystem_43d79f;
  const {
    ProductCard,
    Checkbox,
    Select,
    Badge,
    Button
  } = C;
  const {
    Eyebrow,
    Title
  } = window;
  const [temas, setTemas] = React.useState({});
  const [tamanho, setTamanho] = React.useState('Todos');
  const [cor, setCor] = React.useState({});
  const [ocasiao, setOcasiao] = React.useState({});
  const [prontaEntrega, setProntaEntrega] = React.useState(false);
  const [ordem, setOrdem] = React.useState('Relevância');
  const temaList = ['Princesas', 'Festa junina', 'Fantasia temática', 'Vestidos florais', 'Aniversário'];
  const cores = [['Rosa', 'var(--rosa-400)'], ['Caramelo', 'var(--caramelo-400)'], ['Azul', 'var(--sky-400)'], ['Amarelo', 'var(--yellow-400)'], ['Coral', 'var(--coral-400)'], ['Multicor', 'var(--grad-candy)']];
  const ocasioes = ['Festa', 'Aniversário', 'Junina', 'Dia a dia'];
  const activeTemas = Object.keys(temas).filter(k => temas[k]);
  let list = window.PRODUCTS.filter(p => activeTemas.length === 0 || activeTemas.includes(p.theme));
  if (ordem === 'Menor preço') list = [...list].sort((a, b) => a.price - b.price);
  if (ordem === 'Maior preço') list = [...list].sort((a, b) => b.price - a.price);
  const FilterGroup = ({
    title,
    children
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      borderBottom: '1px solid var(--line-200)',
      padding: '16px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 800,
      fontSize: 13.5,
      color: 'var(--text-strong)',
      marginBottom: 12
    }
  }, title), children);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--grad-hero)',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '40px 24px'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Vitrine"), /*#__PURE__*/React.createElement(Title, null, "Vestidos & fantasias"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-muted)',
      fontSize: 16,
      margin: '6px 0 0'
    }
  }, list.length, " modelos \xB7 escolha com mais seguran\xE7a usando a prova virtual."))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '32px 24px 64px',
      display: 'grid',
      gridTemplateColumns: '248px 1fr',
      gap: 32,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("aside", {
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--line-200)',
      borderRadius: 'var(--radius-lg)',
      padding: '6px 18px 18px',
      boxShadow: 'var(--shadow-sm)',
      position: 'sticky',
      top: 96
    }
  }, /*#__PURE__*/React.createElement(FilterGroup, {
    title: "Tema"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, temaList.map(t => /*#__PURE__*/React.createElement(Checkbox, {
    key: t,
    label: t,
    checked: !!temas[t],
    onChange: e => setTemas(s => ({
      ...s,
      [t]: e.target.checked
    }))
  })))), /*#__PURE__*/React.createElement(FilterGroup, {
    title: "Tamanho"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, ['Todos', '2', '4', '6', '8', '10'].map(s => /*#__PURE__*/React.createElement("button", {
    key: s,
    onClick: () => setTamanho(s),
    style: {
      minWidth: 38,
      height: 38,
      borderRadius: 'var(--radius-sm)',
      cursor: 'pointer',
      fontWeight: 700,
      fontSize: 13,
      border: tamanho === s ? '2px solid var(--violet-500)' : '1.5px solid var(--line-200)',
      background: tamanho === s ? 'var(--violet-50)' : 'var(--surface-card)',
      color: tamanho === s ? 'var(--violet-700)' : 'var(--text-body)',
      fontFamily: 'var(--font-body)'
    }
  }, s)))), /*#__PURE__*/React.createElement(FilterGroup, {
    title: "Cor"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      flexWrap: 'wrap'
    }
  }, cores.map(([name, c]) => {
    const on = !!cor[name];
    return /*#__PURE__*/React.createElement("button", {
      key: name,
      title: name,
      onClick: () => setCor(s => ({
        ...s,
        [name]: !s[name]
      })),
      style: {
        width: 30,
        height: 30,
        borderRadius: 999,
        background: c,
        cursor: 'pointer',
        border: on ? '2px solid var(--violet-600)' : '2px solid var(--surface-card)',
        boxShadow: on ? '0 0 0 2px var(--violet-300)' : 'var(--shadow-xs)'
      }
    });
  }))), /*#__PURE__*/React.createElement(FilterGroup, {
    title: "Ocasi\xE3o"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, ocasioes.map(o => /*#__PURE__*/React.createElement(Checkbox, {
    key: o,
    label: o,
    checked: !!ocasiao[o],
    onChange: e => setOcasiao(s => ({
      ...s,
      [o]: e.target.checked
    }))
  })))), /*#__PURE__*/React.createElement(FilterGroup, {
    title: "Disponibilidade"
  }, /*#__PURE__*/React.createElement(Checkbox, {
    label: "Pronta entrega",
    checked: prontaEntrega,
    onChange: e => setProntaEntrega(e.target.checked)
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 18,
      gap: 12,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, activeTemas.map(t => /*#__PURE__*/React.createElement(Badge, {
    key: t,
    tone: "violet",
    dot: true
  }, t)), prontaEntrega && /*#__PURE__*/React.createElement(Badge, {
    tone: "success",
    dot: true
  }, "Pronta entrega")), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 200
    }
  }, /*#__PURE__*/React.createElement(Select, {
    value: ordem,
    onChange: e => setOrdem(e.target.value),
    options: ['Relevância', 'Menor preço', 'Maior preço', 'Mais avaliados']
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 18
    }
  }, list.map(p => /*#__PURE__*/React.createElement(ProductCard, _extends({
    key: p.id
  }, p, {
    favorite: !!shop.favs[p.id],
    onFavorite: () => shop.toggleFav(p.id),
    onBuy: () => shop.addToCart(p, p.sizes[0]),
    onTryOn: () => shop.openTryOn(p)
  })))))));
}
Object.assign(window, {
  Category
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Category.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Contato.jsx
try { (() => {
// Contato — conversational form: one typed question, one answer, next.
const CONTATO_STEPS = [{
  key: 'nome',
  q: 'Oi! Que bom ter você por aqui. Como você se chama?',
  type: 'text',
  ph: 'Digite seu nome',
  valid: v => v.trim().length >= 2 || 'Conta pra gente seu nome.'
}, {
  key: 'whatsapp',
  q: 'Prazer, {nome}! Qual é o seu WhatsApp?',
  type: 'tel',
  ph: '(24) 99999-9999',
  valid: v => v.replace(/\D/g, '').length >= 10 || 'Confere o número com DDD?'
}, {
  key: 'email',
  q: 'E um e-mail, caso a gente precise enviar fotos ou orçamento?',
  type: 'email',
  ph: 'voce@email.com',
  valid: v => /.+@.+\..+/.test(v) || 'Esse e-mail parece incompleto.'
}, {
  key: 'idade',
  q: 'Qual a idade ou o tamanho da criança?',
  type: 'chips',
  options: ['1 ano', '2 anos', '4 anos', '6 anos', '8 anos', '10 anos', '12 anos'],
  ph: 'Ou escreva: ex. 5 anos, veste 6',
  valid: v => !!v.trim() || 'Escolha uma opção ou escreva.'
}, {
  key: 'ocasiao',
  q: 'Que delícia! E qual é a ocasião?',
  type: 'chips',
  options: ['Aniversário', 'Festa junina', 'Daminha / casamento', 'Fantasia temática', 'Ensaio de fotos', 'Dia a dia'],
  ph: 'Ou conte com suas palavras',
  valid: v => !!v.trim() || 'Escolha uma opção ou escreva.'
}, {
  key: 'data',
  q: 'Quando vai ser a festa?',
  type: 'date',
  valid: v => !!v || 'Escolha a data (pode ser aproximada).'
}, {
  key: 'mensagem',
  q: 'Quer contar mais alguma coisa? Tema, cores, uma ideia que você viu…',
  type: 'textarea',
  ph: 'Escreva à vontade (opcional)',
  optional: true,
  valid: () => true
}];
const maskTel = v => {
  const d = v.replace(/\D/g, '').slice(0, 11);
  if (d.length <= 2) return d ? '(' + d : '';
  if (d.length <= 7) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
};
function Typewriter({
  text,
  onDone
}) {
  const [n, setN] = React.useState(0);
  React.useEffect(() => {
    setN(0);
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setN(text.length);
      onDone && onDone();
      return;
    }
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setN(i);
      if (i >= text.length) {
        clearInterval(id);
        onDone && onDone();
      }
    }, 24);
    return () => clearInterval(id);
  }, [text]);
  return /*#__PURE__*/React.createElement("span", null, text.slice(0, n), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      width: 3,
      height: '0.9em',
      marginLeft: 4,
      verticalAlign: '-0.08em',
      borderRadius: 2,
      background: 'var(--brand)',
      animation: 'fz-caret 1s steps(1) infinite'
    }
  }));
}
function Contato() {
  const shop = window.useShop();
  const {
    Button,
    MascotState
  } = window.FantasiandoDesignSystem_43d79f;
  const [i, setI] = React.useState(0);
  const [answers, setAnswers] = React.useState({});
  const [val, setVal] = React.useState('');
  const [err, setErr] = React.useState('');
  const [typed, setTyped] = React.useState(false);
  const [sent, setSent] = React.useState(false);
  const inputRef = React.useRef(null);
  const total = CONTATO_STEPS.length;
  const review = i >= total;
  const step = CONTATO_STEPS[i];
  const firstName = (answers.nome || '').trim().split(' ')[0];
  const question = step ? step.q.replace('{nome}', firstName) : '';
  React.useEffect(() => {
    setTyped(false);
    setErr('');
    setVal(step ? answers[step.key] || '' : '');
  }, [i]);
  React.useEffect(() => {
    if (typed && inputRef.current) inputRef.current.focus();
  }, [typed]);
  const commit = (v = val) => {
    const ok = step.valid(v);
    if (ok !== true) {
      setErr(ok);
      return;
    }
    setAnswers(a => ({
      ...a,
      [step.key]: v
    }));
    setI(x => x + 1);
  };
  const onKey = e => {
    if (e.key === 'Enter' && !(step.type === 'textarea' && e.shiftKey)) {
      e.preventDefault();
      commit();
    }
  };
  const fmtDate = d => {
    if (!d) return '';
    const [y, m, dd] = d.split('-');
    return `${dd}/${m}/${y}`;
  };
  const fieldStyle = {
    width: '100%',
    border: 'none',
    borderBottom: `2px solid ${err ? 'var(--danger)' : 'var(--line-200)'}`,
    background: 'transparent',
    outline: 'none',
    fontFamily: 'var(--font-display)',
    fontWeight: 500,
    fontSize: 30,
    color: 'var(--text-strong)',
    padding: '10px 0 12px',
    transition: 'border-color var(--dur-base)'
  };
  if (sent) {
    return /*#__PURE__*/React.createElement(Stage, null, /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'center',
        animation: 'fz-fade-up var(--dur-slow) var(--ease-out)'
      }
    }, /*#__PURE__*/React.createElement(MascotState, {
      state: "success",
      assetsPath: window.ASSETS,
      size: "lg",
      title: `Recebemos, ${firstName}!`,
      text: "Nossa equipe vai te chamar no WhatsApp em breve para conversar sobre a festa.",
      action: /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          gap: 12,
          justifyContent: 'center'
        }
      }, /*#__PURE__*/React.createElement(Button, {
        variant: "primary",
        onClick: () => shop.go('category', 'Vestidos')
      }, "Ver vestidos"), /*#__PURE__*/React.createElement(Button, {
        variant: "secondary",
        onClick: () => shop.go('home')
      }, "Voltar ao in\xEDcio"))
    })));
  }
  return /*#__PURE__*/React.createElement(Stage, {
    progress: Math.min(i, total) / total
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      maxWidth: 760
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 36
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => i > 0 ? setI(i - 1) : shop.go('home'),
    style: ghostBtn
  }, /*#__PURE__*/React.createElement(window.Icon, {
    d: "back",
    size: 18
  }), i > 0 ? 'Voltar' : 'Início'), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 800,
      letterSpacing: '0.08em',
      color: 'var(--text-subtle)'
    }
  }, review ? 'REVISÃO' : `${String(i + 1).padStart(2, '0')} / ${String(total).padStart(2, '0')}`)), !review && /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      animation: 'fz-fade-up var(--dur-slow) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 18,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: window.ASSETS + 'mascote-icone.png',
    alt: "",
    style: {
      width: 52,
      height: 52,
      flexShrink: 0,
      borderRadius: 999,
      background: 'var(--rosa-100)',
      padding: 4
    }
  }), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 44,
      lineHeight: 1.12,
      letterSpacing: '-0.02em',
      color: 'var(--text-strong)',
      textWrap: 'balance',
      minHeight: '2.24em'
    }
  }, /*#__PURE__*/React.createElement(Typewriter, {
    text: question,
    onDone: () => setTyped(true)
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 36,
      marginLeft: 70,
      opacity: typed ? 1 : 0,
      transform: typed ? 'none' : 'translateY(8px)',
      transition: 'opacity var(--dur-slow), transform var(--dur-slow) var(--ease-out)'
    }
  }, step.type === 'chips' && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 10,
      marginBottom: 20
    }
  }, step.options.map(o => {
    const on = val === o;
    return /*#__PURE__*/React.createElement("button", {
      key: o,
      onClick: () => {
        setVal(o);
        setErr('');
        setTimeout(() => commit(o), 220);
      },
      style: {
        padding: '12px 20px',
        borderRadius: 999,
        cursor: 'pointer',
        fontFamily: 'var(--font-body)',
        fontWeight: 700,
        fontSize: 16,
        border: `1.5px solid ${on ? 'var(--brand)' : 'var(--line-200)'}`,
        background: on ? 'var(--brand)' : 'var(--surface-card)',
        color: on ? 'var(--text-on-brand)' : 'var(--text-body)',
        transition: 'all var(--dur-fast)'
      }
    }, o);
  })), step.type === 'textarea' ? /*#__PURE__*/React.createElement("textarea", {
    ref: inputRef,
    rows: 3,
    value: val,
    placeholder: step.ph,
    onKeyDown: onKey,
    onChange: e => setVal(e.target.value),
    style: {
      ...fieldStyle,
      fontSize: 24,
      resize: 'none',
      lineHeight: 1.4
    }
  }) : step.type === 'date' ? /*#__PURE__*/React.createElement("input", {
    ref: inputRef,
    type: "date",
    value: val,
    onKeyDown: onKey,
    onChange: e => {
      setVal(e.target.value);
      setErr('');
    },
    style: {
      ...fieldStyle,
      colorScheme: shop.theme
    }
  }) : /*#__PURE__*/React.createElement("input", {
    ref: inputRef,
    type: step.type === 'chips' ? 'text' : step.type,
    value: val,
    placeholder: step.ph,
    onKeyDown: onKey,
    onChange: e => {
      setVal(step.type === 'tel' ? maskTel(e.target.value) : e.target.value);
      setErr('');
    },
    style: {
      ...fieldStyle,
      fontSize: step.type === 'chips' ? 22 : 30
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      marginTop: 20,
      minHeight: 46
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => commit(),
    iconRight: /*#__PURE__*/React.createElement(window.Icon, {
      d: "check",
      size: 17
    })
  }, step.optional && !val ? 'Pular' : 'OK'), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--text-subtle)',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6
    }
  }, "ou aperte ", /*#__PURE__*/React.createElement("kbd", {
    style: kbd
  }, "Enter \u21B5")), err && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      color: 'var(--danger)',
      marginLeft: 'auto'
    }
  }, err)))), review && /*#__PURE__*/React.createElement("div", {
    style: {
      animation: 'fz-fade-up var(--dur-slow) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 44,
      lineHeight: 1.1,
      letterSpacing: '-0.02em',
      color: 'var(--text-strong)'
    }
  }, "Tudo certo, ", firstName, "? Confere pra gente."), /*#__PURE__*/React.createElement("dl", {
    style: {
      margin: '32px 0 32px',
      display: 'grid',
      gridTemplateColumns: 'auto 1fr auto',
      columnGap: 24
    }
  }, CONTATO_STEPS.map((s, k) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: s.key
  }, /*#__PURE__*/React.createElement("dt", {
    style: {
      ...rowCell,
      fontSize: 13,
      fontWeight: 800,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      color: 'var(--text-subtle)'
    }
  }, {
    nome: 'Nome',
    whatsapp: 'WhatsApp',
    email: 'E-mail',
    idade: 'Idade',
    ocasiao: 'Ocasião',
    data: 'Data',
    mensagem: 'Mensagem'
  }[s.key]), /*#__PURE__*/React.createElement("dd", {
    style: {
      ...rowCell,
      margin: 0,
      fontSize: 17,
      color: 'var(--text-strong)',
      fontWeight: 600
    }
  }, s.key === 'data' ? fmtDate(answers.data) : answers[s.key] || '—'), /*#__PURE__*/React.createElement("dd", {
    style: {
      ...rowCell,
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setI(k),
    style: {
      ...ghostBtn,
      padding: '4px 8px'
    }
  }, "Editar"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => setSent(true),
    iconLeft: /*#__PURE__*/React.createElement(window.Icon, {
      d: "chat",
      size: 18
    })
  }, "Enviar e falar no WhatsApp"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    onClick: () => setSent(true),
    iconLeft: /*#__PURE__*/React.createElement(window.Icon, {
      d: "mail",
      size: 18
    })
  }, "S\xF3 enviar por e-mail")))));
}
function Stage({
  children,
  progress
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      flex: 1,
      minHeight: 'calc(100vh - 84px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '56px 24px',
      background: 'var(--grad-hero)',
      overflow: 'hidden'
    }
  }, progress != null && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: 3,
      background: 'color-mix(in oklab, var(--line-200) 60%, transparent)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: `${progress * 100}%`,
      height: '100%',
      borderRadius: '0 3px 3px 0',
      background: 'var(--brand)',
      transition: 'width var(--dur-slow) var(--ease-out)'
    }
  })), /*#__PURE__*/React.createElement("img", {
    src: window.ASSETS + 'simbolo-cor.png',
    alt: "",
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      right: -80,
      bottom: -60,
      width: 420,
      opacity: 0.1,
      transform: 'rotate(-10deg)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%',
      display: 'flex',
      justifyContent: 'center'
    }
  }, children));
}
const ghostBtn = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: 6,
  border: 'none',
  background: 'transparent',
  cursor: 'pointer',
  fontFamily: 'var(--font-body)',
  fontWeight: 700,
  fontSize: 14,
  color: 'var(--text-muted)',
  padding: '6px 4px',
  borderRadius: 8
};
const kbd = {
  fontFamily: 'var(--font-body)',
  fontSize: 12,
  fontWeight: 700,
  padding: '3px 8px',
  borderRadius: 6,
  border: '1px solid var(--line-200)',
  background: 'var(--surface-card)',
  color: 'var(--text-muted)'
};
const rowCell = {
  padding: '14px 0',
  borderBottom: '1px solid var(--line-200)',
  display: 'flex',
  alignItems: 'center'
};
Object.assign(window, {
  Contato,
  Typewriter
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Contato.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Home.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Home — hero, ticker, categories, try-on bento, featured, ateliê, reviews, contact CTA.
function Home() {
  const shop = window.useShop();
  const C = window.FantasiandoDesignSystem_43d79f;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Hero, {
    shop: shop,
    C: C
  }), /*#__PURE__*/React.createElement(Ticker, null), /*#__PURE__*/React.createElement(Categories, {
    shop: shop,
    C: C
  }), /*#__PURE__*/React.createElement(ProvaBento, {
    shop: shop,
    C: C
  }), /*#__PURE__*/React.createElement(Featured, {
    shop: shop,
    C: C
  }), /*#__PURE__*/React.createElement(Atelie, null), /*#__PURE__*/React.createElement(Reviews, {
    C: C
  }), /*#__PURE__*/React.createElement(ContactCTA, {
    shop: shop,
    C: C
  }));
}
function Section({
  children,
  bg,
  style,
  pad = '88px 24px'
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: bg || 'transparent',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: pad
    }
  }, children));
}
function Eyebrow({
  children,
  color
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      fontFamily: 'var(--font-body)',
      fontWeight: 800,
      fontSize: 12.5,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: color || 'var(--accent-ink)'
    }
  }, children);
}
function Title({
  children,
  size = 40,
  style
}) {
  return /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: size,
      lineHeight: 1.08,
      color: 'var(--text-strong)',
      margin: '10px 0 0',
      letterSpacing: '-0.02em',
      textWrap: 'balance',
      ...style
    }
  }, children);
}
function Mark({
  children
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      backgroundImage: 'linear-gradient(transparent 62%, var(--rosa-200) 62%, var(--rosa-200) 92%, transparent 92%)',
      padding: '0 4px',
      margin: '0 -4px'
    }
  }, children);
}
function SectionHead({
  eyebrow,
  title,
  action
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: 16,
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, eyebrow), /*#__PURE__*/React.createElement(Title, null, title)), action);
}
function Hero({
  shop,
  C
}) {
  const {
    Button
  } = C;
  const trust = [['truck', 'Envio para todo o Brasil'], ['shield', 'Compra segura'], ['scissors', 'Acabamento de ateliê']];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--grad-hero)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: window.ASSETS + 'simbolo-cor.png',
    alt: "",
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      right: '-4%',
      top: '-8%',
      width: 520,
      opacity: 0.12,
      transform: 'rotate(-12deg)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '72px 24px 88px',
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1.1fr) minmax(0,0.9fr)',
      gap: 56,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      animation: 'fz-fade-up var(--dur-slow) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, /*#__PURE__*/React.createElement("img", {
    src: window.ASSETS + 'simbolo-cor.png',
    alt: "",
    style: {
      width: 22
    }
  }), "Ateli\xEA infantil \xB7 Petr\xF3polis"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 68,
      lineHeight: 1.0,
      letterSpacing: '-0.03em',
      color: 'var(--text-strong)',
      margin: '20px 0 0',
      textWrap: 'balance'
    }
  }, "Vestidos que viram ", /*#__PURE__*/React.createElement(Mark, null, "mem\xF3ria"), "."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 19,
      lineHeight: 1.6,
      color: 'var(--text-muted)',
      maxWidth: 480,
      margin: '22px 0 32px',
      textWrap: 'pretty'
    }
  }, "Pe\xE7as feitas com carinho para festas e fantasias \u2014 e uma prova virtual com IA para ver o modelo na crian\xE7a antes de comprar."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => shop.go('category', 'Vestidos'),
    iconRight: /*#__PURE__*/React.createElement(window.Icon, {
      d: "arrow",
      size: 18
    })
  }, "Ver vestidos"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    onClick: () => shop.openTryOn(),
    iconLeft: /*#__PURE__*/React.createElement(window.Icon, {
      d: "sparkle",
      size: 18
    })
  }, "Testar prova virtual")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 22,
      flexWrap: 'wrap',
      marginTop: 36,
      color: 'var(--text-muted)',
      fontSize: 14,
      fontWeight: 600
    }
  }, trust.map(([i, t]) => /*#__PURE__*/React.createElement("span", {
    key: t,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(window.Icon, {
    d: i,
    size: 18,
    color: "var(--accent)"
  }), t)))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      justifySelf: 'center',
      width: '100%',
      maxWidth: 440
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '4 / 5',
      borderRadius: '999px 999px 28px 28px',
      overflow: 'hidden',
      background: 'var(--rosa-100)',
      boxShadow: 'var(--shadow-lg)'
    }
  }, /*#__PURE__*/React.createElement(window.Slot, {
    id: "home-hero",
    label: "Foto hero: vestido no manequim / crian\xE7a",
    src: window.ASSETS + 'vestido-arco-iris.png',
    shape: "rect"
  })), /*#__PURE__*/React.createElement("img", {
    src: window.ASSETS + 'mascote-estrela.png',
    alt: "",
    style: {
      position: 'absolute',
      left: -64,
      bottom: -28,
      width: 170,
      filter: 'drop-shadow(0 16px 24px rgba(0,0,0,0.14))',
      animation: 'fz-float var(--float-dur) var(--ease-soft) infinite',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 40,
      right: -28,
      background: 'var(--surface-raised)',
      borderRadius: 'var(--radius-pill)',
      boxShadow: 'var(--shadow-md)',
      padding: '8px 16px 8px 8px',
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      border: '1px solid var(--line-200)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 36,
      height: 36,
      borderRadius: 999,
      background: 'var(--brand)',
      color: 'var(--text-on-brand)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(window.Icon, {
    d: "sparkle",
    size: 18
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      color: 'var(--text-muted)',
      fontWeight: 700
    }
  }, "Pr\xE9via pronta"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 15,
      color: 'var(--text-strong)'
    }
  }, "Princesa Aurora"))))));
}
function Ticker() {
  const items = [...window.TICKER, ...window.TICKER];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--brand)',
      overflow: 'hidden'
    },
    onMouseEnter: e => {
      const t = e.currentTarget.firstChild;
      if (t) t.style.animationPlayState = 'paused';
    },
    onMouseLeave: e => {
      const t = e.currentTarget.firstChild;
      if (t) t.style.animationPlayState = 'running';
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      whiteSpace: 'nowrap',
      width: 'max-content',
      animation: 'fz-marquee 32s linear infinite'
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 22,
      padding: '14px 22px',
      color: 'var(--text-on-brand)',
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 17
    }
  }, it, /*#__PURE__*/React.createElement("img", {
    src: window.ASSETS + 'simbolo-preto.png',
    alt: "",
    style: {
      width: 20,
      opacity: 0.7
    }
  })))), /*#__PURE__*/React.createElement("style", {
    dangerouslySetInnerHTML: {
      __html: '@keyframes fz-marquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}'
    }
  }));
}
function Categories({
  shop,
  C
}) {
  const {
    CategoryCard,
    Button
  } = C;
  return /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Escolha por ocasi\xE3o",
    title: "Para cada festa, uma fantasia.",
    action: /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: () => shop.go('category', 'Temas'),
      iconRight: /*#__PURE__*/React.createElement(window.Icon, {
        d: "arrow",
        size: 18
      })
    }, "Todas as categorias")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
      gap: 16
    }
  }, window.CATEGORIES.map(c => /*#__PURE__*/React.createElement(CategoryCard, _extends({
    key: c.label
  }, c, {
    onClick: e => {
      e.preventDefault();
      shop.go('category', 'Temas');
    }
  })))));
}

// Draggable before/after comparison. `before` / `after` are React nodes filling the frame.
function BeforeAfter({
  before,
  after,
  initial = 50,
  labels = ['Antes', 'Prévia IA'],
  ratio = '4 / 5',
  radius = 20
}) {
  const [x, setX] = React.useState(initial);
  const ref = React.useRef(null);
  const drag = React.useRef(false);
  const move = clientX => {
    const r = ref.current.getBoundingClientRect();
    setX(Math.max(0, Math.min(100, (clientX - r.left) / r.width * 100)));
  };
  const chip = {
    position: 'absolute',
    top: 14,
    padding: '6px 12px',
    borderRadius: 999,
    fontSize: 12,
    fontWeight: 800,
    letterSpacing: '0.04em',
    pointerEvents: 'none'
  };
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      position: 'relative',
      aspectRatio: ratio,
      borderRadius: radius,
      overflow: 'hidden',
      userSelect: 'none',
      touchAction: 'none',
      background: 'var(--surface-sunken)',
      cursor: 'ew-resize'
    },
    onPointerDown: e => {
      drag.current = true;
      e.currentTarget.setPointerCapture(e.pointerId);
      move(e.clientX);
    },
    onPointerMove: e => drag.current && move(e.clientX),
    onPointerUp: () => {
      drag.current = false;
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0
    }
  }, after), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      clipPath: `inset(0 ${100 - x}% 0 0)`
    }
  }, before), /*#__PURE__*/React.createElement("span", {
    style: {
      ...chip,
      left: 14,
      background: 'rgba(24,18,20,0.66)',
      color: '#FCF8F5'
    }
  }, labels[0]), /*#__PURE__*/React.createElement("span", {
    style: {
      ...chip,
      right: 14,
      background: 'var(--brand)',
      color: 'var(--text-on-brand)'
    }
  }, labels[1]), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: `${x}%`,
      width: 3,
      marginLeft: -1.5,
      background: '#FCF8F5',
      boxShadow: '0 0 12px rgba(0,0,0,0.25)',
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      width: 44,
      height: 44,
      marginLeft: -22,
      marginTop: -22,
      borderRadius: 999,
      background: '#FCF8F5',
      color: '#2E2226',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: 'var(--shadow-md)'
    }
  }, /*#__PURE__*/React.createElement(window.Icon, {
    d: "compare",
    size: 20
  }))));
}
function ProvaBento({
  shop,
  C
}) {
  const {
    Button,
    CreditCounter
  } = C;
  const steps = [['Escolha o vestido', 'Qualquer modelo da vitrine.'], ['Envie uma foto', 'Corpo inteiro, de frente, com boa luz.'], ['Veja a prévia', 'Compare o antes e depois e decida.']];
  return /*#__PURE__*/React.createElement(Section, {
    bg: "var(--bg-tint)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,0.9fr) minmax(0,1.1fr)',
      gap: 56,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 420,
      width: '100%',
      justifySelf: 'center'
    }
  }, /*#__PURE__*/React.createElement(BeforeAfter, {
    initial: 46,
    before: /*#__PURE__*/React.createElement(window.Slot, {
      id: "home-antes",
      label: "Foto exemplo: crian\xE7a de corpo inteiro",
      shape: "rect"
    }),
    after: /*#__PURE__*/React.createElement("img", {
      src: window.ASSETS + 'vestido-princesa-rosa.png',
      alt: "",
      style: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        display: 'block'
      }
    })
  }), /*#__PURE__*/React.createElement("img", {
    src: window.ASSETS + 'mascote-prova-virtual.png',
    alt: "",
    style: {
      position: 'absolute',
      right: -52,
      bottom: -36,
      width: 150,
      pointerEvents: 'none',
      filter: 'drop-shadow(0 12px 20px rgba(0,0,0,0.12))'
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, /*#__PURE__*/React.createElement(window.Icon, {
    d: "sparkle",
    size: 15
  }), "Prova virtual com IA"), /*#__PURE__*/React.createElement(Title, {
    size: 44
  }, "Veja o vestido na crian\xE7a ", /*#__PURE__*/React.createElement(Mark, null, "antes"), " de comprar."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      color: 'var(--text-muted)',
      maxWidth: 520,
      lineHeight: 1.65,
      margin: '16px 0 28px'
    }
  }, "Arraste a linha para comparar. \xC9 uma simula\xE7\xE3o visual para ajudar na escolha \u2014 a magia ajuda, mas a decis\xE3o \xE9 sua."), /*#__PURE__*/React.createElement("ol", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: '0 0 32px',
      display: 'flex',
      flexDirection: 'column',
      gap: 0
    }
  }, steps.map(([t, d], i) => /*#__PURE__*/React.createElement("li", {
    key: t,
    style: {
      display: 'grid',
      gridTemplateColumns: '48px 1fr',
      gap: 16,
      alignItems: 'center',
      padding: '14px 0',
      borderTop: i ? '1px solid var(--line-200)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 30,
      color: 'var(--accent)'
    }
  }, "0", i + 1), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 19,
      color: 'var(--text-strong)'
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14.5,
      color: 'var(--text-muted)',
      marginTop: 2
    }
  }, d))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      alignItems: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => shop.openTryOn(),
    iconLeft: /*#__PURE__*/React.createElement(window.Icon, {
      d: "sparkle",
      size: 18
    })
  }, "Come\xE7ar prova virtual"), /*#__PURE__*/React.createElement(CreditCounter, {
    remaining: shop.credits,
    total: 3
  })))));
}
function Featured({
  shop,
  C
}) {
  const {
    ProductCard,
    Button
  } = C;
  return /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Destaques do ateli\xEA",
    title: "Os queridinhos da esta\xE7\xE3o.",
    action: /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: () => shop.go('category', 'Novidades'),
      iconRight: /*#__PURE__*/React.createElement(window.Icon, {
        d: "arrow",
        size: 18
      })
    }, "Ver tudo")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
      gap: 20
    }
  }, window.PRODUCTS.slice(0, 4).map(p => /*#__PURE__*/React.createElement(ProductCard, _extends({
    key: p.id
  }, p, {
    favorite: !!shop.favs[p.id],
    onFavorite: () => shop.toggleFav(p.id),
    onBuy: () => shop.addToCart(p, p.sizes[1] || p.sizes[0]),
    onTryOn: () => shop.openTryOn(p)
  })))));
}
function Atelie() {
  return /*#__PURE__*/React.createElement(Section, {
    bg: "var(--bg-cream)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)',
      gap: 64,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.2fr 1fr',
      gap: 16,
      alignItems: 'end'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '3 / 4',
      borderRadius: '999px 999px 20px 20px',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(window.Slot, {
    id: "atelie-1",
    label: "Foto do ateli\xEA: m\xE3os costurando",
    shape: "rect"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '1',
      borderRadius: 20,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(window.Slot, {
    id: "atelie-2",
    label: "Detalhe: tecido / renda",
    shape: "rect"
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Sobre o ateli\xEA"), /*#__PURE__*/React.createElement(Title, {
    size: 44
  }, "Cada pe\xE7a nasce com carinho, ponto a ponto."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      lineHeight: 1.7,
      color: 'var(--text-body)',
      maxWidth: 520,
      margin: '18px 0 0',
      textWrap: 'pretty'
    }
  }, "A Annap\xEA Ateli\xEA re\xFAne vestidos e fantasias infantis com acabamento cuidadoso e tecidos gostosos de vestir. Unimos o feito \xE0 m\xE3o com uma experi\xEAncia visual que ajuda fam\xEDlias a escolherem com mais seguran\xE7a e encanto."), /*#__PURE__*/React.createElement("img", {
    src: window.ASSETS + 'simbolo-cor.png',
    alt: "",
    style: {
      width: 64,
      marginTop: 28
    }
  }))));
}
function Reviews({
  C
}) {
  const {
    Rating
  } = C;
  const revs = [{
    q: 'A prévia ajudou muito a escolher o vestido certo.',
    n: 'Camila M.',
    c: 'Petrópolis, RJ'
  }, {
    q: 'Minha filha amou se ver no modelo antes da compra.',
    n: 'Renata S.',
    c: 'Belo Horizonte, MG'
  }, {
    q: 'Acabamento lindo e chegou muito bem embalado.',
    n: 'Patrícia L.',
    c: 'Curitiba, PR'
  }];
  return /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Quem j\xE1 vestiu",
    title: "Fam\xEDlias que escolheram com seguran\xE7a."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
      gap: 20
    }
  }, revs.map(r => /*#__PURE__*/React.createElement("figure", {
    key: r.n,
    style: {
      margin: 0,
      background: 'var(--surface-card)',
      border: '1px solid var(--line-200)',
      borderRadius: 20,
      padding: 28,
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(Rating, {
    value: 5
  }), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 21,
      lineHeight: 1.35,
      color: 'var(--text-strong)',
      flex: 1
    }
  }, "\u201C", r.q, "\u201D"), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 999,
      background: 'var(--rosa-100)',
      color: 'var(--brand-ink)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 800
    }
  }, r.n[0]), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 14,
      color: 'var(--text-strong)'
    }
  }, r.n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--text-subtle)'
    }
  }, r.c)))))));
}
function ContactCTA({
  shop,
  C
}) {
  const {
    Button
  } = C;
  return /*#__PURE__*/React.createElement(Section, {
    pad: "0 24px 96px"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--surface-inverse)',
      color: 'var(--text-on-inverse)',
      borderRadius: 28,
      padding: '56px 56px',
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) auto',
      gap: 32,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: window.ASSETS + 'simbolo-cor.png',
    alt: "",
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      right: 180,
      top: -40,
      width: 260,
      opacity: 0.18,
      transform: 'rotate(14deg)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 40,
      lineHeight: 1.1,
      letterSpacing: '-0.02em',
      maxWidth: 560
    }
  }, "Vamos conversar sobre a festa?"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      lineHeight: 1.6,
      opacity: 0.8,
      margin: '12px 0 28px',
      maxWidth: 520
    }
  }, "Conta pra gente a ocasi\xE3o, a idade e a data. Respondemos rapidinho pelo WhatsApp."), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => shop.go('contato', 'Contato'),
    iconRight: /*#__PURE__*/React.createElement(window.Icon, {
      d: "arrow",
      size: 18
    })
  }, "Come\xE7ar conversa")), /*#__PURE__*/React.createElement("img", {
    src: window.ASSETS + 'mascote-icone.png',
    alt: "",
    style: {
      position: 'relative',
      width: 190,
      animation: 'fz-float var(--float-dur) var(--ease-soft) infinite'
    }
  })));
}
Object.assign(window, {
  Home,
  Section,
  Eyebrow,
  Title,
  Mark,
  SectionHead,
  BeforeAfter
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Product.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Product detail screen — gallery, price, sizes, description, CTAs, related.
function Product() {
  const shop = window.useShop();
  const C = window.FantasiandoDesignSystem_43d79f;
  const {
    Button,
    PriceTag,
    Rating,
    Badge,
    ProductCard
  } = C;
  const {
    Section,
    Eyebrow,
    Title
  } = window;
  const p = shop.selected || window.PRODUCTS[0];
  const [size, setSize] = React.useState(p.sizes[1] || p.sizes[0]);
  const gallery = [p.image, window.ASSETS + 'vestido-arco-iris.png', window.ASSETS + 'vestido-princesa-rosa.png'];
  const [main, setMain] = React.useState(0);
  const related = window.PRODUCTS.filter(x => x.id !== p.id).slice(0, 4);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '24px 24px 0',
      fontSize: 13.5,
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      shop.go('home');
    },
    style: {
      color: 'var(--text-muted)',
      textDecoration: 'none'
    }
  }, "In\xEDcio"), " \xB7 ", /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      shop.go('category', 'Temas');
    },
    style: {
      color: 'var(--text-muted)',
      textDecoration: 'none'
    }
  }, p.theme), " \xB7 ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-body)'
    }
  }, p.name)), /*#__PURE__*/React.createElement(Section, {
    style: {}
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 36,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      background: 'var(--surface-sunken)',
      border: '1px solid var(--line-200)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: gallery[main],
    alt: p.name,
    style: {
      width: '100%',
      aspectRatio: '4/5',
      objectFit: 'cover',
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginTop: 12
    }
  }, gallery.map((g, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    onClick: () => setMain(i),
    style: {
      width: 72,
      height: 88,
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      border: main === i ? '2px solid var(--violet-500)' : '2px solid var(--line-200)',
      cursor: 'pointer',
      padding: 0,
      background: 'var(--surface-card)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: g,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }))))), /*#__PURE__*/React.createElement("div", null, p.badge && /*#__PURE__*/React.createElement(Badge, {
    tone: p.badge.tone
  }, p.badge.label), /*#__PURE__*/React.createElement(Eyebrow, null, p.theme), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 36,
      lineHeight: 1.1,
      color: 'var(--text-strong)',
      margin: '6px 0 10px'
    }
  }, p.name), /*#__PURE__*/React.createElement(Rating, {
    value: p.rating,
    count: p.reviews
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '18px 0'
    }
  }, /*#__PURE__*/React.createElement(PriceTag, {
    price: p.price,
    original: p.original,
    installments: 3,
    size: "lg"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: 14,
      color: 'var(--text-strong)'
    }
  }, "Tamanho"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      fontSize: 13,
      fontWeight: 700,
      color: 'var(--brand-ink)',
      textDecoration: 'none',
      display: 'inline-flex',
      gap: 6,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(window.Icon, {
    d: "ruler",
    size: 15
  }), "Tabela de medidas")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginBottom: 22
    }
  }, p.sizes.map(s => /*#__PURE__*/React.createElement("button", {
    key: s,
    onClick: () => setSize(s),
    style: {
      minWidth: 48,
      height: 48,
      borderRadius: 'var(--radius-md)',
      cursor: 'pointer',
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: 15,
      border: size === s ? '2px solid var(--violet-500)' : '1.5px solid var(--line-200)',
      background: size === s ? 'var(--violet-50)' : 'var(--surface-card)',
      color: size === s ? 'var(--violet-700)' : 'var(--text-body)'
    }
  }, s))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    style: {
      flex: 1
    },
    onClick: () => shop.addToCart(p, size)
  }, "Comprar"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    style: {
      flex: 1
    },
    onClick: () => shop.openTryOn(p),
    iconLeft: /*#__PURE__*/React.createElement(window.Icon, {
      d: "sparkle",
      size: 18
    })
  }, "Experimentar com IA")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-sunken)',
      borderRadius: 'var(--radius-md)',
      padding: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 14,
      color: 'var(--text-strong)',
      marginBottom: 6
    }
  }, "Sobre o modelo"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14.5,
      lineHeight: 1.6,
      color: 'var(--text-muted)',
      margin: 0
    }
  }, "Vestido em tule com forro macio e acabamento delicado, pensado para festas e ocasi\xF5es especiais. Confort\xE1vel para a crian\xE7a brincar e posar."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      marginTop: 14,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral",
    dot: true
  }, "Pronta entrega"), /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral",
    dot: true
  }, "Envio para todo o Brasil")))))), /*#__PURE__*/React.createElement(Section, {
    bg: "var(--bg-cream)"
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    color: "var(--coral-500)"
  }, "Voc\xEA tamb\xE9m vai amar"), /*#__PURE__*/React.createElement(Title, {
    size: 28
  }, "Modelos relacionados"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 18,
      marginTop: 24
    }
  }, related.map(r => /*#__PURE__*/React.createElement(ProductCard, _extends({
    key: r.id
  }, r, {
    favorite: !!shop.favs[r.id],
    onFavorite: () => shop.toggleFav(r.id),
    onBuy: () => shop.addToCart(r, r.sizes[0]),
    onTryOn: () => shop.openTryOn(r)
  }))))));
}
Object.assign(window, {
  Product
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Product.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ProvaVirtual.jsx
try { (() => {
// Prova Virtual — full-screen wizard: Entrar → Vestido → Foto → Prévia, plus a saved gallery.
const PV_STEPS = ['Entrar', 'Vestido', 'Foto', 'Prévia'];
const PV_TIPS = ['Ajustando o caimento do tecido…', 'Combinando cores e luz da foto…', 'Conferindo proporções…', 'Quase pronto — capricho de ateliê.'];
function ProvaVirtual() {
  const shop = window.useShop();
  const [view, setView] = React.useState('wizard');
  const [step, setStep] = React.useState(shop.user ? 1 : 0);
  const [photo, setPhoto] = React.useState(null); // { name, url }
  const [phase, setPhase] = React.useState('idle'); // idle | loading | done | nocredits
  const [progress, setProgress] = React.useState(0);
  const picked = shop.selected;
  const generate = () => {
    if (shop.credits <= 0) {
      setStep(3);
      setPhase('nocredits');
      return;
    }
    setStep(3);
    setPhase('loading');
    setProgress(0);
    const id = setInterval(() => setProgress(x => {
      if (x >= 1) {
        clearInterval(id);
        shop.setCredits(c => c - 1);
        setPhase('done');
        shop.setGallery(g => [{
          id: Date.now(),
          product: picked,
          photo,
          date: new Date()
        }, ...g]);
        return 1;
      }
      return Math.min(1, x + 0.06);
    }), 180);
  };
  const reachable = k => k === 0 ? !shop.user : shop.user && (k <= 1 || k === 2 || k === 3 && phase === 'done');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--bg-base)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderBottom: '1px solid var(--line-200)',
      background: 'var(--surface-card)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-wide)',
      margin: '0 auto',
      padding: '14px 24px',
      display: 'flex',
      alignItems: 'center',
      gap: 24,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 18,
      color: 'var(--text-strong)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 34,
      height: 34,
      borderRadius: 999,
      background: 'var(--brand)',
      color: 'var(--text-on-brand)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(window.Icon, {
    d: "sparkle",
    size: 17
  })), "Prova virtual"), view === 'wizard' ? /*#__PURE__*/React.createElement("ol", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      flex: 1,
      justifyContent: 'center'
    }
  }, PV_STEPS.map((s, k) => {
    const done = k < step || k === 0 && shop.user;
    const cur = k === step;
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: s
    }, k > 0 && /*#__PURE__*/React.createElement("span", {
      style: {
        width: 28,
        height: 2,
        borderRadius: 2,
        background: done || cur ? 'var(--brand)' : 'var(--line-200)'
      }
    }), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("button", {
      disabled: !reachable(k),
      onClick: () => setStep(k),
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        border: 'none',
        background: cur ? 'var(--rosa-100)' : 'transparent',
        padding: '6px 12px 6px 6px',
        borderRadius: 999,
        cursor: reachable(k) ? 'pointer' : 'default',
        fontFamily: 'var(--font-body)',
        fontWeight: cur ? 800 : 600,
        fontSize: 14,
        color: cur ? 'var(--brand-ink)' : done ? 'var(--text-body)' : 'var(--text-subtle)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 26,
        height: 26,
        borderRadius: 999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 12.5,
        fontWeight: 800,
        background: done ? 'var(--brand)' : cur ? 'var(--surface-card)' : 'var(--surface-sunken)',
        color: done ? 'var(--text-on-brand)' : 'inherit',
        border: cur ? '1.5px solid var(--brand)' : '1.5px solid transparent'
      }
    }, done && !cur ? /*#__PURE__*/React.createElement(window.Icon, {
      d: "check",
      size: 14,
      stroke: 3
    }) : k + 1), s)));
  })) : /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(window.FantasiandoDesignSystem_43d79f.CreditCounter, {
    remaining: shop.credits,
    total: 3,
    compact: true
  }), shop.user && /*#__PURE__*/React.createElement("button", {
    onClick: () => setView(view === 'gallery' ? 'wizard' : 'gallery'),
    style: pvPill(view === 'gallery')
  }, /*#__PURE__*/React.createElement(window.Icon, {
    d: view === 'gallery' ? 'sparkle' : 'grid',
    size: 16
  }), view === 'gallery' ? 'Nova prova' : `Minhas prévias${shop.gallery.length ? ' · ' + shop.gallery.length : ''}`)))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex'
    }
  }, view === 'gallery' ? /*#__PURE__*/React.createElement(PvGallery, {
    onNew: () => {
      setView('wizard');
      setStep(1);
      setPhase('idle');
    }
  }) : /*#__PURE__*/React.createElement("div", {
    key: step,
    style: {
      flex: 1,
      display: 'flex',
      animation: 'fz-fade-up var(--dur-slow) var(--ease-out)'
    }
  }, step === 0 && /*#__PURE__*/React.createElement(AuthPanel, {
    onDone: () => setStep(1)
  }), step === 1 && /*#__PURE__*/React.createElement(PvDress, {
    onNext: () => setStep(2)
  }), step === 2 && /*#__PURE__*/React.createElement(PvPhoto, {
    photo: photo,
    setPhoto: setPhoto,
    onBack: () => setStep(1),
    onGenerate: generate
  }), step === 3 && /*#__PURE__*/React.createElement(PvResult, {
    phase: phase,
    progress: progress,
    photo: photo,
    onRetry: () => {
      setStep(1);
      setPhase('idle');
    },
    onGallery: () => setView('gallery')
  }))));
}
const pvPill = on => ({
  display: 'inline-flex',
  alignItems: 'center',
  gap: 7,
  padding: '8px 14px',
  borderRadius: 999,
  cursor: 'pointer',
  fontFamily: 'var(--font-body)',
  fontWeight: 700,
  fontSize: 13.5,
  border: '1.5px solid var(--line-200)',
  background: on ? 'var(--rosa-100)' : 'var(--surface-card)',
  color: on ? 'var(--brand-ink)' : 'var(--text-body)'
});
const pvWrap = {
  width: '100%',
  maxWidth: 'var(--container-max)',
  margin: '0 auto',
  padding: '48px 24px 64px'
};
const pvH = {
  margin: 0,
  fontFamily: 'var(--font-display)',
  fontWeight: 600,
  fontSize: 38,
  lineHeight: 1.1,
  letterSpacing: '-0.02em',
  color: 'var(--text-strong)',
  textWrap: 'balance'
};
const pvSub = {
  fontSize: 16.5,
  lineHeight: 1.6,
  color: 'var(--text-muted)',
  margin: '10px 0 0',
  maxWidth: 560
};

// ---------- Login / cadastro ----------
function AuthPanel({
  onDone
}) {
  const shop = window.useShop();
  const {
    Button,
    Input
  } = window.FantasiandoDesignSystem_43d79f;
  const [mode, setMode] = React.useState('criar');
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [senha, setSenha] = React.useState('');
  const submit = e => {
    e && e.preventDefault();
    shop.setUser({
      name: (nome || 'Pérola').split(' ')[0],
      email: email || 'perola@email.com'
    });
    shop.showToast({
      tone: 'success',
      title: mode === 'criar' ? 'Conta criada!' : 'Bem-vinda de volta!',
      text: 'Você tem 3 provas virtuais para usar.'
    });
    onDone && onDone();
  };
  const perks = [['sparkle', '3 provas virtuais grátis por conta'], ['lock', 'Fotos privadas, nunca exibidas publicamente'], ['trash', 'Exclua suas imagens quando quiser']];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)',
      minHeight: 620
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--brand)',
      color: 'var(--text-on-brand)',
      padding: '64px 56px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: window.ASSETS + 'simbolo-branco.png',
    alt: "",
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      right: -60,
      top: -40,
      width: 360,
      opacity: 0.35,
      transform: 'rotate(-8deg)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      fontWeight: 800,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      opacity: 0.75
    }
  }, "Prova virtual com IA"), /*#__PURE__*/React.createElement("h1", {
    style: {
      ...pvH,
      color: 'inherit',
      fontSize: 46,
      marginTop: 14,
      maxWidth: 440
    }
  }, "Crie sua conta e veja a magia acontecer."), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: '32px 0 0',
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, perks.map(([i, t]) => /*#__PURE__*/React.createElement("li", {
    key: t,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      fontSize: 16,
      fontWeight: 700
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 36,
      height: 36,
      borderRadius: 999,
      background: 'rgba(255,255,255,0.45)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(window.Icon, {
    d: i,
    size: 17
  })), t)))), /*#__PURE__*/React.createElement("img", {
    src: window.ASSETS + 'mascote-prova-virtual.png',
    alt: "",
    style: {
      position: 'relative',
      width: 220,
      alignSelf: 'flex-end',
      animation: 'fz-float var(--float-dur) var(--ease-soft) infinite'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '48px 24px'
    }
  }, /*#__PURE__*/React.createElement("form", {
    onSubmit: submit,
    style: {
      width: '100%',
      maxWidth: 400,
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      padding: 4,
      borderRadius: 999,
      background: 'var(--surface-sunken)',
      border: '1px solid var(--line-200)'
    }
  }, [['criar', 'Criar conta'], ['entrar', 'Entrar']].map(([k, l]) => /*#__PURE__*/React.createElement("button", {
    type: "button",
    key: k,
    onClick: () => setMode(k),
    style: {
      border: 'none',
      borderRadius: 999,
      padding: '10px 0',
      cursor: 'pointer',
      fontFamily: 'var(--font-body)',
      fontWeight: 800,
      fontSize: 14,
      background: mode === k ? 'var(--surface-card)' : 'transparent',
      color: mode === k ? 'var(--text-strong)' : 'var(--text-muted)',
      boxShadow: mode === k ? 'var(--shadow-sm)' : 'none'
    }
  }, l))), /*#__PURE__*/React.createElement("h2", {
    style: {
      ...pvH,
      fontSize: 30,
      marginTop: 8
    }
  }, mode === 'criar' ? 'Comece em 30 segundos' : 'Que bom te ver de novo'), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: submit,
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 10,
      height: 48,
      borderRadius: 999,
      border: '1.5px solid var(--line-200)',
      background: 'var(--surface-card)',
      color: 'var(--text-strong)',
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: 15,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 48 48"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#FFC107",
    d: "M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.8 1.1 7.9 3l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#FF3D00",
    d: "m6.3 14.7 6.6 4.8C14.7 15.1 19 12 24 12c3 0 5.8 1.1 7.9 3l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#4CAF50",
    d: "M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#1976D2",
    d: "M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.4-.4-3.5z"
  })), "Continuar com Google"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      color: 'var(--text-subtle)',
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 1,
      background: 'var(--line-200)'
    }
  }), "ou com e-mail", /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 1,
      background: 'var(--line-200)'
    }
  })), mode === 'criar' && /*#__PURE__*/React.createElement(Input, {
    label: "Seu nome",
    placeholder: "Como podemos te chamar?",
    value: nome,
    onChange: e => setNome(e.target.value)
  }), /*#__PURE__*/React.createElement(Input, {
    label: "E-mail",
    type: "email",
    placeholder: "voce@email.com",
    value: email,
    onChange: e => setEmail(e.target.value),
    iconLeft: /*#__PURE__*/React.createElement(window.Icon, {
      d: "mail",
      size: 18
    })
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Senha",
    type: "password",
    placeholder: "M\xEDnimo 8 caracteres",
    value: senha,
    onChange: e => setSenha(e.target.value),
    iconLeft: /*#__PURE__*/React.createElement(window.Icon, {
      d: "lock",
      size: 18
    })
  }), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    variant: "primary",
    size: "lg",
    fullWidth: true
  }, mode === 'criar' ? 'Criar conta e ganhar 3 provas' : 'Entrar'), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 12.5,
      color: 'var(--text-subtle)',
      lineHeight: 1.5,
      margin: 0,
      textAlign: 'center'
    }
  }, "Ao continuar voc\xEA concorda com os Termos e a Pol\xEDtica de imagens da Annap\xEA Ateli\xEA."))));
}

// ---------- 1 · Vestido ----------
function PvDress({
  onNext
}) {
  const shop = window.useShop();
  const {
    Button,
    PriceTag
  } = window.FantasiandoDesignSystem_43d79f;
  const picked = shop.selected;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...pvWrap,
      paddingBottom: 120
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: pvH
  }, shop.user ? `${shop.user.name}, qual vestido vamos provar?` : 'Qual vestido vamos provar?'), /*#__PURE__*/React.createElement("p", {
    style: pvSub
  }, "Escolha um modelo. Voc\xEA pode trocar depois sem gastar cr\xE9dito."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
      gap: 18,
      marginTop: 32
    }
  }, window.PRODUCTS.map(p => {
    const on = picked && picked.id === p.id;
    return /*#__PURE__*/React.createElement("button", {
      key: p.id,
      onClick: () => shop.setSelected(p),
      style: {
        position: 'relative',
        textAlign: 'left',
        padding: 0,
        cursor: 'pointer',
        background: 'var(--surface-card)',
        borderRadius: 20,
        overflow: 'hidden',
        border: `2px solid ${on ? 'var(--brand)' : 'var(--line-200)'}`,
        boxShadow: on ? '0 0 0 4px var(--rosa-100)' : 'none',
        transition: 'all var(--dur-fast)',
        fontFamily: 'var(--font-body)'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: p.image,
      alt: "",
      style: {
        width: '100%',
        aspectRatio: '4 / 5',
        objectFit: 'cover',
        display: 'block'
      }
    }), on && /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        top: 12,
        right: 12,
        width: 32,
        height: 32,
        borderRadius: 999,
        background: 'var(--brand)',
        color: 'var(--text-on-brand)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: 'var(--shadow-md)'
      }
    }, /*#__PURE__*/React.createElement(window.Icon, {
      d: "check",
      size: 17,
      stroke: 3
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '12px 14px 14px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        fontSize: 16,
        color: 'var(--text-strong)',
        lineHeight: 1.2
      }
    }, p.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13.5,
        color: 'var(--text-muted)',
        marginTop: 4
      }
    }, window.fmtBRL(p.price))));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      left: '50%',
      bottom: 20,
      transform: 'translateX(-50%)',
      zIndex: 600,
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      padding: '10px 10px 10px 12px',
      borderRadius: 999,
      background: 'var(--surface-raised)',
      border: '1px solid var(--line-200)',
      boxShadow: 'var(--shadow-lg)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: picked.image,
    alt: "",
    style: {
      width: 44,
      height: 44,
      borderRadius: 999,
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 160
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--text-subtle)',
      fontWeight: 700
    }
  }, "Selecionado"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 800,
      fontSize: 14.5,
      color: 'var(--text-strong)'
    }
  }, picked.name)), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: onNext,
    iconRight: /*#__PURE__*/React.createElement(window.Icon, {
      d: "arrow",
      size: 17
    })
  }, "Continuar")));
}

// ---------- 2 · Foto ----------
function PvPhoto({
  photo,
  setPhoto,
  onBack,
  onGenerate
}) {
  const shop = window.useShop();
  const {
    Button,
    Checkbox
  } = window.FantasiandoDesignSystem_43d79f;
  const [consent, setConsent] = React.useState(false);
  const inputRef = React.useRef(null);
  const pick = f => {
    if (!f) {
      setPhoto({
        name: 'foto-exemplo.jpg',
        url: null
      });
      return;
    }
    setPhoto({
      name: f.name,
      url: URL.createObjectURL(f)
    });
  };
  const good = [['pv-ok-1', 'Corpo inteiro, de frente'], ['pv-ok-2', 'Luz boa, fundo simples']];
  const bad = [['pv-no-1', 'Cortada ou muito de perto'], ['pv-no-2', 'Escura ou com sombra forte'], ['pv-no-3', 'Objetos cobrindo a roupa']];
  const Ex = ({
    id,
    label,
    ok
  }) => /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: '3 / 4',
      borderRadius: 14,
      overflow: 'hidden',
      outline: `2px solid ${ok ? 'var(--success)' : 'var(--danger)'}`,
      outlineOffset: -2
    }
  }, /*#__PURE__*/React.createElement(window.Slot, {
    id: id,
    label: label,
    shape: "rect"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 8,
      left: 8,
      width: 26,
      height: 26,
      borderRadius: 999,
      background: ok ? 'var(--success)' : 'var(--danger)',
      color: 'var(--surface-card)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement(window.Icon, {
    d: ok ? 'check' : 'x',
    size: 15,
    stroke: 3
  }))), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      fontSize: 12.5,
      fontWeight: 700,
      color: 'var(--text-muted)',
      lineHeight: 1.3
    }
  }, label));
  return /*#__PURE__*/React.createElement("div", {
    style: pvWrap
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)',
      gap: 48,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: pvH
  }, "Agora, uma foto de corpo inteiro."), /*#__PURE__*/React.createElement("p", {
    style: pvSub
  }, "A foto fica s\xF3 na sua conta e serve apenas para gerar a pr\xE9via do ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'var(--text-strong)'
    }
  }, shop.selected.name), "."), /*#__PURE__*/React.createElement("input", {
    ref: inputRef,
    type: "file",
    accept: "image/*",
    style: {
      display: 'none'
    },
    onChange: e => pick(e.target.files[0])
  }), /*#__PURE__*/React.createElement("div", {
    onClick: () => inputRef.current.click(),
    onDragOver: e => e.preventDefault(),
    onDrop: e => {
      e.preventDefault();
      pick(e.dataTransfer.files[0]);
    },
    style: {
      marginTop: 28,
      position: 'relative',
      aspectRatio: photo ? '4 / 5' : 'auto',
      maxWidth: photo ? 360 : 'none',
      borderRadius: 24,
      overflow: 'hidden',
      cursor: 'pointer',
      border: photo ? '1px solid var(--line-200)' : '2px dashed var(--rosa-300)',
      background: 'var(--rosa-50)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: photo ? 0 : '40px 24px',
      textAlign: 'center'
    }
  }, photo ? /*#__PURE__*/React.createElement(React.Fragment, null, photo.url ? /*#__PURE__*/React.createElement("img", {
    src: photo.url,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : /*#__PURE__*/React.createElement(window.Slot, {
    id: "pv-foto",
    label: "Foto da crian\xE7a",
    shape: "rect"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      bottom: 12,
      left: 12,
      right: 12,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '8px 12px',
      borderRadius: 999,
      background: 'var(--surface-raised)',
      fontSize: 13,
      fontWeight: 700,
      color: 'var(--text-strong)',
      boxShadow: 'var(--shadow-md)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      gap: 6,
      alignItems: 'center',
      color: 'var(--success)'
    }
  }, /*#__PURE__*/React.createElement(window.Icon, {
    d: "check",
    size: 15,
    stroke: 3
  }), "Foto pronta"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--brand-ink)'
    }
  }, "Trocar"))) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: window.ASSETS + 'mascote-vazio.png',
    alt: "",
    style: {
      width: 120,
      animation: 'fz-float var(--float-dur) var(--ease-soft) infinite'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 22,
      color: 'var(--text-strong)'
    }
  }, "Arraste a foto aqui"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--text-muted)'
    }
  }, "ou toque para escolher \xB7 JPG ou PNG"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      marginTop: 6,
      padding: '10px 18px',
      borderRadius: 999,
      background: 'var(--brand)',
      color: 'var(--text-on-brand)',
      fontWeight: 800,
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement(window.Icon, {
    d: "camera",
    size: 17
  }), "Escolher foto"), /*#__PURE__*/React.createElement("button", {
    onClick: e => {
      e.stopPropagation();
      pick(null);
    },
    style: {
      border: 'none',
      background: 'none',
      color: 'var(--text-subtle)',
      fontSize: 12.5,
      textDecoration: 'underline',
      cursor: 'pointer',
      fontFamily: 'var(--font-body)'
    }
  }, "usar foto de exemplo"))), /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'flex-start',
      marginTop: 20,
      fontSize: 14,
      color: 'var(--text-muted)',
      cursor: 'pointer',
      lineHeight: 1.5
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    checked: consent,
    onChange: e => setConsent(e.target.checked)
  }), /*#__PURE__*/React.createElement("span", null, "Autorizo o uso desta foto apenas para gerar a pr\xE9via. Posso excluir quando quiser.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginTop: 24,
      alignItems: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: onBack,
    iconLeft: /*#__PURE__*/React.createElement(window.Icon, {
      d: "back",
      size: 17
    })
  }, "Vestido"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    disabled: !photo || !consent,
    onClick: onGenerate,
    iconLeft: /*#__PURE__*/React.createElement(window.Icon, {
      d: "sparkle",
      size: 18
    })
  }, "Gerar pr\xE9via \xB7 usa 1 cr\xE9dito"))), /*#__PURE__*/React.createElement("aside", {
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--line-200)',
      borderRadius: 24,
      padding: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: window.ASSETS + 'mascote-erro-foto.png',
    alt: "",
    style: {
      width: 64
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 20,
      color: 'var(--text-strong)'
    }
  }, "Guia da foto boa"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--text-muted)'
    }
  }, "Uma boa foto deixa a pr\xE9via muito mais fiel."))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      fontWeight: 800,
      letterSpacing: '0.08em',
      color: 'var(--success)',
      marginBottom: 10
    }
  }, "ASSIM FICA \xD3TIMO"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 12,
      marginBottom: 22
    }
  }, good.map(([id, l]) => /*#__PURE__*/React.createElement(Ex, {
    key: id,
    id: id,
    label: l,
    ok: true
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      fontWeight: 800,
      letterSpacing: '0.08em',
      color: 'var(--danger)',
      marginBottom: 10
    }
  }, "EVITE"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 12
    }
  }, bad.map(([id, l]) => /*#__PURE__*/React.createElement(Ex, {
    key: id,
    id: id,
    label: l
  }))))));
}

// ---------- 3 · Prévia ----------
function PvResult({
  phase,
  progress,
  photo,
  onRetry,
  onGallery
}) {
  const shop = window.useShop();
  const {
    Button,
    MascotState,
    PriceTag
  } = window.FantasiandoDesignSystem_43d79f;
  const p = shop.selected;
  const tip = PV_TIPS[Math.min(PV_TIPS.length - 1, Math.floor(progress * PV_TIPS.length))];
  if (phase === 'loading') return /*#__PURE__*/React.createElement("div", {
    style: {
      ...pvWrap,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: 520
    }
  }, /*#__PURE__*/React.createElement(MascotState, {
    state: "loading",
    size: "lg",
    assetsPath: window.ASSETS,
    progress: progress,
    text: tip
  }));
  if (phase === 'nocredits') return /*#__PURE__*/React.createElement("div", {
    style: {
      ...pvWrap,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: 520
    }
  }, /*#__PURE__*/React.createElement(MascotState, {
    state: "no-credits",
    size: "lg",
    assetsPath: window.ASSETS,
    action: /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      iconLeft: /*#__PURE__*/React.createElement(window.Icon, {
        d: "chat",
        size: 16
      }),
      onClick: () => shop.go('contato', 'Contato')
    }, "Falar com o ateli\xEA"), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      onClick: onGallery
    }, "Ver minhas pr\xE9vias"))
  }));
  return /*#__PURE__*/React.createElement("div", {
    style: pvWrap
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) minmax(0,0.9fr)',
      gap: 56,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 460,
      width: '100%',
      justifySelf: 'center'
    }
  }, /*#__PURE__*/React.createElement(window.BeforeAfter, {
    initial: 50,
    before: photo && photo.url ? /*#__PURE__*/React.createElement("img", {
      src: photo.url,
      alt: "",
      style: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        display: 'block'
      }
    }) : /*#__PURE__*/React.createElement(window.Slot, {
      id: "pv-foto",
      label: "Foto da crian\xE7a",
      shape: "rect"
    }),
    after: /*#__PURE__*/React.createElement("img", {
      src: p.image,
      alt: "",
      style: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        display: 'block'
      }
    })
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 12.5,
      color: 'var(--text-subtle)',
      textAlign: 'center',
      marginTop: 12
    }
  }, "Arraste para comparar \xB7 Simula\xE7\xE3o visual \u2014 o caimento real pode variar.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      padding: '6px 12px',
      borderRadius: 999,
      background: 'var(--success-soft)',
      color: 'var(--success)',
      fontSize: 13,
      fontWeight: 800
    }
  }, /*#__PURE__*/React.createElement(window.Icon, {
    d: "check",
    size: 15,
    stroke: 3
  }), "Pr\xE9via pronta e salva"), /*#__PURE__*/React.createElement("h1", {
    style: {
      ...pvH,
      marginTop: 16
    }
  }, "Olha s\xF3 como ficou o ", p.name, "!"), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '20px 0 28px'
    }
  }, /*#__PURE__*/React.createElement(PriceTag, {
    price: p.price,
    original: p.original,
    installments: 3,
    size: "lg"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => shop.addToCart(p, p.sizes[1] || p.sizes[0]),
    iconLeft: /*#__PURE__*/React.createElement(window.Icon, {
      d: "cart",
      size: 18
    })
  }, "Comprar este modelo"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    onClick: onRetry,
    iconLeft: /*#__PURE__*/React.createElement(window.Icon, {
      d: "refresh",
      size: 18
    })
  }, "Provar outro")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20,
      marginTop: 24,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onGallery,
    style: pvLink
  }, /*#__PURE__*/React.createElement(window.Icon, {
    d: "grid",
    size: 16
  }), "Ver minhas pr\xE9vias"), /*#__PURE__*/React.createElement("button", {
    onClick: () => shop.showToast({
      tone: 'info',
      title: 'Download iniciado',
      text: 'A prévia foi salva no seu aparelho.'
    }),
    style: pvLink
  }, /*#__PURE__*/React.createElement(window.Icon, {
    d: "download",
    size: 16
  }), "Baixar imagem")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28,
      paddingTop: 20,
      borderTop: '1px solid var(--line-200)',
      fontSize: 14,
      color: 'var(--text-muted)',
      display: 'flex',
      gap: 10,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(window.FantasiandoDesignSystem_43d79f.CreditCounter, {
    remaining: shop.credits,
    total: 3,
    compact: true
  }), shop.credits > 0 ? 'Você ainda pode testar outros modelos.' : 'Suas provas acabaram — fale com o ateliê.'))));
}
const pvLink = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: 7,
  border: 'none',
  background: 'none',
  padding: 0,
  cursor: 'pointer',
  fontFamily: 'var(--font-body)',
  fontWeight: 700,
  fontSize: 14,
  color: 'var(--brand-ink)'
};

// ---------- Galeria ----------
function PvGallery({
  onNew
}) {
  const shop = window.useShop();
  const {
    Button,
    MascotState
  } = window.FantasiandoDesignSystem_43d79f;
  const [open, setOpen] = React.useState(null);
  const g = shop.gallery;
  const del = id => {
    shop.setGallery(x => x.filter(h => h.id !== id));
    setOpen(null);
    shop.showToast({
      tone: 'info',
      title: 'Prévia excluída',
      text: 'A imagem foi removida da sua conta.'
    });
  };
  return /*#__PURE__*/React.createElement("div", {
    style: pvWrap
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 16,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: pvH
  }, "Minhas pr\xE9vias"), /*#__PURE__*/React.createElement("p", {
    style: pvSub
  }, "S\xF3 voc\xEA v\xEA estas imagens. Exclua quando quiser.")), g.length > 0 && /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: onNew,
    iconLeft: /*#__PURE__*/React.createElement(window.Icon, {
      d: "sparkle",
      size: 17
    })
  }, "Nova prova")), g.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40,
      background: 'var(--surface-card)',
      border: '1px solid var(--line-200)',
      borderRadius: 24,
      padding: 48
    }
  }, /*#__PURE__*/React.createElement(MascotState, {
    state: "empty",
    assetsPath: window.ASSETS,
    title: "Nenhuma pr\xE9via ainda",
    text: "As simula\xE7\xF5es que voc\xEA gerar ficam guardadas aqui.",
    action: /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      onClick: onNew
    }, "Fazer minha primeira prova")
  })) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
      gap: 20,
      marginTop: 32
    }
  }, g.map(h => /*#__PURE__*/React.createElement("figure", {
    key: h.id,
    style: {
      margin: 0,
      background: 'var(--surface-card)',
      border: '1px solid var(--line-200)',
      borderRadius: 20,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(h),
    style: {
      display: 'block',
      width: '100%',
      padding: 0,
      border: 'none',
      cursor: 'zoom-in',
      background: 'none'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: h.product.image,
    alt: "",
    style: {
      width: '100%',
      aspectRatio: '4 / 5',
      objectFit: 'cover',
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      padding: '12px 14px',
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 800,
      fontSize: 14,
      color: 'var(--text-strong)',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, h.product.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: 'var(--text-subtle)'
    }
  }, h.date.toLocaleDateString('pt-BR'))), /*#__PURE__*/React.createElement("button", {
    "aria-label": "Excluir",
    onClick: () => del(h.id),
    style: {
      border: 'none',
      background: 'var(--surface-sunken)',
      width: 34,
      height: 34,
      borderRadius: 999,
      cursor: 'pointer',
      color: 'var(--text-muted)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(window.Icon, {
    d: "trash",
    size: 16
  })))))), open && /*#__PURE__*/React.createElement("div", {
    onClick: () => setOpen(null),
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 1000,
      background: 'var(--overlay)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width: 420,
      maxWidth: '100%',
      background: 'var(--surface-raised)',
      borderRadius: 24,
      padding: 16,
      boxShadow: 'var(--shadow-lg)'
    }
  }, /*#__PURE__*/React.createElement(window.BeforeAfter, {
    before: open.photo && open.photo.url ? /*#__PURE__*/React.createElement("img", {
      src: open.photo.url,
      alt: "",
      style: {
        width: '100%',
        height: '100%',
        objectFit: 'cover'
      }
    }) : /*#__PURE__*/React.createElement(window.Slot, {
      id: "pv-foto",
      label: "Foto da crian\xE7a",
      shape: "rect"
    }),
    after: /*#__PURE__*/React.createElement("img", {
      src: open.product.image,
      alt: "",
      style: {
        width: '100%',
        height: '100%',
        objectFit: 'cover'
      }
    })
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    style: {
      flex: 1
    },
    onClick: () => {
      shop.addToCart(open.product, open.product.sizes[0]);
      setOpen(null);
    }
  }, "Comprar"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => del(open.id),
    iconLeft: /*#__PURE__*/React.createElement(window.Icon, {
      d: "trash",
      size: 16
    })
  }, "Excluir")))));
}
Object.assign(window, {
  ProvaVirtual,
  AuthPanel
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ProvaVirtual.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/image-slot.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).
/* BEGIN USAGE */
/**
 * <image-slot> — user-fillable image placeholder.
 *
 * Drop this into a deck, mockup, or page wherever a design needs an image.
 * You control the slot's shape; it sizes to its container by default. When the search_stock_photos tool
 * is available, prefill the slot by default — write the photo's URL into
 * src (with credit/credit-href); the user can still fill or replace it
 * by dragging an image file onto it (or clicking to browse). The dropped
 * image persists across reloads via a .image-slots.state.json sidecar —
 * same read-via-fetch / write-via-window.omelette pattern as
 * design_canvas.jsx, so the filled slot shows on share links, downloaded
 * zips, and PPTX export. Outside the omelette runtime the slot is read-only.
 *
 * The sidecar is a SIBLING of the HTML file that uses this component: the
 * read is a document-relative fetch, and the host resolves the bridge's
 * sidecar writes into the previewed file's directory to match (same
 * contract as design_canvas.jsx). Pages in the same directory share one
 * sidecar; keep slot ids distinct across them.
 *
 * Attributes:
 *   id           Persistence key. REQUIRED for the drop to survive reload —
 *                every slot on the page needs a distinct id.
 *   shape        'rect' | 'rounded' | 'circle' | 'pill'   (default 'rounded')
 *                'circle' applies 50% border-radius; on a non-square slot
 *                that's an ellipse — set equal width and height for a true
 *                circle.
 *   radius       Corner radius in px for 'rounded'.       (default 12)
 *   mask         Any CSS clip-path value. Overrides `shape` — use this for
 *                hexagons, blobs, arbitrary polygons.
 *   fit          Initial framing baseline: cover | contain.   (default 'cover')
 *                cover starts the image filling the frame (overflow cropped);
 *                contain starts it fully visible (letterboxed). Either way the
 *                user can always pan/scale from there — double-click, or the
 *                Edit control, enters reframe mode (drag to move, scroll or
 *                corner-handles to scale; Escape / click-out commits). The
 *                crop persists alongside the image in the sidecar.
 *   placeholder  Empty-state caption.                      (default 'Drop an image')
 *   src          Optional initial/fallback image URL. Prefill it with a real
 *                photo via search_stock_photos when that tool is available
 *                (set credit/credit-href from the result). A user drop
 *                overrides it; clearing the drop reveals src again.
 *   credit       Attribution text shown as a small overlay at the
 *                bottom-left of the filled slot. REQUIRED whenever src
 *                points at any Unsplash host (images.unsplash.com,
 *                plus.unsplash.com, …): an Unsplash src with no credit
 *                renders an error tile INSTEAD of the photo (Unsplash
 *                terms forbid showing their photos unattributed). Use the
 *                exact form 'Photo by {photographer name} on Unsplash' —
 *                the overlay then links the name to credit-href and
 *                'Unsplash' to the Unsplash homepage, and links back to
 *                unsplash.com automatically get the required utm referral
 *                params appended at render time. The credit belongs to
 *                the src image, so it only shows while src is what's
 *                displayed — a user-dropped image hides it.
 *   credit-href  Link for the photographer's name in the credit overlay
 *                (their Unsplash profile URL from the stock-photo search
 *                results). http(s) URLs only — anything else renders the
 *                name as plain text.
 *
 * Sizing: the slot fills its container by default (width/height 100%).
 * Put it in a sized wrapper — absolutely positioned, a grid cell, a fixed
 * frame — and it takes exactly that box. When the parent's height is
 * indefinite (ordinary flow), it falls back to full width at a 3:2 aspect
 * ratio instead of collapsing. In a shrink-to-fit parent (a float,
 * width:max-content, an unsized absolute wrapper), percentages have
 * nothing to resolve against — size the slot or its wrapper explicitly
 * there. For a fixed-size slot, set
 * width/height on the element itself (inline style), which overrides the
 * default. When
 * layering content above a slot (full-bleed layouts), make the overlay
 * click-through — pointer-events: none on scrims/text plates, re-enabled
 * on interactive children — so the slot's hover controls stay reachable.
 * Keep the slot's bottom-left corner visually clear as well: the credit
 * overlay renders there, and a dark fade or text plate covering it hides
 * the attribution Unsplash's terms require — end the fade above that
 * corner, or keep it nearly transparent where the credit sits.
 *
 * Usage:
 *   <div style="position:relative;width:100%;height:100%">      <!-- full-bleed: -->
 *     <image-slot id="bg" shape="rect"></image-slot>            <!-- fills the wrapper -->
 *   </div>
 *   <image-slot id="hero"   style="width:800px;height:450px" shape="rounded" radius="20"
 *               placeholder="Drop a hero image"></image-slot>
 *   <image-slot id="avatar" style="width:120px;height:120px" shape="circle"></image-slot>
 *   <image-slot id="kite"   style="width:300px;height:300px"
 *               mask="polygon(50% 0, 100% 50%, 50% 100%, 0 50%)"></image-slot>
 */
/* END USAGE */

(() => {
  const STATE_FILE = '.image-slots.state.json';

  // Unsplash terms require visible attribution wherever their photos
  // display, and every link back to unsplash.com must carry utm referral
  // params. Two render-time rules enforce that here:
  //  - an Unsplash-src slot with NO credit attribute renders an error
  //    tile INSTEAD of the photo (an uncredited Unsplash photo on screen
  //    is itself the terms violation, so it never renders bare);
  //  - rendered credit links pointing at unsplash.com get the referral
  //    params appended when absent (credit-href values live in page
  //    content that can't be edited after the fact).
  // Keep the utm_source value in sync with UTM_SOURCE in
  // platform/web-agent/unsplash.ts — this file is a project-local
  // artifact and cannot import it (equality is pinned by tests).
  const UNSPLASH_HOMEPAGE_HREF = 'https://unsplash.com/?utm_source=claude_design&utm_medium=referral';
  // Host rule mirrors the hotlink validator that admits Unsplash srcs into
  // pages in the first place (cdn$ in unsplash.ts: apex or any subdomain)
  // — Unsplash+ results serve from plus.unsplash.com, not just images.*,
  // and an admitted-but-uncredited photo must error whatever unsplash
  // host it rides on.
  // Trailing-dot FQDNs (images.unsplash.com.) are the same host to the
  // browser but would miss the regex — strip one dot so the check fails
  // CLOSED (unrecognized-but-real Unsplash srcs must error, not render).
  const isUnsplashHost = u => {
    try {
      return /(^|\.)unsplash\.com$/.test(new URL(u, document.baseURI).hostname.replace(/\.$/, ''));
    } catch {
      return false;
    }
  };
  // Render-time referral normalization for links back to Unsplash:
  // appends utm_source/utm_medium when absent, preserves every existing
  // query param, never overwrites an existing utm_source, and passes
  // non-Unsplash URLs through untouched. Input is an ABSOLUTE validated
  // http(s) URL (the credit render funnel resolves + validates first).
  const withReferral = href => {
    try {
      const u = new URL(href);
      if (!/(^|\.)unsplash\.com$/.test(u.hostname.replace(/\.$/, ''))) {
        return href;
      }
      if (!u.searchParams.has('utm_source')) {
        u.searchParams.set('utm_source', 'claude_design');
      }
      if (!u.searchParams.has('utm_medium')) {
        u.searchParams.set('utm_medium', 'referral');
      }
      return u.toString();
    } catch (e) {
      return href;
    }
  };
  // 2× a ~600px slot in a 1920-wide deck — retina-sharp without making the
  // sidecar enormous. A 1200px WebP at q=0.85 is ~150-300KB.
  const MAX_DIM = 1200;
  // Raster formats only. SVG is excluded (can carry script; createImageBitmap
  // on SVG blobs is inconsistent). GIF is excluded because the canvas
  // re-encode keeps only the first frame, so an animated GIF would silently
  // go still — better to reject than surprise.
  const ACCEPT = ['image/png', 'image/jpeg', 'image/webp', 'image/avif'];

  // ── Shared sidecar store ────────────────────────────────────────────────
  // One fetch + immediate write-on-change for every <image-slot> on the
  // page. Reads via fetch() so viewing works anywhere the HTML and sidecar
  // are served together; writes go through window.omelette.writeFile, which
  // the host allowlists to *.state.json basenames only.
  const subs = new Set();
  let slots = {};
  // ids explicitly cleared before the sidecar fetch resolved — otherwise
  // the merge below can't tell "never set" from "just deleted" and would
  // resurrect the sidecar's stale value.
  const tombstones = new Set();
  let loaded = false;
  let loadP = null;
  function load() {
    if (loadP) return loadP;
    loadP = fetch(STATE_FILE).then(r => r.ok ? r.json() : null).then(j => {
      // Merge: sidecar loses to any in-memory change that raced ahead of
      // the fetch (drop or clear) so neither is clobbered by hydration.
      if (j && typeof j === 'object') {
        const merged = Object.assign({}, j, slots);
        // A framing-only write that raced ahead of hydration must not
        // drop a user image that's only on disk — inherit u from the
        // sidecar for any in-memory entry that lacks one.
        for (const k in slots) {
          if (merged[k] && !merged[k].u && j[k]) {
            merged[k].u = typeof j[k] === 'string' ? j[k] : j[k].u;
          }
        }
        for (const id of tombstones) delete merged[id];
        slots = merged;
      }
      tombstones.clear();
    }).catch(() => {}).then(() => {
      loaded = true;
      subs.forEach(fn => fn());
    });
    return loadP;
  }

  // Serialize writes so two near-simultaneous drops on different slots
  // can't reorder at the backend and leave the sidecar with only the
  // first. A save requested mid-flight just marks dirty and re-fires on
  // completion with the then-current slots.
  let saving = false;
  let saveDirty = false;
  // Unload-time flush: save()'s serialization defers a mid-RTT re-fire to a
  // .then that never runs in an unloading document, silently dropping a
  // pagehide commit. Post the current slots immediately instead — content
  // is a superset snapshot of any in-flight save's, the write is a
  // whole-file last-writer-wins replace, and postMessage FIFO delivers it
  // to the host after the in-flight one, so a backend-side reorder at
  // worst reproduces the dropped-commit outcome this flush improves on.
  // Guarded on the initial sidecar read: pre-hydration slots can miss
  // other slots' persisted entries, and flushing it would clobber them —
  // that narrow case stays best-effort (the in-memory merge in load()
  // cannot happen in an unloading document anyway).
  function flushNow() {
    if (!loaded) return;
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    try {
      Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {});
    } catch (e) {}
  }
  function save() {
    if (saving) {
      saveDirty = true;
      return;
    }
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    saving = true;
    Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {}).then(() => {
      saving = false;
      if (saveDirty) {
        saveDirty = false;
        save();
      }
    });
  }
  const S_MAX = 5;
  const clampS = s => Math.max(1, Math.min(S_MAX, s));

  // Normalize a stored slot value. Pre-reframe sidecars stored a bare
  // data-URL string; newer ones store {u, s, x, y}. Either shape is valid.
  function getSlot(id) {
    const v = slots[id];
    if (!v) return null;
    return typeof v === 'string' ? {
      u: v,
      s: 1,
      x: 0,
      y: 0
    } : v;
  }
  function setSlot(id, val) {
    if (!id) return;
    if (val) {
      slots[id] = val;
      tombstones.delete(id);
    } else {
      delete slots[id];
      if (!loaded) tombstones.add(id);
    }
    subs.forEach(fn => fn());
    // A drop is rare + high-value — write immediately so nav-away can't lose
    // it. Gate on the initial read so we don't overwrite a sidecar we haven't
    // merged yet; the merge in load() keeps this change once the read lands.
    if (loaded) save();else load().then(save);
  }

  // ── Image downscale ─────────────────────────────────────────────────────
  // Encode through a canvas so the sidecar carries resized bytes, not the
  // raw upload. Longest side is capped at 2× the slot's rendered width
  // (retina) and at MAX_DIM. WebP keeps alpha and is ~10× smaller than PNG
  // for photos, so there's no need for per-image format picking.
  async function toDataUrl(file, targetW) {
    const bitmap = await createImageBitmap(file);
    try {
      const cap = Math.min(MAX_DIM, Math.max(1, Math.round(targetW * 2)) || MAX_DIM);
      const scale = Math.min(1, cap / Math.max(bitmap.width, bitmap.height));
      const w = Math.max(1, Math.round(bitmap.width * scale));
      const h = Math.max(1, Math.round(bitmap.height * scale));
      const canvas = document.createElement('canvas');
      canvas.width = w;
      canvas.height = h;
      canvas.getContext('2d').drawImage(bitmap, 0, 0, w, h);
      return canvas.toDataURL('image/webp', 0.85);
    } finally {
      bitmap.close && bitmap.close();
    }
  }

  // ── Custom element ──────────────────────────────────────────────────────
  const stylesheet =
  // Fill the container by default: slots are usually placed inside a
  // sized wrapper (a hero frame, a grid cell, an inset:0 layer) and are
  // expected to take that box — a fixed intrinsic size would render as
  // a small tile in the corner of a full-bleed wrapper instead.
  // aspect-ratio is the companion fallback that keeps a bare slot
  // visible when the parent's height is indefinite: height:100%
  // resolves to auto there, and the ratio then derives height from
  // width instead of letting the slot collapse to zero height.
  // Explicit width/height on the element override all of this.
  // color:inherit (not a fixed near-black): the placeholder chrome —
  // empty-state icon/caption (currentColor) and the dashed ring — must
  // read on dark decks too, and the slide's own text color is the one
  // color guaranteed to contrast with the slide background. The soft
  // look comes from opacity on those parts, not from a baked-in alpha.
  ':host{display:block;position:relative;' + '  font:13px/1.3 system-ui,-apple-system,sans-serif;' + '  width:100%;height:100%;aspect-ratio:3/2}' + '.empty .cap,.empty .sub{opacity:.75}' + '.frame{position:absolute;inset:0;overflow:hidden;background:rgba(127,127,127,.08)}' +
  // .frame img (clipped) and .spill (unclipped ghost + handles) share the
  // same left/top/width/height in frame-%, computed by _applyView(), so the
  // inside-mask crop and the outside-mask spill stay pixel-aligned.
  '.frame img{position:absolute;max-width:none;transform:translate(-50%,-50%);' + '  -webkit-user-drag:none;user-select:none;touch-action:none}' +
  // Reframe mode (double-click): the full image spills past the mask. The
  // spill layer is sized to the IMAGE bounds so its corners are where the
  // resize handles belong. The ghost <img> inside is translucent; the real
  // clipped <img> underneath shows the opaque in-mask crop.
  // popover=manual promotes the spill to the top layer on reframe, so it is
  // not clipped by any overflow:hidden / clip-path / scroll-container
  // ancestor (a plain z-index can't escape overflow clipping). UA popover
  // defaults (inset:0;margin:auto) are reset; _applyView sets viewport px.
  '.spill{position:fixed;margin:0;inset:auto;border:0;padding:0;background:transparent;' + '  overflow:visible;transform:translate(-50%,-50%);z-index:1;cursor:grab;touch-action:none}' + ':host([data-panning]) .spill{cursor:grabbing}' + '.spill .ghost{position:absolute;inset:0;width:100%;height:100%;opacity:.35;' + '  pointer-events:none;-webkit-user-drag:none;user-select:none;' + '  box-shadow:0 0 0 1px rgba(0,0,0,.2),0 12px 32px rgba(0,0,0,.2)}' + '.spill .handle{position:absolute;width:12px;height:12px;border-radius:50%;' + '  background:#fff;box-shadow:0 0 0 1.5px #c96442,0 1px 3px rgba(0,0,0,.3);' + '  transform:translate(-50%,-50%)}' + '.spill .handle[data-c=nw]{left:0;top:0;cursor:nwse-resize}' + '.spill .handle[data-c=ne]{left:100%;top:0;cursor:nesw-resize}' + '.spill .handle[data-c=sw]{left:0;top:100%;cursor:nesw-resize}' + '.spill .handle[data-c=se]{left:100%;top:100%;cursor:nwse-resize}' + ':host([data-reframe]){z-index:10}' + ':host([data-reframe]) .frame{box-shadow:0 0 0 2px #c96442}' + '.empty{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  cursor:pointer;user-select:none}' + '.empty svg{opacity:.45}' + '.empty .cap{max-width:90%;font-weight:500;letter-spacing:.01em}' + '.empty .sub{font-size:11px}' + '.empty .sub u{text-underline-offset:2px}' + '.empty:hover .sub{opacity:1}' + ':host([data-over]) .frame{outline:2px solid #c96442;outline-offset:-2px;' + '  background:rgba(201,100,66,.10)}' + '.ring{position:absolute;inset:0;pointer-events:none;border:1.5px dashed currentColor;' + '  opacity:.35;transition:border-color .12s,opacity .12s}' + ':host([data-over]) .ring{border-color:#c96442;opacity:1}' + ':host([data-filled]) .ring{display:none}' +
  // Controls overlay INSIDE the frame, pinned to the top-right corner, so
  // a full-bleed slot in an overflow:hidden container still shows them
  // (the old below-mask placement got clipped). Credit sits bottom-left,
  // so top-right avoids collision. The blurred pill background keeps them
  // legible over the image.
  // The UA [popover] base rule styles the element in EVERY state (only
  // display:none is gated on :not(:popover-open), and the display:flex
  // below overrides that) — so the UA resets live HERE, like .spill's,
  // or the ordinary hover-state strip renders as a bordered Canvas box
  // centered by margin:auto. inset:auto precedes top/right (shorthand).
  '.ctl{position:absolute;inset:auto;top:8px;right:8px;margin:0;border:0;padding:0;' + '  background:transparent;overflow:visible;' + '  display:flex;gap:6px;opacity:0;pointer-events:none;transition:opacity .12s;z-index:2;' + '  white-space:nowrap}' +
  // While reframing, the spill owns the top layer and would swallow every
  // click on the in-frame controls. Promoting .ctl into the top layer
  // ABOVE the spill (shown after it — later popovers stack higher) keeps
  // Edit-as-toggle and Replace clickable mid-reframe. _applyView pins it
  // to the frame's top-right in viewport px (translateX(-100%)
  // right-aligns against the computed left edge); inset:auto clears the
  // base rule's top/right so the inline left/top position it alone.
  '.ctl:popover-open{position:fixed;inset:auto;transform:translateX(-100%)}' + ':host([data-filled][data-editable]:hover) .ctl,:host([data-reframe]) .ctl' + '  {opacity:1;pointer-events:auto}' + '.ctl button{appearance:none;border:0;border-radius:6px;padding:5px 10px;cursor:pointer;' + '  background:rgba(0,0,0,.65);color:#fff;font:11px/1 system-ui,-apple-system,sans-serif;' + '  backdrop-filter:blur(6px)}' + '.ctl button:hover{background:rgba(0,0,0,.8)}' + '.err{position:absolute;left:8px;bottom:8px;right:8px;color:#b3261e;font-size:11px;' + '  background:rgba(255,255,255,.85);padding:4px 6px;border-radius:5px;pointer-events:none}' +
  // Replacement in flight: after a src swap the browser keeps painting
  // the PREVIOUS image until the new one decodes, so a Replace would
  // flash the old photo and then pop. Hide the stale frame (visibility,
  // not display — _applyView geometry still applies) and spin until the
  // new image reports in (load/error clears data-swapping).
  ':host([data-swapping]) .frame img{visibility:hidden}' + '.loading{position:absolute;inset:0;display:none;align-items:center;' + '  justify-content:center;pointer-events:none}' + ':host([data-swapping]) .loading{display:flex}' + '.loading::after{content:"";width:22px;height:22px;border-radius:50%;' + '  border:2px solid rgba(127,127,127,.25);border-top-color:currentColor;' + '  animation:om-slot-spin .7s linear infinite}' + '@keyframes om-slot-spin{to{transform:rotate(360deg)}}' +
  // Reduced motion: the static two-tone ring still reads as "working".
  '@media (prefers-reduced-motion:reduce){.loading::after{animation:none}}' + '.credit{position:absolute;left:6px;bottom:6px;max-width:calc(100% - 12px);display:none;' + '  padding:3px 7px;border-radius:5px;background:rgba(0,0,0,.55);color:#fff;' + '  font:10px/1.2 system-ui,-apple-system,sans-serif;text-decoration:none;' + '  white-space:nowrap;overflow:hidden;text-overflow:ellipsis;backdrop-filter:blur(6px)}' +
  // The credit is a SPAN holding one or two <a>s (Unsplash's prescribed
  // form links the photographer AND Unsplash) — anchors style inline so
  // the overlay reads as one line of text.
  '.credit a{color:inherit;text-decoration:none}' + '.credit a:hover,.credit a:focus-visible{text-decoration:underline}' + ':host([data-filled][data-credit]) .credit{display:block}' +
  // Exports must ship JUST the image — no hover controls, no credit chip
  // (the host marks <html data-om-exporting> for the capture window; the
  // page-level hide script can't reach shadow DOM, this rule can).
  ':host-context([data-om-exporting]) .ctl,' + ':host-context([data-om-exporting]) .credit{display:none !important}' +
  // Print must ship just the image too: the hover-gated controls can be
  // mid-hover when print() fires, and the credit chip is screen chrome —
  // the same rule the capture window gets, keyed on print media instead
  // of the host's data-om-exporting mark (the print path sets no mark).
  '@media print{.ctl,.credit{display:none !important}}' +
  // No export-window mask rules here on purpose: the export capture
  // releases the replacement mask by REMOVING data-swapping (the
  // shadow-root pass in pages/export/shared.ts HIDE_EXPORT_CHROME_SCRIPT)
  // — attribute removal works in every engine (:host-context is
  // Chromium-only), is scoped by construction to slots actually
  // mid-swap, and hides the spinner through the same gate. A masked img
  // would otherwise be silently dropped from PPTX decks (the capture
  // walk skips visibility:hidden imgs).
  // Attribution error tile: REPLACES the photo when an Unsplash src has
  // no credit attribute — rendering the photo uncredited is the terms
  // violation, so the photo must not appear at all.
  // Calm and neutral on purpose (review feedback): the tile informs the
  // user; the fix instructions are machine-facing (usage docblock, tool
  // description, and the turn-end scan's bounce copy name the attributes
  // for the agent).
  '.attr-error{position:absolute;inset:0;display:none;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  background:#f2f1ef;color:#6e6c66;user-select:none;' + '  font:13px/1.45 system-ui,-apple-system,sans-serif}' + '.attr-error svg{opacity:.55}' + '.attr-error .cap{max-width:92%;font-weight:500;letter-spacing:.01em}' + ':host([data-attribution-error]) .attr-error{display:flex}' + ':host([data-attribution-error]) .ring{display:none}';
  const icon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>' + '<path d="m21 15-5-5L5 21"/></svg>';
  const warnIcon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/>' + '<path d="M12 9v4"/><path d="M12 17h.01"/></svg>';
  class ImageSlot extends HTMLElement {
    static get observedAttributes() {
      return ['shape', 'radius', 'mask', 'fit', 'placeholder', 'src', 'id', 'credit', 'credit-href'];
    }

    /** Duplicate-slide hook (called by deck-stage, see its
     *  _remintDuplicateIds): copy this id's stored image, if any, under a
     *  freshly minted key and return that key — so a duplicated slide's
     *  slot keeps its dropped photo instead of reverting to the
     *  placeholder. 'isFree' is the caller's uniqueness check (document
     *  ids); candidates must ALSO be unused in the sidecar, which can
     *  hold keys from other pages sharing the project root. (An EMPTY
     *  slot on another page leaves no sidecar entry, so its id is not
     *  detectable here — a minted key can collide with it and that slot
     *  would show this photo. Same blast radius as two pages reusing an
     *  id by hand, which the shared sidecar already permits.) Returns null
     *  when no id could be minted (caller strips the id, today's
     *  behavior). */
    static cloneSlot(fromId, isFree) {
      if (typeof fromId !== 'string' || !fromId) return null;
      // Pre-hydration the store can't veto candidates or source the copy
      // — degrade to the strip (today's behavior) rather than mint
      // against keys we can't see yet. Any rendered (= droppable) slot
      // means load() has already settled.
      if (!loaded) return null;
      const stem = fromId.replace(/-\d+$/, '') || fromId;
      for (let n = 2; n < 100; n++) {
        const toId = stem + '-' + n;
        if (toId === fromId) continue;
        if (slots[toId] !== undefined) {
          // Reuse a key holding this exact value (bytes AND crop) if no
          // live element here owns it — a duplicate op the host refused
          // after minting leaves such a key behind, and reusing keeps
          // refused retries from accumulating one orphaned copy per
          // attempt. Full equality (not just bytes) so a byte-identical
          // key another PAGE owns with its own crop is stepped past, not
          // adopted or rewritten. (Entries without .u never match.)
          const prev = getSlot(toId);
          const cur = getSlot(fromId);
          if (!(prev && cur && prev.u && prev.u === cur.u && prev.s === cur.s && prev.x === cur.x && prev.y === cur.y && (typeof isFree !== 'function' || isFree(toId)))) continue;
          return toId;
        }
        if (typeof isFree === 'function' && !isFree(toId)) continue;
        const v = getSlot(fromId);
        if (v) setSlot(toId, Object.assign({}, v));
        return toId;
      }
      return null;
    }
    constructor() {
      super();
      // clonable: rail thumbnails deep-clone slides and carry this shadow
      // along; reuse an already-cloned root so upgrade-after-clone works.
      // (Deliberately NOT serializable — a getHTML consumer would embed
      // multi-MB sidecar data-URLs into serialized page HTML.)
      const root = this.shadowRoot || this.attachShadow({
        mode: 'open',
        clonable: true
      });
      // .spill and .ctl sit OUTSIDE .frame so overflow:hidden + border-radius
      // on the frame (circle, pill, rounded) can't clip them.
      root.innerHTML = '<style>' + stylesheet + '</style>' + '<div class="frame" part="frame">' + '  <img part="image" alt="" draggable="false" style="display:none">' + '  <div class="empty" part="empty">' + icon + '    <div class="cap"></div>' + '    <div class="sub">or <u>browse files</u></div></div>' + '  <div class="attr-error" part="attribution-error">' + warnIcon + '    <div class="cap">This photo needs attribution</div></div>' + '  <div class="loading" part="loading"></div>' + '  <div class="ring" part="ring"></div>' + '</div>' +
      // Outside .frame, like .spill/.ctl — the frame's overflow:hidden +
      // border-radius/clip-path would cut the credit off on circle/pill/mask.
      // A SPAN, not an <a>: the prescribed Unsplash credit holds two links
      // (photographer + Unsplash), built per-render in _render().
      '<span class="credit" part="credit"></span>' + '<div class="spill" popover="manual" data-dc-edit-transparent>' + '  <img class="ghost" alt="" draggable="false">' + '  <div class="handle" data-c="nw"></div><div class="handle" data-c="ne"></div>' + '  <div class="handle" data-c="sw"></div><div class="handle" data-c="se"></div>' + '</div>' +
      // data-dc-edit-transparent: the DC editor's edit-mode picker lets
      // clicks through for chrome marked with it (EDIT_TRANSPARENT_SEL)
      // — without it, Replace/Edit clicks in Edit mode are swallowed by
      // element selection and the controls look dead.
      '<div class="ctl" popover="manual" data-dc-edit-transparent><button data-act="replace" title="Replace image">Replace</button>' + '  <button data-act="edit" title="Reframe image">Edit</button></div>' + '<input type="file" accept="' + ACCEPT.join(',') + '" hidden>';
      this._frame = root.querySelector('.frame');
      this._ring = root.querySelector('.ring');
      this._img = root.querySelector('.frame img');
      this._empty = root.querySelector('.empty');
      this._cap = root.querySelector('.cap');
      this._sub = root.querySelector('.sub');
      this._spill = root.querySelector('.spill');
      this._ctl = root.querySelector('.ctl');
      this._credit = root.querySelector('.credit');
      this._attrError = root.querySelector('.attr-error');
      // Credit clicks open the link, not browse/reframe.
      this._credit.addEventListener('click', e => e.stopPropagation());
      this._credit.addEventListener('dblclick', e => e.stopPropagation());
      this._ghost = root.querySelector('.ghost');
      this._err = null;
      this._input = root.querySelector('input');
      this._depth = 0;
      this._gen = 0;
      // Encode-in-flight marker (the owning _ingest generation): while set,
      // the same-src "nothing in flight" clear in _render must not fire —
      // the stored value still points at the OLD image until the encode
      // lands, so that clear would unmask the stale image mid-replace.
      this._swapGen = 0;
      // Render-owned swap in flight: set when _render assigns a new src,
      // cleared only by the img's own load/error (or the empty branch).
      // img.complete CANNOT stand in for this — setting src only QUEUES
      // the current-request swap (a microtask), so synchronously after an
      // assignment, complete still reports the OLD settled request. The
      // pick path does exactly that: the host sets src, credit, and
      // credit-href back-to-back in one task, and renders #2/#3 would
      // read the stale complete === true and drop the mask one render
      // after it was set.
      this._loadPending = false;
      // See _render's empty branch: a transient attribution-error wipe of a
      // showing image must make the follow-up render a replacement (spinner),
      // not a first fill (blank frame).
      this._hidShowing = false;
      this._view = {
        s: 1,
        x: 0,
        y: 0
      };
      this._subFn = () => this._render();
      // Shadow-DOM listeners live with the shadow DOM — bound once here so
      // disconnect/reconnect (e.g. React remount) doesn't stack handlers.
      this._empty.addEventListener('click', () => this._input.click());
      root.addEventListener('click', e => {
        const act = e.target && e.target.getAttribute && e.target.getAttribute('data-act');
        if (!act) return;
        // The hidden controls are opacity-0 but still tabbable — without
        // this gate a keyboard user could drive them on a read-only share
        // link (mirrors the dblclick handler's editable gate).
        if (!this.hasAttribute('data-editable')) return;
        if (act === 'replace') {
          this._exitReframe(true);
          // Host-owned picker (Unsplash modal; it also offers local import).
          this.dispatchEvent(new CustomEvent('image-slot:pick', {
            bubbles: true,
            composed: true,
            detail: {
              id: this.id || null
            }
          }));
        }
        if (act === 'edit') {
          if (!this._reframes()) return;
          if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
        }
      });
      this._input.addEventListener('change', () => {
        const f = this._input.files && this._input.files[0];
        if (f) this._ingest(f);
        this._input.value = '';
      });
      // naturalWidth/Height aren't known until load — re-apply so the cover
      // baseline is computed from real dimensions, not the 100%×100% fallback.
      // load/error also release the replacement-in-flight mask (via the
      // single discipline in _releaseMask): the swap is only revealed once
      // the new image can actually paint (on error the frame shows its
      // background, same as a fresh slot with a broken src).
      this._img.addEventListener('load', () => {
        this._loadPending = false;
        this._releaseMask(true);
        this._applyView();
      });
      this._img.addEventListener('error', () => {
        this._loadPending = false;
        this._releaseMask(true);
      });
      // Gated only on editable — any filled slot can be repositioned/scaled,
      // regardless of fit. Share links (no writeFile) stay static.
      this.addEventListener('dblclick', e => {
        if (!this.hasAttribute('data-editable') || !this._reframes()) return;
        e.preventDefault();
        if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
      });
      // Pan + resize both originate on the spill layer. A handle pointerdown
      // drives an aspect-locked resize anchored at the opposite corner; any
      // other pointerdown on the spill pans. Offsets are frame-% so a
      // reframed slot survives responsive resize / PPTX export.
      this._spill.addEventListener('pointerdown', e => {
        if (e.button !== 0 || !this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        e.stopPropagation();
        this._spill.setPointerCapture(e.pointerId);
        const rect = this.getBoundingClientRect();
        const fw = rect.width || 1,
          fh = rect.height || 1;
        const corner = e.target.getAttribute && e.target.getAttribute('data-c');
        let move;
        if (corner) {
          // Resize about the OPPOSITE corner. Viewport-px throughout (rect
          // fw/fh, not clientWidth) so the math survives a transform:scale()
          // ancestor — deck_stage renders slides scaled-to-fit.
          const iw = this._img.naturalWidth || 1,
            ih = this._img.naturalHeight || 1;
          const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
          const base = contain ? Math.min(fw / iw, fh / ih) : Math.max(fw / iw, fh / ih);
          const sx = corner.includes('e') ? 1 : -1;
          const sy = corner.includes('s') ? 1 : -1;
          const s0 = this._view.s;
          const w0 = iw * base * s0,
            h0 = ih * base * s0;
          const cx0 = (50 + this._view.x) / 100 * fw;
          const cy0 = (50 + this._view.y) / 100 * fh;
          const ox = cx0 - sx * w0 / 2,
            oy = cy0 - sy * h0 / 2;
          const diag0 = Math.hypot(w0, h0);
          const ux = sx * w0 / diag0,
            uy = sy * h0 / diag0;
          move = ev => {
            const proj = (ev.clientX - rect.left - ox) * ux + (ev.clientY - rect.top - oy) * uy;
            const s = clampS(s0 * proj / diag0);
            const d = diag0 * s / s0;
            this._view.s = s;
            this._view.x = (ox + ux * d / 2) / fw * 100 - 50;
            this._view.y = (oy + uy * d / 2) / fh * 100 - 50;
            this._clampView();
            this._applyView();
          };
        } else {
          this.setAttribute('data-panning', '');
          const start = {
            px: e.clientX,
            py: e.clientY,
            x: this._view.x,
            y: this._view.y
          };
          move = ev => {
            this._view.x = start.x + (ev.clientX - start.px) / fw * 100;
            this._view.y = start.y + (ev.clientY - start.py) / fh * 100;
            this._clampView();
            this._applyView();
          };
        }
        const up = () => {
          try {
            this._spill.releasePointerCapture(e.pointerId);
          } catch {}
          this._spill.removeEventListener('pointermove', move);
          this._spill.removeEventListener('pointerup', up);
          this._spill.removeEventListener('pointercancel', up);
          this.removeAttribute('data-panning');
          this._dragUp = null;
        };
        // Stashed so _exitReframe (Escape / outside-click mid-drag) can
        // tear the capture + listeners down synchronously.
        this._dragUp = up;
        this._spill.addEventListener('pointermove', move);
        this._spill.addEventListener('pointerup', up);
        this._spill.addEventListener('pointercancel', up);
      });
      // Wheel zoom stays available inside reframe mode as a trackpad nicety —
      // zooms toward the cursor (offset' = cursor·(1-k) + offset·k).
      this.addEventListener('wheel', e => {
        if (!this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        const r = this.getBoundingClientRect();
        const cx = (e.clientX - r.left) / r.width * 100 - 50;
        const cy = (e.clientY - r.top) / r.height * 100 - 50;
        const prev = this._view.s;
        const next = clampS(prev * Math.pow(1.0015, -e.deltaY));
        if (next === prev) return;
        const k = next / prev;
        this._view.s = next;
        this._view.x = cx * (1 - k) + this._view.x * k;
        this._view.y = cy * (1 - k) + this._view.y * k;
        this._clampView();
        this._applyView();
      }, {
        passive: false
      });
    }
    connectedCallback() {
      // Warn once per page — an id-less slot works for the session but
      // cannot persist, and two id-less slots would share nothing.
      if (!this.id && !ImageSlot._warned) {
        ImageSlot._warned = true;
        console.warn('<image-slot> without an id will not persist its dropped image.');
      }
      this.addEventListener('dragenter', this);
      this.addEventListener('dragover', this);
      this.addEventListener('dragleave', this);
      this.addEventListener('drop', this);
      subs.add(this._subFn);
      // The host may inject window.omelette.writeFile AFTER the first render;
      // re-render on hover so the editable-gated controls reliably appear.
      this.addEventListener('pointerenter', this._subFn);
      // width%/height% in _applyView encode the frame aspect at call time —
      // a host resize (responsive grid, pane divider) would stretch the
      // image until the next _render. Re-render on size change: _render()
      // re-seeds _view from stored before clamp/apply, so a shrink→grow
      // cycle round-trips instead of ratcheting x/y toward the narrower
      // frame's clamp range.
      this._ro = new ResizeObserver(() => this._render());
      this._ro.observe(this);
      load();
      this._render();
    }
    disconnectedCallback() {
      subs.delete(this._subFn);
      this.removeEventListener('pointerenter', this._subFn);
      this.removeEventListener('dragenter', this);
      this.removeEventListener('dragover', this);
      this.removeEventListener('dragleave', this);
      this.removeEventListener('drop', this);
      if (this._ro) {
        this._ro.disconnect();
        this._ro = null;
      }
      // commit=false: a disconnect is not a user intent — committing here
      // would persist whatever half-finished drag a React remount or DOM
      // splice happened to interrupt. Deliberate exits commit on their own
      // paths (Escape/click-out/toggle), and unloads commit via pagehide.
      this._exitReframe(false);
    }
    _enterReframe() {
      if (this.hasAttribute('data-reframe')) return;
      this.setAttribute('data-reframe', '');
      this._signalReframe(true);
      // Best-effort commit when the document unloads mid-reframe (a host
      // navigation racing the enter signal, a manual reload, tab close):
      // the sidecar write rides the host bridge, which outlives this
      // document, so the crop survives even though the mode dies with the
      // DOM. Held on the instance so _exitReframe detaches exactly what
      // was attached.
      this._pagehide = () => {
        this._exitReframe(true);
        flushNow();
      };
      window.addEventListener('pagehide', this._pagehide);
      // Promote spill to the top layer, then keep it pinned over the frame:
      // scroll/resize cover the common cases, and a per-frame rect check
      // catches layout shifts that fire neither (an image above finishing
      // load, streamed DOM pushing the slot down, an ancestor transform
      // change) so the overlay can't detach from the frame.
      try {
        this._spill.showPopover();
      } catch {}
      // After the spill, so the controls stack above it in the top layer.
      try {
        this._ctl.showPopover();
      } catch {}
      this._reposition = () => {
        if (this.hasAttribute('data-reframe')) this._applyView();
      };
      window.addEventListener('scroll', this._reposition, true);
      window.addEventListener('resize', this._reposition);
      this._lastRect = '';
      this._watch = () => {
        if (!this.hasAttribute('data-reframe')) return;
        const r = this.getBoundingClientRect();
        const key = r.left + ',' + r.top + ',' + r.width + ',' + r.height;
        if (key !== this._lastRect) {
          this._lastRect = key;
          this._applyView();
        }
        this._watchId = requestAnimationFrame(this._watch);
      };
      this._watchId = requestAnimationFrame(this._watch);
      this._applyView();
      // Close on click outside (the spill handler stopPropagation()s so
      // in-image drags don't reach this) and on Escape. Listeners are held
      // on the instance so _exitReframe / disconnectedCallback can detach
      // exactly what was attached.
      this._outside = e => {
        if (e.composedPath && e.composedPath().includes(this)) return;
        this._exitReframe(true);
      };
      this._esc = e => {
        if (e.key === 'Escape') this._exitReframe(true);
      };
      document.addEventListener('pointerdown', this._outside, true);
      document.addEventListener('keydown', this._esc, true);
    }
    _exitReframe(commit) {
      if (!this.hasAttribute('data-reframe')) return;
      if (this._dragUp) this._dragUp();
      this.removeAttribute('data-reframe');
      this.removeAttribute('data-panning');
      if (this._outside) document.removeEventListener('pointerdown', this._outside, true);
      if (this._esc) document.removeEventListener('keydown', this._esc, true);
      this._outside = this._esc = null;
      if (this._reposition) {
        window.removeEventListener('scroll', this._reposition, true);
        window.removeEventListener('resize', this._reposition);
        this._reposition = null;
      }
      if (this._watchId) {
        cancelAnimationFrame(this._watchId);
        this._watchId = 0;
      }
      if (this._pagehide) {
        window.removeEventListener('pagehide', this._pagehide);
        this._pagehide = null;
      }
      try {
        this._spill.hidePopover();
      } catch {}
      try {
        this._ctl.hidePopover();
      } catch {}
      this._ctl.style.left = '';
      this._ctl.style.top = '';
      if (commit) this._commitView();
      this._signalReframe(false);
    }

    // Reframe state lives only in this DOM until commit, invisible to the
    // host's dirty signals — announce enter/exit so the host can hold
    // auto-reloads for exactly the gesture (the guest bundle forwards
    // image-slot:reframe to the host as imageSlotReframe). Dispatched on
    // the element (composed, so it escapes shadow roots) while connected;
    // a disconnected exit (disconnectedCallback) falls back to document so
    // the host still hears it.
    _signalReframe(active) {
      const target = this.isConnected ? this : document;
      target.dispatchEvent(new CustomEvent('image-slot:reframe', {
        bubbles: true,
        composed: true,
        detail: {
          active: active,
          id: this.id || null
        }
      }));
    }

    // Public: host's "Import from computer" calls this to run local browse.
    openFilePicker() {
      this._exitReframe(true);
      this._input.click();
    }

    // A src write is a newer intent for this slot's content — the host
    // pick path (setImageSlotImage) or an agent edit — so it must win
    // over any encode still in flight from an earlier drop: left live,
    // that encode lands later, passes _ingest's gen guard, and its
    // setSlot silently overwrites the pick (the stored value shadows
    // src in _render). Bumping _gen kills the encode before its own
    // _swapGen clear runs, so clear the dead claim here too — otherwise
    // _releaseMask (gated on !_swapGen) never fires and the pick's
    // spinner is stranded. src ONLY: the pick sets credit/credit-href
    // in the same task, and clearing _swapGen on those would let the
    // same-src branch unmask the old image mid-encode.
    attributeChangedCallback(name, oldVal, newVal) {
      if (name === 'src' && oldVal !== newVal) {
        this._gen++;
        this._swapGen = 0;
      }
      if (this.shadowRoot) this._render();
    }

    // handleEvent — one listener object for all four drag events keeps the
    // add/remove symmetric and the depth counter correct.
    handleEvent(e) {
      if (e.type === 'dragenter' || e.type === 'dragover') {
        // Without preventDefault the browser never fires 'drop'.
        e.preventDefault();
        e.stopPropagation();
        if (e.dataTransfer) e.dataTransfer.dropEffect = 'copy';
        if (e.type === 'dragenter') this._depth++;
        this.setAttribute('data-over', '');
      } else if (e.type === 'dragleave') {
        // dragenter/leave fire for every descendant crossing — count depth
        // so hovering the icon inside the empty state doesn't flicker.
        if (--this._depth <= 0) {
          this._depth = 0;
          this.removeAttribute('data-over');
        }
      } else if (e.type === 'drop') {
        e.preventDefault();
        e.stopPropagation();
        this._depth = 0;
        this.removeAttribute('data-over');
        const f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
        if (f) this._ingest(f);
      }
    }
    async _ingest(file) {
      this._setError(null);
      if (!file || ACCEPT.indexOf(file.type) < 0) {
        this._setError('Drop a PNG, JPEG, WebP, or AVIF image.');
        return;
      }
      // toDataUrl can take hundreds of ms on a large photo. A Clear or a
      // newer drop during that window would be clobbered when this await
      // resumes — bump + capture a generation so stale encodes bail.
      const gen = ++this._gen;
      // Replacing a shown image: surface the swap through the encode too,
      // not just the decode — otherwise the old photo sits there with no
      // feedback while the canvas re-encode runs. An empty slot keeps its
      // placeholder (no spinner) until the encode lands, as before.
      // _swapGen guards the mask against re-renders DURING the encode
      // (pointerenter, ResizeObserver, another slot's store write): the
      // stored value still resolves to the old image there, so _render's
      // same-src clear would otherwise unmask it mid-replace.
      if (this.hasAttribute('data-filled')) {
        this.setAttribute('data-swapping', '');
        this._swapGen = gen;
      }
      try {
        const w = this.clientWidth || this.offsetWidth || MAX_DIM;
        const url = await toDataUrl(file, w);
        if (gen !== this._gen) return;
        // Only exit reframe once the new image is in hand — a rejected type
        // or decode failure leaves the in-progress crop untouched.
        this._exitReframe(false);
        // Clear BEFORE setSlot: its synchronous re-render must see no
        // pending encode, so a byte-identical re-upload (same data URL, no
        // load event coming) still clears the mask via the complete branch.
        this._swapGen = 0;
        const val = {
          u: url,
          s: 1,
          x: 0,
          y: 0
        };
        setSlot(this.id || '', val);
        // Keep a session-local copy for id-less slots so the drop still
        // shows, even though it cannot persist.
        if (!this.id) {
          this._local = val;
          this._render();
        }
      } catch (err) {
        if (gen !== this._gen) return;
        this._swapGen = 0;
        // Reveal the kept old image — unless another replacement (a
        // remote pick's src swap) is still in flight, in which case the
        // mask stays until THAT image settles (its load/error releases).
        this._releaseMask();
        this._setError('Could not read that image.');
        console.warn('<image-slot> ingest failed:', err);
      }
    }
    _setError(msg) {
      if (this._err) {
        this._err.remove();
        this._err = null;
      }
      if (!msg) return;
      const d = document.createElement('div');
      d.className = 'err';
      d.textContent = msg;
      this.shadowRoot.appendChild(d);
      this._err = d;
      setTimeout(() => {
        if (this._err === d) {
          d.remove();
          this._err = null;
        }
      }, 3000);
    }

    // Reframing (pan/resize) is available on any filled slot — the user can
    // always reposition/scale. `fit` only sets the initial baseline (see
    // _geom): contain starts fully-visible, cover starts frame-filling.
    _reframes() {
      return this.hasAttribute('data-filled');
    }

    // The single release discipline for the replacement-in-flight mask
    // (data-swapping). The mask comes off only when BOTH hold:
    //  - no encode is pending (_swapGen) — mid-encode the stored value
    //    still resolves to the old image, so any reveal paints it;
    //  - the frame img has settled on its current src — an unsettled src
    //    means some replacement is still in flight (e.g. a remote pick),
    //    whoever started it, and revealing would paint the previous
    //    frame. The load/error listeners pass settled=true (the event IS
    //    the settlement signal, per spec complete is true by then);
    //    other callers rely on the complete flag (covers loaded AND
    //    failed).
    // Every release path funnels through here EXCEPT _render's empty
    // branch (the img is being cleared — nothing will ever settle).
    _releaseMask(settled) {
      if (!this._swapGen && !this._loadPending && (settled || this._img.complete)) {
        this.removeAttribute('data-swapping');
      }
    }

    // Baseline geometry, shared by clamp/apply/resize. `base` is the scale at
    // view-scale s=1: cover = fill the frame (overflow on the looser axis),
    // contain = fit fully inside (letterboxed). Zooming a contain image past
    // s where it overflows naturally becomes a crop. Null until the img has
    // loaded (naturalWidth is 0 before that) or when the slot has no layout
    // box — ResizeObserver fires with a 0×0 rect under display:none, and
    // clamping against a degenerate 1×1 frame would silently pull the stored
    // pan toward zero.
    _geom() {
      const iw = this._img.naturalWidth,
        ih = this._img.naturalHeight;
      const fw = this.clientWidth,
        fh = this.clientHeight;
      if (!iw || !ih || !fw || !fh) return null;
      const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
      const base = contain ? Math.min(fw / iw, fh / ih) : Math.max(fw / iw, fh / ih);
      return {
        iw,
        ih,
        fw,
        fh,
        base
      };
    }
    _clampView() {
      // Pan range on each axis is half the overflow past the frame edge.
      const g = this._geom();
      if (!g) return;
      const mx = Math.max(0, (g.iw * g.base * this._view.s / g.fw - 1) * 50);
      const my = Math.max(0, (g.ih * g.base * this._view.s / g.fh - 1) * 50);
      this._view.x = Math.max(-mx, Math.min(mx, this._view.x));
      this._view.y = Math.max(-my, Math.min(my, this._view.y));
    }
    _applyView() {
      const g = this._geom();
      // Top-layer controls: pin to the frame's top-right in viewport px
      // (the same 8px inset as the in-frame layout; unscaled — top-layer UI
      // reads as chrome, not page content). BEFORE the geometry branch:
      // placement needs only the frame rect, and a not-yet-loaded or broken
      // src must not leave the promoted strip floating unpositioned. Gated
      // on the popover actually being open: without the Popover API,
      // showPopover() threw (swallowed in _enterReframe), .ctl stays in
      // its in-frame absolute layout, and viewport-px coordinates would
      // shove it off-frame — and matches(':popover-open') itself throws
      // there (unknown pseudo-class), hence the try/catch.
      if (this.hasAttribute('data-reframe')) {
        let onTop = false;
        try {
          onTop = this._ctl.matches(':popover-open');
        } catch {}
        if (onTop) {
          const r = this.getBoundingClientRect();
          this._ctl.style.left = r.right - 8 + 'px';
          this._ctl.style.top = r.top + 8 + 'px';
        }
      }
      if (!g) {
        // Dimensions not known yet (before img load) — centered fit so there
        // is no flash of an unpositioned image before the geometry lands.
        const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
        this._img.style.width = '100%';
        this._img.style.height = '100%';
        this._img.style.left = '50%';
        this._img.style.top = '50%';
        this._img.style.objectFit = contain ? 'contain' : 'cover';
        return;
      }
      // Baseline (cover-fill or contain-fit) × view scale. Width/height and
      // left/top are all frame-% — depends only on the frame aspect ratio, so
      // a responsive resize keeps the same crop. The spill layer mirrors the
      // same box so its corners = image corners.
      const k = g.base * this._view.s;
      const w = g.iw * k / g.fw * 100 + '%';
      const h = g.ih * k / g.fh * 100 + '%';
      const l = 50 + this._view.x + '%';
      const t = 50 + this._view.y + '%';
      this._img.style.width = w;
      this._img.style.height = h;
      this._img.style.left = l;
      this._img.style.top = t;
      this._img.style.objectFit = '';
      if (this.hasAttribute('data-reframe')) {
        // Top-layer spill: position in viewport px over the frame. The top
        // layer escapes ancestor transforms entirely, so EVERY term must be
        // in viewport units: getBoundingClientRect gives the frame's scaled
        // origin AND size, and the rect/layout ratio rescales the ghost —
        // sizing from layout px alone renders it 1/scale too large under a
        // scaled deck slide. Inner ghost + handles stay box-relative.
        const r = this.getBoundingClientRect();
        const sx = g.fw ? r.width / g.fw : 1;
        const sy = g.fh ? r.height / g.fh : 1;
        this._spill.style.width = g.iw * k * sx + 'px';
        this._spill.style.height = g.ih * k * sy + 'px';
        this._spill.style.left = r.left + (50 + this._view.x) / 100 * r.width + 'px';
        this._spill.style.top = r.top + (50 + this._view.y) / 100 * r.height + 'px';
      }
    }
    _commitView() {
      const v = {
        s: this._view.s,
        x: this._view.x,
        y: this._view.y
      };
      if (this._userUrl) v.u = this._userUrl;
      // Framing-only (no u) persists too so an author-src slot remembers its
      // crop; clearing the sidecar still falls through to src=.
      if (this.id) setSlot(this.id, v);else {
        this._local = v;
      }
    }
    _render() {
      // Shape / mask. Presets use border-radius so the dashed ring can
      // follow the rounded outline; clip-path is only applied for an
      // explicit `mask` (the ring is hidden there since a rectangle
      // dashed border chopped by an arbitrary polygon looks broken).
      const mask = this.getAttribute('mask');
      const shape = (this.getAttribute('shape') || 'rounded').toLowerCase();
      let radius = '';
      if (shape === 'circle') radius = '50%';else if (shape === 'pill') radius = '9999px';else if (shape === 'rounded') {
        const n = parseFloat(this.getAttribute('radius'));
        radius = (Number.isFinite(n) ? n : 12) + 'px';
      }
      this._frame.style.borderRadius = mask ? '' : radius;
      this._frame.style.clipPath = mask || '';
      this._ring.style.borderRadius = mask ? '' : radius;
      this._ring.style.display = mask ? 'none' : '';

      // Controls and reframe entry gate on this so share links stay read-only.
      const editable = !!(window.omelette && window.omelette.writeFile);
      this.toggleAttribute('data-editable', editable);
      this._sub.style.display = editable ? '' : 'none';

      // Content. The sidecar is also writable by the agent's write_file
      // tool, so its value isn't guaranteed canvas-originated — only accept
      // data:image/ URLs from it. The `src` attribute is author-controlled
      // (Claude wrote it into the HTML) so it passes through unchanged.
      let stored = this.id ? getSlot(this.id) : this._local;
      if (stored && stored.u && !/^data:image\//i.test(stored.u)) stored = null;
      const srcAttr = this.getAttribute('src') || '';
      this._userUrl = stored && stored.u || null;
      const url = this._userUrl || srcAttr;
      // Don't clobber an in-flight reframe with a store-triggered re-render.
      if (!this.hasAttribute('data-reframe')) {
        this._view = {
          s: stored && Number.isFinite(stored.s) ? clampS(stored.s) : 1,
          x: stored && Number.isFinite(stored.x) ? stored.x : 0,
          y: stored && Number.isFinite(stored.y) ? stored.y : 0
        };
      }
      this._cap.textContent = this.getAttribute('placeholder') || 'Drop an image';
      // Toggle via style.display — the [hidden] attribute alone loses to
      // the display:flex / display:block rules in the stylesheet above.
      // An Unsplash src with no credit attribute must NOT render — showing
      // the photo uncredited is the Unsplash-terms violation itself. The
      // error tile replaces the photo until the credit is written. A
      // user-dropped image is the user's own content and always renders.
      // Trimmed: credit is agent/user-editable content, and a whitespace-
      // only value must count as missing — otherwise it would suppress the
      // error tile AND render an empty credit box (no text, no links),
      // exactly the unattributed state this gate exists to prevent.
      const credit = (this.getAttribute('credit') || '').trim();
      const attrError = !!(!credit && !this._userUrl && srcAttr && isUnsplashHost(srcAttr));
      this.toggleAttribute('data-attribution-error', attrError);
      if (url && !attrError) {
        const prev = this._img.getAttribute('src');
        if (prev !== url) {
          // Replacing an already-shown image: mark the swap BEFORE setting
          // src so the stale frame is never revealed (see the data-swapping
          // stylesheet rules). First fill (prev empty) keeps the existing
          // placeholder-until-load behavior — no spinner. _hidShowing
          // covers the pick path's transient attribution-error wipe: prev
          // is gone, but an image WAS showing, so this is a replacement.
          if (prev || this._hidShowing) this.setAttribute('data-swapping', '');
          // Mark the swap BEFORE assigning src: complete keeps reporting
          // the old settled request until the browser's
          // update-the-image-data microtask runs, so same-task re-renders
          // (the pick path's credit/credit-href setAttributes) need this
          // flag, not complete, to know a load is in flight.
          this._loadPending = true;
          this._img.src = url;
          this._ghost.src = url;
        } else {
          // Same-src re-render — release if settled, so an ingest-set
          // spinner can't stick after a byte-identical re-upload (same
          // data URL, no further load event ever fires).
          this._releaseMask();
        }
        this._hidShowing = false;
        this._img.style.display = 'block';
        this._empty.style.display = 'none';
        this.setAttribute('data-filled', '');
        this._clampView();
        this._applyView();
      } else {
        this.removeAttribute('data-swapping');
        // The src is being removed — no load/error will ever fire for it.
        this._loadPending = false;
        // A transient attribution-error wipe of a showing image happens on
        // the pick path: the host sets src one setAttribute before credit,
        // so render N hides the old image (attrError) and render N+1
        // restores a URL. Remember the wipe so that restore renders as a
        // replacement (spinner), not a first fill (blank frame).
        this._hidShowing = attrError && !!this._img.getAttribute('src');
        this._img.style.display = 'none';
        this._img.removeAttribute('src');
        this._ghost.removeAttribute('src');
        // The error tile owns the blocked-photo state; .empty stays for
        // the genuinely-empty slot.
        this._empty.style.display = attrError ? 'none' : 'flex';
        this.removeAttribute('data-filled');
      }

      // Credit belongs to the author src, so a user drop hides it.
      // textContent + the http(s)-only funnel keep external strings inert.
      const showCredit = !!(url && credit && !this._userUrl && !attrError);
      this._credit.textContent = '';
      if (showCredit) {
        // Validate once (resolved against the document, http(s) only),
        // then append the terms-required utm referral params to links
        // that point back at unsplash.com.
        let href = '';
        const rawHref = this.getAttribute('credit-href') || '';
        if (rawHref) {
          try {
            const u = new URL(rawHref, document.baseURI);
            if (u.protocol === 'http:' || u.protocol === 'https:') {
              href = withReferral(u.href);
            }
          } catch {}
        }
        const mkLink = (text, linkHref) => {
          const a = document.createElement('a');
          a.setAttribute('target', '_blank');
          a.setAttribute('rel', 'noopener noreferrer');
          a.setAttribute('href', linkHref);
          a.textContent = text;
          return a;
        };
        // Unsplash's prescribed credit is TWO links — the photographer's
        // name to their profile (credit-href) and 'Unsplash' to the
        // homepage. Render that split whenever the text has the canonical
        // shape; other text keeps the legacy single-link rendering.
        const m = /^Photo by (.+) on Unsplash$/.exec(credit);
        if (m) {
          this._credit.appendChild(document.createTextNode('Photo by '));
          this._credit.appendChild(href ? mkLink(m[1], href) : document.createTextNode(m[1]));
          this._credit.appendChild(document.createTextNode(' on '));
          this._credit.appendChild(mkLink('Unsplash', UNSPLASH_HOMEPAGE_HREF));
        } else if (href) {
          this._credit.appendChild(mkLink(credit, href));
        } else {
          this._credit.textContent = credit;
        }
      }
      this.toggleAttribute('data-credit', showCredit);
    }
  }
  if (!customElements.get('image-slot')) {
    customElements.define('image-slot', ImageSlot);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/image-slot.js", error: String((e && e.message) || e) }); }

// ui_kits/website/lib.jsx
try { (() => {
// Shared helpers, icons & sample data for the Annapê Ateliê website UI kit.
const ASSETS = '../../assets/';
const ICON = {
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
  scissors: '<circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M20 4 8.1 15.9M14.5 14.5 20 20M8.1 8.1 12 12"/>'
};
function Icon({
  d,
  size = 20,
  color = 'currentColor',
  stroke = 2,
  fill = 'none',
  style
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: fill,
    stroke: color,
    style: style,
    strokeWidth: stroke,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    dangerouslySetInnerHTML: {
      __html: ICON[d] || d
    }
  });
}

// Named image placeholder the team fills later (drag an image onto it).
function Slot({
  id,
  label,
  src,
  shape = 'rounded',
  radius = 12,
  style
}) {
  return React.createElement('image-slot', {
    id,
    placeholder: label,
    src,
    shape,
    radius: String(radius),
    style: {
      display: 'block',
      width: '100%',
      height: '100%',
      ...style
    }
  });
}
const PRODUCTS = [{
  id: 1,
  name: 'Vestido Princesa Aurora',
  theme: 'Princesas',
  price: 129.9,
  rating: 4.8,
  reviews: 32,
  sizes: ['2', '4', '6', '8'],
  image: ASSETS + 'vestido-princesa-rosa.png',
  tone: 'pink',
  badge: {
    label: 'Mais vendido',
    tone: 'violet'
  }
}, {
  id: 2,
  name: 'Vestido Floral Encantado',
  theme: 'Vestidos florais',
  price: 119.9,
  rating: 4.7,
  reviews: 21,
  sizes: ['2', '4', '6'],
  image: ASSETS + 'vestido-floral-rosa.png',
  tone: 'sky'
}, {
  id: 3,
  name: 'Festa Junina Doçura',
  theme: 'Festa junina',
  price: 99.9,
  rating: 4.6,
  reviews: 14,
  sizes: ['4', '6', '8'],
  image: ASSETS + 'vestido-festa-junina.png',
  tone: 'coral',
  badge: {
    label: 'Novidade',
    tone: 'pink'
  }
}, {
  id: 4,
  name: 'Fantasia Arco-Íris',
  theme: 'Fantasia temática',
  price: 139.9,
  original: 169.9,
  rating: 4.9,
  reviews: 41,
  sizes: ['4', '6', '8', '10'],
  image: ASSETS + 'vestido-arco-iris.png',
  tone: 'violet',
  badge: {
    label: '-18%',
    tone: 'yellow'
  }
}, {
  id: 5,
  name: 'Vestido Tule Rosé',
  theme: 'Princesas',
  price: 149.9,
  rating: 4.8,
  reviews: 27,
  sizes: ['2', '4', '6', '8'],
  image: ASSETS + 'vestido-princesa-rosa.png',
  tone: 'violet'
}, {
  id: 6,
  name: 'Vestido Festa Vermelho',
  theme: 'Aniversário',
  price: 129.9,
  rating: 4.5,
  reviews: 9,
  sizes: ['4', '6'],
  image: ASSETS + 'vestido-festa-vermelho.png',
  tone: 'coral'
}, {
  id: 7,
  name: 'Vestido Estrela Dourada',
  theme: 'Aniversário',
  price: 109.9,
  rating: 4.7,
  reviews: 16,
  sizes: ['2', '4', '6', '8'],
  image: ASSETS + 'vestido-estrela-dourada.png',
  tone: 'yellow'
}, {
  id: 8,
  name: 'Fantasia Coral Encantado',
  theme: 'Fantasia temática',
  price: 119.9,
  rating: 4.6,
  reviews: 12,
  sizes: ['4', '6', '8'],
  image: ASSETS + 'vestido-fantasia-lilas.png',
  tone: 'coral'
}];
const CATEGORIES = [{
  label: 'Princesas',
  count: 24,
  image: ASSETS + 'vestido-princesa-rosa.png',
  tone: 'pink'
}, {
  label: 'Festa junina',
  count: 12,
  image: ASSETS + 'vestido-festa-junina.png',
  tone: 'coral'
}, {
  label: 'Fantasia temática',
  count: 18,
  image: ASSETS + 'vestido-fantasia-lilas.png',
  tone: 'violet'
}, {
  label: 'Aniversário',
  count: 31,
  image: ASSETS + 'vestido-floral-rosa.png',
  tone: 'sky'
}, {
  label: 'Vestidos florais',
  count: 15,
  image: ASSETS + 'vestido-princesa-rosa.png',
  tone: 'mint'
}, {
  label: 'Promoções',
  count: 9,
  image: ASSETS + 'vestido-festa-vermelho.png',
  tone: 'yellow'
}];
const TICKER = ['Feito à mão no ateliê', 'Vestidos de princesa', 'Festa junina', 'Fantasias temáticas', 'Prova virtual com IA', 'Envio para todo o Brasil', 'Escolha com mais segurança'];
const fmtBRL = n => 'R$ ' + n.toFixed(2).replace('.', ',');
Object.assign(window, {
  ASSETS,
  Icon,
  ICON,
  Slot,
  PRODUCTS,
  CATEGORIES,
  TICKER,
  fmtBRL
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/lib.jsx", error: String((e && e.message) || e) }); }

__ds_ns.CategoryCard = __ds_scope.CategoryCard;

__ds_ns.PriceTag = __ds_scope.PriceTag;

__ds_ns.ProductCard = __ds_scope.ProductCard;

__ds_ns.Rating = __ds_scope.Rating;

__ds_ns.StarField = __ds_scope.StarField;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.CreditCounter = __ds_scope.CreditCounter;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.MascotState = __ds_scope.MascotState;

__ds_ns.Modal = __ds_scope.Modal;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.PhotoUpload = __ds_scope.PhotoUpload;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Header = __ds_scope.Header;

__ds_ns.TopBar = __ds_scope.TopBar;

})();
