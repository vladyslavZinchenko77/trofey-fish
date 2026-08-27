'use client';

import { FC, useEffect, useRef } from 'react';
import gsap from 'gsap';

const Footer: FC = () => {
  const wavesRef = useRef(null);
  const secondWavesRef = useRef(null);

  useEffect(() => {
    // Анімація хвиль
    gsap.to(wavesRef.current, {
      x: '+=80',
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });

    gsap.to(secondWavesRef.current, {
      x: '-=80',
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      delay: 1.5,
    });

    // Анімація бульбашок
    const bubbles = document.querySelectorAll('.bubble');
    bubbles.forEach((bubble) => {
      gsap.to(bubble, {
        y: '-=100',
        opacity: 0,
        duration: 4 + Math.random() * 2,
        delay: Math.random() * 2,
        repeat: -1,
        yoyo: false,
        ease: 'power1.inOut',
      });
    });

    // Анімація рибок
    const fish = document.querySelectorAll('.fish');
    fish.forEach((f) => {
      gsap.to(f, {
        x: `${Math.random() * 100 - 50}%`, // Плавають випадково вліво/вправо
        y: `${Math.random() * 40 - 20}px`, // Рухаються вгору/вниз
        duration: 5 + Math.random() * 5,
        repeat: -1,
        yoyo: true,
        delay: Math.random() * 2,
        ease: 'power1.inOut',
      });
    });
  }, []);

  return (
    <footer className="relative mt-6 overflow-hidden h-[300px]">
      {/* Перша хвиля */}
      <div ref={wavesRef} className="absolute bottom-0 left-0 w-[2000px] z-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2000 200"
          preserveAspectRatio="none"
        >
          <path
            d="M0,100 Q80,75 160,100 T320,100 T480,100 T640,100 T800,100 T960,100 T1120,100 T1280,100 T1440,100 T1600,100 T1760,100 T1920,100 T2000,100 L2000,200 L0,200 Z"
            fill="#2196F3"
          />
        </svg>
      </div>

      {/* Друга хвиля */}
      <div
        ref={secondWavesRef}
        className="absolute bottom-0 left-0 w-[2000px] z-0"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2000 200"
          preserveAspectRatio="none"
        >
          <path
            d="M0,100 Q80,75 160,100 T320,100 T480,100 T640,100 T800,100 T960,100 T1120,100 T1280,100 T1440,100 T1600,100 T1760,100 T1920,100 T2000,100 L2000,200 L0,200 Z"
            fill="#1976D2"
          />
        </svg>
      </div>

      {/* Бульбашки */}
      {[...Array(30)].map((_, index) => (
        <div
          key={index}
          className="bubble absolute w-[10px] h-[10px] bg-white rounded-full opacity-60"
          style={{
            left: `${Math.random() * 100}%`,
            bottom: `${Math.random() * 200}px`,
          }}
        ></div>
      ))}

      {/* Рибки */}
      {[...Array(5)].map(
        (
          _,
          index // Додаємо 5 рибок
        ) => (
          <div
            key={index}
            className="fish absolute text-3xl"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: `${Math.random() * 70}px`, // Обмежуємо рибок по вертикалі
            }}
          >
            🐟
          </div>
        )
      )}

      {/* Основний контент футера */}
      <div className="flex flex-col items-center m-3 absolute left-0 right-0 bottom-0 justify-between space-y-3 md:space-y-0 md:flex-row md:items-center md:justify-between z-10">
        <p className="text-center md:text-left">© Всі права захищені 2024</p>
        <div className="flex flex-col text-center md:flex-row md:space-x-3">
          <a href="">Політика конфіденційності</a>
          <a href="">Повідомлення про куки</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
