"use client"
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { playwrite } from "./Hero";


export const DestinosPopulares = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="bg-gray-100 px-4 md:px-20 lg:px-40 mt-40">
      <motion.div 
        className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 relative overflow-visible"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {destinos.map((destino) => (
          <motion.div
            key={destino.id}
            variants={cardVariants}
            className="relative group transition-all duration-500 ease-in-out"
          >
            {/* Card inicial */}
            <div className="bg-white shadow-lg rounded-lg flex flex-col items-center justify-center p-6 hover:shadow-xl transition-all duration-300">
              <Image
                src={destino.imagen}
                alt={destino.nombre}
                width={300}
                height={150}
                className="rounded-lg w-full h-48 object-cover"
              />
              <h3 className={`${playwrite.className} text-2xl font-playwrite text-gray-900 mt-6 mb-3`}>{destino.nombre}</h3>
              <p className="text-gray-700 text-base md:line-clamp-2">
                {destino.description}
              </p>
              <button 
                className="text-blue-600 font-semibold mt-4 group-hover:text-blue-700 transition-colors duration-300 hidden md:block"
                onClick={() => setExpandedCard(destino.id)}
              >
                Ver más
              </button>
              <p className="text-blue-600 font-semibold mt-4 md:hidden">
                {destino.description}
              </p>
            </div>

            {/* Expansión al centro solo en pantallas grandes */}
            {expandedCard === destino.id && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-xl bg-white p-8 rounded-lg shadow-2xl z-50 hidden md:block"
              >
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setExpandedCard(null);
                  }}
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors duration-300"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <Image
                  src={destino.imagen}
                  alt={destino.nombre}
                  width={600}
                  height={300}
                  className="rounded-lg mx-auto w-full h-64 object-cover"
                />
                <h3 className="text-3xl font-playwrite text-gray-900 mt-6 mb-4 text-center">
                  {destino.nombre}
                </h3>
                <p className="text-gray-700 text-lg text-center">
                  {destino.description}
                </p>
              </motion.div>
            )}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
