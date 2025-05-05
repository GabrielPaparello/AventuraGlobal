import React from "react";
import Image from "next/image";
export const Hero = () => {
  return (
    <div>
      <Image
        src="/montaña.jpg"
        alt="Hero Image"
        width={1920}
        height={1080}
        className="w-full h-auto relative object-cover"
        style={{ zIndex: -1 }}
      />
      <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold text-center z-10 font-vioda font-getVioda">
        Descubre el viaje de tus sueños
      </h1>
    </div>
  );
};
