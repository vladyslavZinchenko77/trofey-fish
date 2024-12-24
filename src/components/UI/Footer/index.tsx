import { FC } from 'react';
import Image from 'next/image';
import InstagramIcon from '@/components/common/IconComponents/InstagramIcon';
import FacebookIcon from '@/components/common/IconComponents/FacebookIcon';

const Footer: FC = () => {
  return (
    <footer className="relative mt-6">
      <Image
        className="w-full h-auto"
        src={'/png/Lake-bg.png'}
        width={1805}
        height={692}
        alt="fishmen on the lake"
      />
      <div className="flex flex-col items-center m-3 absolute left-0 right-0 bottom-0 justify-between space-y-3 md:space-y-0 md:flex-row md:items-center md:justify-between">
        <p className="text-center md:text-left">© Всі права захищені 2024</p>
        <div className="flex space-x-3">
          <a href="" target="_blank">
            <InstagramIcon hoverColor="white" />
          </a>
          <a href="" target="_blank">
            <FacebookIcon hoverColor="white" />
          </a>
        </div>
        <div className="flex flex-col text-center md:flex-row md:space-x-3">
          <a href="">Політика конфіденційності</a>
          <a href="">Повідомлення про куки</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
