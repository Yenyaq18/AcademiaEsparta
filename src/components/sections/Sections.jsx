// src/components/sections/Sections.jsx
import { useScrollReveal } from "../../hooks/useScrollReveal";
import {
  PROGRAMAS, INFO_ITEMS, REQUISITOS,
  NOSOTROS_PUNTOS, SITE,
} from "../../data/data";
import {
  IconBarbell, IconGraduate, IconShieldCheck,
  IconClock, IconClipboard, IconFamily,
  IconCheck, IconWA, IconMail,
} from "../icons/Icons";
import SectionHeader from "../ui/SectionHeader";
import ProgramCard   from "../cards/ProgramCard";
import InfoCard      from "../cards/Infocard";
import Btn           from "../ui/Btn";

/* ── Inyecta el componente de ícono a los datos ───── */
const PROGRAMAS_WITH_ICON = PROGRAMAS.map((p) => ({
  ...p,
  iconComponent:
    p.key === "fisica"    ? <IconBarbell />    :
    p.key === "academica" ? <IconGraduate />   :
                            <IconShieldCheck />,
}));

const INFO_WITH_ICON = INFO_ITEMS.map((item) => ({
  ...item,
  iconComponent:
    item.key === "horarios"   ? <IconClock />     :
    item.key === "simulacros" ? <IconClipboard /> :
                                <IconFamily />,
}));

