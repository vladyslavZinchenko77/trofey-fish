import React, { FC } from 'react';
import Header from '@/components/UI/Header';
import Footer from '@/components/UI/Footer';
import BloggersList from '@/components/UI/Sections/BloggersList';

const FishingBloggers: FC = () => {
  return (
    <>
      <Header />
      <main>
        <BloggersList />
      </main>
      <Footer />
    </>
  );
};

export default FishingBloggers;
