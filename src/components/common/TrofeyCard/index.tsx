import React, { FC } from 'react';
import { TrofeyCardProps } from '@/types/interfaces';
import Avatar from '../Avatar';


const TrofeyCard: FC<TrofeyCardProps> = ({
  fishermanName,
  fishType,
  fishWeight,
  likes,
  fishPhoto,
}) => {
  return (
    <div className="p-4 border border-black rounded-tl-[24px] rounded-bl-[24px] rounded-br-[24px]   w-[300px] h-[400px] flex flex-col justify-between">
      <div className="flex items-center mb-4 cursor-pointer">
        <Avatar />
        <p className="ml-2">{fishermanName}</p>
      </div>
      <p className="text-lg font-semibold mb-4">
        Трофей {fishType} вагою {fishWeight} кг
      </p>
      <div className="flex-1 flex justify-center items-center mb-4">
        <img
          src={fishPhoto}
          alt={fishType}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="flex justify-between items-center">
        <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded-lg">
          Like
        </button>
        <p className="text-lg font-medium">likes: {likes}</p>
      </div>
    </div>
  );
};

export default TrofeyCard;
