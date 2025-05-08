import Image from "next/image";
import React from "react";

export const DestinosPopulares = () => {
  const destinos = [
    {
      id: 1,
      nombre: "Paris - Eiffel Tower",
      imagen: "/eiffel.jpg",
      description:
        "La Torre Eiffel es un ícono de París y uno de los monumentos más reconocibles del mundo. Con su impresionante arquitectura y vistas panorámicas de la ciudad, es un destino imperdible para los viajeros.",
    },
    {
      id: 2,
      nombre: "India",
      imagen: "/india.jpg",
      description:
        "El Taj Mahal es una de las maravillas del mundo y un símbolo del amor eterno. Este impresionante mausoleo de mármol blanco, construido por el emperador Shah Jahan en memoria de su esposa Mumtaz Mahal, es un destino turístico imperdible.",
    },
    {
      id: 3,
      nombre: "Alaska",
      imagen: "/alaska.jpg",
      description:
        "Alaska es un destino impresionante conocido por su belleza natural, montañas majestuosas y vida silvestre diversa. Desde glaciares hasta auroras boreales, Alaska ofrece una experiencia única para los amantes de la naturaleza.",
    },
    {
      id: 4,
      nombre: "Noruega",
      imagen: "/noruega.jpg",
      description:
        "Noruega es famosa por sus impresionantes fiordos, paisajes montañosos y auroras boreales. Con una rica cultura vikinga y ciudades vibrantes como Oslo y Bergen, Noruega es un destino fascinante para los viajeros.",
    },
    {
      id: 5,
      nombre: "Madrid",
      imagen: "/madrid.jpg",
      description:
        "Madrid es la capital de España y un destino vibrante conocido por su rica historia, cultura y gastronomía. Desde el Palacio Real hasta el Museo del Prado, Madrid ofrece una mezcla única de arte, arquitectura y vida nocturna.",
    },
  ];

  return (
    <div className="bg-gray-100  px-4 md:px-20 lg:px-40 mt-40">
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 relative overflow-visible">
        {destinos.map((destino) => (
          <div
            key={destino.id}
            className="relative group transition-all duration-500 ease-in-out"
          >
            {/* Card inicial */}
            <div className="bg-white shadow-md rounded-lg flex flex-col items-center justify-center p-4 z-10">
              <Image
                src={destino.imagen}
                alt={destino.nombre}
                width={300}
                height={150}
                className="rounded-lg"
              />
              <h3 className="text-xl font-semibold mt-4">{destino.nombre}</h3>
              <p className="text-gray-600 mt-2 md:line-clamp-2">
                {destino.description}
              </p>
              <button className="text-blue-500 font-semibold mt-2 group-hover:underline">
                Ver más
              </button>
            </div>

            {/* Expansión al centro solo en pantallas grandes */}
            <div className="hidden md:block pointer-events-none absolute inset-0 z-20 scale-0 group-hover:scale-100 transition-all duration-500 ease-in-out">
              <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-xl bg-white p-6 rounded-lg shadow-lg z-50 opacity-100">
                <Image
                  src={destino.imagen}
                  alt={destino.nombre}
                  width={600}
                  height={300}
                  className="rounded-lg mx-auto"
                />
                <h3 className="text-2xl font-bold mt-4 text-center">
                  {destino.nombre}
                </h3>
                <p className="text-gray-700 mt-2 text-center">
                  {destino.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
