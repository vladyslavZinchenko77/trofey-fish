'use client';
import Footer from '@/components/UI/Footer';
import Header from '@/components/UI/Header';
import React, { FC } from 'react';
import TypesOfFishSection from '@/components/UI/Sections/TypesOfFishSection';

const TypesOfFish: FC = () => {
  return (
    <>
      <Header />
      <main>
        <TypesOfFishSection />
      </main>
      <Footer />
    </>
  );
};

export default TypesOfFish;
