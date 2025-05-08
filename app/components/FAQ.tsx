import React from "react";

export const FAQ = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mt-10">
        Preguntas Frecuentes
      </h1>
      <div className="px-4 md:px-20 lg:px-40 mt-10">
        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-2">
            ¿Cómo puedo reservar un viaje?
          </h2>
          <p className="text-gray-700">
            Puedes reservar un viaje a través de nuestro sitio web o
            contactándonos directamente.
          </p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-2">
            ¿Qué métodos de pago aceptan?
          </h2>
          <p className="text-gray-700">
            Aceptamos tarjetas de crédito, débito y transferencias bancarias.
          </p>
        </div>
        {/* Agrega más preguntas frecuentes aquí */}
      </div>
      <div className="bg-gray-100 px-4 md:px-20 lg:px-40 mt-10">
        <h2 className="text-3xl font-bold text-center mb-4">
          ¿Tienes más preguntas?
        </h2>
        <p className="text-lg text-center mb-6">
          Si tienes más preguntas, no dudes en contactarnos. ¡Estamos aquí para
          ayudarte!
        </p>
        <button className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
          Contáctanos
        </button>
      </div>
    </div>
  );
};
