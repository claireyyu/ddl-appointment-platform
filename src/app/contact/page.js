"use client";
import ContactForm from '@/components/ContactForm/ContactForm';

export default function page() {
  return (
    <div>
      {/* Contact Content */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24 p-4 md:p-8 mx-4 md:mx-16 text-slate-700">
        <div className="flex flex-col gap-4 md:gap-8 p-4 justify-start">
          <h1 className="text-2xl md:text-3xl font-bold">CONTACT US</h1>
          <p className="text-base md:text-lg mt-6 md:mt-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="text-base md:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <ContactForm />
      </section>
    </div>
  );
}
