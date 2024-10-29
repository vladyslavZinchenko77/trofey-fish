'use client';
import React, { FC, useState } from 'react';
import WebsiteIcon from '../IconComponents/WebsiteIcon';
import InstagramIcon from '../IconComponents/InstagramIcon';
import FacebookIcon from '../IconComponents/FacebookIcon';
import YoutubeIcon from '../IconComponents/YoutubeIcon';
import { LakeCardProps } from '@/types/interfaces';

const CardRecom: FC<LakeCardProps> = ({
  id,
  title,
  instagramLink,
  youtubeLink,
  websiteLink,
  facebookLink,
  coverImg,
  lakeAddress,
}) => {
  const [onMouse, setOnMouse] = useState<boolean>(true);

  return (
    <div className="flex justify-center">
      <div className="flex flex-col w-[400px] relative sm:w-[330px] md:w-[400px]">
        <div className="flex justify-center">
          <h2>{title}</h2>
        </div>
        <div
          onMouseEnter={() => setOnMouse(false)}
          onMouseLeave={() => setOnMouse(true)}
          style={{ backgroundImage: `url(${coverImg})` }}
          className={`mt-[10px] bg-cover bg-center bg-no-repeat cursor-pointer relative rounded-tl-[50%] rounded-bl-[50%] rounded-br-[50%] w-[400px] h-[350px] duration-[500ms] hover:rounded-br-[0] hover:rounded-tr-[50%] sm:w-[330px] sm:h-[280px] md:w-[400px] md:h-[350px] `}
        >
          <div
            className={
              onMouse
                ? 'flex absolute right-[10px] bottom-[10px] opacity-[0] transition-[2000ms]'
                : 'flex absolute right-[10px] bottom-[10px] opacity-[1] transition-[2000ms]'
            }
          >
            {websiteLink.trim() !== '' && (
              <a className="ml-[8px]" target="_blank" href={websiteLink}>
                <WebsiteIcon color="#ffffff" hoverColor="#0275B1" />
              </a>
            )}

            {instagramLink.trim() !== '' && (
              <a className="ml-[8px]" target="_blank" href={instagramLink}>
                <InstagramIcon color="#ffffff" hoverColor="#0275B1" />
              </a>
            )}
            {facebookLink.trim() !== '' && (
              <a
                className="ml-[8px]"
                href="https://www.facebook.com/profile.php?id=100001293125330"
                target="_blank"
              >
                <FacebookIcon color="#ffffff" hoverColor="#0275B1" />
              </a>
            )}
            {youtubeLink.trim() !== '' && (
              <a className="ml-[8px]" href={youtubeLink} target="_blank">
                <YoutubeIcon color="white" hoverColor="#0275B1" />
              </a>
            )}
          </div>
        </div>
        <p
          className={`right-0 text-center  p-2 transition-all duration-1000 ease-in-out ${
            !onMouse
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 -translate-y-full'
          }`}
        >
          {lakeAddress}
        </p>
      </div>
    </div>
  );
};

export default CardRecom;
