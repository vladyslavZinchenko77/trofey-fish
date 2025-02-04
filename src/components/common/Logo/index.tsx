import React, { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Logo: FC = () => {
  return <Link href={'/'}><Image src="/svg/logo.svg" width={46} height={46} alt="logo" /></Link>
};

export default Logo;
