import React, { FC } from 'react';

const Hero: FC = () => {
  return (
    <section
      className="relative h-screen flex flex-col justify-center items-center text-white text-center px-6"
      style={{
        backgroundImage: "url('/webp/hero-img.webp')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative z-10">
        <h2 className="text-4xl font-bold">
          Trophy Fish — знайди свій трофейний улов!
        </h2>
        <h4 className="text-lg mt-4 max-w-2xl">
          Спільнота рибалок, які діляться своїми трофеями, відкривають нові
          водойми та обговорюють кращі місця для риболовлі.
        </h4>
        <div className="mt-6 flex gap-4 justify-center">
          <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition">
            Приєднатися
          </button>
          <button className="bg-gray-700 hover:bg-gray-800 px-6 py-3 rounded-lg transition">
            Переглянути трофеї
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
