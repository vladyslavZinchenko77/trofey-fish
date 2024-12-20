import { FC } from 'react';
import Header from '@/components/UI/Header';
import Footer from '@/components/UI/Footer';
import NotFound from '@/components/UI/Sections/NotFound';

const FishermenPage: FC = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen flex items-center justify-center">
        <NotFound />
      </main>
      <Footer />
    </>
  );
};

export default FishermenPage;