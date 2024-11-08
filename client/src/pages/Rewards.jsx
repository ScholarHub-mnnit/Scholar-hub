import React from 'react'
import Reward from '../components/Reward';

function Rewards() {
  return (
    <div className="min-h-screen p-4 bg-gray-50 dark:bg-gray-900">
      <h1 className="text-3xl font-semibold text-center text-gray-900 dark:text-gray-100 mb-3 sm:mb-6">
        Rewards for Academic Activities
      </h1>
      <Reward />
    </div>
  );
}

export default Rewards
