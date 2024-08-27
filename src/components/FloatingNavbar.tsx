/* eslint-disable no-undef */
/* eslint-disable react/require-default-props */

'use client';

import React, { useState } from 'react';
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from 'framer-motion';
import Link from 'next/link';

export const FloatingNavbar = ({
  navItems,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
}) => {
  const { scrollYProgress } = useScroll();

  // set true for the initial state so that nav bar is visible in the hero section
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, 'change', (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === 'number') {
      const direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        // also set true for the initial state
        setVisible(true);
      } else if (direction < 0) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className="flex max-w-fit md:min-w-[70vw] lg:min-w-fit fixed z-[5000] top-10 inset-x-0 mx-auto p-0.5 b border border-white/15 rounded-full bg-white/10 backdrop-blur items-center justify-center"
      >
        {navItems.map((navItem: any, idx: number) => {
          if (navItem.name === 'Contact') {
            return (
              <Link
                key={`link=${idx}`}
                href={navItem.link}
                className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
              >
                <span className="block sm:hidden">{navItem.icon}</span>
                <span className=" text-sm !cursor-pointer">{navItem.name}</span>
              </Link>
            );
          }
          return (
            <Link
              key={`link=${idx}`}
              href={navItem.link}
              className="nav-item"
            >
              <span className="block sm:hidden">{navItem.icon}</span>
              <span className=" text-sm !cursor-pointer">{navItem.name}</span>
            </Link>
          );
        })}
      </motion.div>
    </AnimatePresence>
  );
};
