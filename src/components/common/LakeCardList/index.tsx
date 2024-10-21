import React, { FC } from 'react';
import LakeCard from '../LakeCard';


const lakes = [
  {id: 1,
    lakeName: 'Озеро "Трофейне"',
    instagramLink: 'https://www.instagram.com',
    facebookLink: 'https://www.facebook.com/',
    youtubeLink: '',
    websiteLink: 'https://trofeyne.kiev.ua/',
    coverImg: '/img/lakes/trofeynoe.jpg',
    lakeAddress : 'Озеро "Трофейне", с. Личанка, Київська обл., Києво-Святошинський р-н'
  }
]


const LakeCardList: FC = () => {
  return (
    <div className="mt-[24px] ml-[40px] mr-[40px]">
      <h2 className='text-center semi-bold'>Озера для Риболовлі Київщини</h2>
      <div className='mt-[24px]'>
        {lakes.map((lake=>(
          <LakeCard key={lake.id} id={lake.id} coverImg={lake.coverImg} facebookLink={lake.facebookLink} instagramLink={lake.instagramLink} lakeName={lake.lakeName} websiteLink={lake.websiteLink} youtubeLink={lake.youtubeLink} lakeAddress={lake.lakeAddress}/>
        )))}
      </div>
    </div>
  );
};

export default LakeCardList;
