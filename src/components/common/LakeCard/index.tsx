'use client'
import React, { FC, useState } from 'react';
import WebsiteIcon from '../IconComponents/WebsiteIcon';
import InstagramIcon from '../IconComponents/InstagramIcon';
import FacabookIcon from '../IconComponents/FacebookIcon';
import YoutubeIcon from '../IconComponents/YoutubeIcon';

interface LakeCardProps{
  id: number
  lakeName: string
  instagramLink: string
  facebookLink: string
  youtubeLink: string
  websiteLink: string

}


const LakeCard: FC<LakeCardProps> = ({id, lakeName='Озеро "Трофейне"', instagramLink='https://www.instagram.com', youtubeLink='https://www.facebook.com/', websiteLink='https://trofeyne.kiev.ua/'}) => {
  const [onMouse, setOnMouse] = useState(false)
  return (
    <div className='flex flex-col w-[400px]'>
      <div className='flex justify-center'>
      <h2>{lakeName}</h2>
      </div>
    <div onMouseEnter={() => setOnMouse(false)} onMouseLeave={() => setOnMouse(true)} className="mt-[10px] bg-[url('/img/lakes/trofeynoe.jpg')] bg-cover bg-center bg-no-repeat cursor-pointer  relative rounded-tl-[50%] rounded-bl-[50%] rounded-br-[50%] w-[400px] h-[350px] hover:rounded-br-[0] hover:rounded-tr-[50%] transition-[2000ms] ">
      
      <div className={ onMouse ? "flex absolute right-[10px] bottom-[10px] opacity-[0] transition-[2000ms]" : "flex absolute right-[10px] bottom-[10px] opacity-[1] transition-[2000ms]"}>
        <a
          className="ml-[8px]"
          target="_blank"
          href={websiteLink}
        >
          <WebsiteIcon color="#ffffff" hoverColor="#0275B1" />
        </a>
        <a className="ml-[8px]" href={instagramLink}>
          <InstagramIcon color="#ffffff" hoverColor="#0275B1" />
        </a>
        <a
          className="ml-[8px]"
          href="https://www.facebook.com/profile.php?id=100001293125330"
          target="_blank"
        >
          <FacabookIcon color="#ffffff" hoverColor="#0275B1" />
        </a>
        <a
          className="ml-[8px]"
          href={youtubeLink}
          target="_blank"
        >
          <YoutubeIcon color="white" hoverColor="#0275B1" />
        </a>
      </div>
    </div>
    </div>
  );
};

export default LakeCard;
