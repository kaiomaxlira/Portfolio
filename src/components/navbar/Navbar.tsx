import React from "react";
import Link from "next/link";

interface NavBarProps {
  alterarConteudo: (conteudo: string) => void;
}

const NavBar: React.FC<NavBarProps> = ({ alterarConteudo }) => {
  return (
    <div>
      <nav className="fixed top-0 w-full h-[5rem]">
        <ul className="space-x-7 font-bold text-lg flex ml-[10rem] mt-[1.5rem]">
          <li className="my-0">
            <Link href="/Aboutme" passHref legacyBehavior >
              <a className="hover:text-navbar transition duration-700 ease-in-out font-libre text-2xl" onClick={(e) => {e.preventDefault(); alterarConteudo("Aboutme")}}>Sobre me</a>
            </Link>
          </li>
          <li className="my-0">
            <Link href="/Skills" passHref legacyBehavior>
              <a className="hover:text-navbar transition duration-700 ease-in-out font-libre text-2xl" onClick={(e) => {e.preventDefault(); alterarConteudo("Skills")}}>Habilidades</a>
            </Link>
          </li>
          <li className="my-0">
            <Link href="/Projetos" passHref legacyBehavior>
              <a className="hover:text-navbar transition duration-700 ease-in-out font-libre text-2xl" onClick={(e) => {e.preventDefault(); alterarConteudo("Projeto")}}>Projetos</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;