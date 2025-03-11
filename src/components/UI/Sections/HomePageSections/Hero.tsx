import React, { FC } from 'react';
import ButtonWithFishAnimation from '@/components/common/ButtonWithFishAnimation';

const Hero: FC = () => {
  return (
    <section
      className="relative h-screen flex flex-col justify-center items-center text-white text-center px-4 sm:px-6 md:px-8"
      style={{
        backgroundImage: "url('/webp/hero-img.webp')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50" />

      <div className="relative z-10 w-full max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
          Trophy Fish — знайди свій трофейний улов!
        </h2>
        <h4 className="text-sm sm:text-base md:text-lg mt-2 sm:mt-3 md:mt-4 max-w-xl md:max-w-2xl mx-auto">
          Спільнота рибалок, які діляться своїми трофеями, відкривають нові
          водойми та обговорюють кращі місця для риболовлі.
        </h4>
        <div className="mt-4 sm:mt-5 md:mt-6 flex flex-col sm:flex-col md:flex-row sm:gap-3 md:gap-4 gap-3 justify-center items-center">
          <ButtonWithFishAnimation text="Приєднатися" />
          <ButtonWithFishAnimation text="Переглянути трофеї" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
