// src/components/cards/InfoCard.jsx
import { useState } from "react";
import { useScrollReveal } from "../../hooks/useScrollReveal";

/**
 * Card de información adicional — fondo claro, hover suave.
 *
 * Props:
 *  - item  → objeto de INFO_ITEMS (data.js) + iconComponent
 *  - index → para stagger de animación
 */
export default function InfoCard({ item, index }) {
  const [hovered, setHovered] = useState(false);
  const [ref, visible] = useScrollReveal();

  return (
    <article
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: 20,
        padding:      "22px 24px",
        background:   hovered ? "#FFFFFF" : "rgba(255,255,255,0.95)",
        border:       hovered
          ? `1px solid ${item.color}55`
          : "1px solid rgba(0,0,0,0.07)",
        boxShadow:    hovered
          ? `0 16px 44px rgba(0,0,0,0.16), 0 0 0 1px ${item.color}18`
          : "0 2px 12px rgba(0,0,0,0.07)",
        transform:    visible
          ? hovered ? "translateY(-7px)" : "translateY(0)"
          : "translateY(22px)",
        opacity:      visible ? 1 : 0,
        transition:   `transform 420ms cubic-bezier(0.4,0,0.2,1) ${index * 100}ms,
                       opacity   420ms ease ${index * 100}ms,
                       box-shadow 220ms ease,
                       border-color 220ms ease`,
        cursor:       "default",
      }}
    >
      <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>

        {/* Ícono */}
        <div
          style={{
            width:          50,
            height:         50,
            borderRadius:   14,
            flexShrink:     0,
            display:        "flex",
            alignItems:     "center",
            justifyContent: "center",
            background:     item.bg,
            border:         `1px solid ${item.color}30`,
            transition:     "transform 220ms ease",
            transform:      hovered ? "scale(1.08)" : "scale(1)",
          }}
        >
          {item.iconComponent}
        </div>

        {/* Texto */}
        <div>
          <h4
            style={{
              margin:     "0 0 7px",
              fontFamily: "'Syne', sans-serif",
              fontWeight: 700,
              fontSize:   "1.15rem",
              color:      "#1A2E42",
              lineHeight: 1.15,
            }}
          >
            {item.titulo}
          </h4>
          <p style={{ margin: 0, color: "#4A6070", lineHeight: 1.68, fontSize: "0.88rem" }}>
            {item.descripcion}
          </p>
        </div>

      </div>
    </article>
  );
}