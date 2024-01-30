import React from "react";
import { Title } from "@/components/title";
import { Tools } from "@/components/skills/components/tools";

import Html from "../../assets/html.svg";
import Css from "../../assets/css.svg";
import Js from "../../assets/js.svg";
import Type from "../../assets/typescript.svg";
import ReactJs from "../../assets/react.svg";
import Next from "../../assets/next-js.svg";
import Tailwind from "../../assets/tailwind.svg";

const aboutme: React.FC = () => {
  return (
    <div className="">
      <Title title="FERRAMENTAS" />

      <div className="grid grid-cols-6 gap-7">

        <Tools image={Html}url="https://developer.mozilla.org/pt-BR/docs/Web/HTML"/>
        <Tools image={Css}url="https://developer.mozilla.org/pt-BR/docs/Web/CSS"/>
        <Tools image={Js}url="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript"/>
        <Tools image={Type} url="https://www.typescriptlang.org/" />
        <Tools image={ReactJs} url="https://react.dev/" />
        <Tools image={Tailwind} url="https://tailwindcss.com/" />
      </div>
    </div>
  );
};
export default aboutme;
