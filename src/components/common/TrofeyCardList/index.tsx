'use client';
import React, { FC, useState, useEffect } from 'react';
import TrofeyCard from '../TrofeyCard';
import { TrofeyCardProps } from '@/types/interfaces';

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
    <div>
      <h2>Трофеї наших учасників:</h2>
      <div>
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
