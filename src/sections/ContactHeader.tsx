
import Link from 'next/link';

import React from 'react';

const ContactHeader: React.FC = () => (
  <div className="flex justify-center items-center fixed top-3 w-full z-10">
    <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
      {/* <a href="#home" className="nav-item" onClick={(e) => handleScroll(e, '#home')}>
          Home
        </a> */}
      <Link
        className="nav-item"
        href="/#home"
      >
        Home
      </Link>
      <Link
        className="nav-item"
        href="/#projects"
      >
        Projects
      </Link>
      <Link
        className="nav-item"
        href="/#about"
      >
        About
      </Link>
      <a href="#contact" className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900">
        Contact
      </a>
    </nav>
  </div>
);

export default ContactHeader;
