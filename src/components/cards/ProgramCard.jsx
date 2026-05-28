// src/components/cards/ProgramCard.jsx
import { useState } from "react";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { IconChevron } from "../icons/Icons";

/**
 * Card de programa expandible.
 *
 * Props:
 *  - item  → objeto de PROGRAMAS (data.js) + iconComponent (asignado en Sections.jsx)
 *  - index → para stagger de animación
 */
export default function ProgramCard({ item, index }) {
  const [hovered,  setHovered]  = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [pressed,  setPressed]  = useState(false);
  const [ref, visible] = useScrollReveal();

  const toggle = () => setExpanded((e) => !e);

  return (
    <article
      ref={ref}
      tabIndex={0}
      role="button"
      aria-expanded={expanded}
      onClick={toggle}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && toggle()}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setHovered(false); setPressed(false); }}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      style={{
        borderRadius: 22,
        overflow:     "hidden",
        cursor:       "pointer",
        userSelect:   "none",
        outline:      "none",
        border:       hovered
          ? `1px solid ${item.border}`
          : "1px solid rgba(255,255,255,0.07)",
        background:   "linear-gradient(168deg, rgba(11,20,32,0.97) 0%, rgba(15,28,44,0.95) 100%)",
        boxShadow:    hovered
          ? `0 20px 50px rgba(0,0,0,0.5), 0 0 0 1px ${item.color}28`
          : "0 6px 24px rgba(0,0,0,0.35)",
        transform:    visible
          ? pressed  ? "translateY(-4px) scale(0.99)"
            : hovered ? "translateY(-10px)"
            : "translateY(0)"
          : "translateY(28px)",
        opacity:    visible ? 1 : 0,
        transition: `transform 400ms cubic-bezier(0.4,0,0.2,1) ${index * 110}ms,
                     opacity   400ms ease ${index * 110}ms,
                     box-shadow 220ms ease,
                     border-color 220ms ease`,
      }}
    >
      {/* Barra de color superior */}
      <div
        style={{
          height:     3,
          background: `linear-gradient(90deg, ${item.color}, ${item.accent})`,
        }}
      />

      <div style={{ padding: "26px 26px 22px" }}>

        {/* Tag + Ícono */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 18 }}>
          <span
            style={{
              padding:       "4px 12px",
              borderRadius:  "999px",
              fontSize:      "0.65rem",
              fontWeight:    700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              background:    item.bg,
              color:         item.accent,
              border:        `1px solid ${item.border}`,
            }}
          >
            {item.tag}
          </span>

          <div
            style={{
              width:          52,
              height:         52,
              borderRadius:   14,
              display:        "flex",
              alignItems:     "center",
              justifyContent: "center",
              background:     item.bg,
              border:         `1px solid ${item.border}`,
              flexShrink:     0,
            }}
          >
            {item.iconComponent}
          </div>
        </div>

        {/* Título */}
        <h3
          style={{
            margin:     "0 0 10px",
            fontFamily: "'Syne', sans-serif",
            fontWeight: 700,
            fontSize:   "1.45rem",
            color:      "#E0EFFF",
            lineHeight: 1.1,
          }}
        >
          {item.titulo}
        </h3>

        {/* Descripción */}
        <p style={{ margin: 0, color: "#5E7A8E", lineHeight: 1.72, fontSize: "0.9rem" }}>
          {item.descripcion}
        </p>

        {/* ── Detalle expandible ── */}
        <div
          style={{
            overflow:   "hidden",
            maxHeight:  expanded ? "160px" : "0px",
            transition: "max-height 380ms cubic-bezier(0.4,0,0.2,1)",
          }}
        >
          <div
            style={{
              marginTop:    16,
              padding:      "14px 16px",
              borderRadius: 12,
              background:   "rgba(255,255,255,0.04)",
              border:       "1px solid rgba(255,255,255,0.07)",
              color:        "#7B96AB",
              fontSize:     "0.87rem",
              lineHeight:   1.68,
            }}
          >
            {item.detalle}
          </div>
        </div>

        {/* Footer de la card */}
        <div
          style={{
            marginTop:    20,
            paddingTop:   16,
            borderTop:    "1px solid rgba(255,255,255,0.06)",
            display:      "flex",
            justifyContent: "space-between",
            alignItems:   "center",
          }}
        >
          <span style={{ fontSize: "0.78rem", color: item.accent, fontWeight: 600 }}>
            {expanded ? "Ver menos" : "Ver más detalles"}
          </span>
          <span style={{ color: item.accent }}>
            <IconChevron size={15} down={expanded} />
          </span>
        </div>

      </div>
    </article>
  );
}