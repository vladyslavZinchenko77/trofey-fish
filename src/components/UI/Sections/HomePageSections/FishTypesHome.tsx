import React from 'react';

const FishTypesHome = () => {
  return (
    <section
      className="relative h-[500px] flex flex-col justify-center items-center text-white text-center px-4 sm:px-6"
      style={{
        backgroundImage: "url('/webp/fish-home.webp')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          Не знаєш, що можна зловити? Вивчай види риб, їхні особливості та
          найкращі методи лову.
        </h2>
        <button className="bg-gray-700 mt-4 sm:mt-6 hover:bg-gray-800 px-6 py-3 rounded-lg transition text-lg sm:text-xl">
          Переглянути
        </button>
      </div>
    </section>
  );
};

export default FishTypesHome;
