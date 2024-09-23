import ServiceCard from '@/components/ServiceCard/ServiceCard';

export default function page() {
  return (
    <div>
      {/* Services Header */}
      <div className="flex p-8 justify-center items-center bg-slate-50 mx-4 md:mx-16 text-slate-700">
        <h1 className="text-2xl md:text-3xl font-bold">Services</h1>
      </div>

      {/* Services Content */}
      <div className="flex flex-col m-4 md:m-20">
        <p className="text-base md:text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        {/* Service Cards Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24 px-4 md:px-24 py-8 md:py-16 bg-slate-100">
          <ServiceCard name="personal-reading" />
          <ServiceCard name="interpretation-year" />
          <ServiceCard name="interpretation-life" />
          <ServiceCard name="psychic-reading" />
        </section>

        {/* Categories Section */}
        <section className="flex flex-col">
          <h1 className="text-2xl md:text-3xl font-bold text-slate-600 mt-10">Categories We Can Interpret</h1>
          <p className="text-base md:text-lg m-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </section>
      </div>
    </div>
  );
}
