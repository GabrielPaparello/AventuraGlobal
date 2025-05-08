"use client";

import { Parallax } from "react-parallax";
import { useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Testimonials } from "./Testimonials";

export const Hero = () => {
  const [bgStyle, setBgStyle] = useState({
    objectFit: "cover",
    top: "0px",
    position: "absolute",
    width: "100%",
    height: "100%",
    transform: "scale(1.2)",
  });
  const [isAnimating, setIsAnimating] = useState(true);

  // Configuración del scroll
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Transformaciones basadas en el scroll
  const titleY = useTransform(smoothProgress, [0, 0.5], [0, -100]);
  const titleOpacity = useTransform(smoothProgress, [0, 0.3], [1, 0]);
  const buttonsY = useTransform(smoothProgress, [0, 0.5], [0, -50]);
  const buttonsOpacity = useTransform(smoothProgress, [0, 0.3], [1, 0]);
  const testimonialsOpacity = useTransform(smoothProgress, [0.3, 0.4], [0, 1]);
  const testimonialsY = useTransform(smoothProgress, [0.3, 0.4], [50, 0]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setBgStyle({
          objectFit: "cover",
          top: "-150px",
          position: "absolute",
          width: "100%",
          height: "100%",
          transform: "scale(1.2)",
        });
      } else {
        setBgStyle({
          objectFit: "cover",
          top: "-100px",
          position: "absolute",
          width: "100%",
          height: "100%",
          transform: "scale(1.2)",
        });
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Lock scroll durante la animación inicial
  useEffect(() => {
    if (isAnimating) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isAnimating]);

  return (
    <div className="bg-gray-100 relative ">
      <Parallax
        bgImage="/montaña.jpg"
        strength={500}
        bgImageAlt="Montañas"
        className="relative h-[1200px] md:h-[1500px] z-10"
        bgImageStyle={{
          ...bgStyle,
          transition: "all 0.2s ease-out",
        }}
        blur={0}
        bgClassName="object-cover"
      >
        {/* Contenido principal con animación */}
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            ease: [0.6, -0.05, 0.01, 0.99],
            onComplete: () => setIsAnimating(false),
          }}
          className="flex flex-col items-center justify-center h-screen z-20 relative"
        >
          <motion.h1
            style={{ y: titleY, opacity: titleOpacity }}
            className="text-white text-6xl md:text-[100px] text-center font-getfunnel drop-shadow-lg tracking-widest text-stroke"
          >
            Descubre el viaje de tus sueños
          </motion.h1>
          <motion.div
            style={{ y: buttonsY, opacity: buttonsOpacity }}
            className="flex gap-6 justify-center w-full max-w-md px-5 mt-[100px]"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg transition-all duration-300 transform hover:shadow-xl"
            >
              Ver destinos
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-3 rounded-full font-semibold shadow-lg transition-all duration-300 transform hover:shadow-xl"
            >
              Reservar ahora
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Sección de Testimonios */}
        <Testimonials
          style={{ y: testimonialsY, opacity: testimonialsOpacity }}
        />
      </Parallax>

      {/* Destinos Populares */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }}
        viewport={{ once: true, margin: "-100px" }}
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-gray-100 max-w-fit py-10 px-4 md:px-20 lg:px-40  z-30 rounded-3xl shadow-lg   border-2 border-gray-200 shadow-gray-300 "
      >
        <h2 className="text-3xl font-bold text-center mt-4">
          Destinos Populares
        </h2>
        <p className="text-center text-gray-600 mt-2">
          Explora los destinos más visitados por nuestros viajeros.
        </p>
      </motion.div>
    </div>
  );
};
