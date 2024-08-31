'use client';

import { motion } from 'framer-motion';
import SectionWrapper from '../hoc/SectionWrapper';
import { GlobeDemo } from '../components/GlobeDemo';
import Form from '../components/Form';
import { slideIn } from '../utils/motion';

const ContactSection = () => (

  <div
    className="py-8 md:py-12 lg:py-15 relative z-0 overflow-x-clip grid lg:grid-cols-2 grid-cols-1 gap-20 "
  >
    <motion.div
      variants={slideIn('left', 'tween', 0.2, 1)}
      className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
    >
      <GlobeDemo />
    </motion.div>
    <motion.div
      variants={slideIn('right', 'tween', 0.2, 1)}
      className=" rounded-3xl relative z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 after:pointer-events-none px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20"
    >
      <Form />
    </motion.div>

  </div>
);
export default SectionWrapper(ContactSection, 'contact');
