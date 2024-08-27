/* eslint-disable react/require-default-props */

'use client';

import { useEffect } from 'react';
import { motion, stagger, useAnimate } from 'framer-motion';
// import { cn } from '../../../lib/utils';

export const TextGenerateEffect = ({
  words,
  // eslint-disable-next-line no-unused-vars
  className,
  filter = true,
  duration = 0.5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(' ');
  useEffect(() => {
    animate(
      'span',
      {
        opacity: 1,
        filter: filter ? 'blur(0px)' : 'none',
      },
      {
        duration: duration || 1,
        delay: stagger(0.2),
      },
    );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scope.current, duration, filter, animate]);

  const renderWords = () => (
    <motion.div ref={scope}>
      {wordsArray.map((word, idx) => (
        <motion.span
          key={word + idx}
          className="dark:text-white text-black opacity-0"
          style={{
            filter: filter ? 'blur(10px)' : 'none',
          }}
        >
          {word}{' '}
        </motion.span>
      ))}
    </motion.div>
  );

  return (

    <div className="max-w-lg mx-auto">
      <div className=" font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
        {renderWords()}
      </div>
    </div>

  );
};
