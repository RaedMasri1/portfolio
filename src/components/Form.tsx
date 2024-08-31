'use client';

import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'sonner';
import grainImage from '../assets/images/grain.jpg';

const Form = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_nq3br74',
        'template_34nem9n',

        {
          from_name: form.name,
          to_name: 'Raed Masri',
          from_email: form.email,
          to_email: 'raed.k.elmasri@gmail.com',
          message: form.message,
        },
        'q6p5Zb8BzdQ0teuHa',
      )
      .then(
        () => {
          setLoading(false);
          //   alert('Thank you. I will get back to you as soon as possible.');
          toast.success(
            'Thank you. I will get back to you as soon as possible.',
            {
              style: {
                background: 'green',
              } },
          );

          setForm({
            name: '',
            email: '',
            message: '',
          });
        },
        (error: Error) => {
          setLoading(false);
          console.error(error);

          //   alert('Ahh, something went wrong. Please try again.');
          toast.error('Ahh, something went wrong. Please try again.', {
            style: {
              background: 'red',
            } });
        },
      );
  };

  return (
    <>
      <div
        className="absolute inset-0 -z-10 opacity-5"
        style={{
          backgroundImage: `url(${grainImage.src})`,
        }}
      />
      <p className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest sm:text-[18px] text-xl text-transparent bg-clip-text">Get in touch</p>
      <h3 className="font-serif  mt-2 md:mt-4 md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Contact.</h3>
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="mt-6 flex flex-col gap-8"
      >
        <label className="flex flex-col">
          <span className="text-white font-medium mb-2">Your Name</span>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="What's your good name?"
            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white-100 rounded-lg outline-none border-none font-medium"
          />
        </label>
        <label className="flex flex-col">
          <span className="text-white font-medium mb-2">Your email</span>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="What's your web address?"
            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white-100 rounded-lg outline-none border-none font-medium"
          />
        </label>
        <label className="flex flex-col">
          <span className="text-white font-medium mb-2">Your Message</span>
          <textarea
            rows={7}
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="What you want to say?"
            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white-100 rounded-lg outline-none border-none font-medium"
          />
        </label>

        <button
          type="submit"
          className="bg-gradient-to-r from-emerald-300 to-sky-400 py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary mb-8"
        >
          {loading ? 'Sending...' : 'Send'}
        </button>
      </form>
    </>
  );
};
export default Form;
