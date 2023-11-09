import React from "react";
import { Title } from "@/components/title";
import { Social } from "@/components/welcome/components/social"

import GitHub from "@/assets/GitHub.svg"
import Linkedin from "@/assets/linkedin.svg"
import Instagram from "@/assets/instagram.svg"

const aboutme = () => {
  return (
    <div className="bg-red-900 rounded-3xl w-[51rem] h-[31rem] ml-[3rem] mt-[6rem]">
      <div className="">
        <Title title="BEM-VINDO" />
        <div className="grid grid-cols-3 gap-2px w-[20rem] h-[20rem] mt-[23rem] ml-[1rem]">
        <Social image={GitHub} url='https://github.com/kaiomaxlira'/>
        <Social image={Linkedin} url='https://github.com/kaiomaxlira'/>
        <Social image={Instagram} url='https://github.com/kaiomaxlira'/>
        </div>
      </div>
    </div>
   
  );
};
export default aboutme;