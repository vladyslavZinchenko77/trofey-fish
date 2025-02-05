import { FC, useState } from 'react';
import { TrofeyCardProps } from '@/types/interfaces';
import Avatar from '../Avatar';
import LikeIcon from '../IconComponents/LikeIcon';

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
          ? 'p-4 border bg-customGreen rounded-tl-[50%] rounded-bl-[50%] rounded-br-[50%] w-[400px] h-[400px] flex flex-col justify-between duration-[500ms] cursor-pointer'
          : 'p-4 border bg-customGreen rounded-tl-[50%] rounded-bl-[50%] rounded-tr-[50%] w-[400px] h-[400px] flex flex-col justify-between duration-[500ms] cursor-pointer'
      }
    >
      <div className="mt-[12px] flex justify-center">
        <div className="flex items-center mb-4 cursor-pointer">
          <Avatar />
          <p className="ml-2">{fishermanName}</p>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="relative w-[250px] h-[200px] bg-white p-2 shadow-lg rounded-md flex flex-col items-center">
          <img
            src={fishPhoto}
            alt={fishType}
            className="w-full h-[80%] object-cover rounded-md"
          />
          <div className="w-full text-center text-xl text-black-500 mt-1 font-marck">
            {fishType} вагою {fishWeight} кг
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <LikeIcon
          onClick={() => {
            console.log('click');
          }}
        />
        <p className="text-lg font-medium">{likes}</p>
      </div>
    </div>
  );
};

export default TrofeyCard;
