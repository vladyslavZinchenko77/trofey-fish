import React from 'react';
import Carousel from '@/components/common/Carousel';
import { fishTypes } from './data';
import SectionTitle from '@/components/common/SectionTitle';

const TypesOfFishSection = () => {
  return (
    <div className="container mx-auto mt-10 text-center">
      <SectionTitle>Види Риб</SectionTitle>
      <Carousel cards={fishTypes} />
    </div>
  );
};

export default TypesOfFishSection;
