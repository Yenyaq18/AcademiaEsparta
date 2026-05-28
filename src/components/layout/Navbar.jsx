// src/components/layout/Navbar.jsx
import { useState, useEffect } from 'react';
import { NAV_LINKS, SITE } from '../../data/data';
import { IconShield, IconPhone, IconWA, IconMail, IconMenu, IconClose } from '../icons/Icons';
import Btn from '../ui/Btn';

function ContactBtn({ href, icon, color, title, external }) {
  const [hov, setHov] = useState(false);
  return (
    <a href={href} title={title}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      style={{
        width: 36, height: 36, borderRadius: 10,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: hov ? `${color}22` : 'rgba(255,255,255,0.06)',
        border: '1px solid rgba(255,255,255,0.09)',
        color, textDecoration: 'none',
        transform: hov ? 'translateY(-2px)' : 'none',
        transition: 'all 200ms ease',
      }}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
    >{icon}</a>
  );
}

function NavLink({ href, children }) {
  const [hov, setHov] = useState(false);
  return (
    <a href={href} style={{
      padding: '6px 14px', borderRadius: 999, fontSize: '0.88rem', fontWeight: 500,
      color: hov ? '#EDF6FF' : '#8FA3B8',
      background: hov ? 'rgba(255,255,255,0.07)' : 'transparent',
      textDecoration: 'none', transition: 'all 180ms ease',
    }}
    onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
    >{children}</a>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const contactBtns = [
    { href: `tel:${SITE.telefono}`,               icon: <IconPhone />, color: '#60A5FA', title: 'Llamar' },
    { href: `https://wa.me/${SITE.whatsapp}`,      icon: <IconWA />,    color: '#4ADE80', title: 'WhatsApp', external: true },
    { href: `mailto:${SITE.email}`,               icon: <IconMail />,  color: '#C084FC', title: 'Correo' },
  ];

  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: scrolled ? 'rgba(7,14,20,0.96)' : 'rgba(7,14,20,0.78)',
      backdropFilter: 'blur(16px)',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.07)' : '1px solid transparent',
      transition: 'background 300ms ease, border-color 300ms ease',
    }}>
      <div style={{
        maxWidth: 1200, margin: '0 auto',
        padding: '0 clamp(20px,4vw,48px)', height: 68,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16,
      }}>
        {/* Brand */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <div style={{
            width: 40, height: 40, borderRadius: 11,
            background: 'linear-gradient(135deg, #C9A227, #8A6A0E)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: '#fff', boxShadow: '0 4px 14px rgba(201,162,39,0.4)', flexShrink: 0,
          }}><IconShield size={20} color="#fff" /></div>
          <div>
            <div style={{ fontSize: '0.62rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#8FA3B8', lineHeight: 1 }}>
              {SITE.subtitulo}
            </div>
            <div style={{ fontSize: '1.2rem', fontWeight: 800, fontFamily: "'Syne',sans-serif", color: '#EDF6FF', lineHeight: 1.1 }}>
              {SITE.nombre.toUpperCase()}
            </div>
          </div>
        </a>

        {/* Links desktop */}
        <div className="nav-links" style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          {NAV_LINKS.map(l => <NavLink key={l.href} href={l.href}>{l.label}</NavLink>)}
        </div>

        {/* Acciones */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{ display: 'flex', gap: 6 }}>
            {contactBtns.map((b, i) => <ContactBtn key={i} {...b} />)}
          </div>
          <Btn href="#contacto" variant="gold" size="sm">Inscribirme</Btn>
          <button className="nav-burger" onClick={() => setMenuOpen(o => !o)} aria-label="Menú"
            style={{
              display: 'none', background: 'transparent',
              border: '1px solid rgba(255,255,255,0.14)',
              borderRadius: 9, padding: 7, color: '#8FA3B8', lineHeight: 0,
            }}>
            {menuOpen ? <IconClose /> : <IconMenu />}
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      {menuOpen && (
        <div style={{ background: 'rgba(7,14,20,0.98)', borderTop: '1px solid rgba(255,255,255,0.06)', padding: '12px clamp(20px,4vw,48px) 20px' }}>
          {NAV_LINKS.map(l => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
              style={{ display: 'block', padding: '13px 0', borderBottom: '1px solid rgba(255,255,255,0.05)', color: '#C8DFF0', fontSize: '0.96rem', fontWeight: 500 }}>
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}