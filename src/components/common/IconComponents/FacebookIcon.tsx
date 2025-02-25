'use client';

import { FC, useState } from 'react';

interface IconProps {
  size?: number;
  className?: string;
  color?: string;
  hoverColor?: string;
  height?: number;
  width?: number;
}

const FacebookIcon: FC<IconProps> = ({
  width = 24,
  height = 24,
  className = '',
  color = '#0F0F0F',
  hoverColor = 'blue',
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <svg
      width={width}
      height={height}
      viewBox="-143 145 512 512"
      xmlns="http://www.w3.org/2000/svg"
      className={`stroke-current ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transition: 'fill 0.2s ease',
      }}
    >
      <path
        fill={isHovered ? hoverColor : color}
        d="M329,145h-432c-22.1,0-40,17.9-40,40v432c0,22.1,17.9,40,40,40h432c22.1,0,40-17.9,40-40V185C369,162.9,351.1,145,329,145z M169.5,357.6l-2.9,38.3h-39.3v133H77.7v-133H51.2v-38.3h26.5v-25.7c0-11.3,0.3-28.8,8.5-39.7c8.7-11.5,20.6-19.3,41.1-19.3 c33.4,0,47.4,4.8,47.4,4.8l-6.6,39.2c0,0-11-3.2-21.3-3.2c-10.3,0-19.5,3.7-19.5,14v29.9H169.5z"
      />
    </svg>
  );
};

export default FacebookIcon;
