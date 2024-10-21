import React, { FC } from 'react';
import LakeCard from '../LakeCard';


const lakes = [
  {id: 1,
    lakeName: 'Озеро "Трофейне"',
    instagramLink: '',
    facebookLink: 'https://www.facebook.com/profile.php?id=100001293125330',
    youtubeLink: '',
    websiteLink: 'https://trofeyne.kiev.ua/',
    coverImg: '/img/lakes/trofeynoe.jpg',
    lakeAddress : 'Озеро "Трофейне", с. Личанка, Київська обл., Києво-Святошинський р-н'
  },
  {id: 2,
    lakeName: 'Озеро "Михайлина"',
    instagramLink: 'https://www.instagram.com/mihailyna/',
    facebookLink: 'https://www.facebook.com/mihaylyna/',
    youtubeLink: '',
    websiteLink: 'https://www.mykhailyna.com.ua/',
    coverImg: '/img/lakes/myhailyna.jpg',
    lakeAddress : 'Київська область, Києво-Святошинський район, с. Горбовичі, вул. Мельника 8а'
  },
  {id: 3,
    lakeName: 'Озеро "Уляники"',
    instagramLink: 'https://www.instagram.com/mihailyna/',
    facebookLink: 'https://www.facebook.com/mihaylyna/',
    youtubeLink: '',
    websiteLink: 'https://ozero-ulyaniki.com/',
    coverImg: '/img/lakes/ulyaniki.png',
    lakeAddress : 'с. Уляники, Київська область'
  },
  {id: 4,
    lakeName: 'Озеро "Забір\'я"',
    instagramLink: 'https://www.instagram.com/fish_park_zabirya_riba_chok/',
    facebookLink: 'https://www.facebook.com/zabiryafishpark/',
    youtubeLink: '',
    websiteLink: 'https://www.zabirya.com.ua/',
    coverImg: '/img/lakes/ulyaniki.png',
    lakeAddress : 'Київська обл., с.Забір\'я'
  }
]


const LakeCardList: FC = () => {
  return (
    <div className="mt-[24px] ml-[40px] mr-[40px]">
      <h2 className='text-center semi-bold'>Озера для Риболовлі Київщини</h2>
      <div className='mt-[24px] grid grid-cols-3 gap-[8px]'>
        {lakes.map((lake=>(
          <LakeCard key={lake.id} id={lake.id} coverImg={lake.coverImg} facebookLink={lake.facebookLink} instagramLink={lake.instagramLink} lakeName={lake.lakeName} websiteLink={lake.websiteLink} youtubeLink={lake.youtubeLink} lakeAddress={lake.lakeAddress}/>
        )))}
      </div>
    </div>
  );
};

export default LakeCardList;
