import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import foto1 from "../assets/images/aula.png";
import foto2 from "../assets/images/placa.png";
import foto3 from "../assets/images/preventiva.png";
import foto4 from "../assets/images/corretiva.png";
import foto5 from "../assets/images/instalacao.png";
import foto6 from "../assets/images/portatil.png";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

const Project = () => {
  const projects = [
    {
      img: foto1,
      name: "Aula de eletrônica em família",    
    },    
    {
      img: foto2,
      name: "Reparo em placa Inverter",
    },
    {
      img: foto3,
      name: "Manutenção preventiva",    
    },    
    {
      img: foto4,
      name: "Manutenção corretiva",
    },
    {
      img: foto5,
      name: "Instalação de Split - Contrato",    
    },    
    {
      img: foto6,
      name: "Equipamento portátil",
    }
  ];
  return (
    <section id="services" className="py-10 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          <span className="text-blue-400">Serviços</span> Disponíveis
        </h3>
        <p className="custom-text-green mt-3 text-lg"></p>
      </div>
      <br />
      <div className="flex max-w-6xl gap-6 px-5 mx-auto items-center justify-center relative">
        <div className="lg:w-2/3 w-full">
          <Swiper
            slidesPerView={1.2}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            {projects.map((project_info, i) => (
              <SwiperSlide key={i}>
                <div className="h-fit w-full p-4 bg-slate-700 rounded-xl flex flex-col items-center">
                  <img src={project_info.img} alt="" className="rounded-lg" />
                  <h3 className="text-xl my-4">{project_info.name}</h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
};

export default Project;
