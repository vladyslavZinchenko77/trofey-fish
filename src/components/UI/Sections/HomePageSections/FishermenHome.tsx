import React, { FC } from 'react';

const FishermenHome: FC = () => {
  return (
    <section
      className="relative h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px] flex flex-col justify-center items-center text-white text-center px-4 sm:px-6 md:px-8"
      style={{
        backgroundImage: "url('/img/fishermen-home.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative z-10 w-full max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold max-w-[300px] sm:max-w-[500px] md:max-w-[650px] lg:max-w-[800px] mx-auto">
          Приєднуйтесь до спільноти рибалок, які вже ловлять та діляться своїми
          трофеями!
        </h2>
      </div>
    </section>
  );
};

export default FishermenHome;
