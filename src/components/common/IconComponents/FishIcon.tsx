import { FC } from 'react';
import Image from 'next/image';

interface IconProps {
  height?: number;
  width?: number;
  className?: string;
}

const FishIcon: FC<IconProps> = ({
  height = 32,
  width = 32,
  className = '',
}) => {
  return (
    <Image
      className={className}
      src={'/svg/fish.svg'}
      width={width}
      height={height}
      alt="fish"
    />
  );
};

export default FishIcon;
