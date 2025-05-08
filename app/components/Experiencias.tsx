import Image from "next/image";
import React from "react";

export const Experiencias = () => {
  const experiencias = [
    {
      id: 1,
      nombre: "Los mejores Hoteles",
      imagen: "/experiencias/hotel.jpg",
      description:
        "Viajando con nosotros tendrás los mejores hoteles ya adquiridos en tu paquete turístico.",
    },
    {
      id: 2,
      nombre: "Experiencias únicas para adventureros",
      imagen: "/experiencias/bunge.jpg",
      description:
        "Disfruta de experiencias únicas como el bungee jumping, rafting y más.",
    },
    {
      id: 3,
      nombre: "Recorridos en tour",
      imagen: "/experiencias/bus.jpg",
      description:
        "Recorridos en tour por los mejores lugares turísticos de cada ciudad.",
    },
    {
      id: 4,
      nombre: "Destinos únicos",
      imagen: "/experiencias/playa.jpg",
      description:
        "Contamos con guías turísticos que te ayudarán a conocer cada lugar.",
    },
  ];
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mt-10">Experiencias</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {/* Aquí puedes agregar tus experiencias */}
        {experiencias.map((experiencia) => (
          <div
            key={experiencia.id}
            className="bg-white shadow-md rounded-lg flex "
          >
            <div className=" w-50 h-100 overflow-hidden">
              <Image
                src={experiencia.imagen}
                alt={experiencia.nombre}
                width={300}
                height={150}
                className=" w-50 h-100 object-cover transition-transform duration-500 ease-in-out transform hover:scale-105"
              />
            </div>
            <div className=" flex flex-col items-center justify-center relative ">
              <Image
                src={experiencia.imagen}
                alt={experiencia.nombre}
                width={300}
                height={150}
                className="rounded-lg grayscale-75  w-100 h-100 object-cover  "
              />
              <div className="bg-white/25 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-sm rounded-[10px] border border-white/20 absolute top-1/2 px-2 text-start mt-2">
                <h3 className=" text-black  text-xl font-semibold mt-4">
                  {experiencia.nombre}
                </h3>
                <p className="  text-start">{experiencia.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
