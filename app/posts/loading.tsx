import React from 'react';

export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
      <div className="animate-spin rounded-full border-t-4 border-b-4 border-white h-12 w-12 mr-3"></div>
      <div className="text-lg">Loading posts ....</div>
    </div>
  );
}
