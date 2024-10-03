"use client";
import Link from 'next/link';
import BaziCalculator from '../components/BaziCalculator/BaziCalculator';
import ContactForm from '@/components/ContactForm/ContactForm';
import TestimonialSlider from '@/components/TestimonialSlider/TestimonialSlider';
import Image from 'next/image'
import homeAboutPic from '../../public/home-bg-2.png'
import Navbar from '@/components/Navbar/Navbar'

export default function page() {

  return (
    <div>
      {/* Home Content */}
      <div className="flex flex-col bg-cover bg-center min-h-screen" style={{ backgroundImage: 'url(/home-bg-1.png)' }}>
        <Navbar/>
        <section className="flex-1 flex flex-col xl:flex-row items-center gap-4 p-4 xl:p-22 text-foreground">
          <span className="flex items-center justify-center w-full lg:w-1/2 mx-4 lg:mx-16" />

          <div className="flex flex-col items-center justify-center w-full lg:w-1/3 gap-4 lg:gap-8 mx-4 lg:mx-16 lg:ml-24">
            <BaziCalculator />
          </div>
        </section>
      </div>

      {/* About Content
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 text-foreground mx-4 md:mx-16 lg:mx-24">
          <div className="flex flex-col gap-4 md:gap-8 mx-4 md:mx-24 lg:mx-28 xl:mx-32 mt-8 lg:mt-24 p-4 xl:p-8 2xl:p-16">
            <h1 className="text-2xl md:text-3xl font-bold">WHAT IS BAZI?</h1>
            <p className="text-justify md:text-xl tracking-wide leading-loose">
            Bazi, or "Eight Characters," is a traditional Chinese system that analyzes a person's destiny based on their birth date and time. It consists of four pairs of "Top Stems" and "Bottom Branches," which represent the year, month, day, and hour of birth.<br /><br />
            Rooted in ancient Chinese philosophy and metaphysics, Bazi has origins that trace back over 3,000 years. The system provides insights into various aspects of life, including personality, relationships, career, and health, by examining the interactions of the Five Elements (Wood, Fire, Earth, Metal, Water) and the balance of Yin and Yang.   
            </p>
            <Link href="/services" className="font-semibold text-lg md:text-xl hover:underline">Learn More</Link>
          </div>
        </section> */}
      {/* <div className="flex flex-col bg-cover bg-center min-h-screen" style={{ backgroundImage: 'url(/home-bg-2.png)' }}>
        <section className="flex-1 flex flex-col xl:flex-row items-center gap-4 p-4 xl:p-22 text-foreground">
          <div className="flex flex-2 flex-col items-center justify-center gap-4 lg:gap-8 mx-4 lg:mx-16 lg:ml-24">
            <h1 className="text-2xl md:text-3xl font-bold">WHAT IS BAZI?</h1>
            <p className="text-justify md:text-xl tracking-wide leading-loose">
            Bazi, or "Eight Characters," is a traditional Chinese system that analyzes a person's destiny based on their birth date and time. It consists of four pairs of "Top Stems" and "Bottom Branches," which represent the year, month, day, and hour of birth.<br /><br />
            Rooted in ancient Chinese philosophy and metaphysics, Bazi has origins that trace back over 3,000 years. The system provides insights into various aspects of life, including personality, relationships, career, and health, by examining the interactions of the Five Elements (Wood, Fire, Earth, Metal, Water) and the balance of Yin and Yang.   
            </p>
            <Link href="/services" className="font-semi bold text-lg md:text-xl hover:underline">Learn More</Link>
          </div>
          <span className="flex fleitems-center justify-center w-full lg:w-1/2 mx-4 lg:mx-48" />
        </section>
      </div> */}

            {/* About Content */}
      <div className="min-h-screen bg-cover bg-center md:bg-[url(/home-bg-2.png)] bg-none">
        <section className="min-h-screen grid grid-cols-3 gap-4 p-4 xl:p-22 text-foreground">
          <div className="col-span-3 md:col-span-2 flex flex-col items-center justify-center gap-4 lg:gap-8 mx-4 md:mx-8 my-8 lg:mx-16">
            <h1 className="text-2xl md:text-3xl font-bold">WHAT IS BAZI?</h1>
            <p className="text-justify md:text-xl tracking-wide leading-loose">
              Bazi, or "Eight Characters," is a traditional Chinese system that analyzes a person's destiny based on their birth date and time. It consists of four pairs of "Top Stems" and "Bottom Branches," which represent the year, month, day, and hour of birth.<br /><br />
              Rooted in ancient Chinese philosophy and metaphysics, Bazi has origins that trace back over 3,000 years. The system provides insights into various aspects of life, including personality, relationships, career, and health, by examining the interactions of the Five Elements (Wood, Fire, Earth, Metal, Water) and the balance of Yin and Yang.   
            </p>
            <Link href="/services" className="font-semibold text-lg md:text-xl hover:underline">Learn More</Link>
          </div>
          <div className="hidden md:block col-span-1" /> {/* Placeholder */}
        </section>
      </div>


      {/* Contact Content */}
      {/* <section className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 md:p-16 text-foreground mb-16">
        <div className="flex flex-col gap-4 md:gap-8 mx-4 md:mx-16">
          <h1 className="text-2xl md:text-3xl font-bold text-justify">CONTACT US</h1>
        </div>
        <ContactForm />
      </section> */}

      <div className="flex flex-col bg-cover bg-center min-h-screen" style={{ backgroundImage: 'url(/home-bg-3.png)' }}>
        <section className="flex-1 flex flex-col xl:flex-row items-center gap-4 p-4 xl:p-22 text-foreground">


        </section>
      </div>

      {/* Testimonial Content */}
      <TestimonialSlider />
    </div>
  );
}