/* ═══════════════════════════════════════════════════
   SECCIÓN: Nosotros
═══════════════════════════════════════════════════ */
export function SectionNosotros() {
  const [ref, visible] = useScrollReveal();

  return (
    <section id="nosotros" className="section">
      <div
        ref={ref}
        className="container grid-2"
        style={{
          display:             "grid",
          gridTemplateColumns: "repeat(2, minmax(0,1fr))",
          gap:                 48,
          alignItems:          "center",
          transform:           visible ? "translateY(0)" : "translateY(32px)",
          opacity:             visible ? 1 : 0,
          transition:          "all 640ms cubic-bezier(0.4,0,0.2,1)",
        }}
      >
        {/* Columna izquierda */}
        <div>
          <SectionHeader
            tag="Sobre nosotros"
            title="Una academia con identidad, disciplina y propósito."
          />
          <p style={{ color: "#5E7A8E", lineHeight: 1.8, fontSize: "0.97rem" }}>
            La Academia Militar Esparta forma jóvenes comprometidos con el servicio y el
            desarrollo personal. Más de 15 años preparando cadetes con metodología rigurosa
            y un enfoque genuinamente humano.
          </p>
        </div>

        {/* Columna derecha — lista de puntos */}
        <div style={{ display: "grid", gap: 12 }}>
          {NOSOTROS_PUNTOS.map((txt, i) => (
            <div
              key={i}
              style={{
                display:    "flex",
                alignItems: "center",
                gap:        14,
                padding:    "14px 18px",
                borderRadius: 14,
                background: "rgba(255,255,255,0.04)",
                border:     "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <span
                style={{
                  width:          26,
                  height:         26,
                  borderRadius:   8,
                  flexShrink:     0,
                  background:     "rgba(201,162,39,0.16)",
                  border:         "1px solid rgba(201,162,39,0.3)",
                  display:        "flex",
                  alignItems:     "center",
                  justifyContent: "center",
                  color:          "#C9A227",
                }}
              >
                <IconCheck size={13} />
              </span>
              <span style={{ color: "#94B0C6", fontSize: "0.92rem" }}>{txt}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════
   SECCIÓN: Programas
═══════════════════════════════════════════════════ */
export function SectionProgramas() {
  return (
    <section id="programas" className="section">
      <div className="container">
        <SectionHeader tag="Programas" title="Áreas principales de preparación" />
        <div
          className="grid-3"
          style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0,1fr))", gap: 20 }}
        >
          {PROGRAMAS_WITH_ICON.map((p, i) => (
            <ProgramCard key={p.key} item={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════
   SECCIÓN: Información adicional
═══════════════════════════════════════════════════ */
export function SectionInfo() {
  return (
    <section id="informacion" className="section">
      <div className="container">
        {/* Tarjeta contenedora blanca */}
        <div
          style={{
            padding:      "clamp(28px,4vw,52px)",
            borderRadius: 28,
            background:   "rgba(255,255,255,0.97)",
            border:       "1px solid rgba(0,0,0,0.07)",
            boxShadow:    "0 12px 48px rgba(0,0,0,0.12)",
          }}
        >
          <SectionHeader
            tag="Más información"
            title="Detalles del proceso de preparación"
            light={false}
          />
          <div
            className="grid-3"
            style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0,1fr))", gap: 18 }}
          >
            {INFO_WITH_ICON.map((item, i) => (
              <InfoCard key={item.key} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════
   SECCIÓN: Requisitos
═══════════════════════════════════════════════════ */
export function SectionRequisitos() {
  const [ref, visible] = useScrollReveal();

  return (
    <section id="requisitos" className="section">
      <div
        ref={ref}
        className="container grid-2"
        style={{
          display:             "grid",
          gridTemplateColumns: "repeat(2, minmax(0,1fr))",
          gap:                 40,
          transform:           visible ? "translateY(0)" : "translateY(32px)",
          opacity:             visible ? 1 : 0,
          transition:          "all 640ms cubic-bezier(0.4,0,0.2,1)",
        }}
      >
        {/* Columna izquierda */}
        <div>
          <SectionHeader
            tag="Ingreso"
            title="Requisitos generales para aspirantes"
          />
          <p style={{ color: "#5E7A8E", lineHeight: 1.8, marginBottom: 28, fontSize: "0.97rem" }}>
            Asegúrate de cumplir los requisitos mínimos para iniciar tu proceso. Nuestro equipo te
            acompañará en cada etapa del camino.
          </p>
          <Btn href="#contacto" variant="gold">Consultar cupos</Btn>
        </div>

        {/* Lista de requisitos */}
        <ul style={{ display: "grid", gap: 12 }}>
          {REQUISITOS.map((req, i) => (
            <li
              key={i}
              style={{
                display:    "flex",
                alignItems: "center",
                gap:        14,
                padding:    "14px 18px",
                borderRadius: 14,
                background: "rgba(0,0,0,0.38)",
                border:     "1px solid rgba(255,255,255,0.07)",
                color:      "#A8C2D8",
                fontSize:   "0.92rem",
              }}
            >
              <span
                style={{
                  width:          24,
                  height:         24,
                  borderRadius:   7,
                  flexShrink:     0,
                  background:     "rgba(201,162,39,0.18)",
                  display:        "flex",
                  alignItems:     "center",
                  justifyContent: "center",
                  color:          "#C9A227",
                }}
              >
                <IconCheck size={12} />
              </span>
              {req}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════
   FOOTER / CONTACTO
═══════════════════════════════════════════════════ */
export function Footer() {
  const [ref, visible] = useScrollReveal();

  return (
    <footer
      id="contacto"
      style={{
        marginTop:  96,
        borderTop:  "1px solid rgba(255,255,255,0.06)",
        paddingBottom: 0,
      }}
    >
      <div
        ref={ref}
        className="container grid-footer"
        style={{
          display:             "grid",
          gridTemplateColumns: "1.3fr 1fr",
          gap:                 32,
          alignItems:          "center",
          padding:             "64px clamp(20px,4vw,48px) 40px",
          transform:           visible ? "translateY(0)" : "translateY(28px)",
          opacity:             visible ? 1 : 0,
          transition:          "all 600ms ease",
        }}
      >
        {/* Texto */}
        <div>
          <p
            style={{
              margin:        0,
              marginBottom:  10,
              fontSize:      "0.68rem",
              fontWeight:    600,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color:         "#4A6070",
            }}
          >
            Contacto
          </p>
          <h2
            style={{
              margin:     "0 0 10px",
              fontFamily: "'Syne', sans-serif",
              fontWeight: 800,
              fontSize:   "clamp(1.9rem, 3vw, 3rem)",
              color:      "#EDF6FF",
              lineHeight: 1.0,
            }}
          >
            Solicita tu cupo para la próxima convocatoria
          </h2>
          <p style={{ margin: 0, color: "#4A6070", fontSize: "0.92rem" }}>
            Respondemos en menos de 24 horas
          </p>
        </div>

        {/* Acciones */}
        <div
          className="footer-actions"
          style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "flex-end" }}
        >
          <Btn href={`mailto:${SITE.email}`} variant="gold">
            <IconMail size={17} /> Enviar correo
          </Btn>
          <Btn
            href={`https://wa.me/${SITE.whatsapp}?text=Hola%2C%20quiero%20informaci%C3%B3n`}
            variant="whatsapp"
            external
          >
            <IconWA size={17} /> WhatsApp
          </Btn>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.05)",
          padding:   "18px clamp(20px,4vw,48px)",
          maxWidth:  1200,
          margin:    "0 auto",
          color:     "#2E4155",
          fontSize:  "0.83rem",
          display:   "flex",
          justifyContent: "space-between",
          flexWrap:  "wrap",
          gap:       8,
        }}
      >
        <span>{SITE.copyright} · Todos los derechos reservados</span>
        <span>{SITE.email}</span>
      </div>
    </footer>
  );
}