import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ApproachSection from '@/components/ApproachSection';
import AcademicSection from '@/components/AcademicSection';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import TerminalSection from '@/components/TerminalSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import SmoothScroll from '@/components/SmoothScroll';

export default function Home() {
  return (
    <SmoothScroll>
      <div style={{ position: 'relative', width: '100%', minHeight: '100vh' }}>
        <Navbar />
        <main id="main">
          <HeroSection />
          <AboutSection />
          <ApproachSection />
          <AcademicSection />
          <ProjectsSection />
          <SkillsSection />
          <TerminalSection />
          <ContactSection />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </SmoothScroll>
  );
}
