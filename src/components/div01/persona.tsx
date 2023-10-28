import { Social } from "./components/social";
import Logo from "@/assets/kaio-max01.png";

const Persona: React.FC = () => {
  return (
    <div className="flex">
      <div className="bg-white w-1/3 p-4 h-screen flex items-center justify-center">
        <Social image={Logo} src="" />
      </div>
    </div>
  );
};
export default Persona;
