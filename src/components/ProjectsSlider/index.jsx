import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import ProjectCard from "components/ProjectCard";
import { Pagination, Scrollbar, A11y } from "swiper";

const ProjectSlider = ({ projects }) => {
  return (
    <Swiper
      modules={[Pagination, Scrollbar, A11y]}
      spaceBetween={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      style={{
        "--swiper-pagination-color": "#555097",
        "--swiper-pagination-bullet-inactive-color": "#f3dcf388",
        "--swiper-pagination-bullet-inactive-opacity": "1",
        "--swiper-pagination-bullet-size": "16px",
        "--swiper-pagination-bullet-horizontal-gap": "5px",
      }}
      breakpoints={{
        // when window width is >= 640px
        340: {
          slidesPerView: 1,
        },
        588: {
          slidesPerView: 2,
        },
        800: {
          slidesPerView: 3,
        },

        // when window width is >= 768px
        1000: {
          slidesPerView: 4,
        },
      }}
    >
      {projects.map((project, index) => {
        return (
          <SwiperSlide>
            <ProjectCard key={index} project={project} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ProjectSlider;
