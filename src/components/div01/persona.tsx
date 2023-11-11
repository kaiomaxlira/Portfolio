import { Social } from "./components/social";
import Logo from "@/assets/kaio-max01.png";
import Aboutme from "@/components/welcome/aboutme"

const Persona: React.FC = () => {
  return (
    <div className="flex">
      <div className="bg-zinc-800 w-1/3 p-4 h-screen flex items-center justify-center">
        <Social image={Logo} src="" />
      </div>
      <Aboutme/>
    </div>
     
  );
};
export default Persona;