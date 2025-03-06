import React from 'react';

const BloggersHome = () => {
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
        <h2 className="text-4xl font-bold max-w-[1200px]">
          Дивись, як професіонали ловлять великі трофеї, діляться порадами та
          розповідають про найкращі місця для риболовлі.
        </h2>
        <button className="bg-gray-700 mt-[24px] hover:bg-gray-800 px-6 py-3 rounded-lg transition">
          Переглянути
        </button>
      </div>
    </section>
  );
};

export default BloggersHome;
