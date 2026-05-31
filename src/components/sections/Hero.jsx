// src/components/sections/Hero.jsx
import { PANEL_ITEMS } from '../../data/data';
import { IconStar, IconCheck } from '../icons/Icons';
import Btn from '../ui/Btn';

export default function Hero() {
  return (
    <header style={{ maxWidth: 1200, margin: '0 auto', padding: 'clamp(32px,5vw,60px) clamp(20px,4vw,48px) 0' }}>
      <div className="grid-hero" style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1.45fr) minmax(280px,0.85fr)', gap: 22, alignItems: 'stretch' }}>

        {/* Copy */}
        <div style={{
          padding: 'clamp(32px,5vw,60px)', borderRadius: 30,
          background: 'linear-gradient(148deg, rgba(9,18,28,0.96) 0%, rgba(14,30,24,0.92) 100%)',
          border: '1px solid rgba(255,255,255,0.08)',
          boxShadow: '0 20px 60px rgba(0,0,0,0.55)',
        }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 7,
            padding: '6px 14px', borderRadius: 999,
            background: 'rgba(201,162,39,0.14)', border: '1px solid rgba(201,162,39,0.32)',
            color: '#F0C84A', fontSize: '0.72rem', fontWeight: 600,
            letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 22,
          }}>
            <IconStar size={11} /> Convocatoria abierta 2026
          </div>

          <h1 style={{
            margin: '0 0 20px', fontFamily: "'Syne', sans-serif", fontWeight: 800,
            fontSize: 'clamp(2.6rem,6vw,5rem)', lineHeight: 0.9, color: '#EDF6FF',
          }}>
            Forja tu carácter.{' '}
            <span style={{ color: '#C9A227', display: 'block' }}>Sirve a tu nación.</span>
          </h1>

          <p style={{ margin: '0 0 32px', color: '#6E8A9E', fontSize: '1.02rem', lineHeight: 1.75, maxWidth: '50ch' }}>
            Preparamos aspirantes con entrenamiento físico de élite, formación académica sólida
            y valores de liderazgo en un entorno estructurado y exigente.
          </p>

          <div className="hero-btns" style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
            <Btn href="#programas" variant="gold" size="lg">Ver programas</Btn>
            <Btn href="#requisitos" variant="ghost" size="lg">Requisitos</Btn>
          </div>
        </div>

        {/* Panel lateral */}
        <div style={{
          borderRadius: 30, padding: 'clamp(24px,4vw,38px)',
          background: 'linear-gradient(165deg, rgba(13,22,36,0.98) 0%, rgba(18,32,50,0.96) 100%)',
          border: '1px solid rgba(255,255,255,0.08)',
          boxShadow: '0 20px 60px rgba(0,0,0,0.55)',
          display: 'flex', flexDirection: 'column', gap: 18,
        }}>
          <div>
            <p style={{ margin: 0, marginBottom: 6, fontSize: '0.65rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#4A6070' }}>
              Inscripciones abiertas
            </p>
            <h2 style={{ margin: 0, fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: '1.45rem', color: '#C8DFF0', lineHeight: 1.15 }}>
              Próximo ciclo de formación
            </h2>
          </div>

          <ul style={{ display: 'grid', gap: 10, flex: 1, padding: 0, margin: 0, listStyle: 'none' }}>
            {PANEL_ITEMS.map((item, i) => (
              <li key={i} style={{
                display: 'flex', alignItems: 'center', gap: 10,
                padding: '11px 14px', borderRadius: 14,
                background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)',
                color: '#A8C2D8', fontSize: '0.9rem',
              }}>
                <span style={{
                  width: 24, height: 24, borderRadius: 7, flexShrink: 0,
                  background: 'rgba(201,162,39,0.18)', border: '1px solid rgba(201,162,39,0.35)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#C9A227',
                }}><IconCheck size={12} /></span>
                {item}
              </li>
            ))}
          </ul>
          <Btn href="#contacto" variant="gold" fullWidth size="lg">Solicitar información</Btn>
        </div>
      </div>
    </header>
  );
}