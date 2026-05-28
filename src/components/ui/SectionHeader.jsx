// src/components/ui/SectionHeader.jsx

/**
 * Encabezado de sección reutilizable.
 *
 * Props:
 *  - tag     {string}  texto de etiqueta superior en mayúsculas
 *  - title   {string}  título principal
 *  - light   {boolean} true = texto claro (fondo oscuro) | false = oscuro
 *  - center  {boolean} centrado horizontal
 *  - maxWidth{string}  limitar ancho del título (ej: "16ch")
 */
export default function SectionHeader({
  tag,
  title,
  light    = true,
  center   = false,
  maxWidth = "20ch",
  style    = {},
}) {
  return (
    <div
      style={{
        marginBottom: 36,
        textAlign:    center ? "center" : "left",
        ...style,
      }}
    >
      {tag && (
        <p
          style={{
            margin:        0,
            marginBottom:  10,
            fontSize:      "0.68rem",
            fontWeight:    600,
            letterSpacing: "0.24em",
            textTransform: "uppercase",
            color:         light ? "#8FA3B8" : "#6B7F93",
          }}
        >
          {tag}
        </p>
      )}
      <h2
        style={{
          margin:     0,
          fontFamily: "'Syne', sans-serif",
          fontWeight: 800,
          fontSize:   "clamp(1.9rem, 3.5vw, 3rem)",
          lineHeight: 1.0,
          color:      light ? "#EDF6FF" : "#1A2E42",
          maxWidth:   center ? "none" : maxWidth,
        }}
      >
        {title}
      </h2>
    </div>
  );
}