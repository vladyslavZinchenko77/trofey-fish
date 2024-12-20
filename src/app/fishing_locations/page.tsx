import React, { FC } from 'react';
import LakeCardList from '@/components/UI/Sections/LakeCardList';
import Header from '@/components/UI/Header';
import Footer from '@/components/UI/Footer';

const FishingLocationsPage: FC = () => {
  return (
    <>
      <Header />
      <main>
        <div>
          <LakeCardList />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default FishingLocationsPage;
