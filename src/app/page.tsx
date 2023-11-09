import React from "react";
import Navbar from "@/components/navbar/navbar"
import Persona from "@/components/div01/persona"
import Aboutme from "@/components/welcome/aboutme"


export default function Home() {
  return (

   <div className="h-screen bg-cover bg-center" style={{ backgroundImage: "url('/images/background.jpg')" }}> 
      <Persona/>
      <Navbar/>
   </div>

  )
}
