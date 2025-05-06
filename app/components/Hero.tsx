"use client";

import { Parallax } from "react-parallax";
import { useEffect, useState } from "react";
import Image from "next/image";

export const Hero = () => {
  const [bgStyle, setBgStyle] = useState({
    objectFit: "cover",
    top: "0px",
    position: "absolute",
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setBgStyle({
          objectFit: "cover",
          top: "-300px",
          position: "absolute",
        });
      } else {
        setBgStyle({
          objectFit: "cover",
          top: "-200px",
          position: "absolute",
        });
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="bg-gray-100 relative overflow-hidden">
      <Parallax
        bgImage="/montaña.jpg"
        strength={600}
        bgImageAlt="Montañas"
        className="relative h-[900px] md:h-[1200px] z-10"
        bgImageStyle={bgStyle}
      >
        {/* Montañas laterales */}
        <div className="hidden md:block absolute bottom-0 left-0 z-30 pointer-events-none">
          <Image
            src="/izq.png"
            alt="Montaña izquierda"
            width={400}
            height={600}
            priority
          />
        </div>
        <div className="hidden md:block absolute bottom-0 right-0 z-30 pointer-events-none">
          <Image
            src="/der.png"
            alt="Montaña derecha"
            width={800}
            height={800}
            priority
          />
        </div>

        {/* Contenido principal */}
        <div className="flex flex-col items-center justify-center h-[600px] z-20 relative">
          <h1 className="text-white text-5xl md:text-[80px] text-center font-getfunnel drop-shadow-lg tracking-widest text-stroke">
            Descubre el viaje de tus sueños
          </h1>
          <div className="flex justify-between w-full max-w-md px-5 mt-[100px]">
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
              Ver destinos
            </button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
              Reservar ahora
            </button>
          </div>
        </div>
      </Parallax>

      {/* Destinos Populares */}
      <div className="-mt-24 md:-mt-30 mb-20 bg-gray-100 max-w-fit py-10 px-4 md:px-20 lg:px-40 relative z-30 rounded-3xl shadow-xl mx-auto ">
        <h2 className="text-3xl font-bold text-center mt-4">
          Destinos Populares
        </h2>
        <p className="text-center text-gray-600 mt-2">
          Explora los destinos más visitados por nuestros viajeros.
        </p>
      </div>
    </div>
  );
};
