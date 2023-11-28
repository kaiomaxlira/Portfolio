import React from "react";
import Navbar from "@/components/navbar/Navbar";
import Logo from "@/assets/kaio-max01.png";
import { Social } from "@/components/logo/components/social";

const MyPage: React.FC = () => {
  return (
    <>
    <div className="flex">
      <div className="bg-red-900 rounded-3xl w-[51rem] h-[31rem] ml-[3rem] mt-[6rem]"></div>
      <div className="bg-zinc-800 w-1/3 p-4 h-screen flex items-center justify-center">
        <Social image={Logo} src="" />
      </div>
      <div>
        <Navbar />
      </div>
    </div>
    </>
  );
};

export default MyPage;