import { FC } from 'react';
import Image from 'next/image';

const Footer: FC = () => {
  return (
    <footer className="relative mt-[24px] ">
      <div className="absolute z-2 top-0 left-0 right-0 w-full h-[15%] bg-gradient-to-b from-white to-transparent"></div>
      <Image
        className="w-full h-auto"
        src={'/svg/Lake-background.svg'}
        width={1805}
        height={692}
        alt="fishmen on the lake"
      />
    </footer>
  );
};

export default Footer;
