import React, { FC } from 'react';
import Image from 'next/image';

interface NotFoundProps {
  type?: "notFound" | "inProgress";
}

const NotFound: FC<NotFoundProps> = ({ type = 'notFound' }) => {
  return (
    <div className="flex flex-col items-center justify-center text-2xl text-center font-bold">
      <Image 
        width={400} 
        height={400} 
        alt='fisherman' 
        src='/png/fisherman.png'
      />
      {type === 'notFound' ? (
        <p>Сторінку не знайдено:(</p>
      ) : (
        <p>Сторінка в розробці:(</p>
      )}
    </div>
  );
};

export default NotFound;