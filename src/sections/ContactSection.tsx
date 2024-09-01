'use client';

// import { motion } from 'framer-motion';
import SectionWrapper from '../hoc/SectionWrapper';
// import { GlobeDemo } from '../components/GlobeDemo';
import Form from '../components/Form';
// import { slideIn } from '../utils/motion';

const ContactSection = () => (

  <div
    className="py-8 md:py-12 lg:py-15 relative z-0 overflow-x-clip flex flex-col"
  >
    {/* <div
    //   variants={slideIn('left', 'tween', 0.2, 1)}
      className="xl:flex-1 xl:h-auto h-[150px]"
    > */}
    <div className=" text-center w-full h-[150px] mx-auto px-4">
      <p className=" max-w-md  mx-auto text-white font-serif text-center mt-6 md:text-3xl text-2xl">
        I&apos;m very flexible with <span className="bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">time zone</span> communications
      </p>
    </div>
    <div
    //   variants={slideIn('right', 'tween', 0.2, 1)}
      className=" rounded-3xl relative z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 after:pointer-events-none px-8 pt-8 pb-0 md:pt-12  md:px-10 lg:pt-16 lg:px-20 sm:mx-12 md:mx-20 lg:mx-32 xl:mx-52 "
    >
      <Form />
    </div>

  </div>

);
export default SectionWrapper(ContactSection, 'contact');
