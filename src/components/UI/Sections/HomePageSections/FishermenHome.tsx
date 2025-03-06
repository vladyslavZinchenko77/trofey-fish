import React, { FC } from 'react';

const FishermenHome: FC = () => {
  return (
    <section
      className="relative h-[500px] flex flex-col justify-center items-center text-white text-center px-6"
      style={{
        backgroundImage: "url('/webp/fishermen.webp')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative z-10">
        <h2 className="text-4xl font-bold max-w-[800px]">
          Приєднуйтесь до спільноти рибалок, які вже ловлять та діляться своїми
          трофеями!
        </h2>
      </div>
    </section>
  );
};

export default FishermenHome;
