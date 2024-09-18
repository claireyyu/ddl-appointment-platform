"use client";
import Link from 'next/link';
import BaziCalculator from '../components/Home/BaziCalculator';
import ContactForm from '@/components/Home/ContactForm';
import TestimonialSlider from '@/components/Home/TestimonialSlider';

export default function Home() {
  return (
    <div>

      {/* Home Content */}
      <section className="flex flex-col p-8 justify-center items-center bg-slate-50 mx-16 text-slate-700">
        <h1 className="text-3xl font-bold">Discover Your Destiny With Bazi Calculator</h1>
        <p className="text-lg justify-center align-middle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <BaziCalculator />
      </section>

      {/* Services Content */}
      <section className="grid grid-cols-2 gap-24 p-8 text-slate-700">
        <div className="flex flex-col gap-8 mx-16" >
          <h1 className="text-3xl font-bold">What is Bazi?</h1>
          <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <Link href="/" className="font-semibold text-xl">Link to Sercice Page</Link>
          <p className="text-lg">Lorem ipsum dolor sit amet, <br/>consectetur adipiscing elit.</p>
        </div>
        <div className="bg-slate-300 border rounded m-4"></div>
      </section>

      {/* About Content */}
      <section className=" grid grid-cols-3 gap-4 px-24 py-16 bg-slate-100">
        <div className="col-span-2 border bg-slate-200 h-48"></div>
        <div className="col-span-1 border bg-slate-200 h-48"></div>
        <div className="col-span-1 border bg-slate-200 h-48"></div>
        <div className="col-span-2 border bg-slate-200 h-48"></div>
      </section>

      {/* Contact Content */}
      <section className="grid grid-cols-2 gap-24 p-8 mx-16 text-slate-700">
        <div className="flex flex-col gap-8 p-4 justify-start" >
          <h1 className="text-3xl font-bold">CONTACT US</h1>
          <p className="text-lg mt-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <ContactForm />
      </section>

      {/* Testimonial Content */}
      <TestimonialSlider />
    </div>
  );
}
