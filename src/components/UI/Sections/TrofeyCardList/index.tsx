'use client';
import React, { FC, useState, useEffect } from 'react';
import TrofeyCard from '../../../common/TrofeyCard';
import { TrofeyCardProps } from '@/types/interfaces';
import SectionTitle from '@/components/common/SectionTitle';

const TrofeyCardList: FC = () => {
  const [posts, setPosts] = useState<TrofeyCardProps[]>([]);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/posts');
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.log('error fetch:', error);
      }
    };

    getPosts();
  }, []);

  useEffect(() => {
    console.log(posts);
  }, [posts]);

  return (
    <div className="mt-[24px] ml-[40px] mr-[40px]">
      <SectionTitle>Трофеї:</SectionTitle>
      <div className="m-[24px] grid grid-cols-3 gap-[24px] sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 sm:justify-items-center">
        {posts.map((post) => (
          <TrofeyCard
            key={post.id}
            likes={post.likes}
            fishType={post.fishType}
            id={post.id}
            fishWeight={post.fishWeight}
            fishermanName={post.fishermanName}
            fishingType={post.fishingType}
            bait={post.bait}
            dateCaught={post.dateCaught}
            feed={post.feed}
            fishPhoto={post.fishPhoto}
            location={post.location}
          />
        ))}
      </div>
    </div>
  );
};

export default TrofeyCardList;
