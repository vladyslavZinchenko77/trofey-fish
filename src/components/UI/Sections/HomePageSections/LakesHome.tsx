import React, { FC } from 'react';

const LakesHome: FC = () => {
  return (
    <section
      className="relative h-[300px] sm:h-[400px] md:h-[500px] flex flex-col justify-center items-center text-white text-center px-4 sm:px-6 md:px-8"
      style={{
        backgroundImage: "url('/webp/lake-home.webp')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative z-10 max-w-lg sm:max-w-xl md:max-w-2xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          Відкривай нові озера
        </h2>
        <button className="bg-gray-700 mt-4 sm:mt-5 md:mt-6 hover:bg-gray-800 px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition">
          Переглянути
        </button>
      </div>
    </section>
  );
};

export default LakesHome;
