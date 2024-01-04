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
      <p className="font-libre text-lg mt-[2rem] ml-[2rem] xl:w-[43rem]">
                Olá, meu nome é Kaio Max, e sou um desenvolvedor Front-End apaixonado por aprendizado contínuo.
                Especializado em ReactJS, estou sempre buscando novos desafios para expandir meu conhecimento.
                Minha curiosidade vai além do código, estendendo-se a tópicos que vão desde cultura pop até filosofia.
                Se você procura alguém dedicado a explorar e facilitar eficientemente o mundo da tecnologia, você está no lugar certo!
            </p>
      <div className="grid grid-cols-2 gap-2px w-[6rem] h-[3rem] mt-[12rem] ml-[2rem]">
        <Social image={GitHub} url="https://github.com/kaiomaxlira" />
        <Social image={Linkedin} url="https://www.linkedin.com/in/kaio-max-16b33a187/"/>
      </div>
      <div className="ml-[2rem] mt-[-8rem]">
        <Info title="Email" description="23 anos" />
      </div>
    </div>
  );
};
export default aboutme;
