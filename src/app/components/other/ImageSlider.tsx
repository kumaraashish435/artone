import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type Slide = {
  image: string;
};

const slides: Slide[] = [
  { image: "/images/rx8yiXQAYcJ2anf8tf34jG1K9o.avif" },
  { image: "/images/OsUZnZkbS3gcnAPI3U1U7kV69E.avif" },
  { image: "/images/G9dElxhCARLvBRI2SYFPuFXb3Cs.avif" },
  { image: "/images/d2ALQdwcyeDXBdx2YUVfURRzGPI.avif" },
  { image: "/images/cnueJHXxK99hpuLujo82aW9IwTQ.avif" },
  { image: "/images/8znT9YsknaKlYw4tPSxyVSAiFiU.avif" },
];

const ImageSlider: React.FC = () => {
  return (
    <div className="w-full max-w-screen-xl mx-auto px-2 sm:px-4 py-4 sm:py-8">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={16}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        breakpoints={{
          480: { slidesPerView: 1.1, spaceBetween: 16 },
          640: { slidesPerView: 1.25, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 24 },
          1024: { slidesPerView: 3, spaceBetween: 32 },
        }}
        className="!overflow-visible"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide
            key={idx}
            className="rounded-2xl overflow-hidden shadow-xl h-[220px] sm:h-[320px] md:h-[400px] lg:h-[500px] xl:h-[600px] relative"
          >
            <img
              src={slide.image}
              alt={`slide-${idx}`}
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
