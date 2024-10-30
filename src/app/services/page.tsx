import ServiceCard from '../../components/ServiceCard/ServiceCard';
import service1 from '../../../public/service-1.png';
import service2 from '../../../public/service-2.png';
import service3 from '../../../public/service-3.png';
import service4 from '../../../public/service-4.png';
import styles from './ServicesPage.module.css';
export default function ServicesPage() {
  return (
    <div>
      {/* Services Content */}
      <div className="flex flex-col">
        <p className="text-justify md:text-lg mb-10">
        At Lab 8, we offer a variety of services designed to help you gain deep insights into your life's path using the ancient wisdom of BaZi (Chinese Astrology) and psychic guidance. Whether you're seeking clarity, personal growth, or a fresh perspective on your future, our services are tailored to empower you in achieving success and fulfillment.<br/><br/>Explore our services below.
        </p>

        {/* Service Cards Grid */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 px-4 lg:px-24 py-8 lg:py-16 text-foreground">
          <ServiceCard link="personal-reading" pic={service1} >
            <div className="absolute bottom-0 right-8 xl:p-4">
              <h1 className={styles.cardText}>Single Question<br/>Reading</h1>
            </div>
          </ServiceCard>

          <ServiceCard link="interpretation-year" pic={service2} >
            <div className="absolute bottom-0 left-8 xl:p-4 ">
              <h1 className={styles.cardText}>Current Year<br/>Bazi Interpretation</h1>
            </div>
          </ServiceCard>

          <ServiceCard link="interpretation-life" pic={service3} >
            <div className="absolute bottom-0 left-8 xl:p-4 ">
              <h1 className={styles.cardText}>Lifetime BaZi<br/>Interpretation</h1>
            </div>
          </ServiceCard>

          <ServiceCard link="psychic-reading" pic={service4} >
            <div className="absolute bottom-4 left-8 xl:p-4">
              <h1 className={styles.cardText}>Psychic Reading</h1>
            </div>
          </ServiceCard>

        </section>
      </div>
    </div>
  );
}
