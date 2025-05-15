/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Define los dominios o patrones permitidos para cargar imágenes de manera remota
    remotePatterns: [
      {
        protocol: "https",
        hostname: "randomuser.me", // Dominio que usas para las imágenes
        pathname: "/**", // Ruta para imágenes de hombres
      },
      {
        protocol: "https",
        hostname: "randomuser.me", // Dominio que usas para las imágenes
        pathname: "/**", // Ruta para imágenes de mujeres
      },
    ],
  },
};

module.exports = nextConfig;
