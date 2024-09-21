import React, { useState } from 'react';
import { IoMenuSharp } from 'react-icons/io5';

export const SideBar = () => {
  // Estado para controlar si el sidebar está abierto o cerrado
  const [isOpen, setIsOpen] = useState(false);

  // Función para manejar el clic en el ícono del menú
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Lista de apartados
  const sections = [
    'Inicio', 
    'Perfil',
    'Comunidades', 
    'Código PYME', 
    'Logros', 
    'Certificaciones', 
    'Biblioteca Virtual'
  ];

  return (
    <>
      {/* Ícono de menú fijo en la esquina superior izquierda */}
      <div 
        style={{ 
          position: 'fixed', 
          top: '5px', 
          left: '10px', 
          zIndex: 10, 
          cursor: 'pointer',
          color: isOpen ? '#fff' : '#333', // Cambia de color si el sidebar está abierto
          padding: '10px',
          transition: 'color 0.3s' // Transición suave para el cambio de color
        }} 
        onClick={toggleSidebar}
      >
        <IoMenuSharp size={30} />
      </div>

      {/* Sidebar adaptativo */}
      <aside
        style={{
          position: 'fixed',
          top: 0,
          left: isOpen ? 0 : '-100%', // Sin margen en el lado izquierdo
          height: '100%',
          width: '100%',
          maxWidth: '250px', // Máximo ancho del sidebar
          backgroundColor: '#333',
          color: '#fff',
          transition: 'left 0.3s',
          zIndex: 999 // Asegura que esté encima de otros elementos
        }}
      >
        {/* Lista de apartados */}
        <div style={{ padding: '20px' }}>
          {sections.map((section, index) => (
            <div 
              key={index} 
              style={{ 
                padding: '15px 0', 
                borderBottom: '1px solid #555',
                cursor: 'pointer',
                transition: 'background-color 0.3s' // Transición suave al pasar el cursor
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#444'; // Cambiar color al pasar el cursor
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent'; // Volver al estado original
              }}
            >
              {section}
            </div>
          ))}
        </div>
      </aside>

      {/* Fondo oscuro cuando el sidebar está abierto */}
      {isOpen && (
        <div 
          onClick={toggleSidebar}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 998 // Debajo del sidebar
          }}
        ></div>
      )}
    </>
  );
};
