import React, { FC } from 'react';
import Image from 'next/image';

interface FishCardProps {
  fishTitle: string;
  fishDesc: string;
  imgUrl: string;
}

const FishCard: FC<FishCardProps> = ({ fishTitle, fishDesc, imgUrl }) => {
  return (
    <div className="flex justify-center w-full">
      <div className="flex items-center flex-col">
        <h2>{fishTitle}</h2>
        <Image
          width={400}
          height={400}
          loading="lazy"
          alt={fishTitle}
          src={imgUrl}
        />
        <p className="mt-[30px] w-[80%] text-center">{fishDesc}</p>
      </div>
    </div>
  );
};

export default FishCard;
