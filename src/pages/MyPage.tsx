"use client";

import React, { useState } from "react";
import Navbar from "@/components/navbar/Navbar";
import Logo from "@/assets/kaio-max01.png";
import { Social } from "@/components/logo/components/social";
import Aboutme from "@/components/aboutme/Aboutme";
import Sobre from "@/components/sobre/Sobre";
import Projeto from "@/components/projetos/Projetos";
import Skills from "@/components/skills/Skills";

const MyPage: React.FC = () => {
  const [conteudo, setConteudo] = useState("Aboutme");

  const conteudoMap = {
    Aboutme: <Aboutme />,
    Sobre: <Sobre />,
    Projeto: <Projeto />,
    Skills: <Skills />,
  };

  function alterarConteudo(novoConteudo: string) {
    setConteudo(novoConteudo);
  }
  
  return (
    <>
      <div
        className=" flex h-screen bg-cover bg-center bg-zinc-800"
        style={{ backgroundImage: "url('/images/background.jpg')" }}
      >
        <div className="bg-zinc-800 w-1/3 p-4 h-screen flex items-center justify-center">
          <Social image={Logo} src="" />
        </div>
        <div className=" bg-gradient-to-r from-gray-300 via-gray-400 to-white shadow-md rounded-3xl w-[51rem] h-[31rem] ml-[3rem] mt-[6rem]">
        {conteudoMap[ conteudo as keyof typeof conteudoMap]}
        </div>
        <div className="fixed top-0 w-full z-10 ml-[35rem]">
          <Navbar alterarConteudo={alterarConteudo} />
        </div>
      </div>
    </>
  );
};

export default MyPage;