import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import slide1 from "../../assets/home/slide1.jpg";
import slide2 from "../../assets/home/slide2.jpg";
import slide3 from "../../assets/home/slide3.jpg";
import slide4 from "../../assets/home/slide4.jpg";
import slide5 from "../../assets/home/slide5.jpg";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <section className="my-10">
      <SectionTitle
        subHeading={"From 11:00am to 10:00pm"}
        heading={"Book a Table"}
        
      ></SectionTitle>
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper mb-20 max-w-4xl mx-auto cinzel-font uppercase"
      >
        <SwiperSlide>
          <img src={slide1} alt="" />
          <h3 className="text-white text-3xl font-medium text-center -mt-12 pb-15">
            Salads
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />
          <h3 className="text-white text-3xl font-medium text-center -mt-12 pb-15">
            Pizzas
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" />
          <h3 className="text-white text-3xl font-medium text-center -mt-12 pb-15">
            Soups
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" />
          <h3 className="text-white text-3xl font-medium text-center -mt-12 pb-15">
            Desserts
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="" />
          <h3 className="text-white text-3xl font-medium text-center -mt-12 pb-15">
            Salads
          </h3>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
