"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Datos de ejemplo para los testimonios
const testimonials = [
  {
    name: "María González",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    rating: 5,
    text: "¡Una experiencia increíble! El servicio fue excepcional y los destinos son impresionantes.",
    location: "Madrid, España"
  },
  {
    name: "Carlos Rodríguez",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    rating: 5,
    text: "La mejor agencia de viajes que he conocido. Todo perfectamente organizado.",
    location: "Barcelona, España"
  },
  {
    name: "Ana Martínez",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    rating: 4,
    text: "Destinos únicos y experiencias inolvidables. ¡Volveré a viajar con ellos!",
    location: "Valencia, España"
  }
];

// Componente para las estrellas de calificación
const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, index) => (
        <svg
          key={index}
          className={`w-5 h-5 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

interface TestimonialsProps {
  style?: {
    y: any;
    opacity: any;
  };
}

export const Testimonials = ({ style }: TestimonialsProps) => {
  return (
    <motion.div
      style={style}
      className="absolute top-[900px] md:top-[1000px] w-full z-30 px-4 md:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-white text-3xl md:text-4xl font-bold text-center mb-8">
          Lo que dicen nuestros viajeros
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-xl"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg">{testimonial.name}</h3>
                  <p className="text-white/80 text-sm">{testimonial.location}</p>
                </div>
              </div>
              <StarRating rating={testimonial.rating} />
              <p className="text-white mt-4 text-sm md:text-base">{testimonial.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}; 