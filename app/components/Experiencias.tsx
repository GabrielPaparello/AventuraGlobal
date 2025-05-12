"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { playwrite } from './fonts';

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
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
    <div className="bg-blue-100 pt-5">
      <h1 className={`text-4xl ${playwrite.className} text-center mt-16 mb-12`}>Experiencias</h1>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4 md:p-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {experiencias.map((experiencia) => (
          <motion.div
            key={experiencia.id}
            variants={itemVariants}
            className="bg-white shadow-lg rounded-lg overflow-hidden group"
          >
            <div className="relative h-80 overflow-hidden">
              <Image
                src={experiencia.imagen}
                alt={experiencia.nombre}
                width={300}
                height={150}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 flex items-center p-6">
                <div className={`transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500`}>
                  <h3 className={`${playwrite.className} text-2xl font-playwrite text-white mb-2`}>
                    {experiencia.nombre}
                  </h3>
                  <p className="text-white/90 text-base">
                    {experiencia.description}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
