import React, { FC } from 'react';
import Header from '@/components/UI/Header';
import TrofeyCardList from '@/components/common/TrofeyCardList';

const TrophyPage: FC = () => {
  return (
    <main>
      <Header />
      <div>
        <TrofeyCardList />
      </div>
    </main>
  );
};

export default TrophyPage;
