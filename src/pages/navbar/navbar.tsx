import React from "react";
import Link from "next/link";

const Menu: React.FC = () => {
  return (
    <div className="w-1/2 ml-[36rem]">
      <nav className="fixed top-0 w-full h-[5rem]">
        <ul className="space-x-7 font-bold text-lg flex ml-[10rem] mt-[1.5rem] ">
          <li className="my-0">
            <Link href="/aboutme" legacyBehavior>
              <a>About Me</a>
            </Link>
          </li>
          <li className="my-0">
            <Link href="/skills" legacyBehavior>
              <a>Skills</a>
            </Link>
          </li>
          <li className="my-0">
            <Link href="/sobre" legacyBehavior>
              <a>Sobre</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
