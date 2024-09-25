"use client";
import Link from 'next/link';
import BaziCalculator from '../components/BaziCalculator/BaziCalculator';
import ContactForm from '@/components/ContactForm/ContactForm';
import TestimonialSlider from '@/components/TestimonialSlider/TestimonialSlider';
import Image from 'next/image'
import homePic from './home-calculator.png'

import { useState } from 'react';
import BaziResult from '@/components/BaziCalculator/BaziResult';

export default function page() {

  return (
    <div>

      {/* Home Content */}
      <section className="flex flex-col lg:flex-row gap-4 p-4 lg:p-16 text-foreground mb-16">
        <div className="mx-4 lg:mx-16 w-full lg:w-1/2">
          <Image
            src={homePic}
            alt="Decorative image"
            className="w-full h-48 sm:h-64 md:h-80 lg:h-auto object-cover"></Image>
        </div>

        <div className="flex flex-col gap-4 lg:gap-8 mx-4 lg:mx-16 w-full lg:w-1/2">
          <BaziCalculator />
        </div>
      </section>

      {/* Services Content */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 md:p-16 text-foreground mb-16">
        <div className="flex flex-col gap-4 md:gap-8 mx-4 md:mx-16">
          <h1 className="text-2xl md:text-3xl font-bold">WHAT IS BAZI</h1>
          <p className="text-base md:text-lg">
            "Bazi, or 'Eight Characters,' is a traditional Chinese system that analyzes a person's destiny based on their birth date and time. Rooted in ancient Chinese philosophy and metaphysics, Bazi provides insights into personality, relationships, career, and health."
          </p>
          <Link href="/" className="font-semibold text-lg md:text-xl">Link to Service Page</Link>
          <p className="text-base md:text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="bg-slate-300 border rounded mx-4 md:mx-16 h-64 md:h-auto"></div>
      </section>


      {/* Contact Content */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 md:p-16 text-foreground mb-16">
        <div className="flex flex-col gap-4 md:gap-8 mx-4 md:mx-16">
          <h1 className="text-2xl md:text-3xl font-bold">CONTACT US</h1>
          <p className="text-base md:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <ContactForm />
      </section>



      {/* Testimonial Content */}
      <TestimonialSlider />
    </div>
  );
}
