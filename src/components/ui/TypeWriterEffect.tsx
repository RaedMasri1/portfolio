/* eslint-disable react/require-default-props */

'use client';

import { motion, stagger, useAnimate, useInView } from 'framer-motion';
import { useEffect } from 'react';
import { cn } from '../../../lib/utils';

export const TypewriterEffect = ({
  words,
  className,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
}) => {
  // split text inside of words into array of characters
  const wordsArray = words.map((word) => ({
    ...word,
    text: word.text.split(''),
  }));

  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);
  useEffect(() => {
    if (isInView) {
      animate(
        'span',
        {
          display: 'inline-block',
          opacity: 1,
          width: 'fit-content',
        },
        {
          duration: 0.1,
          delay: stagger(0.1),
          ease: 'easeInOut',
        },
      );
    }
  }, [isInView, animate]);

  const renderWords = () => (
    <motion.div ref={scope} className="inline">
      {wordsArray.map((word, idx) => (
        <div key={`word-${idx}`} className="inline-block">
          {word.text.map((char, index) => (
            <motion.span
              initial={{}}
              key={`char-${index}`}
              className={cn(
                'dark:text-gray-900 text-gray-900  opacity-0 hidden',
                word.className,
              )}
            >
              {char}
            </motion.span>
          ))}
              &nbsp;
        </div>
      ))}
    </motion.div>
  );
  return (
    <div
      className={cn(
        'font-serif text-2xl md:text-3xl text-center',
        className,
      )}
    >
      {renderWords()}
    </div>
  );
};
