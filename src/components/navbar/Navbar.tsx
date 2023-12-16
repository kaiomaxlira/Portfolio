import React from "react";
import Link from "next/link";

interface NavBarProps {
  alterarConteudo: (conteudo: string) => void;
}

const NavBar: React.FC<NavBarProps> = ({ alterarConteudo }) => {
  return (
    <div>
      <nav className="fixed top-0 w-full h-[5rem]">
        <ul className="space-x-7 font-bold text-lg flex ml-[10rem] mt-[1.5rem] ">
          <li className="my-0">
            <Link href="/Aboutme" passHref legacyBehavior>
              <a onClick={() => alterarConteudo("Aboutme")}>About Me</a>
            </Link>
          </li>
          <li className="my-0">
            <Link href="/Skills" passHref legacyBehavior>
              <a onClick={() => alterarConteudo("Skills")}>Skills</a>
            </Link>
          </li>
          <li className="my-0">
            <Link href="/Projetos" passHref legacyBehavior>
              <a onClick={() => alterarConteudo("Projeto")}>Projetos</a>
            </Link>
          </li>
          <li className="my-0">
            <Link href="/Sobre" passHref legacyBehavior>
              <a onClick={() => alterarConteudo("Sobre")}>Sobre</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;