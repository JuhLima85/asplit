import React from "react";
import equipeImg from "../assets/images/foto.png";
import setaImag from "../assets/images/seta.png";

const Hero = () => {
  const social_media = [

    { logo: "logo-whatsapp", link: "https://wa.me/+5522981056685" },
    { logo: "logo-instagram", link: "https://www.instagram.com/andersondosplit/?utm_medium=copy_link" },
    { logo: "logo-facebook", link: "https://www.facebook.com/andersondosplit/" },
    { logo: "logo-youtube", link: "https://www.youtube.com/channel/UCLlkkfVLIpV1aADo3y6UXHQ" },

  ];
  return (
    <section
      id="home"
      className="min-h-screen flex py-10 md:flex-row flex-col items-center"
    >
      <div className="flex-1 flex items-center justify-center h-full">
        <img src={equipeImg} alt="" className="md:w-8/12 w-4/5 w-full h-full object-cover" style={{ paddingTop: '30px', paddingBottom: '16px' }} />
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="custom-text-blue md:text-5xl text-4xl">
              Olá!
              <br />
            </span>
            Somos a equipe <br />
            <span>Anderson do Split</span>
          </h1>
          <h4 className="md:text-xl text-base md:leading-normal leading-5 mt-4 font-bold text-gray-600 pr-6 pl-6 md:pl-0">
            Sou Anderson, o técnico responsável e essa é minha parceira de campo e de vida, Nilce.
          </h4>
          <div className="mt-20">
            <div className="flex items-center justify-center md:justify-start">
              <button className="custom-download-button text-1g" style={{ marginBottom: '50px' }}>
                Entre em Contato
              </button>
              <img
                src={setaImag}
                alt=""
                className="h-full ml-4"
                style={{ height: '90px' }}
              />
            </div>
          </div>
          <div className="mt-0 text-3xl flex items-center md:justify-start justify-center gap-5">
            {social_media?.map((item) => (
              <a
                key={item.logo}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-white cursor-pointer"
              >
                <ion-icon name={item.logo}></ion-icon>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
