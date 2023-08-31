import React from "react";
import contatoImg from "../assets/images/contato.png";

const Contact = () => {
  const contact_info = [
    
    { logo: "logo-whatsapp", link: "https://wa.me/+5522981056685" },
    { logo: "logo-instagram", link: "https://www.instagram.com/andersondosplit/?utm_medium=copy_link" },
    { logo: "logo-facebook", link: "https://www.facebook.com/andersondosplit/" },
    { logo: "logo-youtube", link: "https://www.youtube.com/channel/UCLlkkfVLIpV1aADo3y6UXHQ" }
   
  ];
  return (
    <section id="contact" className="py-10 px-3 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          Acompanhe-nos nas <span className="text-blue-400">redes</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Será um prazer</p>

        <div className="mt-16 flex flex-wrap flex-col
         gap-6 max-w-3xl bg-gray-800 md:p-6 p-2 rounded-lg justify-center mx-auto"> 
          <div className="flex flex-col gap-7 items-center justify-center">
              <div className="flex gap-4 flex-wrap items-center justify-center">
            {contact_info?.map((contact) => (              
                <div className="min-w-[3rem] text-3xl flex items-center justify-center text-white rounded-full">
                <a
                  key={contact.logo}
                   href={contact.link}
                   className="md:text-base text-sm break-words"
                   target="_blank" 
                   rel="noopener noreferrer"                   
                   style={{ fontSize: "2.5rem" }}
                  >
                    <div className="custom-balloon-icons">
                    <ion-icon name={contact.logo} className="custom-icon"
                        style={{ fontSize: "2.5rem" }}></ion-icon>
                    </div>
                  </a>                                   
                </div>                                              
            ))}           
            <div>
              <img src={contatoImg} alt="Equipe Anderson do Split" width="300" height="auto" />
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Contact;
