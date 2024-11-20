import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { useTranslations } from 'next-intl';

export default function Testimonials() {
  const t = useTranslations('Testimonials'); // Specify translation namespace

  // Placeholder review data from translations
  const reviews = t.raw('reviews');

  return (
    <section className="flex flex-col justify-center">
      <div className="relative select-none">
        <Splide
          options={{
            perPage: 1,
            autoplay: true,
            speed: 1000,
            rewind: true,
            rewindByDrag: true,
          }}
        >
          {reviews.map((review: any) => (
            <SplideSlide
              key={review.id}
              className="flex flex-col md:flex-row items-center bg-white p-8 md:p-12 rounded-lg gap-4"
            >
              <img
                className="w-24 h-24 md:w-36 md:h-36 rounded-full object-cover mx-auto md:mx-0 mb-4 md:mb-0"
                src={review.image}
                alt=""
              />
              <div className="content text-center md:text-left">
                <p className="text-gray-600 mb-4 text-sm md:text-base">
                  {review.text}
                </p>
                <div className="flex justify-center md:justify-start items-center gap-2">
                  <div className="rating flex">
                    <span className="text-red-500 text-sm md:text-base">&#9733;</span>
                    <span className="text-red-500 text-sm md:text-base">&#9733;</span>
                    <span className="text-red-500 text-sm md:text-base">&#9733;</span>
                    <span className="text-red-500 text-sm md:text-base">&#9733;</span>
                    <span className="text-red-500 text-sm md:text-base">&#9734;</span>
                  </div>
                  <p className="font-semibold text-sm md:text-base">{review.name}</p>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
        <p className="flex my-4 font-semibold justify-center text-center text-sm md:text-base">
          {t('summary')}
        </p>
      </div>
    </section>
  );
}
