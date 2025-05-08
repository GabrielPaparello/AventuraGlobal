import React from "react";

export const CTA = () => {
  return (
    <div>
      <div className="px-4 md:px-20 lg:px-40 mt-40 bg-amber-300">
        <div className="flex flex-col items-center justify-center text-center py-10">
          <h2 className="text-3xl font-bold mb-4">¡Reserva tu viaje ahora!</h2>
          <p className="text-lg mb-6">
            No pierdas la oportunidad de vivir experiencias inolvidables.
            ¡Contáctanos!
          </p>
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
            Reservar Ahora
          </button>
        </div>
      </div>
    </div>
  );
};
