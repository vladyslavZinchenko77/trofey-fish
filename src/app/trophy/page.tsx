import { FC } from 'react';
import Header from '@/components/UI/Header';
import TrofeyCardList from '@/components/common/TrofeyCardList';
import Footer from '@/components/UI/Footer';

const TrophyPage: FC = () => {
  return (
    <>
      <main>
        <Header />
        <div>
          <TrofeyCardList />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default TrophyPage;
