import React from 'react';
import Link from 'next/link';

const LoginForm = () => {
  return (
    <div className="w-full max-w-md px-6">
      <form className="w-full">
        <h2 className="text-2xl font-semibold mb-4">
          Увійти до особистого кабінету
        </h2>
        <p className="mb-2">Ваш номер телефону або e-mail</p>
        <input
          type="text"
          className="w-full mt-2 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <p className="mt-2 text-sm text-gray-600">
          Вкажіть ваш e-mail або номер мобільного телефону, що були вказані при
          реєстрації в особистому кабінеті
        </p>
        <div className="mt-6">
          <p className="mb-2">Пароль</p>
          <input
            type="password"
            className="w-full mt-2 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Link
            href={'/auth/forgot-password'}
            className="block mt-2 text-blue-500 hover:underline"
          >
            Забули пароль?
          </Link>
          <div className="flex items-center mt-4">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember" className="ml-2">
              Запам'ятати мене
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="w-full mt-6 px-4 py-2 border border-[#0275B1] text-[#0275B1] rounded-lg hover:bg-[#0275B1] hover:text-white transition-all duration-300"
        >
          Увійти
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
