import React from "react";
import { Playwrite_DK_Loopet } from "next/font/google";

const playwrite = Playwrite_DK_Loopet({
  weight: '400',
  style: 'normal',
  display: 'swap',
})

export const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-800 text-white py-4 mt-10">
        <div className="container mx-auto text-center">
          <p className={playwrite.className}>
            &copy; 2023 Tu Agencia de Viajes. Todos los derechos reservados.
          </p>
          <p className={playwrite.className}>Desarrollado por Tu Nombre</p>
        </div>
      </footer>
    </div>
  );
};
