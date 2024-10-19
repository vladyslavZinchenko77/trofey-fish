'use client';
import React, { FC } from 'react';
import TrofeyCardList from '@/components/common/TrofeyCardList';
import Header from '@/components/UI/Header';

const HomePage: FC = () => {
  return (
    <>
      <Header />
      <main>
        <div>
          <TrofeyCardList />
        </div>
      </main>
    </>
  );
};

export default HomePage;
