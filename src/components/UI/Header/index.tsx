'use client';
import React, { FC } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from '@/components/common/Logo';
import Avatar from '@/components/common/Avatar';

import { paths } from '@/routes/path';
import TrophyIcon from '@/components/common/IconComponents/TrophyIcon';
import FishermenIcon from '@/components/common/IconComponents/FishermenIcon';
import FishingLocation from '@/components/common/IconComponents/FishingLocation';
import BlogIcon from '@/components/common/IconComponents/BlogIcon';
import FishIcon from '@/components/common/IconComponents/FishIcon';

const navItems = [
  { href: paths.home.trophy, icon: TrophyIcon, text: 'Трофеї' },
  { href: paths.home.fishermen, icon: FishermenIcon, text: 'Рибаки' },
  { href: paths.home.fishingBloggers, icon: BlogIcon, text: 'Блогери Рибаки' },
  { href: paths.home.typesOfFish, icon: FishIcon, text: 'Види Риб' },
  {
    href: paths.home.fishingLocations,
    icon: FishingLocation,
    text: 'Локації для рибалки',
  },
];

const Header: FC = () => {
  const pathname = usePathname();

  return (
    <header className="px-[40px] py-[18px]">
      <nav className="flex justify-between items-center">
        <Logo />
        <div className="flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <div className="flex flex-col items-center p-[12px] group hover:text-[#0275B1] transition-colors duration-300">
                <item.icon className="text-[#181818] group-hover:text-[#0275B1] transition-colors duration-300" />
                <p className="text-[#181818] group-hover:text-[#0275B1] transition-colors duration-300 uppercase">
                  {item.text}
                </p>
              </div>
            </Link>
          ))}
        </div>
        <Link href={'/'}>
          <div className="flex items-center">
            <Avatar />
            <p className="ml-[8px]">D. Kargaev</p>
          </div>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
