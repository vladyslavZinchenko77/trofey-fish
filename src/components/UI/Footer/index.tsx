import { FC } from 'react';
import Image from 'next/image';
import InstagramIcon from '@/components/common/IconComponents/InstagramIcon';
import FacebookIcon from '@/components/common/IconComponents/FacebookIcon';

const Footer: FC = () => {
  return (
    <footer className="relative mt-[24px] ">
      <Image
        className="w-full h-auto"
        src={'/svg/Lake-background.svg'}
        width={1805}
        height={692}
        alt="fishmen on the lake"
      />
      <div className="flex items-center m-[12px] absolute left-0 right-0 bottom-0 justify-between">
        <p>© Всі права захищені 2024</p>
        <div className="flex">
          <a className="ml-[8px]" href="" target="_blank">
            <InstagramIcon hoverColor='white' />
          </a>
          <a className="ml-[8px]" href="" target="_blank">
            <FacebookIcon hoverColor='white' />
          </a>
        </div>
        <div className="flex flex-col">
          <a href="">Політика конфіденційності</a>
          <a href="">Повідомлення про куки</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
