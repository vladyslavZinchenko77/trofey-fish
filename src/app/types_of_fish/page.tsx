'use client'
import Footer from '@/components/UI/Footer';
import Header from '@/components/UI/Header';
import React, { FC } from 'react';
import Carousel from '@/components/common/Carousel';

const fishTypes = [
  {
    id: 1,
    title: 'Carp',
    description:
      'Короп — це прісноводна риба родини коропових, поширена в озерах, річках та ставках. Вона має видовжене, трохи стиснене тіло, покрите великими лускатими пластинами, часто золотавого або зеленуватого кольору. Короп відомий своєю невибагливістю до умов життя та всеїдністю.',
    img: '/png/Carp.png',
  },
  {
    id: 2,
    title: 'Щука',
    description:
      'Щука — це хижа прісноводна риба, що належить до родини щукових. Вона має довге, стрімке тіло з характерною формою голови та гострими зубами. Щука часто мешкає в зарослих водоймах, де активно полює на дрібніших риб.',
    img: '/png/Pike.png',
  },
  {
    id: 3,
    title: 'Карась',
    description:
      'Карась — це невелика прісноводна риба родини коропових, яка відома своєю витривалістю до екстремальних умов. Її можна знайти у ставках, озерах та повільних річках. Карась має округлу форму тіла та луску золотистого або сріблястого кольору.',
    img: '/png/СrucianСarp.png',
  },
  {
    id: 4,
    title: 'Сом',
    description:
      'Сом — це велика прісноводна риба родини сомових, що вирізняється своїм видовженим тілом та широкою головою. Вона має вуса, які допомагають їй орієнтуватися в темних водоймах. Соми часто мешкають у глибоких ямах та ведуть донний спосіб життя.',
    img: '/png/CatchFish.png',
  },
];


const TypesOfFish: FC = () => {
  return (
    <>
      <Header />
      <main>
        <div className="container mx-auto mt-10 text-center">
          <h1 className="text-2xl font-bold mb-[50px]">Види Риб</h1>
          <Carousel cards={fishTypes} />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default TypesOfFish;
