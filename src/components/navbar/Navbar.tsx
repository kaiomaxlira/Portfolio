import React from "react";
import Link from "next/link";

const NavBar: React.FC = () => {
 return (
  <div >
    <nav className="fixed top-0 w-full h-[5rem]">
      <ul className="space-x-7 font-bold text-lg flex ml-[10rem] mt-[1.5rem] ">
        <li className="my-0">
          <Link href="/Aboutme" legacyBehavior>
            About Me
          </Link>
        </li>
        <li className="my-0">
          <Link href="/Skills" legacyBehavior>
            Skills
          </Link>
        </li>
        <li className="my-0">
          <Link href="/Projetos" legacyBehavior>
            Projetos
          </Link>
        </li>
        <li className="my-0">
          <Link href="/Sobre" legacyBehavior>
            Sobre
          </Link>
        </li>
      </ul>
    </nav>
  </div>
 );
};
export default NavBar;