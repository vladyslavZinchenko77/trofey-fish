import React, { FC } from 'react';
import CardRecom from '@/components/common/CardRecom';
import { bloggers } from '@/data/bloggers';
import SectionTitle from '@/components/common/SectionTitle';

const BloggersList: FC = () => {
  return (
    <div className="mt-[24px] mx-[40px] sm:mx-0 md:mx-[40px]">
      <SectionTitle>Блогери про рибалку:</SectionTitle>
      <div className="mt-[24px] grid grid-cols-3 gap-[8px] sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        {bloggers.map((blogger) => (
          <CardRecom
            key={blogger.id}
            id={blogger.id}
            coverImg={blogger.coverImg}
            facebookLink={blogger.facebookLink}
            instagramLink={blogger.instagramLink}
            title={blogger.title}
            websiteLink={blogger.websiteLink}
            youtubeLink={blogger.youtubeLink}
            lakeAddress={blogger.description}
          />
        ))}
      </div>
    </div>
  );
};

export default BloggersList;
