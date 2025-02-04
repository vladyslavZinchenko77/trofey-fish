import { FC } from 'react';
import Image from 'next/image';

interface IconProps {
  height?: number;
  width?: number;
  className?: string;
}

const FishingLocation: FC<IconProps> = ({
  width = 32,
  height = 32,
  className = '',
}) => {
  return (
    <Image
      className={className}
      src={'/svg/lake.svg'}
      width={width}
      height={height}
      alt="lake"
    />
  );
};

export default FishingLocation;
