import { FC } from 'react';
import Image from 'next/image';

interface IconProps {
  height?: number;
  width?: number;
  className?: string;
}

const TrophyIcon: FC<IconProps> = ({
  width = 32,
  height = 32,
  className = '',
}) => {
  return (
    <Image src={'/svg/trophy.svg'} width={width} height={height} alt="lake" />
  );
};

export default TrophyIcon;
