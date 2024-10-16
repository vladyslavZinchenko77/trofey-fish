import React, { FC } from 'react';
import Image from 'next/image';

const Logo: FC = () => {
  return <Image src="/svg/logo.svg" width={46} height={46} alt="logo" />;
};

export default Logo;
