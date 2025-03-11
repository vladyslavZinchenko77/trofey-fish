import React from 'react';
import ButtonWithFishAnimation from '@/components/common/ButtonWithFishAnimation';

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
        <div className="mt-6 flex justify-center">
          <ButtonWithFishAnimation text="Переглянути" />
        </div>
      </div>
    </section>
  );
};

export default FishTypesHome;
