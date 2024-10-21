'use client';
import React, { FC } from 'react';
import TrofeyCardList from '@/components/common/TrofeyCardList';
import Header from '@/components/UI/Header';
import Footer from '@/components/UI/Footer';

const HomePage: FC = () => {
  return (
    <>
      <Header />
      <main>
        <div>
          <TrofeyCardList />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
