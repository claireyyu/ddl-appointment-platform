"use client";
import ContactForm from '@/components/ContactForm/ContactForm';

export default function Home() {
  return (
    <div>
      {/* Contact Content */}
      <section className="grid grid-cols-2 gap-24 p-8 mx-16 text-slate-700">
        <div className="flex flex-col gap-8 p-4 justify-start" >
          <h1 className="text-3xl font-bold">CONTACT US</h1>
          <p className="text-lg mt-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <ContactForm />
      </section>

    </div>
  );
}
