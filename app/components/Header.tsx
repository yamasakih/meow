'use client'

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-custom-light-blue text-white">
      <div className="max-w-5xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/">
            <p className="text-xl font-bold">Meow</p>
          </Link>
        </div>

        {/* デスクトップビュー用のナビゲーション */}
        <nav className="hidden md:flex space-x-4">
          <a href="/daily-training" className="hover:text-custom-sunshine-yellow">毎日のトレーニング</a>
          <a href="/progress-tracker" className="hover:text-custom-sunshine-yellow">がんばりをチェック！</a>
          <a href="/rewards-collection" className="hover:text-custom-sunshine-yellow">ごほうびをもらおう！</a>
          <a href="/login" className="hover:text-custom-sunshine-yellow">ログイン</a>
        </nav>

        {/* モバイルビュー用のハンバーガーボタン */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      {/* モバイルビュー用の展開メニュー */}
      {isOpen && (
        <div className="px-4 pb-3 space-y-1 md:hidden">
          <a href="/daily-training" className="block hover:text-custom-sunshine-yellow">毎日のトレーニング</a>
          <a href="/progress-tracker" className="block hover:text-custom-sunshine-yellow">がんばりをチェック！</a>
          <a href="/rewards-collection" className="block hover:text-custom-sunshine-yellow">ごほうびをもらおう！</a>
          <a href="/login" className="block hover:text-custom-sunshine-yellow">ログイン</a>
        </div>
      )}
    </header>
  );
}
