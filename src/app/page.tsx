
import { HeroSection } from '../sections/Hero';
import { ProjectsSection } from '../sections/Projects';
import { TapeSection } from '../sections/Tape';
import { TestimonialsSection } from '../sections/Testimonials';
import { AboutSection } from '../sections/About';
import { ContactSection } from '../sections/Contact';
import { Footer } from '../sections/Footer';
import { FloatingNavbar } from '../components/FloatingNavbar';


const Home = () => {
  const navItems = [
    { name: 'Home', link: '#home' },
    { name: 'Projects', link: '#projects' },
    { name: 'About', link: '#about' },
    { name: 'Contact', link: '#contact' },
  ];
  return (
    <div>
      <FloatingNavbar navItems={navItems} />
      <HeroSection />
      <ProjectsSection />
      <TapeSection />
      <TestimonialsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
};
export default Home;
