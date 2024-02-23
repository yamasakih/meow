'use client'

import { useState, FormEvent } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const LoginPage = () => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log('Login Attempt:', userId, password);
    // 認証ロジックの実装...
  };

  return (
    <div className="flex flex-col min-h-screen bg-custom-light-gray">
      <Header />

      <div className="flex flex-grow items-center justify-center">
      <form onSubmit={handleSubmit} className="w-full max-w-md p-8 space-y-4 rounded-lg shadow-lg bg-white">
        <div>
          <label htmlFor="userId" className="block text-sm font-medium text-custom-light-blue">
            ユーザーID
          </label>
          <input
            type="text"
            id="userId"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-custom-light-blue focus:border-custom-light-blue sm:text-sm"
            required
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-custom-light-blue">
            パスワード
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-custom-light-blue focus:border-custom-light-blue sm:text-sm"
            required
          />
        </div>
        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-custom-light-blue hover:bg-custom-soft-green focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custom-light-blue"
          >
            ログイン
          </button>
        </div>
      </form>
      </div>
      <Footer />
    </div>
  );
};

export default LoginPage;
