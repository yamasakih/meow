import Footer from './components/Footer';
import Header from './components/Header';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-custom-light-gray">
      <Header/>

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

      <Footer/>
    </div>
  );
}
