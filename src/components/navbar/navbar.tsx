import React from "react";

const Menu: React.FC = () => {
  return (
    <div className="w-1/2 ml-[36rem]">
      <nav className="fixed top-0 w-full h-[5rem]">
        <ul className="space-x-7 font-bold text-lg flex ml-[10rem] mt-[1.5rem] ">
          <li className="my-0">
            <a href="/pagina inicial">Página Inicial</a>
          </li>
          <li className="my-0">
            <a href="/produtos">Produtos</a>
          </li>
          <li className="my-0">
            <a href="/contatos">Contatos</a>
          </li>
          <li className="my-0">
            <a href="/sobre">Sobre</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Menu;