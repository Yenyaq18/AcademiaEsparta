// src/components/sections/StatsStrip.jsx
import { STATS } from "../../data/data";
import { useScrollReveal } from "../../hooks/useScrollReveal";

export default function StatsStrip() {
  const [ref, visible] = useScrollReveal();

  return (
    <div
      ref={ref}
      className="grid-stats"
      style={{
        maxWidth:              1200,
        margin:                "24px auto 0",
        padding:               "0 clamp(20px,4vw,48px)",
        display:               "grid",
        gridTemplateColumns:   "repeat(4,1fr)",
        gap:                   14,
      }}
    >
      {STATS.map((s, i) => (
        <div
          key={i}
          style={{
            padding:      "24px 20px",
            borderRadius: 18,
            textAlign:    "center",
            background:   "rgba(0,0,0,0.5)",
            border:       "1px solid rgba(255,255,255,0.07)",
            boxShadow:    "0 4px 20px rgba(0,0,0,0.3)",
            transform:    visible ? "translateY(0)"   : "translateY(24px)",
            opacity:      visible ? 1                  : 0,
            transition:   `transform 500ms cubic-bezier(0.4,0,0.2,1) ${i * 90}ms,
                           opacity   500ms ease          ${i * 90}ms`,
          }}
        >
          <div
            style={{
              fontFamily:    "'Syne', sans-serif",
              fontSize:      "clamp(1.9rem, 3vw, 2.6rem)",
              fontWeight:    800,
              color:         "#C9A227",
              lineHeight:    1,
              marginBottom:  6,
              letterSpacing: "-0.01em",
            }}
          >
            {s.value}
          </div>
          <div style={{ color: "#6E8A9E", fontSize: "0.85rem", lineHeight: 1.4 }}>
            {s.label}
          </div>
        </div>
      ))}
    </div>
  );
}