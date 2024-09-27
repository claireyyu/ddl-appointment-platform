import ServiceCard from '@/components/ServiceCard/ServiceCard';
import service1 from '../../../public/service-1.png';
import service2 from '../../../public/service-2.png';
import service3 from '../../../public/service-3.png';
import service4 from '../../../public/service-4.png';

export default function page() {
  return (
    <div>
      {/* Services Content */}
      <div className="flex flex-col m-4 md:mx-16 my-10">
        <p className="text-base md:text-lg mb-10">
        At Lab 8, we offer a variety of services designed to help you gain deep insights into your life's path using the ancient wisdom of BaZi (Chinese Astrology) and psychic guidance. Whether you're seeking clarity, personal growth, or a fresh perspective on your future, our services are tailored to empower you in achieving success and fulfillment.<br/><br/>Explore our services below.
        </p>

        {/* Service Cards Grid */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 px-4 lg:px-24 py-8 lg:py-16 text-foreground">
          <ServiceCard name="personal-reading" description="Personal Single-Question Reading (Email Reply Within 1 business day)" pic={service1} />
          <ServiceCard name="interpretation-year" description="Detailed BaZi Interpretation for the Current Year" pic={service2}/>
          <ServiceCard name="interpretation-life" description="Comprehensive BaZi Interpretation for a Lifetime" pic={service3}/>
          <ServiceCard name="psychic-reading" description="Psychic Reading (Non-BaZi Service)" pic={service4}/>
        </section>
      </div>
    </div>
  );
}
