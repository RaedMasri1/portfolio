import React, { Suspense } from 'react';
import Header from '../sections/Header';
// import { FloatingNavbar } from '../components/FloatingNavbar';

// Lazy load sections
const HeroSection = React.lazy(() => import('../sections/Hero'));
const ProjectsSection = React.lazy(() => import('../sections/ProjectsSection'));
const TapeSection = React.lazy(() => import('../sections/Tape'));
const TestimonialsSection = React.lazy(() => import('../sections/Testimonials'));
const AboutSection = React.lazy(() => import('../sections/About'));
const ContactSection = React.lazy(() => import('../sections/Contact'));
const Footer = React.lazy(() => import('../sections/Footer'));

//   const navItems = [
//     { name: 'Home', link: '#home' },
//     { name: 'Projects', link: '#projects' },
//     { name: 'About', link: '#about' },
//     { name: 'Contact', link: '#contact' },
//   ];
const Home = () => (
  <div>
    {/* <FloatingNavbar navItems={navItems} /> */}
    <Header />

    <Suspense fallback={<div>Loading...</div>}>
      <HeroSection />
    </Suspense>

    <Suspense fallback={<div>Loading Projects...</div>}>
      <ProjectsSection />
    </Suspense>

    <Suspense fallback={<div>Loading...</div>}>
      <TapeSection />
    </Suspense>

    <Suspense fallback={<div>Loading Testimonials...</div>}>
      <TestimonialsSection />
    </Suspense>

    <Suspense fallback={<div>Loading About...</div>}>
      <AboutSection />
    </Suspense>

    <Suspense fallback={<div>Loading Contact...</div>}>
      <ContactSection />
    </Suspense>

    <Suspense fallback={<div>Loading Footer...</div>}>
      <Footer />
    </Suspense>
  </div>
);
export default Home;
