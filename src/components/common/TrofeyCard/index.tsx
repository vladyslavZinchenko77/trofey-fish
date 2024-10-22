import { FC, useState } from 'react';
import { TrofeyCardProps } from '@/types/interfaces';
import Avatar from '../Avatar';

const TrofeyCard: FC<TrofeyCardProps> = ({
  fishermanName,
  fishType,
  fishWeight,
  likes,
  fishPhoto,
}) => {
  const [onMouse, setOnMouse] = useState<boolean>(true);

  return (
    <div
      onMouseEnter={() => setOnMouse(false)}
      onMouseLeave={() => setOnMouse(true)}
      className={
        onMouse
          ? 'p-4 border bg-customGreen rounded-tl-[50%] rounded-bl-[50%] rounded-br-[50%]  w-[400px] h-[400px] flex flex-col justify-between transition-[2000ms] hover:rounded-tr-[0]'
          : 'p-4 border bg-customGreen rounded-tl-[50%]  rounded-bl-[50%] rounded-tr-[50%]  w-[400px] h-[400px] flex flex-col justify-between hover:rounded-br-[0]'
      }
    >
      <div className=" mt-[12px] flex justify-center">
        <div className="flex items-center mb-4 cursor-pointer">
          <Avatar />
          <p className="ml-2">{fishermanName}</p>
        </div>
      </div>
      <p className="text-lg text-center font-semibold mb-4">
        Трофей {fishType} вагою {fishWeight} кг
      </p>
      <div className="flex justify-center">
        <div className="w-[250px] h-[150px] ">
          <img
            src={fishPhoto}
            alt={fishType}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <button
          type="button"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          Like
        </button>
        <p className="text-lg font-medium">likes: {likes}</p>
      </div>
    </div>
  );
};

export default TrofeyCard;
