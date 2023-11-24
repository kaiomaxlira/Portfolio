import React from "react";
import { Title } from "@/components/title";
import { Social } from "@/pages/aboutme/components/social"

import GitHub from "@/assets/GitHub.svg"
import Linkedin from "@/assets/linkedin.svg"

const aboutme = () => {
  return (
    <div className="bg-red-900 rounded-3xl w-[51rem] h-[31rem] ml-[3rem] mt-[6rem]">
      <div className="">
        <Title title="BEM-VINDO" />        
        <div className="grid grid-cols-2 gap-2px w-[6rem] h-[3rem] mt-[23rem] ml-[1rem]">
        <Social image={GitHub} url='https://github.com/kaiomaxlira'/>
        <Social image={Linkedin} url='https://www.linkedin.com/in/kaio-max-16b33a187/'/>
        </div>
        <div className="ml-[1rem] mt-[-9rem]"><h6>Social:</h6>
        <h6>(xx) xxxxx-xxxx</h6>
        <h6>kaiomax01@gmail.com</h6>
        </div>

      </div>
    </div>
   
  );
};
export default aboutme;