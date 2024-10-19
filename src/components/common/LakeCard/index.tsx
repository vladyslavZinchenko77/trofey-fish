import React, { FC } from 'react';
import WebsiteIcon from '../IconComponents/WebsiteIcon';
import InstagramIcon from '../IconComponents/InstagramIcon';
import FacabookIcon from '../IconComponents/FacebookIcon';

const LakeCard: FC = () => {
  return (
    <div className="bg-customGreen cursor-pointer relative rounded-tl-[50%] rounded-bl-[50%] rounded-br-[50%] w-[400px] h-[350px] hover:rounded-br-[0] hover:rounded-tr-[50%] transition-[2000ms] ">
      <div className="flex absolute right-[10px] bottom-[10px] ">
        <a
          className="ml-[8px]"
          target="_blank"
          href={'https://trofeyne.kiev.ua/'}
        >
          <WebsiteIcon />
        </a>
        <a
          className="ml-[8px]"
          href="https://www.facebook.com/profile.php?id=100001293125330"
          target="_blank"
        >
          <FacabookIcon />
        </a>
      </div>
    </div>
  );
};

export default LakeCard;
