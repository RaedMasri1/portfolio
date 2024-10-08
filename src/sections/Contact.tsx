
import Link from 'next/link';
import { TypewriterEffect } from '../components/ui/TypeWriterEffect';
import ArrowUpRightIcon from '../assets/icons/arrow-up-right.svg';
import grainImage from '../assets/images/grain.jpg';

//  Let's create something amazing together
//  Ready to bring your next project to life?
const words = [
  {
    text: 'Ready',
  },
  {
    text: 'to',
  },
  {
    text: 'bring',
  },
  {
    text: 'your',
  },
  {
    text: 'next',
    className: 'dark:text-white text-gray',
  },
  {
    text: 'project',
    className: 'dark:text-white text-gray',
  },
  {
    text: 'to',
  },
  {
    text: 'life?',
  },

];
const ContactSection = () => (
  <div id="contact" className="py-16 pt-12 lg:py-24 lg:pt-20">
    <div className="container">
      <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center relative overflow-hidden z-0">
        <div
          className="absolute inset-0 opacity-5 -z-10"
          style={{
            backgroundImage: `url(${grainImage.src})`,
          }}
        />
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
          <div>
            {/* <h2 className="font-serif text-2xl md:text-3xl">
              Ready to bring your next project to life? Let&apos;s create something amazing together
            </h2> */}
            <TypewriterEffect words={words} className="font-serif text-2xl md:text-3xl" />
            <p className="text-sm md:text-base mt-2 ">
              Let&apos;s connect and discuss to create something amazing together. I can help you achieve your goals.
            </p>
          </div>
          <div>
            <Link
              className="text-white bg-gray-900 inline-flex items-center md:text-left px-6 h-12 rounded-xl gap-2 w-max border border-gray-900"
              href="/contact"
            >
              <span className="font-semibold">Contact Me</span>
              <ArrowUpRightIcon className="size-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>

);
export default ContactSection;
