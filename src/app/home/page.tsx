'use client';
import React, { FC, useEffect, useState } from 'react';

const HomePage: FC = () => {
  const [posts, setPosts] = useState([]);

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

  return <div>HomePage</div>;
};

export default HomePage;
