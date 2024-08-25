'use client';

// Add this line at the top of your file

import React from 'react';

export const Header: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(id);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <a href="#home" className="nav-item" onClick={(e) => handleScroll(e, '#home')}>
          Home
        </a>
        <a href="#projects" className="nav-item" onClick={(e) => handleScroll(e, '#projects')}>
          Projects
        </a>
        <a href="#about" className="nav-item" onClick={(e) => handleScroll(e, '#about')}>
          About
        </a>
        <a href="#contact" className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900" onClick={(e) => handleScroll(e, '#contact')}>
          Contact
        </a>
      </nav>
    </div>
  );
};
