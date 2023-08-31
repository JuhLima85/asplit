import React from "react";
import aboutImg from "../assets/images/cardabout.png";
import fundadorImg from "../assets/images/fundador.png";
const About = () => {
  const info = [
    { text: "Anos de experiência", count: "02" }    
  ];
  return (
    <section id="about" className="py-10 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          Sobre o <span className="text-blue-400">técnico</span>
        </h3>        
        <br />
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div className="text-gray-300 my-3">
              <p className="text-justify leading-7 w-11/12 mx-auto">
              Olá, meu nome é Anderson e sou o técnico responsável pela equipe Anderson do Split. Após mais de 20 anos de experiência 
              como taxista, senti a necessidade de encontrar um trabalho onde pudesse estar mais perto de minha família e que também me possibilitasse
              fazer a diferença na vida das pessoas. Ser um solucionador de problemas, como costumo dizer.
              Daí surgiu a ideia de dar início ao "Anderson do Split". Nossa equipe é formada pela minha esposa, Nilce, que é quem me acompanha
              na grande maioria dos atendimentos em campo; minha filha, Andressa, que é quem nos ajuda com toda a parte burocrática incluindo 
              a confecção de orçamentos e lançamento de notas fiscais; meu primo Léo, que me auxilia em trabalhos mais pesados para os quais preciso de
              mais mão de obra; e eu, que tento orientar e gerenciar esses excelentes profissionais da melhor forma possível dividindo todo o conhecimento que
              pude adquirir na área enquanto fui auxiliar técnico de um grande nome da refrigeração, meu mentor, Gabriel Lima.
              Com ele aprendi muito sobre a área e, principalmente, pude me destacar diante da nova tecnologia que aparecia no mercado,
              tecnologia Inverter.
              Hoje sou especialista Inverter e atendo desde uma simples manutenção preventiva até contratos com grandes empresas.
              Ficarei muito feliz de poder ajudar a você com seu ar condicionado. Tenha seu equipamento o problema que tiver, resolveremos
              da melhor, mais justa, honesta e econômica maneira possível.
              </p>
              
              <br />

            </div>
          </div>
          <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
            <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg ">
              <img
                src={fundadorImg}
                alt=""
                className="w-full object-cover bg-cyan-600 rounded-xl"
                />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
