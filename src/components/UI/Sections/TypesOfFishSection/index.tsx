import React from 'react';
import Carousel from '@/components/common/Carousel';
import { fishTypes } from './data';

const TypesOfFishSection = () => {
  return (
    <div className="container mx-auto mt-10 text-center">
      <h1 className="text-2xl font-bold mb-[50px]">Види Риб</h1>
      <Carousel cards={fishTypes} />
    </div>
  );
};

export default TypesOfFishSection;
