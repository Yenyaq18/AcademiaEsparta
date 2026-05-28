// src/components/ui/Btn.jsx
import { useState } from "react";

/*
  Variantes disponibles:
  - "gold"      → CTA principal dorado
  - "ghost"     → borde translúcido sobre fondos oscuros
  - "whatsapp"  → verde WhatsApp
  - "outline"   → solo borde, fondo transparente
*/

const VARIANTS = {
  gold: {
    bg:          "linear-gradient(135deg, #C9A227 0%, #8A6A0E 100%)",
    bgHover:     "linear-gradient(135deg, #F0C84A 0%, #B8890F 100%)",
    color:       "#0D0A00",
    shadow:      "0 4px 18px rgba(201,162,39,0.35)",
    shadowHover: "0 8px 28px rgba(201,162,39,0.5)",
    border:      "none",
  },
  ghost: {
    bg:          "rgba(255,255,255,0.06)",
    bgHover:     "rgba(255,255,255,0.11)",
    color:       "#C8DFF0",
    shadow:      "none",
    shadowHover: "none",
    border:      "1px solid rgba(255,255,255,0.18)",
  },
  whatsapp: {
    bg:          "#16A34A",
    bgHover:     "#22C55E",
    color:       "#ffffff",
    shadow:      "0 4px 18px rgba(34,197,94,0.3)",
    shadowHover: "0 8px 28px rgba(34,197,94,0.45)",
    border:      "none",
  },
  outline: {
    bg:          "transparent",
    bgHover:     "rgba(201,162,39,0.08)",
    color:       "#C9A227",
    shadow:      "none",
    shadowHover: "none",
    border:      "1px solid rgba(201,162,39,0.45)",
  },
};

export default function Btn({
  href,
  children,
  variant    = "gold",
  fullWidth  = false,
  external   = false,
  onClick,
  size       = "md",
  style      = {},
}) {
  const [hovered, setHovered] = useState(false);
  const v = VARIANTS[variant] ?? VARIANTS.gold;

  const padding = size === "sm" ? "8px 20px" : size === "lg" ? "15px 36px" : "11px 28px";
  const fontSize = size === "sm" ? "0.82rem" : size === "lg" ? "1rem" : "0.9rem";

  const base = {
    display:        "inline-flex",
    alignItems:     "center",
    justifyContent: "center",
    gap:            8,
    padding,
    borderRadius:   "999px",
    border:         v.border ?? "none",
    background:     hovered ? v.bgHover : v.bg,
    color:          v.color,
    fontFamily:     "'DM Sans', sans-serif",
    fontWeight:     600,
    fontSize,
    letterSpacing:  "0.01em",
    textDecoration: "none",
    cursor:         "pointer",
    boxShadow:      hovered ? v.shadowHover : v.shadow,
    transform:      hovered ? "translateY(-2px)" : "translateY(0)",
    transition:     "all 220ms cubic-bezier(0.4,0,0.2,1)",
    width:          fullWidth ? "100%" : "auto",
    whiteSpace:     "nowrap",
    ...style,
  };

  const events = {
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
  };

  if (href) {
    return (
      <a href={href} style={base}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
        {...events}
      >{children}</a>
    );
  }

  return (
    <button style={base} onClick={onClick} {...events}>
      {children}
    </button>
  );
}