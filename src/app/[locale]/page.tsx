"use client";
import BaziCalculator from '../../components/BaziCalculator/BaziCalculator';
import ContactForm from '../../components/ContactForm/ContactForm';
import TestimonialSlider from '../../components/TestimonialSlider/TestimonialSlider';
import Navbar from '../../components/Navbar/Navbar';
import HomeAbout from '../../components/HomeAbout/HomeAbout'
import HomeTraits from '../../components/HomeTraits/HomeTraits';
import homeTraitsPic from "../../public/home-traits.png";
import Image from 'next/image'
import HomeTraitsButtons from '../../components/HomeTraitsButtons/HomeTraitsButtons';
import { useTranslations } from 'next-intl';
import aboutLeftPic from "../../../public/about-left.png";
import aboutRightPic from "../../../public/about-right.png";
import homeContactPic from "../../../public/home-contact.png";

export default function HomePage() {
  const t = useTranslations('homeTraitClick');

  return (
    <div>
      {/* <Navbar/> */}
      <div className="min-h-screen bg-cover bg-center bg-[url(/home-bg-1-sm.png)] xl:bg-[url(/home-bg-1.png)] flex flex-col">
        <section className="flex-1 flex flex-col xl:flex-row justify-center items-center p-4 xl:p-22">
          <span className="w-1/2 2xl:w-3/5" />
          <div className="max-w-xl mx-auto xl:w-1/3 xl:ml-24">
            <BaziCalculator />
          </div>
        </section>
      </div>

      <div className="min-h-screen bg-background max-w-screen w-full mx-auto overflow-hidden flex flex-col justify-center">
        <section className="flex flex-col xl:flex-row w-full gap-4 px-4">
          {/* Left Section */}
          <div className="flex-[1] flex flex-col justify-center items-center px-4 py-2">
            <Image
              src={aboutLeftPic}
              alt="About Left"
              className="w-full object-contain h-[50vh] xl:h-[75vh]"
            />
          </div>

          {/* Middle Section */}
          <div className="flex-[2] flex flex-col justify-center items-center px-4">
            <HomeAbout />
          </div>

          {/* Right Section */}
          <div className="flex-[1] flex flex-col justify-center items-center px-4 py-2">
            <Image
              src={aboutRightPic}
              alt="About Right"
              className="w-full object-contain h-[50vh] xl:h-[75vh]"
            />
          </div>
        </section>
      </div>

      <div className="min-h-screen bg-trait-bg">
        <section className="min-h-screen flex flex-col xl:flex-row">
          <div className="flex-1 flex flex-col justify-center items-center mx-4 md:mx-8 xl:ml-24 my-8 lg:my-24">
            <HomeTraits />
          </div>
          <div className="flex-1 flex flex-col justify-center items-center mx-4 md:mx-8">
            <HomeTraitsButtons />
            <p>{t('click')}</p>
          </div>
        </section>
      </div>

      <div id="contact" className="min-h-screen bg-background">
        <section className="min-h-screen flex flex-col xl:flex-row">
          <div className="flex-1 flex flex-col justify-center items-center mx-4 md:mx-8 xl:ml-24 my-8 lg:my-24">
            <ContactForm />
          </div>
          <div className="flex-1 flex flex-col justify-center items-center mx-4 md:mx-8">
            <Image
                src={homeContactPic}
                alt="home contact"
                className="w-full object-contain h-[50vh] xl:h-[75vh]"
              />
          </div>
        </section>
      </div>

      <section className="my-10 px-4 md:px-0 max-w-screen-lg mx-auto ">
        <TestimonialSlider />
      </section>
    </div>
  );
}