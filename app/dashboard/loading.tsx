import React from 'react'
import DashboardSkeleton from '../ui/skeletons'

export default function Loading() {
  return (
    <DashboardSkeleton />
    // <main className='h-screen w-full flex flex-col justify-center items-center'>
    //     <p className='text-center text-gray-500 text-lg'>Loading...</p>
    // </main>
  )
}
