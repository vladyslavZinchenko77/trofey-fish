import React, { FC } from 'react';
import { TrofeyCardProps } from '@/types/interfaces';

const TrofeyCard: FC<TrofeyCardProps> = ({
  fishermanName,
  fishingType,
  fishWeight,
  likes,
}) => {
  return (
    <div>
      <h2>TrofeyCard</h2>
      <p>{fishermanName}</p>
      <p>
        Трофей {fishingType} вагою {fishWeight}
      </p>
      {/* <img src="" alt="" /> */}
      <button type="button">like</button>
      <p>likes:{likes}</p>
    </div>
  );
};

export default TrofeyCard;
