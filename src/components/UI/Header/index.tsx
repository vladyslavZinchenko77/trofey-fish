import React, { FC } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from '@/components/common/Logo';
import Avatar from '@/components/common/Avatar';

import { paths } from '@/routes/path';
import TrophyIcon from '@/components/common/IconComponents/TrophyIcon';
import FishermenIcon from '@/components/common/IconComponents/FishermenIcon';
import FishingLocation from '@/components/common/IconComponents/FishingLocation';

const navItems = [

  { href: paths.home.trophy, icon: <TrophyIcon />,text: 'Trophy' },
  { href: paths.home.fishermen, icon: <FishermenIcon/>, text: 'Fishermen' },
  { href: paths.home.fishingLocations, icon: <FishingLocation/>, text: 'Fishing locations' },
];

const Header: FC = () => {

  const pathname= usePathname()
  return (
    <header className="px-[40px] py-[18px]">
      <nav className="flex justify-between items-center">
        <Logo />
        <div className='flex'>
        {navItems.map((item)=>(
         <Link key={item.href} href={item.href}>
         <div className="flex flex-col items-center p-[12px] hover:text-[#0275B1] transition-colors duration-300">
           {item.icon}
           <p className="text-[#181818] hover:text-[#0275B1] transition-colors duration-300">{item.text}</p>
         </div>
       </Link>
        ))}
        </div>
        <Link href={'/'}>
        
          <div className="flex items-center">
            <Avatar />
            <p>D. Kargaev</p>
          </div>
        </Link>
      </nav>
    </header>
  );
};

export default Header;


