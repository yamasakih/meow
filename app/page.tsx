import Head from 'next/head';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-custom-light-gray">
      <Head>
        <title>Meow - Home</title>
        <meta name="description" content="A mobile-friendly site for daily orthodontic training and tracking, with fun rewards for kids." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="text-white py-3 bg-custom-light-blue">
        <nav className="px-4">
          <ul className="flex justify-around">
            <li><a href="#daily-training" className="block text-sm hover:text-custom-sunshine-yellow">毎日のトレーニング</a></li>
            <li><a href="#progress-tracker" className="block text-sm hover:text-custom-sunshine-yellow">進捗の追跡</a></li>
            <li><a href="#rewards-collection" className="block text-sm hover:text-custom-sunshine-yellow">ご褒美コレクション</a></li>
          </ul>
        </nav>
      </header>

      <main className="flex-grow">
        <div className="text-center p-6 bg-white">
          <img src="/meow-logo.png" alt="Meow Logo" className="mx-auto h-24 w-24" />
          <h1 className="text-3xl font-bold text-custom-light-blue mt-4">「Meow」へようこそ！</h1>
          <p className="text-md mt-2 text-gray-700">毎日の歯列矯正トレーニングをたのしくサポートするよ！</p>
        </div>

        <div className="px-4 py-8 grid grid-cols-1 gap-6">
          {/* 毎日のトレーニングセクション */}
          <div className="bg-custom-bright-pink p-6 rounded-lg shadow-lg text-white">
            <h2 className="text-xl font-bold mb-4">毎日のトレーニング</h2>
            <p>先生が言ったタスクをクリアしよう！できたらチェックを入れてね。</p>
          </div>

          {/* 進捗の追跡セクション */}
          <div className="bg-custom-soft-green p-6 rounded-lg shadow-lg text-white">
            <h2 className="text-xl font-bold mb-4">がんばりをチェック！</h2>
            <p>毎日どれだけできたかな？チェックしてみよう！</p>
          </div>

          {/* ご褒美コレクションセクション */}
          <div className="bg-custom-sunshine-yellow p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold text-gray-800 mb-4">ごほうびをもらおう！</h2>
            <p className="text-gray-800">タスクをクリアすると、かわいいごほうびがもらえるよ！</p>
          </div>
        </div>
      </main>

      <footer className="text-center py-3 bg-gray-200">
        <p>&copy; 2024 Meow. All rights reserved.</p>
      </footer>
    </div>
  );
}
