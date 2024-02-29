'use client'

import Footer from '../components/Footer';
import Header from '../components/Header';

export default function ProgressTracker() {
  return (
    <div className="flex flex-col min-h-screen bg-custom-light-gray">
      <Header/>

      <div className="p-4">
        <h1 className="text-2xl font-bold text-custom-light-blue mb-4">RewardsCollection</h1>
      </div>
      <Footer/>
    </div>

  );
}
