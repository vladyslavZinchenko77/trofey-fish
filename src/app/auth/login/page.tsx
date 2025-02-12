import React, { FC } from 'react';
import Logo from '@/components/common/Logo';
import Link from 'next/link';
import Image from 'next/image';
import LoginForm from '@/components/UI/Forms/LoginForm';

const Login: FC = () => {
  return (
    <div className="min-h-screen flex">
      <div className="flex-1 flex flex-col">
        <div className="p-6 flex justify-between w-full">
          <Logo />
          <div className="flex items-center">
            <p>Немає акаунту?</p>
            <Link
              href={'/auth/sign-up'}
              className="ml-2 text-blue-500 hover:underline"
            >
              Зареєструватися
            </Link>
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center">
          <LoginForm />
        </div>
      </div>

      <div className="flex-1 relative hidden lg:block">
        <Image
          src={'/webp/login.webp'}
          loading="lazy"
          fill
          className="object-cover"
          alt="fishingman"
        />
      </div>
    </div>
  );
};

export default Login;
