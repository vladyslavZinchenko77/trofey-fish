import { FC } from 'react';
import Header from '@/components/UI/Header';
import Footer from '@/components/UI/Footer';
import NotFound from '@/components/UI/Sections/NotFound';

const FishermenPage: FC = () => {
  return (
    <>
      <Header />
      <main className="flex items-center justify-center">
        <NotFound type="inProgress" />
      </main>
      <Footer />
    </>
  );
};

export default FishermenPage;
