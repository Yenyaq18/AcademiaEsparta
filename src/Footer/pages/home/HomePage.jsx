// src/pages/home/HomePage.jsx
import Navbar     from '../../../components/layout/Navbar';
import Hero       from '../../../components/sections/Hero';
import StatsStrip from '../../../components/sections/StatsStrips';
import {
  SectionNosotros,
  SectionProgramas,
  SectionInfo,
  SectionRequisitos,
  Footer,
} from '../../../components/sections/Sections';

export default function HomePage() {
  return (
    <div style={{
      minHeight: '100vh',
      background: `
        radial-gradient(ellipse at 6% 0%,  rgba(107,142,35,0.38) 0%, transparent 30%),
        radial-gradient(ellipse at 94% 6%, rgba(85,107,47,0.52)  0%, transparent 28%),
        linear-gradient(180deg, #070E14 0%, #0C1520 35%, #0A1828 100%)
      `,
    }}>
      <Navbar />
      <Hero />
      <StatsStrip />
      <main>
        <SectionNosotros />
        <SectionProgramas />
        <SectionInfo />
        <SectionRequisitos />
      </main>
      <Footer />
    </div>
  );
}