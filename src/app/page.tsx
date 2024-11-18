"use client";
import BaziCalculator from '../components/BaziCalculator/BaziCalculator';
import ContactForm from '../components/ContactForm/ContactForm';
import TestimonialSlider from '../components/TestimonialSlider/TestimonialSlider';
import Navbar from '../components/Navbar/Navbar';
import HomeAbout from '../components/HomeAbout/HomeAbout'

export default function Page() {
  return (
    <div>
      {/* <Navbar/> */}
      <div className="min-h-screen bg-cover bg-center bg-[url(/home-bg-1.png)] flex flex-col">
        <section className="flex-1 flex flex-col xl:flex-row items-center p-4 xl:p-22">
          <span className="w-1/2 2xl:w-3/5" />
          <div className="max-w-xl mx-auto lg:w-1/3 lg:ml-24">
            <BaziCalculator />
          </div>
        </section>
      </div>

      <div className="min-h-screen bg-cover bg-center md:bg-[url(/home-bg-2.png)]">
        <section className="min-h-screen grid grid-cols-2 gap-4">
          <div className="col-span-2 md:col-span-1 flex flex-col justify-center mx-4 md:mx-8 lg:ml-24 my-8 lg:my-24">
            <HomeAbout />
          </div>
          <span className="hidden md:block md:col-span-1" />
        </section>
      </div>

      <div id="contact" className="min-h-screen bg-cover bg-center bg-contact-bg md:bg-[url(/home-bg-3.png)]">
        <section className="min-h-screen flex">
          <div className="max-w-4xl md:w-1/2 flex items-center mx-4 md:mx-8 lg:mx-24">
            <ContactForm />
          </div>
          <div className="hidden md:block md:w-1/2" />
        </section>
      </div>

      <section className="my-10 px-4 md:px-0 max-w-screen-lg mx-auto ">
        <TestimonialSlider />
      </section>
    </div>
  );
}