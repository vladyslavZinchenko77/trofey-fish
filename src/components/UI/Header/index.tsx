'use client';
import React, { FC } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from '@/components/common/Logo';
// import Avatar from '@/components/common/Avatar';

import { paths } from '@/routes/path';
import TrophyIcon from '@/components/common/IconComponents/TrophyIcon';
import FishermenIcon from '@/components/common/IconComponents/FishermenIcon';
import FishingLocation from '@/components/common/IconComponents/FishingLocation';
import BlogIcon from '@/components/common/IconComponents/BlogIcon';
import FishIcon from '@/components/common/IconComponents/FishIcon';

const navItems = [
  { href: paths.home.trophy, icon: TrophyIcon, text: 'Трофеї' },
  { href: paths.home.fishermen, icon: FishermenIcon, text: 'Рибаки' },
  { href: paths.home.fishingBloggers, icon: BlogIcon, text: 'Блогери' },
  { href: paths.home.typesOfFish, icon: FishIcon, text: 'Види Риб' },
  {
    href: paths.home.fishingLocations,
    icon: FishingLocation,
    text: 'Озера',
  },
];

const Header: FC = () => {
  const pathname = usePathname();

  return (
    <header className="px-[40px] py-[18px]">
      <nav className="flex justify-between items-center">
        <Logo />
        <div className="flex sm:hidden md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <div
                className={`flex flex-col items-center p-[12px] group hover:text-[#0275B1] transition-colors duration-300 relative ${
                  pathname === item.href ? 'text-[#0275B1]' : 'text-[#181818]'
                }`}
              >
                <item.icon
                  className={`transition-colors duration-300 ${
                    pathname === item.href ? 'text-[#0275B1]' : 'text-[#181818]'
                  }`}
                />
                <p
                  className={`uppercase transition-colors duration-300 ${
                    pathname === item.href ? 'text-[#0275B1]' : 'text-[#181818]'
                  }`}
                >
                  {item.text}
                </p>
                <div
                  className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-[2px] w-0 bg-[#0275B1] group-hover:w-full transition-all duration-300 ${
                    pathname === item.href ? 'w-full' : ''
                  }`}
                ></div>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <Link href="/login">
            <button className="px-4 py-2 border border-[#0275B1] text-[#0275B1] rounded-lg hover:bg-[#0275B1] hover:text-white transition-all duration-300">
              Увійти
            </button>
          </Link>
          <Link href="/register">
            <button className="px-4 py-2 border border-[#0275B1] text-[#0275B1] rounded-lg hover:bg-[#0275B1] hover:text-white transition-all duration-300">
              Зареєструватись
            </button>
          </Link>
        </div>

        {/* <Link href={'/'}>
          <div className="flex items-center">
            <Avatar />
            <p className="ml-[8px]">D. Kargaev</p>
          </div>
        </Link> */}
      </nav>
    </header>
  );
};

export default Header;
