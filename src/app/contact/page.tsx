import React from 'react';
import ContactHeader from '../../sections/ContactHeader';
import ContactSection from '../../sections/ContactSection';
import StarsCanvas from '../../components/canvas/Star';

const page = () => (
  <div>
    <ContactHeader />
    <ContactSection />
    <StarsCanvas />
  </div>
);

export default page;
