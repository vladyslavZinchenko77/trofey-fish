import React, { FC } from 'react';
import LakeCardList from '@/components/common/LakeCardList';
import Header from '@/components/UI/Header';

const FishingLocationsPage: FC = () => {
  return (
    <>
      <Header />
      <main>
        <div>
          <LakeCardList />
        </div>
      </main>
    </>
  );
};

export default FishingLocationsPage;
