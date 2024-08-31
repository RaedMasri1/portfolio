import { motion } from 'framer-motion';
import React from 'react';
import { staggerContainer } from '../utils/motion';

// interface SectionWrapperProps {
//   idName: string;
// }

// Define the type of the component being wrapped
type WrappedComponentType = React.ComponentType;

const SectionWrapper = (Component: WrappedComponentType, idName: string) => {
  const HOC: React.FC = () => (
    <motion.section
        // Provide the required arguments for staggerContainer
      variants={staggerContainer(0, 0)} // Modify the arguments as needed
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0"
    >
      <span className="hash-span" id={idName}>
          &nbsp;
      </span>
      <Component />
    </motion.section>
  );

  return HOC;
};

export default SectionWrapper;
