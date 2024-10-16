import React, { FC } from 'react';
import Image from 'next/image';

const Avatar: FC = () => {
  return (
    <div className="rounded-[100%]">
      <Image src={'/png/avatar.png'} alt="avatar" width={42} height={42} />
    </div>
  );
};

export default Avatar;
