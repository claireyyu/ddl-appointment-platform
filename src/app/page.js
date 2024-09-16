// src/app/page.js
"use client"; // This is a client component
import { useRef } from 'react';
import BaziCalculator from '../components/home/BaziCalculator';
import Link from 'next/link';
import ContactForm from '@/components/home/ContactForm';
import { Globe, Facebook, Instagram, Twitter, Youtube } from 'react-feather';
import TestimonialSlider from '@/components/home/TestimonialSlider';

export default function Home() {
  const homeRef = useRef(null);
  const servicesRef = useRef(null);
  const aboutRef = useRef(null);
  const testimonialsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToRef = (ref) => ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  return (
    <div>
      <nav className="flex justify-end border-b-2">
        <button className="flex items-center m-1 bg-white p-2 text-slate-900 sticky border-black border-2 rounded-3xl focus"><Globe className="m-1"/>Language</button>
      </nav>
      <nav className="flex justify-between items-center bg-white p-4 text-slate-900 sticky text-xl">
        <h1 className="text-2xl font-bold">LOGO</h1>
        <div className="flex justify-self-end gap-12">
          <button onClick={() => scrollToRef(homeRef)}>Home</button>
          <button onClick={() => scrollToRef(servicesRef)}>Services</button>
          <button onClick={() => scrollToRef(aboutRef)}>About</button>
          <button onClick={() => scrollToRef(testimonialsRef)}>Testimonials</button>
          <button onClick={() => scrollToRef(contactRef)}>Contact</button>
          <button className="bg-slate-400 text-white p-2 rounded-xl">Sign In</button>
        </div>
      </nav>

      {/* Home Content */}
      <section ref={homeRef} className="flex flex-col p-8 justify-center items-center bg-slate-50 mx-16 text-slate-700">
        <h1 className="text-3xl font-bold">Discover Your Destiny With Bazi Calculator</h1>
        <p className="text-lg justify-center align-middle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <BaziCalculator />
      </section>

      {/* Services Content */}
      <section ref={servicesRef} className="grid grid-cols-2 gap-24 p-8 text-slate-700">
        <div className="flex flex-col gap-8 mx-16" >
          <h1 className="text-3xl font-bold">What is Bazi?</h1>
          <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <Link href="/" className="font-semibold text-xl">Link to Sercice Page</Link>
          <p className="text-lg">Lorem ipsum dolor sit amet, <br/>consectetur adipiscing elit.</p>
        </div>
        <div className="bg-slate-300 border rounded m-4"></div>
      </section>

      <section ref={aboutRef} className=" grid grid-cols-3 gap-4 px-24 py-16 bg-slate-100">
        <div className="col-span-2 border bg-slate-200 h-48"></div>
        <div className="col-span-1 border bg-slate-200 h-48"></div>
        <div className="col-span-1 border bg-slate-200 h-48"></div>
        <div className="col-span-2 border bg-slate-200 h-48"></div>
      </section>

      <section ref={contactRef} className="grid grid-cols-2 gap-24 p-8 mx-16 text-slate-700">
        <div className="flex flex-col gap-8 p-4 justify-start" >
          <h1 className="text-3xl font-bold">CONTACT US</h1>
          <p className="text-lg mt-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <ContactForm />
      </section>

      <TestimonialSlider />

      <footer className="bg-slate-900 text-white p-2">
        <div className="flex justify-between items-center w-full">
          <h1 className="text-2xl font-bold">LOGO</h1>
          <div className="flex gap-2">
            <Facebook />
            <Instagram />
            <Twitter />
            <Youtube />
          </div>
        </div>
      </footer>

      <footer className="bg-slate-900 text-white p-2"> 
        <div className="flex justify-between items-center w-full">
          <div>
            @Copyright 2024 Jackbox Games. All rights reserved.
          </div>
          <div className="flex gap-4">
            <Link href="/">Terms of Service</Link>
            <Link href="/" >Privacy Policy</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
