import React, { FC } from 'react';
import ButtonWithFishAnimation from '@/components/common/ButtonWithFishAnimation';

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

      <div className="relative z-10 max-w-lg sm:max-w-xl md:max-w-2xl flex flex-col items-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          Відкривай нові озера
        </h2>
        <div className="mt-4 sm:mt-6">
          <ButtonWithFishAnimation text="Переглянути" />
        </div>
      </div>
    </section>
  );
};

export default LakesHome;
