"use client";

import React from "react";
import { Social } from "../navbarsocial/components/Social";

import GitHub from "../../assets/GitHub.svg";
import linkedin from "../../assets/linkedin.svg";
import instagram from "../../assets/instagram.svg";

export const NavSocial = () => {
  return (
    <div>
      <div className="absolute h-[15rem] w-[5rem] left-[4rem] mt-[-31.4rem]
       bg-social shadow-md shadow-sombra rounded-lg">

        <div className="grid grid-cols-1 gap-5 mt-[0.7rem]">
          <Social image={GitHub} url="https://github.com/kaiomaxlira" />
          <Social image={linkedin} url="https://www.linkedin.com/in/kaio-max-16b33a187/" />
          <Social image={instagram} url="https://www.instagram.com/kaiomaxl.p/" />
        </div>

      </div>
    </div>
  );
};
