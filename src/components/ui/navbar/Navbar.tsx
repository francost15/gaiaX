// Navbar.tsx
import React, { useState } from 'react';
import Image from "next/image";
import { IoMoonOutline, IoNotificationsSharp, IoSettingsSharp } from "react-icons/io5";
import { SideBar } from "../sidebar/SideBar";
import { CiLight } from "react-icons/ci";
import { NotificationComponent } from '@/components/notification/Notification';
import { SettingsComponent } from '@/components/settings/Settings';
interface NavbarProps {
  theme: string | null; // Recibimos el estado del tema como prop
  toggleTheme: () => void; // Recibimos la función toggleTheme como prop
}

export const Navbar = ({ theme, toggleTheme }: NavbarProps) => {
  const [isNotificationVisible, setIsNotificationVisible] = useState(false);
  const [isSettingsVisible, setIsSettingsVisible] = useState(false);

  const handleToggleNotification = () => {
    setIsNotificationVisible(!isNotificationVisible);
  };
  const handleToggleSettings = () => {
    setIsSettingsVisible(!isSettingsVisible);
  };

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
            {theme === "dark" ? <CiLight size={23} className="hover:text-yellow-600" /> : <IoMoonOutline size={23} className="hover:text-yellow-600"/>}
          </button>
          {/* Notificaciones y ajustes */}
          <ul className="flex space-x-4">
            <li>
              <button 
                className="hover:bg-slate-100 rounded-md p-2" 
                title="notification"
                onClick={handleToggleNotification}
              >
                <IoNotificationsSharp size={23} className="hover:text-yellow-600" />
              </button>
              {isNotificationVisible && <NotificationComponent />}
            </li>
            <li>
              <button 
                className="hover:bg-slate-100 rounded-md p-2" 
                title="settings"
                onClick={handleToggleSettings}
              >
                <IoSettingsSharp size={23}  className="hover:text-yellow-600"  />
              </button>
              {isSettingsVisible && <SettingsComponent/>}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};