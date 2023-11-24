import React from "react";
import Navbar from "@/pages/navbar/navbar"
import Logo from "@/components/logo/logo"


export default function Home() {
  return (

   <div className="h-screen bg-cover bg-center" style={{ backgroundImage: "url('/images/background.jpg')" }}> 
      <Logo/>
      <Navbar/>
   </div>

  )
}
