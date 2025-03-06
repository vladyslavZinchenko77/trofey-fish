'use client';
import React, { FC } from 'react';
import Header from '@/components/UI/Header';
import Footer from '@/components/UI/Footer';
import Hero from '@/components/UI/Sections/HomePageSections/Hero';
import FishermenHome from '@/components/UI/Sections/HomePageSections/FishermenHome';
import LakesHome from '@/components/UI/Sections/HomePageSections/LakesHome';
import FishTypesHome from '@/components/UI/Sections/HomePageSections/FishTypesHome';
import BloggersHome from '@/components/UI/Sections/HomePageSections/BloggersHome';

const HomePage: FC = () => {
  return (
    <div className="flex flex-col justify-between min-h-[100vh]">
      <Header />
      <main>
        <Hero />
        <FishermenHome />
        <LakesHome />
        <FishTypesHome />
        <BloggersHome />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
