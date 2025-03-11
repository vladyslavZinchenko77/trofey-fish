import React, { useState } from 'react';

interface FishingButtonProps {
  text?: string;
  onClick?: () => void;
}

const FishingButton: React.FC<FishingButtonProps> = ({
  text = 'Поймать рыбу!',
  onClick,
}) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      className="group relative overflow-hidden flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 rounded-lg shadow-lg transition-all duration-300"
      style={{
        transform: isHovered ? 'scale(1.05)' : 'scale(1)',
        // Динамически увеличиваем ширину кнопки при наведении
        paddingLeft: '2rem',
        // Увеличиваем правую часть при наведении, чтобы поместить рыбку
        paddingRight: isHovered ? '5rem' : '2rem',
      }}
    >
      {/* Контейнер с абсолютным позиционированием для центрирования текста */}
      <div className="flex items-center justify-center relative">
        {/* Текст кнопки - всегда центрирован */}
        <span className="relative z-10 text-center transition-all duration-300">
          {text}
        </span>
      </div>

      {/* Рыба с абсолютным позиционированием (не влияет на центрирование текста) */}
      <div
        className={`absolute right-8 top-1/2 transform -translate-y-1/2 overflow-hidden h-6 w-10 transition-all duration-500 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          transform: `translateY(-50%) ${isHovered ? 'translateX(0)' : 'translateX(50px)'}`,
        }}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-10"
        >
          <path
            d="M20 12C20 8 16 4 10.5 4C8 4 6.25 5 4.5 6.5C8.5 8 12.5 8 12.5 12C12.5 16 8.5 16 4.5 14.5C6.25 16 8 17 10.5 17C16 17 20 13 20 9"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="7" cy="9" r="1" fill="white" />
          <path
            className={`${isHovered ? 'animate-fishTail' : ''}`}
            d="M2 9L4 11L2 13"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Круги в воде */}
      <div className={`absolute inset-0 ${isHovered ? '' : 'opacity-0'}`}>
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className={`absolute top-3/4 right-8 rounded-full border border-blue-300 opacity-0 ${isHovered ? 'animate-waterRipple' : ''}`}
            style={{
              animationDelay: `${i * 200}ms`,
              width: `${(i + 1) * 20}px`,
              height: `${(i + 1) * 20}px`,
            }}
          ></div>
        ))}
      </div>

      {/* Вода */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-blue-300 opacity-20"></div>

      {/* Пузырьки */}
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className={`absolute bottom-1 rounded-full bg-white opacity-0 ${isHovered ? 'animate-bubble' : ''}`}
          style={{
            animationDelay: `${100 + i * 300}ms`,
            width: `${Math.random() * 6 + 3}px`,
            height: `${Math.random() * 6 + 3}px`,
            left: `${10 + Math.random() * 80}%`,
          }}
        ></div>
      ))}
    </button>
  );
};

// Добавляем стили анимации
const styles = `
  @keyframes waterRipple {
    0% {
      transform: translate(-50%, -50%) scale(0);
      opacity: 0.7;
    }
    100% {
      transform: translate(-50%, -50%) scale(1);
      opacity: 0;
    }
  }
  
  .animate-waterRipple {
    animation: waterRipple 1.5s ease-out forwards;
  }
  
  @keyframes bubble {
    0% {
      transform: translateY(0);
      opacity: 0;
    }
    20% {
      opacity: 0.7;
    }
    100% {
      transform: translateY(-40px) translateX(${Math.random() * 20 - 10}px);
      opacity: 0;
    }
  }
  
  .animate-bubble {
    animation: bubble 2s ease-out forwards;
  }
  
  @keyframes fishTail {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(10deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
  
  .animate-fishTail {
    animation: fishTail 0.3s ease-in-out infinite;
  }
`;

interface FishingButtonWithStylesProps {
  text?: string;
  onClick?: () => void;
}

const ButtonWithFishAnimation: React.FC<FishingButtonWithStylesProps> = ({
  text,
  onClick,
}) => (
  <>
    <style dangerouslySetInnerHTML={{ __html: styles }} />
    <FishingButton text={text} onClick={onClick} />
  </>
);

export default ButtonWithFishAnimation;
