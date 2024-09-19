import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { reviews } from './reviewsData';

export default function Testimonials () {
    return (
      <section className="max-w-screen-md mx-auto flex flex-col justify-center my-10">
        <div className="relative select-none px-4">
          <Splide
            options={{
              perPage: 1,
              autoplay: true,
              speed: 1000,
              rewind: true,
              rewindByDrag: true,
            }}
          >
            {reviews.map((review) => (
              <SplideSlide key={review.id} className="flex items-center bg-white p-12 rounded-lg gap-4">
                <img className="w-36 h-36 rounded-full object-cover mx-auto mb-4" src={review.image} alt="" />
                <div className="content">
                  <p className="text-gray-600 mb-4 text-base">{review.text}</p>
                  <div className="flex items-center gap-2">
                    <div className="rating flex">
                      <span className="text-red-500 text-base">&#9733;</span>
                      <span className="text-red-500 text-base">&#9733;</span>
                      <span className="text-red-500 text-base">&#9733;</span>
                      <span className="text-red-500 text-base">&#9733;</span>
                      <span className="text-red-500 text-base">&#9734;</span>
                    </div>
                    <p className="font-semibold">{review.name}</p>
                  </div>
                </div>
              </SplideSlide>
            ))}
            </Splide>
            <p className="flex my-4 font-semibold justify-center">Rated 4.6/5 based on 121 reviews. Showing our 4 & 5 star reviews.</p>    
        </div>
      </section>
    );
  };