"use client";
import Link from 'next/link';
import BaziCalculator from '../components/BaziCalculator/BaziCalculator';
import ContactForm from '@/components/ContactForm/ContactForm';
import TestimonialSlider from '@/components/TestimonialSlider/TestimonialSlider';
import Image from 'next/image'
import homeCaclPic from '../../public/home-calculator.png'
import homeAboutPic from '../../public/home-about.png'

export default function page() {

  return (
    <div>

      {/* Home Content */}
      <section className="flex flex-col items-center xl:flex-row gap-4 p-4 xl:p-16 text-foreground mb-16">
        <div className="mx-4 lg:mx-16 w-full lg:w-1/2">
          <Image
            src={homeCaclPic}
            alt="Decorative image"
            className="w-full h-48 sm:h-64 md:h-80 lg:h-auto object-cover"></Image>
        </div>

        <div className="flex flex-col gap-4 lg:gap-8 mx-4 lg:mx-16 w-full lg:w-1/2">
          <BaziCalculator />
        </div>
      </section>

      {/* Services Content */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-4 lg:p-16 text-foreground mb-16">
        <div className="flex flex-col gap-4 md:gap-8 mx-4 md:mx-16">
          <h1 className="text-2xl md:text-3xl font-bold">WHAT IS BAZI?</h1>
          <p className="text-justify md:text-lg">
          Bazi, or "Eight Characters," is a traditional Chinese system that analyzes a person's destiny based on their birth date and time. It consists of four pairs of "Top Stems" and "Bottom Branches," which represent the year, month, day, and hour of birth.<br /><br />
          Rooted in ancient Chinese philosophy and metaphysics, Bazi has origins that trace back over 3,000 years. The system provides insights into various aspects of life, including personality, relationships, career, and health, by examining the interactions of the Five Elements (Wood, Fire, Earth, Metal, Water) and the balance of Yin and Yang.   
          </p>
          <Link href="/services" className="font-semibold text-lg md:text-xl hover:underline">Learn More</Link>
        </div>
        <div className="mx-4 md:mx-16 h-64 md:h-auto">
          <Image
              src={homeAboutPic}
              alt="Decorative image"
              className="w-full h-48 sm:h-64 md:h-80 lg:h-auto object-cover"></Image>
        </div>
      </section>


      {/* Contact Content */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 md:p-16 text-foreground mb-16">
        <div className="flex flex-col gap-4 md:gap-8 mx-4 md:mx-16">
          <h1 className="text-2xl md:text-3xl font-bold text-justify">CONTACT US</h1>
        </div>
        <ContactForm />
      </section>



      {/* Testimonial Content */}
      <TestimonialSlider />
    </div>
  );
}
