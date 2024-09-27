"use client";
import ContactForm from '@/components/ContactForm/ContactForm';

export default function page() {
  return (
    <div>
      {/* Contact Content */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 p-4 lg:p-8 mx-4 lg:mx-16 text-foreground">
        <div className="flex flex-col gap-4 md:gap-8 p-4 justify-start">
          <h1 className="text-2xl md:text-3xl font-bold">CONTACT US</h1>
        </div>
        <ContactForm />
      </section>
    </div>
  );
}
