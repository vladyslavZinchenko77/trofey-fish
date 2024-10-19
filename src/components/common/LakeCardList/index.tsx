import React, { FC } from 'react';
import LakeCard from '../LakeCard';

const LakeCardList: FC = () => {
  return (
    <div className="mt-[24px] ml-[40px] mr-[40px]">
      <h2>LakeCardList: </h2>
      <div>
        <LakeCard />
      </div>
    </div>
  );
};

export default LakeCardList;
