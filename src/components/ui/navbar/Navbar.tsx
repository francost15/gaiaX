// Navbar.tsx
import Image from "next/image";
import { IoMoonOutline, IoNotificationsSharp, IoSettingsSharp } from "react-icons/io5";
import { SideBar } from "../sidebar/SideBar";
import { CiLight } from "react-icons/ci";

interface NavbarProps {
  theme: string | null; // Recibimos el estado del tema como prop
  toggleTheme: () => void; // Recibimos la función toggleTheme como prop
}

export const Navbar = ({ theme, toggleTheme }: NavbarProps) => {
  return (
    <nav>
      <div className="flex justify-between p-4">
        {/* sidebar */}
        <div className="flex items-center space-x-3">
          <SideBar />
          {/* Cambiar el logo dependiendo del tema */}
          {theme === "dark" ? (
            <Image src={"/logo_gaiax_invertido.png"} alt="logo_GaiaX" width={200} height={200} className="w-20 h-15" />
          ) : (
            <Image src={"/logo_gaiax.png"} alt="logo_GaiaX" width={200} height={200} className="w-20 h-15" />
          )}
        </div>
        <div className="flex items-center space-x-4">
          {/* Botón para cambiar entre Light/Dark Mode */}
          <button
            onClick={toggleTheme}
            className="rounded-md"
          >
            {theme === "dark" ? <CiLight size={25} /> : <IoMoonOutline size={25}/>}
          </button>
          {/* Notificaciones y ajustes */}
          <ul className="flex space-x-4">
            <li><IoNotificationsSharp size={25} /></li>
            <li><IoSettingsSharp size={25} /></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
