'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { useScroll, motion, useTransform } from 'framer-motion';
import { portfolioProjects } from '../../data/projects/portfolioProjects';
import { Card } from './Card';
import CheckCircleIcon from '../assets/icons/check-circle.svg';
import ArrowUpRightIcon from '../assets/icons/arrow-up-right.svg';

type ProjectProps = (typeof portfolioProjects)[number] & {
  projectIndex: number;
};

const Project = ({ company, year, title, results, languages, link, image, projectIndex }: ProjectProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1'],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
    >
      <Card
        key={title}
        className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20"
        style={{
          top: `calc(64px + ${projectIndex} * 40px)`,
        }}
      >
        <div className="lg:grid lg:grid-cols-2 lg:gap-16">
          <div className="lg:pb-16">
            <div
              style={{
                backgroundImage: `linear-gradient(to right, ${languages[0].color}, ${languages[1].color})`,
                WebkitBackgroundClip: 'text',
                color: 'transparent',
              }}
              className="inline-flex gap-2 font-bold uppercase tracking-widest text-sm"
            >
              <span>{company}</span>
              <span>&bull;</span>
              <span>{year}</span>
            </div>

            <h3 className="font-serif text-3xl mt-2 md:mt-5 md:text-3xl">{title}</h3>
            <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
            <ul className="mt-4 flex gap-4 flex-col md:mt-5">
              {results.map((result) => (
                <li className="flex gap-2 text-sm md:text-base text-white/50" key={result.title}>
                  <CheckCircleIcon className="size-5 md:size-6" />
                  <span>{result.title}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
              {languages.map((language) => (
                <p
                  className="text-[14px] font-bold font-sans italic"
                  style={{ color: `${language.color}` }}
                  key={title + language.name}
                >
                  #{language.name}
                </p>
              ))}
            </div>
            <a href={link} target="_blank" rel="noreferrer">
              <button
                type="button"
                style={{
                  backgroundImage: `linear-gradient(to right, ${languages[0].color}, ${languages[1].color})`,
                }}
                className="text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8"
              >
                <span>View Live Site</span>
                <ArrowUpRightIcon className="" size-4 />
              </button>
            </a>
          </div>
          {/* <div className="hover:-translate-x-3 hover:-translate-y-3 hover:-rotate-3 hover:scale-[1.04] transition duration-300"> */}
          <div>
            <Image src={image} alt={title} className="mt-8 -mb-4 md:mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none" />
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default Project;
