"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import {
  IoMenuSharp, IoHomeOutline, IoPersonOutline, IoPeopleOutline, IoTrophyOutline,
  IoSchoolOutline, IoBookOutline, IoCloseOutline
} from 'react-icons/io5';

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false); // Inicia con el sidebar visible

  const toggleSidebar = () => setIsOpen(!isOpen);

  const menuItems = [
    { icon: <IoHomeOutline className="w-6 h-6" />, label: 'Inicio', link: '/' },
    { icon: <IoPersonOutline className="w-6 h-6" />, label: 'Perfil', link: '/profile' },
    { icon: <IoPeopleOutline className="w-6 h-6" />, label: 'Comunidades', link: '/community' },
    { icon: <IoTrophyOutline className="w-6 h-6" />, label: 'Logros', link: '/skills' },
    { icon: <IoSchoolOutline className="w-6 h-6" />, label: 'Certificaciones', link: '/reports' },
    { icon: <IoBookOutline className="w-6 h-6" />, label: 'Biblioteca Virtual', link: '/library' },
  ];

  return (
    <>
      {/* Botón para mostrar/ocultar sidebar */}
      <div className="fixed top-4 left-4 z-10 flex items-center space-x-4">
        <button
          className="p-2 hover:bg-slate-200 rounded-md"
          onClick={toggleSidebar}
        >
          {isOpen ? '' : <IoMenuSharp className="w-6 h-6" />}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-50 h-screen w-64 bg-neutral-800 text-white transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="flex items-center justify-between p-4 bg-neutral-800">
          <h2 className="text-xl font-bold">Menu</h2>
          <button
            onClick={toggleSidebar}
            title="Close Menu"
          >
            <IoCloseOutline className="h-6 w-6" />
          </button>
        </div>

        {/* Elementos del menú */}
        <nav className="mt-4">
          <ul className="space-y-1">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.link || '#'}
                  className="flex items-center px-4 py-2 text-gray-300 hover:bg-neutral-700 hover:text-white transition-colors duration-200"
                >
                  <span className="mr-3">{item.icon}</span>
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
};
