import React from "react";
import { Title } from "@/components/title";
import { Social } from "./components/social"
import { Info } from "./components/Info"

import GitHub from "@/assets/GitHub.svg"
import Linkedin from "@/assets/linkedin.svg"

const aboutme: React.FC = () => {
  return (
    <div className="">
      <Title title="BEM-VINDO" />
      <p className="font-libre text-lg mt-[3rem] ml-[4rem] xl:w-[42rem]">
                Olá, meu nome é Kaio Max, e sou um desenvolvedor Front-End apaixonado por aprendizado contínuo.
                Especializado em ReactJS, estou sempre buscando novos desafios para expandir meu conhecimento.
                Minha curiosidade vai além do código, estendendo-se a tópicos que vão desde cultura pop até filosofia.
                Se você procura alguém dedicado a explorar e facilitar eficientemente o mundo da tecnologia, você está no lugar certo!
            </p>
      <div className="grid grid-cols-2 gap-2px w-[6rem] h-[3rem] mt-[10rem] ml-[43rem]">
        <Social image={GitHub} url="https://github.com/kaiomaxlira" />
        <Social image={Linkedin} url="https://www.linkedin.com/in/kaio-max-16b33a187/"/>
      </div>
      <div className="ml-[2rem] mt-[-3rem]">
        <Info title="Email:" description="kaiomax01@gmail.com" />
        <Info title="Telefone:" description="(xx) x xxxx-xxxx" />
      </div>
    </div>
  );
};
export default aboutme;
