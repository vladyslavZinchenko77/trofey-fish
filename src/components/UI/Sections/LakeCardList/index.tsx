import React, { FC } from 'react';
import CardRecom from '@/components/common/CardRecom';
import { lakes } from './data';
import SectionTitle from '@/components/common/SectionTitle';

const LakeCardList: FC = () => {
  return (
    <div className="mt-[24px] ml-[40px] mr-[40px]">
      <SectionTitle>Озера для Риболовлі Київщини:</SectionTitle>
      <div className="mt-[24px] grid grid-cols-3 gap-[8px] sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        {lakes.map((lake) => (
          <CardRecom
            key={lake.id}
            id={lake.id}
            coverImg={lake.coverImg}
            facebookLink={lake.facebookLink}
            instagramLink={lake.instagramLink}
            title={lake.title}
            websiteLink={lake.websiteLink}
            youtubeLink={lake.youtubeLink}
            lakeAddress={lake.lakeAddress}
          />
        ))}
      </div>
    </div>
  );
};

export default LakeCardList;
