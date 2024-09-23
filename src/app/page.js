// "use client";
// import Link from 'next/link';
// import BaziCalculator from '../components/BaziCalculator/BaziCalculator';
// import ContactForm from '@/components/ContactForm/ContactForm';
// import TestimonialSlider from '@/components/TestimonialSlider/TestimonialSlider';

// export default function Home() {
//   return (
//     <div>

//       {/* Home Content */}
//       <section className="flex flex-col p-8 justify-center items-center bg-slate-50 mx-16 text-slate-700">
//         <h1 className="text-3xl font-bold">Discover Your Destiny With Bazi Calculator</h1>
//         <p className="text-lg justify-center align-middle mx-8 my-4">Unlock the secrets of your personality, career path, and future by exploring the ancient Chinese art of Bazi. Just enter your date of birth below, and get a personalized reading to better understand your life's journey.</p>
//         <BaziCalculator />
//       </section >

//       {/* Services Content */}
//       <section className="grid grid-cols-2 gap-24 p-8 text-slate-700">
//         <div className="flex flex-col gap-8 mx-16" >
//           <h1 className="text-3xl font-bold">WHAT IS BAZI</h1>
//           <p className="text-lg">"Bazi, or ""Eight Characters,"" is a traditional Chinese system that analyzes a person's destiny based on their birth date and time. It consists of four pairs of ""Heavenly Stems"" and ""Earthly Branches,"" which represent the year, month, day, and hour of birth. <br/><br/>Rooted in ancient Chinese philosophy and metaphysics, Bazi has origins that trace back over 3,000 years. The system provides insights into various aspects of life, including personality, relationships, career, and health, by examining the interactions of the Five Elements (Wood, Fire, Earth, Metal, Water) and the balance of Yin and Yang."</p>
//           <Link href="/" className="font-semibold text-xl">Link to Service Page</Link>
//           <p className="text-lg">Lorem ipsum dolor sit amet, <br/>consectetur adipiscing elit.</p>
//         </div>
//         <div className="bg-slate-300 border rounded m-4"></div>
//       </section>

//       {/* About Content */}
//       <section className=" grid grid-cols-3 gap-4 px-24 py-16 bg-slate-100">
//         <div className="col-span-2 border bg-slate-200 h-48"></div>
//         <div className="col-span-1 border bg-slate-200 h-48"></div>
//         <div className="col-span-1 border bg-slate-200 h-48"></div>
//         <div className="col-span-2 border bg-slate-200 h-48"></div>
//       </section>

//       {/* Contact Content */}
//       <section className="grid grid-cols-2 gap-24 p-8 mx-16 text-slate-700">
//         <div className="flex flex-col gap-8 p-4 justify-start" >
//           <h1 className="text-3xl font-bold">CONTACT US</h1>
//           <p className="text-lg mt-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
//           <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </div>
//         <ContactForm />
//       </section>

//       {/* Testimonial Content */}
//       <TestimonialSlider />
//     </div>
//   );
// }

"use client";
import Link from 'next/link';
import BaziCalculator from '../components/BaziCalculator/BaziCalculator';
import ContactForm from '@/components/ContactForm/ContactForm';
import TestimonialSlider from '@/components/TestimonialSlider/TestimonialSlider';

export default function Home() {
  return (
    <div>

      {/* Home Content */}
      <section className="flex flex-col p-4 md:p-8 justify-center items-center bg-slate-50 mx-4 md:mx-16 text-slate-700 mt-8 mb-16">
        <h1 className="text-2xl text-center md:text-3xl font-bold">Discover Your Destiny With Bazi Calculator</h1>
        <p className="text-center md:text-lg justify-center align-middle mx-2 md:mx-8 my-2 md:my-4">Unlock the secrets of your personality, career path, and future by exploring the ancient Chinese art of Bazi. <br/>Just enter your date of birth below, and get a personalized reading to better understand your life's journey.</p>
        <BaziCalculator />
      </section >

      {/* Services Content */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 md:p-16 text-slate-700 mb-16">
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
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 md:p-16 text-slate-700 mb-16">
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
