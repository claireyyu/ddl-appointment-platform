import ServiceCard from '@/components/ServiceCard/ServiceCard';
import service1 from '../../../public/service-1.png';
import service2 from '../../../public/service-2.png';
import service3 from '../../../public/service-3.png';
import service4 from '../../../public/service-4.png';
import Image from 'next/image';

export default function page() {
  return (
    <div>
      {/* Services Content */}
      <div className="flex flex-col m-4 md:mx-16 my-10">
        <p className="text-justify md:text-lg mb-10">
        At Lab 8, we offer a variety of services designed to help you gain deep insights into your life's path using the ancient wisdom of BaZi (Chinese Astrology) and psychic guidance. Whether you're seeking clarity, personal growth, or a fresh perspective on your future, our services are tailored to empower you in achieving success and fulfillment.<br/><br/>Explore our services below.
        </p>

        {/* Service Cards Grid */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 px-4 lg:px-24 py-8 lg:py-16 text-foreground">
          <div className="relative">
            <Image src={service1} alt="Service 1" className="w-full h-auto" />
            <div className="absolute bottom-0 right-8 p-4 ">
              <h1 className="text-white text-2xl font-bold text-center">Single Question<br/>Reading</h1>
            </div>
          </div>
          <div className="relative">
            <Image src={service2} alt="Service 2" className="w-full h-auto" />
            <div className="absolute bottom-0 left-8 p-4 ">
              <h1 className="text-white text-2xl font-bold text-center">Current Year<br/>Bazi Interpretation</h1>
            </div>
          </div>
          <div className="relative">
            <Image src={service3} alt="Service 3" className="w-full h-auto" />
            <div className="absolute bottom-0 left-8 p-4 ">
              <h1 className="text-white text-2xl font-bold text-center">Lifetime BaZi<br/>Interpretation</h1>
            </div>
          </div>
          <div className="relative">
            <Image src={service4} alt="Service 3" className="w-full h-auto" />
            <div className="absolute bottom-4 left-8 p-4 ">
              <h1 className="text-white text-2xl font-bold text-center">Psychic Reading</h1>
            </div>
          </div>

        </section>
      </div>
    </div>
  );
}
